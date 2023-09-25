import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PersonaFormScreen from './screens/PersonaFormScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'COMPARTAMOS TEST APP',
            headerStyle: {backgroundColor: '#222f3e'},
            headerTitleStyle: {color: '#ffffff'},
            headerRight: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#dcdcdc',
                  padding: 7,
                  borderRadius: 5,
                }}
                onPress={() => navigation.navigate('PersonaFormScreen')}>
                <Text style={{color: '#3c3c3c', marginRight: 2, fontSize: 15}}>
                  AGREGAR
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="PersonaFormScreen"
          component={PersonaFormScreen}
          options={{
            title: 'MANTENIMIENTO PERSONAS',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
