
import databaseService  from './databaseService';
import { ID } from 'react-native-appwrite';

// base e collection 
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  // ler anotacoes
  async getNotes() {

    const response = await databaseService.listaRegistros(dbId, collectionId);
    if ( response.error ) {
      return { error: response.error }
    }
    return { data: response } ;

  },

  // adicionar anotacao
  async addNote(text) {
    if (!text) {
      return {error: 'Anotação não pode estar em branco'};
    }

    const data = {
      text: text,
      created_at: new Date().toISOString(),
    }

    const response = await databaseService.criarRegistro (
      dbId,
      collectionId,
      data,
      ID.unique()
    );
    if (response?.error)  {
      return { error: response.error };
    }

    return { data: response};
  },


  // excluir anotacao
  async deleteNote(id) {
    const response = await databaseService.excluirRegistro (
      dbId,
      collectionId,
      id
    );

    if (response?.error)  {
      return { error: response.error };
    }

    return {succes: true};
  }



}

export default noteService;