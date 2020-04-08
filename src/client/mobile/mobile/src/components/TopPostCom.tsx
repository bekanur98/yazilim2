import React from 'react';
import {IPoster, PageProps} from '../types';
import {fetchPosters} from '../actions';
import {connect} from 'react-redux';
import {FlatList, Text, View, TouchableOpacity, Image} from "react-native";
import {AppState} from "../store";
import {Container, Content} from "native-base";
import images from "../assets/images/images";
import {IMAGES_URL} from "../constants";

interface Props{
    posterList: IPoster[];
}

interface State{
    topPostList: IPoster[];
}

class TopPostCom extends React.Component<Props,State>{
    constructor(props: Props) {
        super(props);
        this.state={
            topPostList: this.props.posterList.sort((a,b)=>b.rating-a.rating).slice(0,10),
        }
    }

    _renderItem=(item:any)=>{
        const post = item.item
            return(
                // <View style={{}}>
                    <TouchableOpacity style = {{margin: 5,flexDirection:'row'}}>
                        {!post.images.length?
                            post.department?
                                <Image
                                    //@ts-ignore
                                    source={images[post.department.faculty.id]}
                                    style={{height:120, width:80}}
                                />
                                :
                                <Image
                                    //@ts-ignore
                                    source={require('../assets/images/logo.png')}
                                    style={{height:120, width:80}}
                                />
                            :
                            <Image
                                //@ts-ignore
                                source={{uri:'http://buymanasapi.ru.xsph.ru/images/5e85d1128d5d6425405044.PNG'}}
                                style={{height:120, width:80}}
                            />}
                    </TouchableOpacity>
                    // {/*<Text>{post.cost}</Text>*/}
                // </View>
            )
    };

    render(){
        return(
            <Container>
                <Content padder>
                    <View style={{}}>
                        <Text>ТОП объявления</Text>
                        <FlatList
                            horizontal={true}
                            data={this.state.topPostList}
                            renderItem={this._renderItem}
                            keyExtractor={(item:any)=>item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </Content>
            </Container>
        )
    }

}
const mapStateToProps = (state: AppState) => ({
    posterList: state.posterReducer.posterList,
});

//@ts-ignore
const mapDispatchToProps = dispatch => ({
    fetchPosters: () => dispatch(fetchPosters())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopPostCom);

