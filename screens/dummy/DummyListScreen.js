import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class DummyDetailScreen extends Component {

  static navigationOptions = {
    title: "DummyDetailScreen"
  }

  render() {
    console.log("[DummyDetailScreen] render");

    return (
      <View style={styles.container}>
        <Text>DummyDetailScreen </Text>
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
    console.log('[DummyDetailScreen] onNext');
    this.props.navigation.navigate('dummyForm');
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

export default DummyDetailScreen;
