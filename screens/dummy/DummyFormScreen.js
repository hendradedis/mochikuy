import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class DummyFormScreen extends Component {

  static navigationOptions = {
    title: "DummyFormScreen"
  }

  render() {
    console.log("[DummyFormScreen] render");

    return (
      <View style={styles.container}>
        <Text>DummyFormScreen </Text>
        <Button
          style={{ marginTop: 16 }}
          backgroundColor="#009688"
          title="Next"
          onPress={this.onNext}
        />
      </View>
    );
  }

  onNext = () => {
    console.log('[DummyFormScreen] onNext');
    this.props.navigation.navigate('dummyDetail');
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

export default DummyFormScreen;
