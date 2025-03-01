
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';


const NotesScreen = () => {
  const [notes, setNotes] = useState( [
    {'id': '1', 'text': 'Note one'},
    {'id': '2', 'text': 'Note two'},
    {'id': '3', 'text': 'Note three'},
  ] )

  return (

    <View style={styles.container} >
      <FlatList 
        data = {notes}
        keyExtractor = { (item) => item.id }
        renderItem= { ({item}) => (

          <View style={styles.noteItem} >
              <Text style={styles.noteText}>dd{ item.text }</Text>
          </View>

        )} >
      </FlatList>

    </View>

  )
}

export default NotesScreen

const styles = StyleSheet.create( {

container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#fff',
},

noteItem: {
  color: 'red',
},

} )
