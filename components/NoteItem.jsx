
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoteItem = ( {note, onDelete}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState( note.text );

  const inputRef = useRef(null);

  return(<View style={styles.noteItem} >

            { isEditing ? (
            
              <Text 
                ref = {inputRef}
                style={styles.noteText}
                value = {editText}
                onChangeText = {setEditText}
                autoFocus
                onSubmitEditing = {handleSave}
                returnKeyType='done'
              >

              </Text>

              ) : (
                <Text style={styles.noteText}>{ note.text }</Text>
            )}

            <View style={styles.action} >

                { isEditing ? (
                
                  <TouchableOpacity 
                    onPress={ () => {
                      handleSave();  
                      inputRef.current?.blur();
                    }}>                   
                    <Text style={styles.delete}>X</Text>
                  </TouchableOpacity>

                  ) : (
                    <Text style={styles.noteText}>{ note.text }</Text>
                )}


                <TouchableOpacity onPress={ () => onDelete(note.$id) }>
                  <Text style={styles.delete}>X</Text>
                </TouchableOpacity>

            </View>
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

