import React, {useState} from 'react';
import { View, TouchableOpacity, ScrollView, ImageBackground, Text, Modal, TextInput, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "@react-native-community/datetimepicker";
import HomeStyles from '../styles/HomeScreenStyle';
import { Picker } from 'react-native-wheel-pick';


const HomeScreen = ({ navigation }) => {

 // for the dateinput
 const [selectedDate, setSelectedDate] = useState(new Date());

  // for the popup
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(true);

// for the card add
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [cards, setCards] = useState([]);

 //handle dateinput
 const updateDate = (selectedDate, id) => {
  setShowDatePicker(null); 
  if (selectedDate) {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, date: selectedDate } : card
      )
    );
  }
};

  //handling the exerciseadd popup
  const handleAddCard = () => {

    if (sportType && distance && duration) {
      const newCard = {
        id: Math.random().toString(),
        sportType,
        distance,
        duration,
        date: selectedDate,
      };
      // adding card to the list
      setCards((prevCards) => [...prevCards, newCard]);
      //reset inputs
      setSportType('');
      setDistance('');
      setDuration('');
      setSelectedDate(new Date());
      setModalVisible(false);
    }
  }
  

  return (
    <ScrollView contentContainerStyle={HomeStyles.scrollContainer}>
      <ImageBackground
        source={require('../assets/workoutbackground5.jpg')}
        style={HomeStyles.imageBackground}
        resizeMode="repeat"
>

      {/* Header Text */}
      <Text style={HomeStyles.headerText}>Workout diary</Text>
       
      <View style={HomeStyles.buttonContainer}>
    
       {/* Bottombutton */}
       <TouchableOpacity style={[HomeStyles.button]} onPress={() => setModalVisible(true)}>
                <FontAwesome marginRight="10" marginTop="4" name="plus-circle" size={15} color="#FFFFFF" />
                <Text style={HomeStyles.buttonText}>Add exercise</Text>
              </TouchableOpacity>

          {/*Top button 1 */}
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Statistics')}>
       <FontAwesome marginRight= '10' marginTop= '4' name="list" size={15} color="#FFFFFF" />
            <Text style={HomeStyles.buttonText}>Statistics</Text>
          </TouchableOpacity>
          </View>

          {/* Card Container */}

        <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={HomeStyles.card}>
            <Text style={HomeStyles.cardTitle}>{item.sportType}</Text>
            <Text style={HomeStyles.cardText}>Distance: {item.distance} km</Text>
            <Text style={HomeStyles.cardText}>Duration: {item.duration} min</Text>
            <Text style={HomeStyles.changetxt}>{item.date.toDateString()}</Text>
          </View>
        )}
        />
        
      
        
      </ImageBackground>

      {/* adding exercise */}
      <Modal style={HomeStyles.modalContent}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
      
          <View style={HomeStyles.modalContent}>
          <View style={HomeStyles.closeIcon}> 
          <FontAwesome name="close" size={28} color="#000000" onPress={() => {
            setModalVisible(false);
            setSportType('');
            setDistance('');
            setDuration('');
            setSelectedDate(new Date());
            setShowDatePicker(true);
          }} />
          </View>
          <Text style={HomeStyles.cardTitle}>Add exercise</Text>

          
          {/* date picker */}
          {showDatePicker && (
            <DateTimePicker 
              value={selectedDate}
              mode="date"
              display="default"
              style={{ backgroundColor: 'grey', borderRadius:5, paddingRight: 3 }}
              onChange={(event, date) => {
                if (date) {
                  setSelectedDate(date); 
                  selectedDate.toDateString()
                }
                setShowDatePicker(false); // Hide picker after selection
                
              }}
            />
          )}

          {selectedDate && !showDatePicker && (
            <View>
        <Text style={HomeStyles.cardText}>{selectedDate.toDateString()}</Text>

        {/* Change Date button */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={HomeStyles.changetxt}>Change Date</Text>
         </TouchableOpacity>
        </View>
          )}
        
        <Picker
        style={{ backgroundColor: 'white', width: '90%' }}
        selectedValue='Walking'
        onChangeText={setSportType}
        value={sportType}
        pickerData={['Walking', 'Running', 'Swimming']}
        onValueChange={value => { console.log(value) }}
        />
        
        <TextInput style={HomeStyles.input}
              
              onChangeText={setDistance}
              value={distance}
              placeholder="Distance, min"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />

        <TextInput style={HomeStyles.input}
              
              onChangeText={setDuration}
              value={duration}
              placeholder="Duration, min"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          
          <TouchableOpacity style={HomeStyles.bottomButton} onPress={handleAddCard}>
          <Text style={HomeStyles.buttonText}>Add</Text>
        </TouchableOpacity>
          </View>
          
        </Modal>
    </ScrollView>

    
  );
};

export default HomeScreen;

