import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class TestScreen extends Component {

  render() {
    console.log("[TestScreen] render");

    return (
      <View style={styles.container}>
        <Text>WORLD FOOTBALL MANAGER</Text>
        <Text style={{ marginTop: 16 }}>
          text from state: {this.props.test.someKey}
        </Text>
        <Text style={{ marginTop: 16 }}>
          dummy: {this.props.dummy.dummyKey}
        </Text>
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Test Action"
          onPress={this.onTestButtonPress}
        />
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Test Reset Action"
          onPress={this.onTestResetButtonPress}
        />
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Test Dummy Action"
          onPress={this.onTestDummyPress}
        />
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Test Fetch Graphql"
          onPress={this.onTestFetchGraphql}
        />
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Test Fetch Axios"
          onPress={this.onTestFetchAxios}
        />
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Test Navigation"
          onPress={this.onTestNavigationPress}
        />
      </View>
    );
  }

  onTestButtonPress = () => {
    console.log("[TestScreen] onTestButtonPress");

    // call action creator
    this.props.aTestFunction();
  }

  onTestResetButtonPress = () => {
    console.log("[TestScreen] onTestResetButtonPress");

    this.props.testReset();
  }

  onTestNavigationPress = () => {
    console.log("[TestScreen] onTestNavigationPress");

    // call navigation function
    this.props.navigation.navigate('testFlow');
  }

  onTestDummyPress = () => {
    console.log("[TestScreen] onTestDummyPress");
    this.props.aDummyFunction();
  }

  onTestFetchGraphql = () => {
    console.log("[TestScreen] onTestFetchGraphql");

    this.props.dummyGraphqlFetch();
  }

  onTestFetchAxios = () => {
    console.log("[TestScreen] onTestFetchAxios");

    this.props.dummyAxiosFetch();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function mapStateToProps( state ) {
  return {
    test: state.test,
    dummy: state.dummy
  };
}

export default connect(mapStateToProps, actions)(TestScreen);
