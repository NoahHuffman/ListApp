import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fae3d9',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default SearchScreen;
