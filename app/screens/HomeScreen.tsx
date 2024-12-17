// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ZipCodePopup from '../components/ZipComponent';

const HomeScreen = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleZipCodeSubmit = (zipCode: string) => {
    console.log('Zip Code submitted:', zipCode);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Enter Zip Code" onPress={handleOpenPopup} />
      <ZipCodePopup
        visible={isPopupVisible}
        onClose={handleClosePopup}
        onSubmit={handleZipCodeSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fae3d9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
