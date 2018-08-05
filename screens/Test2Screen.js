import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Test2Screen extends Component {

  static navigationOptions = {
    title: "Screen 2"
  }

  render() {
    console.log("[TestScreen2] render");

    return (
      <View style={styles.container}>
        <Text>Screen 2. part of testFlow</Text>
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Next"
          onPress={this.onNext}
        />
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Go to Dummy Flow"
          onPress={this.onGotoDummy}
        />
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Back to initial"
          onPress={this.onBackToInitial}
        />
      </View>
    );
  }

  onNext = () => {
    console.log('[Test2Screen] onNext');
    this.props.navigation.navigate('test3');
  }

  onBackToInitial = () => {
    console.log('[Test2Screen] onBackToInitial');
    this.props.navigation.navigate('test');
  }

  onGotoDummy = () => {
    console.log('[Test2Screen] onGotoDummy');
    this.props.navigation.navigate('dummyFlow');

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

export default Test2Screen;
