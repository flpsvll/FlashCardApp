import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decklist from './Components/ Decklist'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Decklist/>
      </View>
    );
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
