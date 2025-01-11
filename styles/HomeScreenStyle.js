import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  scrollContainer: {
    flexgrow: 1, 
    backgroundColor: '#FFFFFF', 
  },


  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundRepeat: 'repeat', 
    paddingBottom: 50,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.87)', 
    padding: 20,
    borderRadius: 10,
    width: '85%',              
    alignItems: 'center',      
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', 
    top: 90,
    marginBottom: 100,
  },

  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 20,
    top: 0,
    zIndex: 10, 
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#000000', 
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 5,
    marginBottom: 30,
  },

  cardButton: {
    backgroundColor: '#000000', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeStyles;