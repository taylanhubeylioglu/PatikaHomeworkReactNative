/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

import products_data from './products_data.json';
import ProductCard from './components/product_card/product_card';

const renderProducts = ({ item }: { item: any }) => <ProductCard products={item} />;

function App() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <Text style={styles.title_text}>PATİKA STORE</Text>
        <TextInput style={styles.search_input} placeholder='Ara...'></TextInput>

        <FlatList
          numColumns={2}
          renderItem={renderProducts}
          data={products_data}
          keyExtractor={(item, index) => item.id.toString()}
        />

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'
  },

  title_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginBottom: 7,
  },

  search_input: {
    height: 40,
    width: Dimensions.get('window').width * 0.8,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#efefef',
    alignSelf:'center',
  },

});

export default App;
