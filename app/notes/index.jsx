
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import NoteList from  '@components/NoteList';
import AddNoteModal from  '@components/AddNoteModal';
import noteService from '@services/noteService';

import alert from '@components/Alert'

const NotesScreen = () => {
/*
  const [notes, setNotes] = useState( [
    {'id': '1', 'text': 'Note one'},
    {'id': '2', 'text': 'Note two'},
    {'id': '3', 'text': 'Note three'},
  ] )
*/

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  //****************************************************************************************************************
  // ler todas as anotacoes
  //****************************************************************************************************************
  const fetchNotes = async () => {
    setLoading(true);
    const response = await noteService.getNotes()
    if (response.error) {
      setError(response.error);
      alert('Erro', response.error)
    } else {
      setNotes(response.data);
      setError(null);

    }
    setLoading(false);
  }

  const[modalVisible, setModalVisible] = useState(false);
  const[newNote, setNewNote] = useState('');

  //****************************************************************************************************************
  // adicionar anotacao
  //****************************************************************************************************************
  const addNote = async () => {
    if (newNote.trim() === '') return;

/*
    setNotes( (prevNotes) => [
      ...prevNotes,
      {id: Date.now.toString(), text: newNote}
    ])
*/

    const response = await noteService.addNote(newNote); 

    if (response.error) 
      alert('Erro', response.error);

    else 
      setNotes( [...notes, response.data] );

    setNewNote('');
    setModalVisible(false);
  }

  //****************************************************************************************************************
  // excluir anotacao  
  //****************************************************************************************************************
  const deleteNote = (id) => {

    alert('Apagar anotação','Tem certeza que quer excluir esta anotação?', 
      [ {text: 'Cancelar', style: 'cancel', onPress: async () => {}},  
        {text: 'Excluir', style: 'delete',
          onPress: async () => { 
            const response = await noteService.deleteNote(id) ;
            if ( response.error ) {
              alert('Erro', response.error);
            }  else {
              setNotes(notes.filter((note) => note.$id !== id));
            }
          }
        }
      ]);

  }

  //****************************************************************************************************************
  // salvar anotacao alterada
  //****************************************************************************************************************
  const updateNote = async (id, newText) => {
    if (! newText.trim() ) {
      alert('Erro', 'Texto da anotação não pode ser vazio');
      return;
    };

    const response = await noteService.updateNote(id, newText)
    if (response.error) 
      alert('Erro', response.error);    
    else
      setNotes( (prevNotes) => 
        prevNotes.map((note) => 
          note.$id == id ? {...note, text: newText} : note)
      )
  }





  return (

    <View style={styles.container} >

      {loading ? (      
        <ActivityIndicator size='large' color='#007bff' />
      ) : (
        <>
          { error && <Text style={styles.errorText}> {error} </Text> }

          {/* lista de notas ja criadas */}
          <NoteList notes={notes} onDelete={deleteNote} onEdit={updateNote} />
        </> 
      )}


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

errorText: {
  color: 'red',
  textAlign: 'center',
  marginBottom: 50,
  fontSize: 16,
},

cancelButton: {
  color: 'blue',
},

deleteButton: {
  color: 'red',
}




} )
