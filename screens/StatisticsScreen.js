import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import StatisticsStyles from '../styles/StatisticsStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StatisticsScreen = ({ navigation }) => {
  return (
    <ScrollView style={StatisticsStyles.scrollContainer} bounces={true}> 
  
    <View >
    <TouchableOpacity style={StatisticsStyles.button} onPress={() => navigation.goBack()} >
    <FontAwesome marginRight= '10' marginTop= '20' name="arrow-left" size={27} color="#000000" />
    </TouchableOpacity>

    <View style={StatisticsStyles.text}>
    <Text style={StatisticsStyles.text}>Statistics</Text>
    </View>

    <View style={StatisticsStyles.cardContainer}>
    {/* Card Container1 */}
    <View style={StatisticsStyles.card}>
          <Text style={StatisticsStyles.cardTitle}>Kilometers summary</Text>
          <Text style={StatisticsStyles.cardText}>Walking: </Text>
          <Text style={StatisticsStyles.cardText}>Running: </Text>
          <Text style={StatisticsStyles.cardText}>Swimming: </Text>
          </View>
    </View>
  </View>
    </ScrollView>
  );
};

export default StatisticsScreen;