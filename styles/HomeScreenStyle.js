import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    paddingBottom: 50,
  },

  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.87)', 
    padding: 20,
    borderRadius: 10,  
    minWidth: '85%',   
    alignItems: 'center',      
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 25,
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
    marginTop: 10,
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
    paddingBottom: 30,
  },
  
  button: {
    flexDirection: 'row',
    backgroundColor: '#000000', 
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 5,
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
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

modalContent: {
    position: 'relative',
    top: 95,
    left: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'rgba(255, 255, 255,  1)', 
    padding: 25,
    borderRadius: 10,
    width: '90%',                   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    zIndex: 500,
},

bottomButton: {
  flexDirection: 'row',
  backgroundColor: '#000000', 
  paddingVertical: 10,
  paddingHorizontal: 17,
  borderRadius: 5,
  marginTop: 17,
},

input: {
  width:'100%',
  height: 50,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  paddingLeft: 10,
  marginBottom: 5,
  marginTop: 5,
  fontSize: 16,
  zIndex:1000,
},

closeIcon: {
  position: 'absolute',
  top: 25,  
  right: 33, 
  zIndex: 10, 
},

changetxt: {
    color: 'rgba(95, 95, 95, 0.38)', 
    fontSize: 12,
    textAlign: 'center',
    padding: 5,
},



});

export default HomeStyles;