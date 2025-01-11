import React from 'react';
import { View, TouchableOpacity, ScrollView, Alert, ImageBackground, Text, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStyles from '../styles/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  
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
    <ScrollView style={HomeStyles.scrollContainer}>
      <ImageBackground
        source={require('../assets/workoutbackground5.jpg')}
        style={HomeStyles.imageBackground}
        resizeMode="repeat"
      >

      {/* Header Text */}
      <Text style={HomeStyles.headerText}>Workout diary</Text>
       
      <View style={HomeStyles.buttonContainer}>
      
      {/*Top button 1 */}
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('ExerciseList')}>
        {/* FontAwesome Icon */}
       <FontAwesome marginRight= '10' marginTop= '4' name="list" size={15} color="#FFFFFF" />
            <Text style={HomeStyles.buttonText}>All exercises</Text>
          </TouchableOpacity>

        {/*Top button 2 */}
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Statistics')}>
            {/* FontAwesome Icon */}
       <FontAwesome marginRight= '10' marginTop= '4' name="calculator" size={15} color="#FFFFFF" />  
            <Text style={HomeStyles.buttonText}>Statistics</Text>
          </TouchableOpacity>
          </View>

        {/* Card Container1 */}
        <TouchableOpacity style={HomeStyles.card} onPress={handleButtonPress3}>
          <Text style={HomeStyles.cardTitle}>Running</Text>
          <Text style={HomeStyles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>  
        {/* Cardbutton */}
      <TouchableOpacity style={HomeStyles.cardButton} onPress={handleButtonPress2}>
            <Text style={HomeStyles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
          </TouchableOpacity>

          {/* Card Container2 */}
        <TouchableOpacity style={HomeStyles.card} onPress={handleButtonPress3}>
          <Text style={HomeStyles.cardTitle}>Walking</Text>
          <Text style={HomeStyles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>       
        {/* Cardbutton */}
      <TouchableOpacity style={HomeStyles.cardButton} onPress={handleButtonPress2}>
            <Text style={HomeStyles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
          </TouchableOpacity>

          {/* Card Container3 */}
        <TouchableOpacity style={HomeStyles.card} onPress={handleButtonPress3}>
          <Text style={HomeStyles.cardTitle}>Swimming</Text>
          <Text style={HomeStyles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>      
        {/* Cardbutton */}
      <TouchableOpacity style={HomeStyles.cardButton} onPress={handleButtonPress2}>
            <Text style={HomeStyles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Card Container4 */}
        <TouchableOpacity style={HomeStyles.card} onPress={handleButtonPress3}>
          <Text style={HomeStyles.cardTitle}>Walking</Text>
          <Text style={HomeStyles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        {/* Cardbutton */}
      <TouchableOpacity style={HomeStyles.cardButton} onPress={handleButtonPress2}>
            <Text style={HomeStyles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Card Container5 */}
        <TouchableOpacity style={HomeStyles.card} onPress={handleButtonPress3}>
          <Text style={HomeStyles.cardTitle}>Running</Text>
          <Text style={HomeStyles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        {/* Cardbutton */}
      <TouchableOpacity style={HomeStyles.cardButton} onPress={handleButtonPress2}>
            <Text style={HomeStyles.buttonText}>Add exercise</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      {/* Bottombutton */}
        <TouchableOpacity style={HomeStyles.button} onPress={handleButtonPress4}>
            {/* FontAwesome Icon */}
       <FontAwesome marginRight= '10' marginTop= '4' name="plus-circle" size={15} color="#FFFFFF" />  
            <Text style={HomeStyles.buttonText}>New Sport</Text>
          </TouchableOpacity>
          
      </ImageBackground>
    </ScrollView>
  );
}

export default HomeScreen;

