const peopleReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        people: [
          ...state.people,
          { id: action.id, name: state.value }
        ]
      };
    }

    case 'remove': {
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.id)
      }
    }

    case 'update': {
      return {
        ...state,
        people: state.people.map((person) => {
          if (person.id === action.id) {
            return { ...person, name: person.name + '✔' };
          } else {
            return person;
          }
        })
      }
    }

    case 'change': {
      return {
        ...state,
        value: action.value
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default peopleReducer;