import React from 'react';
import { View, TouchableOpacity, ScrollView, Alert, ImageBackground, Text, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function App() {
  {/*Button press alerts*/}
  const handleButtonPress1 = () => {
    Alert.alert('Topbutton Pressed!', 'You pressed the top button!');
  };

  const handleButtonPress2 = () => {
    Alert.alert('Cardbutton Pressed!', 'You pressed the card button!');
  };

  const handleButtonPress3 = () => {
    Alert.alert('Card Pressed!', 'You pressed the card!');
  };

  const handleButtonPress4 = () => {
    Alert.alert('Bottombutton pressed!', 'You pressed the Bottombutton!');
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <ImageBackground
        source={require('./assets/workoutbackground5.jpg')}
        style={styles.imageBackground}
        resizeMode="repeat"
      >

      {/* Header Text */}
      <Text style={styles.headerText}>Workout diary</Text>
       
      <View style={styles.buttonContainer}>
      
      {/*Top button 1 */}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress1}>
        {/* FontAwesome Icon */}
       <FontAwesome marginRight= '10' marginTop= '4' name="list" size={15} color="#FFFFFF" />
            <Text style={styles.buttonText}>All exercises</Text>
          </TouchableOpacity>

        {/*Top button 2 */}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress1}>
            {/* FontAwesome Icon */}
       <FontAwesome marginRight= '10' marginTop= '4' name="calculator" size={15} color="#FFFFFF" />  
            <Text style={styles.buttonText}>Statistics</Text>
          </TouchableOpacity>
          </View>

        {/* Card Container1 */}
        <TouchableOpacity style={styles.card} onPress={handleButtonPress3}>
          <Text style={styles.cardTitle}>Running</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>  
        {/* Cardbutton */}
      <TouchableOpacity style={styles.cardButton} onPress={handleButtonPress2}>
            <Text style={styles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
          </TouchableOpacity>

          {/* Card Container2 */}
        <TouchableOpacity style={styles.card} onPress={handleButtonPress3}>
          <Text style={styles.cardTitle}>Walking</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>       
        {/* Cardbutton */}
      <TouchableOpacity style={styles.cardButton} onPress={handleButtonPress2}>
            <Text style={styles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
          </TouchableOpacity>

          {/* Card Container3 */}
        <TouchableOpacity style={styles.card} onPress={handleButtonPress3}>
          <Text style={styles.cardTitle}>Swimming</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>      
        {/* Cardbutton */}
      <TouchableOpacity style={styles.cardButton} onPress={handleButtonPress2}>
            <Text style={styles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Card Container4 */}
        <TouchableOpacity style={styles.card} onPress={handleButtonPress3}>
          <Text style={styles.cardTitle}>Walking</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        {/* Cardbutton */}
      <TouchableOpacity style={styles.cardButton} onPress={handleButtonPress2}>
            <Text style={styles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Card Container5 */}
        <TouchableOpacity style={styles.card} onPress={handleButtonPress3}>
          <Text style={styles.cardTitle}>Running</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        {/* Cardbutton */}
      <TouchableOpacity style={styles.cardButton} onPress={handleButtonPress2}>
            <Text style={styles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      {/* Bottombutton */}
        <TouchableOpacity style={styles.button} onPress={handleButtonPress4}>
            {/* FontAwesome Icon */}
       <FontAwesome marginRight= '10' marginTop= '4' name="plus-circle" size={15} color="#FFFFFF" />  
            <Text style={styles.buttonText}>New Sport</Text>
          </TouchableOpacity>
          
      </ImageBackground>
    </ScrollView>
  );
}

