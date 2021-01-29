const initialState = {
  peoples: [],
};

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return {
        ...state,
        peoples: [...state.peoples, action.payload],
      };

    case "DELETE_PEOPLE":
      const x = state.peoples.filter((e) => e.id !== action.payload);
      return {
        ...state,
        peoples: x,
      };

    case "UPDATE_PEOPLE":
      const y = state.peoples.map((e) =>
        e.id === action.payload.idholder ? { e, name: action.payload.edit } : e
      );
      return {
        ...state,
        peoples: y,
      };

    default:
      return state;
  }
};

export default PeopleReducer;
