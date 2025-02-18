import { View, Text, } from 'react-native';
import HomeStyles from '../styles/HomeScreenStyle';

export default function Card() {
    return(
        // Card Container1 
         <View style={HomeStyles.card}>
         <Text style={HomeStyles.cardTitle}>Run</Text>
         </View>
    )
};

