import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PostItImage from '@/assets/images/post-it.png'
import { useRouter } from 'expo-router';  


const  HomeScreen = () =>  {
  const router = useRouter();
  return (
    <View style={styles.container}   >
      <Image source={ PostItImage } style={styles.image} />
      <Text style={styles.title}>Welcome to Notes __App.</Text>
      <Text style={styles.subtitle}>Capture your __thoughts, anywhere, anytime</Text>

      <TouchableOpacity 
        style={styles.button}  
        onPress = { () => router.push('/notes') }  >      
        <Text style={styles.buttonText} >Iniciar__</Text>
      </TouchableOpacity>
    </View>


  );
}

//**********************************************************************
//**********************************************************************
const styles = StyleSheet.create( {

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  backgroundColor: '#f8f9fa',
},

image: {
  width: 100,
  height: 100,
  marginBottom: 20,
  borderRadius: 10,
},

title: {
  fontSize: 30,
  fontWeight: 'bold',
},

subtitle: {
  fontSize: 16,
  marginBottom: 20,
},

button: {
  backgroundColor: '#007bff',
  paddingVertical: 12,
  paddingHorizontal: 25, 
  borderRadius: 8,
  alignItems: 'center',
},

buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18,
}



})

//**********************************************************************
//**********************************************************************
export default HomeScreen;