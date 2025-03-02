
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoteItem = ( {note, onDelete}) => {

  return(<View style={styles.noteItem} >
            <Text style={styles.noteText}>{ note.text }</Text>
            <TouchableOpacity onPress={ () => onDelete(note.$id) }>
              <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
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
  flexDirection: 'row',
  justifyContent: 'space-between',
},

noteText: {
  color: 'black',
},

delete: {
  fontSize: 20,
  color: 'red',
  fontWeight: 'bold',
}
});

