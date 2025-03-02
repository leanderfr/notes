import { database } from './appwrite';

const databaseService = {

  //****************************************************************************************************************  
  // lista registros
  //****************************************************************************************************************
  async listaRegistros(dbId, collectionId) {

    try {
      const response = await database.listDocuments(dbId, collectionId) 
      return response.documents || [];


    }
    catch (error) {
      console.error('Erro buscando registros ', error.message);
      return { error: error.message };
    }
  },

  //****************************************************************************************************************
  // criar registro
  //****************************************************************************************************************
  async criarRegistro (dbId, collectionId, data, id=null) {
    try {
      return await database.createDocument(dbId, collectionId, id || undefined, data);
    }
    catch (error) {
      console.error('Erro inserindo registro', error.message);
      return { error: error.message };
    }
  },

  //****************************************************************************************************************
  // excluir registro
  //****************************************************************************************************************
  async excluirRegistro (dbId, collectionId, id=null) {
    try {
      await database.deleteDocument(dbId, collectionId, id);
      return{ sucess: true };
    }
    catch (error) {
      console.error('Erro excluindo registro', error.message);
      return { error: error.message };
    }
  }



}

export default databaseService;