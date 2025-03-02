import { PanResponder } from 'react-native';
import { database } from './appwrite';

const databaseService = {

  // lista registros
  async listaRegistros(dbId, colId) {

    try {
      const response = await database.listDocuments(dbId, colId) 
      return response.documents || [];


    }
    catch (error) {
      console.error('Erro buscando registros ', error.message);
      return { error: error.message };
    }
  }

}

export default databaseService;