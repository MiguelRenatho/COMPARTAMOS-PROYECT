const API = 'http://10.0.2.2:3000/persons';

export const getPersons = () => {
  return fetch(API)
    .then(res => {
      if (!res.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export const getPerson = dni => {
  return fetch(`${API}/${dni}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export const savePersons = newPerson => {
  console.log('newPerson');
  console.log(newPerson);

  return fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPerson),
  })
    .then(response => {
      console.log('Respuesta:', response);
      return response.json();
    })
    .catch(error => {
      console.error('Error al guardar la persona:', error);
      throw error;
    });
};

export const deletePersons = async dni => {
  await fetch(`${API}/${dni}`, {
    method: 'DELETE',
  });
};

export const updatePersons = async (dni, newPerson) => {
  const res = await fetch(`${API}/${dni}`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(newPerson),
  });
  return res;
};
