const peopleReducer = (people, action) => {
  switch (action.type) {
    case 'add': {
      return [
        ...people,
        { id: action.id, name: action.name }
      ];
    }

    case 'remove': {
      return people.filter((person) => person.id !== action.id);
    }

    case 'update': {
      return people.map((person) => {
        if (person.id === action.id) {
          return { ...person, name: person.name + '✔' };
        } else {
          return person;
        }
      })
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default peopleReducer;