import React, {useState} from 'react';
import { View, TouchableOpacity, ScrollView, Alert, ImageBackground, Text, Modal, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStyles from '../styles/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const addSport = () => {
    setTasks([...tasks, inputText]);
    setInputText('');
    setModalVisible(false);
  };
  
  const handleButtonPress2 = () => {
    Alert.alert('Cardbutton Pressed!', 'You pressed the card button!');
  };

  const handleButtonPress3 = () => {
    Alert.alert('Card Pressed!', 'You pressed the card!');
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

    
          <View style={HomeStyles.button}>
              {/* Bottombutton */}
              <TouchableOpacity style={[HomeStyles.button]} onPress={() => setModalVisible(true)}>
                <FontAwesome marginRight="10" marginTop="4" name="plus-circle" size={15} color="#FFFFFF" />
                <Text style={HomeStyles.buttonText}>New Sport</Text>
              </TouchableOpacity>
          </View>
        
      </ImageBackground>

      <Modal style={HomeStyles.modalContent}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
      
          <View style={HomeStyles.modalContent}>
          <View style={HomeStyles.closeIcon}> 
          <FontAwesome marginRight= '10' marginTop= '4' name="close" size={28} color="#000000" onPress={() => setModalVisible(false)}/>
          </View>
          <Text style={HomeStyles.cardTitle}>New sport</Text>
          
          
          <TextInput style={HomeStyles.input}
              
              onChangeText={setInputText}
              value={inputText}
              placeholder="Name"
              placeholderTextColor="#999"
            />

          <TouchableOpacity onPress={addSport} style={HomeStyles.bottomButton}>
          <Text style={HomeStyles.buttonText}>Add</Text>
        </TouchableOpacity>
          </View>
          
        </Modal>
    </ScrollView>

    
  );
}

export default HomeScreen;

