import {View, Text, FlatList, RefreshControl} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPersons, deletePersons} from '../api';
import PersonaItem from './PersonaItem';
import {useIsFocused} from '@react-navigation/native';

const PersonaList = () => {
  const isFocused = useIsFocused();
  const [persons, setPersons] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadPerson = () => {
    getPersons()
      .then(data => {
        setPersons(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  };

  useEffect(() => {
    loadPerson();
  }, [isFocused]);

  const renderItem = ({item}) => (
    <PersonaItem persona={item} deletePersonas={deletePersonas} />
  );

  const deletePersonas = dni => {
    deletePersons(dni);
    loadPerson();
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadPerson();
    setRefreshing(false);
  });

  return (
    <FlatList
      data={persons}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          colors={['#78e08f']}
          onRefresh={() => onRefresh()}
          refreshing={refreshing}
          progressBackgroundColor="#000"
        />
      }
    />
  );
};

export default PersonaList;
