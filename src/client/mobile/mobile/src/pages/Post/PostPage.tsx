/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/DummyPage

import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker'
import {View, Button, Text} from 'native-base';
import {PageProps} from '../../types';
import * as actions from '../../actions/dummyAction';
import {getLocale, trans, setupLocalization} from '../../helper';
import {store, AppState} from '../../store';
import LoginPageCom from '../../components/LoginPageCom';
import { COLORS } from '../../constants';

export interface Props extends PageProps {
    user: any;
}

interface State {
    photo: any
}

class PostPage extends React.Component<Props, State> {
    static navigationOptions = () => {
        return {
            title: 'Post',
        };
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            photo: null
        };
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response ", response );
            if(response.uri){
                this.setState({photo:response})
            }
        })
    }

    handleCameraPhoto = () => {
        const options = {
            noData: true
        }
        ImagePicker.launchCamera(options, response => {
            console.log("response ", response );
            if(response.uri){
                this.setState({photo:response})
            }
        })
    }

    handleNoPhoto = () => {
        
    }

    render() {
        return (
            this.props.user ? 
            <View style={styles.root}>
                <View style={styles.root}>
                <Button
                    style={{borderRadius:15, backgroundColor: COLORS.b}}
                    onPress={this.handleChoosePhoto}
                >
                    <Text>Выбрать фото с галерии</Text>
                </Button>
                <Button
                    style={{borderRadius:15, backgroundColor: COLORS.b, margin: 5}}
                    onPress={this.handleCameraPhoto}
                >
                    <Text>Открыть камеру</Text>
                </Button>
                </View>
                <View>
                <Button transparent
                    style={{borderRadius:15, borderWidth: 1, borderColor: COLORS.b, marginBottom: 20}}
                    onPress={this.handleNoPhoto}
                >
                    <Text>Пропустить</Text>
                </Button>
                </View>
            </View> :
            //@ts-ignore
            <LoginPageCom
                navigation={this.props.navigation}
            />
        );
    }
}

// styles
const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent:'center',
        paddingTop: 20,
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
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

const mapStateToProps = (state: AppState) => ({
    user: state.userReducer.user
});
export default connect(
    mapStateToProps,
    actions,
)(PostPage);
