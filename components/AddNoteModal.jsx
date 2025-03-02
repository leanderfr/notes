

import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { create } from 'react-test-renderer';

const AddNoteModal = ( {modalVisible, setModalVisible, newNote, setNewNote, addNote} ) => {

  return( 

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


  )


}

export default AddNoteModal;

const styles = StyleSheet.create( {

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



})

