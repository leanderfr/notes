
import { View, FlatList } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ( {notes, onDelete, onEdit}) => {

  return(<View >
            <FlatList 
              data = {notes}
              keyExtractor = { (item) => item.$id }
              renderItem= { ({item}) => <NoteItem note={item} onDelete={onDelete} onEdit={onEdit}  /> } >
            </FlatList>

        </View>  )

}

export default NoteList;