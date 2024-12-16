import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, FlatList, Text } from 'react-native';

// Define the type for a store item
interface Store {
  id: number; // or string, depending on your API
  name: string;
  address: string;
}

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [stores, setStores] = useState<Store[]>([]); // Specify the type for stores

  const fetchStores = async () => {
    try {
      const response = await fetch(`http://localhost:3000/stores?product=${searchTerm}`);
      const data = await response.json();
      setStores(data.stores); // Adjust based on your API response structure
    } catch (error) {
      console.error('Error fetching stores:', error);
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      fetchStores();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string
        renderItem={({ item }) => (
          <View style={styles.storeItem}>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
          </View>
        )}
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
  storeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '90%',
  },
});

export default SearchScreen;
