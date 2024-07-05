import React, {useState} from 'react';

import { StyleSheet, Text, View, Pressable, CheckBox } from 'react-native';


const HomeScreen = () => { // Rename the local component to AppScreen or any other appropriate name
    // const handlePress = () => {
    //     navigation.navigate('MapScreen.js');
    //   };  
 const handlePress = (console.log('jaaaa'));
 const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place to Bee</Text>
      <Text style={styles.description}>
        Discover the best hotspots around you!
      </Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Get Started!</Text>
      </Pressable>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I've reac the privacy policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbee',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    padding: 20,
    marginRight: 5,
  },
});



export default HomeScreen; // Export the component if needed
