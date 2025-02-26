import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import StatisticsStyles from '../styles/StatisticsStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StatisticsScreen = ({ route, navigation }) => {
  const { totals } = route.params || {walking: 0, running: 0, swimming: 0} 
  return (
    <ScrollView style={StatisticsStyles.scrollContainer} bounces={true}> 
    <View >
    {/* Back Button */}
    <TouchableOpacity style={StatisticsStyles.button} onPress={() => navigation.goBack()} >
    <FontAwesome marginRight= '10' marginTop= '20' name="arrow-left" size={27} color="#000000" />
    </TouchableOpacity>

    <View style={StatisticsStyles.text}>
    <Text style={StatisticsStyles.text}>Statistics</Text>
    </View>

     {/* Stats Card */}
    <View style={StatisticsStyles.cardContainer}>
    {/* Card Container1 */}
    <View style={StatisticsStyles.card}>
          <Text style={StatisticsStyles.cardTitle}>Kilometers summary</Text>
          <Text style={StatisticsStyles.cardText}>Walking: {totals.walking} km</Text>
          <Text style={StatisticsStyles.cardText}>Running: {totals.running} km</Text>
          <Text style={StatisticsStyles.cardText}>Swimming: {totals.swimming} km</Text>
          <Text style={StatisticsStyles.changetxt}>Total: {totals.all} km</Text>
          </View>
    </View>
  </View>
    </ScrollView>
  );
};

export default StatisticsScreen;