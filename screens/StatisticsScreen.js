import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import StatisticsStyles from '../styles/StatisticsStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StatisticsScreen = ({ navigation }) => {
  return (
    <ScrollView style={StatisticsStyles.scrollContainer} bounces={true}> 
    

    <View >
    <TouchableOpacity style={StatisticsStyles.button} onPress={() => navigation.goBack()} >
    <FontAwesome marginRight= '10' marginTop= '4' name="arrow-left" size={27} color="#000000" />
    </TouchableOpacity>

    <View style={StatisticsStyles.text}>
    <Text style={StatisticsStyles.text}>Statistics</Text>
    </View>

    <View style={StatisticsStyles.cardContainer}>
    {/* Card Container1 */}
    <TouchableOpacity style={StatisticsStyles.card}>
          <Text style={StatisticsStyles.cardTitle}>Stats</Text>
          <Text style={StatisticsStyles.cardText}>Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos nascetur quam sociosqu eros nunc. Libero euismod consectetur per hendrerit pretium taciti. Ac lectus massa habitant nam cras montes fames; augue diam. Nulla aptent varius mollis augue; penatibus pretium placerat. Nunc dapibus pulvinar morbi nullam magna.
                Finibus sapien vehicula iaculis suscipit non proin parturient adipiscing. Ipsum ullamcorper tortor posuere torquent cursus, conubia feugiat.</Text>  
          </TouchableOpacity>
    </View>
    

    
  </View>
    </ScrollView>
  );
};

export default StatisticsScreen;