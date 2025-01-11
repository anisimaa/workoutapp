import { StyleSheet } from 'react-native';

const StatisticsStyles = StyleSheet.create({
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

cardContainer: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
},

  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.87)', 
    padding: 20,
    borderRadius: 10,
    width: '85%',                   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
  },


});


export default StatisticsStyles;