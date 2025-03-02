
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import NoteList from  '@components/NoteList';
import AddNoteModal from  '@components/AddNoteModal';


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
      <AddNoteModal 
        modalVisible = {modalVisible}
        setModalVisible = {setModalVisible}
        newNote = {newNote}
        setNewNote = {setNewNote}
        addNote = {addNote}
      />


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



} )
