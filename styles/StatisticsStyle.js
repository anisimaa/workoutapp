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
    padding: 35,
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
    textAlign: 'center',
  },
  cardText: {
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
    padding: 5,
  },

  changetxt: {
    color: 'rgba(95, 95, 95, 0.38)', 
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
    marginTop: 15,
},

});


export default StatisticsStyles;