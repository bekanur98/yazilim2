// pages/DummyPage

import React from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Content, Container, Header, Item, Icon, Input} from 'native-base'
import {PageProps} from '../../types';
import * as actions from '../../actions';
import {trans} from '../../helper';
import axios from 'axios';
import images from '../../assets/images/images'
// @ts-ignore
import Category from 'react-native-category'

export interface Props extends PageProps {
  count: number;
  changeCountAction: (count: number) => void;
  badgeHome: number;
  badgePersonal: number;
  categoryList: any;
  setCategoryList: (categoryList: []) => void;
}

interface State {
  categoryList: any
}

class HomePage extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      title: 'Home',
    };
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      categoryList: [] as any,

    };
  }

  componentDidMount(): void {
    this.getCategoryList();
    this.props.setCategoryList(this.state.categoryList)
  }

  async getCategoryList(){
      try{
        const response = await axios.get(`http://buymanasapi.ru.xsph.ru/index.php/api/faculties.json`)
        if(response.data){
          this.setState({categoryList:response.data})
        }
      }
      catch(error){
        console.log(error)
      }
  }

  _renderItem=(item:any)=>{
    const img = 'assets/images/'+item.item.id+'.png';
    return(
        <TouchableOpacity style = {{padding: 5}}>
          <Image
              //@ts-ignore
              source={images[item.item.id]}
              style={{height:45, width:45}}
          />
          <Text style={{justifyContent:'center'}}>{item.item.id}</Text>
        </TouchableOpacity>
    )
};

  render()

  {
    return (
        <Container style={{}}>
          <Header searchBar rounded >
            <Item>
              <Icon name="ios-search" />
              <Input
                  placeholder={trans('search')}
                  onChange={()=>{}}
              />
            </Item>
          </Header>
          <Content style={styles.header}>
            <FlatList
                horizontal={true}
                contentContainerStyle={{alignSelf: 'flex-start'}}
                data = {this.state.categoryList}
                keyExtractor={(item:any)=>item.id.toString()}
                renderItem = {this._renderItem}
                // showsVerticalScrollIndicator={false}
                // showsHorizontalScrollIndicator={false}
                // numColumns={7}
            />
          </Content>
        </Container>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
  },
  header:{
    margin: 10,
  },
  button: {
    flex: 1,
    padding: 10,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state: any): any => ({
  categoryList: state.categoryReducer.categoryList
});
export default connect(
  mapStateToProps,
  actions,
)(HomePage);
