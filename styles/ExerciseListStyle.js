import { StyleSheet } from 'react-native';

const ExerciseListStyles = StyleSheet.create({
    scrollContainer: {
        flexgrow: 1, 
        backgroundColor: '#FFFFFF', 
       
      },


 text: {
    fontSize: 32,
    color: '#333', 
    top: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
 },

  button: {
    top: 30, 
    left: 30, 
    paddingVertical: 10,
    paddingHorizontal: 10,
  },


});

export default ExerciseListStyles;