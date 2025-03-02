
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import NoteList from  '@components/NoteList';


const NotesScreen = () => {
  const [notes, setNotes] = useState( [
    {'id': '1', 'text': 'Note one'},
    {'id': '2', 'text': 'Note two'},
    {'id': '3', 'text': 'Note three'},
  ] )

  const[modalVisible, setModalVisible] = useState(false);
  const[newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() === '') return;

    setNotes( (prevNotes) => [
      ...prevNotes,
      {id: Date.now.toString(), text: newNote}
    ])

    setNewNote('');
    setModalVisible(false);

  }
  return (

    <View style={styles.container} >

      {/* lista de notas ja criadas */}
      <NoteList notes={notes} />

      <TouchableOpacity style={styles.addButton} onPress={ () => setModalVisible(true) }>
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      {/***********************************************************************************************************/}
      {/* janela modal de nova anotacao */}
      {/***********************************************************************************************************/}
      <Modal 
        visible = {modalVisible}
        animationType = 'slide'
        transparent
        onClose = { () => {setModalVisible(false) }}
      >

        <View style={styles.modalOverlay} >

          <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Add New Note
              </Text>
              <TextInput 
                style = {styles.input}  
                placeholder = 'Enter Note'
                placeholderTextColor = '#aaa'
                value = {newNote}
                onChangeText = {setNewNote} >
              </TextInput>

              <View style={styles.modalButtons}>

                  <TouchableOpacity style={styles.cancelButton} onPress={ () => setModalVisible(false) }>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.saveButton} onPress={addNote} >
                    <Text style={styles.saveButtonText}>Save</Text>
                  </TouchableOpacity>

              </View>

          </View>


        </View>

      </Modal>

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
  backgroundColor: '#f5f5f5',
  padding: 15,
  bordeRadius: 15,
  marginVertical: 5,
},

noteText: {
  color: 'black',
},

addButton: {
  position: 'absolute',
  bottom: 20,
  left: 20,
  right: 20,
  backgroundColor: '#007bff',
  padding: 15,
  bordeRadius: 15,
  alignItems: 'center',  
 },

addButtonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},

modalOverlay: {
  flex:1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContent: {
  backfaceVisibility: '#fff',
  padding: 20,
  borderRadius: 10,
  width: '80%',
  backgroundColor: '#fff',

},

modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10, 
  textAlign: 'center',
},

input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  fontSize: 16,
  marginBottom: 15,
},

modalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',

},

cancelButton: {
  backgroundColor: '#ccc',
  padding:10,
  borderRadius: 5,
  flex: 1,
  marginRight: 10,
  alignItems: 'center',
},

cancelButtonText: {
  color: '#333',
  fontSize: 16
},

saveButton: {
  backgroundColor: '#007bff',
  padding: 10,
  borderRadius: 5,
  flex: 1,
  alignItems: 'center',
},

saveButtonText: {
  fontSize: 16,
  color: '#fff',
}



} )
