import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={ {
      headerStyle: {
        backgroundColor: '#ff8c00',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',

      // estilos compartilhado por todas as pagians
      contentStyle: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: 'lightblue',
      }

    }} >;

    {/* titulo diferenciado para cada pagina */}
    <Stack.Screen name='index'  options={{title: 'Home'}}  />
    <Stack.Screen name='notes'  options={{headerTitle: 'Notes'}}  />


    </Stack>
}



//**********************************************************************
//**********************************************************************
export default RootLayout;
