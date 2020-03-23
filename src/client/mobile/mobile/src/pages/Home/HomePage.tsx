/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/DummyPage

import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {View, Button, Text, Content, Container, Header, Item, Icon, Input} from 'native-base';
import {PageProps} from '../../types';
import * as actions from '../../actions/dummyAction';
import {getLocale, trans, setupLocalization} from '../../helper';
import Navigation from 'src/nav/Navigation';

export interface Props extends PageProps {
  count: number;
  changeCountAction: (count: number) => void;
  badgeHome: number;
  badgePersonal: number;
}

interface State {}

class HomePage extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      title: 'Home',
    };
  };

  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <Container style={{}}>
          <Header searchBar rounded >
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search"  />
            </Item>
          </Header>
          <Content style={styles.header}>

            <Text style={{fontSize: 30}}>Home page</Text>
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
  count: state.Dummy.count,
  badgeHome: state.Settings.badgeHome,
  badgePersonal: state.Settings.badgePersonal,
});
export default connect(
  mapStateToProps,
  actions,
)(HomePage);
