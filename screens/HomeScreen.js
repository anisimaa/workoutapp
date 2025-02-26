import React, {useState} from 'react';
import { View, TouchableOpacity, ScrollView, ImageBackground, Text, Modal, TextInput, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "@react-native-community/datetimepicker";
import HomeStyles from '../styles/HomeScreenStyle';
import DropDownPicker from 'react-native-dropdown-picker';

const HomeScreen = ({ navigation }) => {

 // for the dateinput
 const [selectedDate, setSelectedDate] = useState(new Date());

  // for the popup
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(true);

// for the card add
  const [cards, setCards] = useState([]);
  const [sportType, setSportType] = useState('Walking');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  // for the menu, dropdown
  const [isOpen, setIsOpen] = useState(false);

  const items = [
  {label:'Walking', value:'Walking' },
  {label:'Running', value:'Running' },
  {label:'Swimming', value:'Swimming' },
]
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
      setShowDatePicker(true);
      setModalVisible(false);
    }
  };

    //calculating for the total kilometers and time
    const totalKm = () => {
      let totals = { walking: 0, running: 0, swimming: 0 }
      
    cards.forEach((card) => {
      const distance = parseFloat(card.distance);
      if (card.sportType === 'Walking') totals.walking += distance;
      if (card.sportType === 'Running') totals.running += distance;
      if (card.sportType === 'Swimming') totals.swimming += distance;
    });
  // Sum all distances together
    totals.all = totals.walking + totals.running + totals.swimming;
    return totals;
  };


  return (
    <ScrollView contentContainerStyle={HomeStyles.scrollContainer}>
      <View>
      <ImageBackground
        source={require('../assets/workoutbackground5.jpg')}
        style={HomeStyles.imageBackground}
        resizeMode="repeat">
    
      {/* Header Text */}
      <Text style={HomeStyles.headerText}>Workout diary</Text>
       
      <View style={HomeStyles.buttonContainer}>
    
       {/* Bottombutton */}
       <TouchableOpacity style={[HomeStyles.button]} onPress={() => setModalVisible(true)}>
                <FontAwesome marginRight="10" marginTop="4" name="plus-circle" size={15} color="#FFFFFF" />
                <Text style={HomeStyles.buttonText}>Add exercise</Text>
              </TouchableOpacity>

          {/*Top button 1 */}
      <TouchableOpacity style={HomeStyles.button} onPress={ () => {const totals = totalKm(); navigation.navigate('Statistics', {totals})}}>
       <FontAwesome marginRight= '10' marginTop= '4' name="list" size={15} color="#FFFFFF" />
            <Text style={HomeStyles.buttonText}>Statistics</Text>
          </TouchableOpacity>
          </View>

          {/* Card  */}
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
              style={{ backgroundColor: 'grey', borderRadius:5, paddingRight: 3, marginBottom: 20, marginTop: 10 }}
              onChange={(event, date) => {
                if (date) {
                  setSelectedDate(date); 
                  selectedDate.toDateString()
                }
                setShowDatePicker(false); // hide picker 
                
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

          <DropDownPicker 
              items={items}
              open={isOpen}
              style={HomeStyles.input}
              setValue={(val) => setSportType(val)}
              placeholder="Select sport"
              setOpen={() => setIsOpen(!isOpen)}
              value={sportType}
              onChangeText={setSportType}>
            </DropDownPicker>

        <Text style={HomeStyles.cardText}>Distance, km</Text>
        <TextInput style={HomeStyles.input}
              
              onChangeText={setDistance}
              value={distance}
              placeholder="0,0"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />

        <Text style={HomeStyles.cardText}>Duration, min</Text>
        <TextInput style={HomeStyles.input}
              
              onChangeText={setDuration}
              value={duration}
              placeholder="0"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          
          <TouchableOpacity style={HomeStyles.bottomButton} onPress={handleAddCard}>
          <Text style={HomeStyles.buttonText}>Add</Text>
        </TouchableOpacity>
          </View>
          
        </Modal>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

