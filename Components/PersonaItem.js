import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PersonaItem = ({persona, deletePersonas}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonaFormScreen', {dni: persona.DNI})
        }>
        <Text>
          {persona.DNI +
            '  ' +
            persona.APELLIDOS +
            '   ' +
            persona.FECHANAC +
            '  ' +
            persona.EDAD +
            ' ' +
            persona.CIUDAD}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: '#ee5253', padding: 7, borderRadius: 5}}
        onPress={() => deletePersonas(persona.DNI)}>
        <Text style={{color: '#fff'}}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#dcdcdc',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default PersonaItem;
