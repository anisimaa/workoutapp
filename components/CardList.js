import React, {useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import HomeStyles from '../styles/HomeScreenStyle';



export default function CardList() {
  const [sportType, setSportType] = useState('Walking');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
    const [cards, setCards] = useState([]);
    return(
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
    )
};

