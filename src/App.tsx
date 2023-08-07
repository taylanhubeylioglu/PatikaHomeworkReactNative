/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(){
  return(
    <SafeAreaView>
      <Text style={styles.title_text}>PATİKA STORE</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
  },

  title_text: {
    fontSize:18,
    fontWeight:'bold',
    color:'purple',
    textAlign:'center'
  }

});

export default App;
