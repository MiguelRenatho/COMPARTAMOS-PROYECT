import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {savePersons, getPerson, updatePersons} from '../api';

const PersonaFormScreen = ({navigation, route}) => {
  const [dni, setDNI] = useState(0);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fecha, setFecha] = useState('');
  const [edad, setEdad] = useState(0);
  const [ciudad, setCiudad] = useState('');

  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    try {
      const person = {
        DNI: dni,
        NOMBRES: nombre,
        APELLIDOS: apellido,
        FECHANAC: fecha,
        EDAD: edad,
        CIUDAD: ciudad,
      };

      if (!edit) {
        savePersons(person);
      } else {
        updatePersons(route.params.dni, person);
      }
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.dni) {
      setEdit(true);
      (() => {
        getPerson(route.params.dni)
          .then(person => {
            setDNI(person.DNI);
            setNombre(person.NOMBRES);
            setApellido(person.APELLIDOS);
            setFecha(person.FECHANAC);
            setEdad(person.EDAD);
            setCiudad(person.CIUDAD);
          })
          .catch(error => {
            console.error('Error al obtener los datos de la persona:', error);
          });
      })();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>DNI:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setDNI(text)}
        value={dni}
        placeholder="Escribe DNI"
      />

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNombre(text)}
        value={nombre}
        placeholder="Escribe Nombre"
      />

      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setApellido(text)}
        value={apellido}
        placeholder="Escribe Apellido"
      />

      <Text style={styles.label}>Fecha Nac:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setFecha(text)}
        value={fecha}
        placeholder="Escribe Fecha"
      />

      <Text style={styles.label}>Edad:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEdad(text)}
        value={edad}
        placeholder="Escribe Edad"
      />

      <Text style={styles.label}>Ciudad:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCiudad(text)}
        value={ciudad}
        placeholder="Escribe Ciudad"
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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

export default PersonaFormScreen;
