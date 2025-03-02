
import { View, Text, StyleSheet } from 'react-native';

const NoteItem = ( {note}) => {

  return(<View style={styles.noteItem} >
            <Text style={styles.noteText}>{ note.text }</Text>
        </View>
  )

}

export default NoteItem;

const styles = StyleSheet.create( {

noteItem: {
  backgroundColor: '#f5f5f5',
  padding: 15,
  bordeRadius: 15,
  marginVertical: 5,
},

noteText: {
  color: 'black',
},
});

