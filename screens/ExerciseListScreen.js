import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ExerciseListStyles from '../styles/ExerciseListStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ExerciseListScreen = ({ navigation }) => {
  return (
<ScrollView style={ExerciseListStyles.scrollContainer}>
  
  <View >
    <TouchableOpacity style={ExerciseListStyles.button} onPress={() => navigation.goBack()} >
    <FontAwesome marginRight= '10' marginTop= '4' name="arrow-left" size={27} color="#000000" />
    </TouchableOpacity>

    <View style={ExerciseListStyles.text}>
    <Text style={ExerciseListStyles.text}>All exercises</Text>
    </View>

    
  </View>
</ScrollView>
    
  );
};

export default ExerciseListScreen;