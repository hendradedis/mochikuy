import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

class Test3Screen extends Component {

  static navigationOptions = {
    title: "Menu"
  }

  render() {
    console.log("[Test3Screen] render");

    return (
      <ScrollView style={styles.container}>
        <Text>Screen 3. part of testFlow</Text>
        <Button style={styles.button} backgroundColor="#f00"
          title="New Team" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Build Squad" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Hire Staffs" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Set Formation" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Set Training" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Show Profile" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Club Details" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Inbox" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Player Detail" />
        <Button style={styles.button} backgroundColor="#f00"
          title="Async network call (axios)"
          onPress={this.onAxiosButtonPressed} />
        <Button style={styles.button} backgroundColor="#f00"
          title="Async graphql call"
          onPress={this.onGraphqlButtonPressed}/>
        <Button style={styles.button} backgroundColor="#f00"
          title="Showing List"
          />
        <Button style={styles.button} backgroundColor="#f00"
          title="Using Form"
          />
      </ScrollView>
    );
  }

  onAxiosButtonPressed = () => {
    console.log('[Test3Screen] onAxiosButtonPressed');

  }

  onGraphqlButtonPressed = () => {
    console.log('[Test3Screen] onGraphqlButtonPressed');


  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-around'
  },
  button: {
    paddingTop: 16,
  }
});

export default Test3Screen;
