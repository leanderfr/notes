
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

const NoteItem = ( {note, onDelete, onEdit}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditText] = useState( note.text );

  const inputRef = useRef(null);

  const handleSave = () => {

    if (editedText.trim() === '') return;

    onEdit(note.$id, editedText);
    setIsEditing(false);


  }

  return(<View style={styles.noteItem} >

            { isEditing ? (
            
              <TextInput 
                ref = {inputRef}
                style={styles.noteText}
                value = {editedText}
                onChangeText = {setEditText}
                autoFocus
                onSubmitEditing = {handleSave}
                returnKeyType='done'
              >

              </TextInput>

              ) : (
                <Text style={styles.noteText}>{ note.text }</Text>
            )}

            <View style={styles.actions} >

                { isEditing ? (
                
                  <TouchableOpacity 
                    onPress={ () => {
                      handleSave();  
                      inputRef.current?.blur();
                    }}>                   
                    <Text style={styles.actionIcon}>💾</Text>
                  </TouchableOpacity>

                  ) : (
                    <TouchableOpacity onPress={ () => {setIsEditing(true)} }>
                      <Text style={styles.actionIcon}>🖉</Text>
                    </TouchableOpacity>
                )}

 
                <TouchableOpacity onPress={ () => onDelete(note.$id) }>
                  <Text style={styles.actionIcon}>❌</Text>
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

actionIcon: {
  fontSize: 20,
  fontWeight: 'bold',
},

actions: {
  flexDirection: 'row',
  gap: 20,
}


});

