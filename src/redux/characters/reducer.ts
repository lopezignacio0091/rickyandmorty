import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
  SET_LOADING,
  CharacterState,
  CharacterActions,
} from "./types";

const initialState: CharacterState = {
  loading: true,
  characters: [],
  error: "",
  characters_one:[],
  characters_two:[],
};

function reducer(
  state = initialState,
  action: CharacterActions
): CharacterState {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
        characters_one:action.payload.splice(0,action.payload.length/2),
        characters_two:action.payload.splice(0,action.payload.length),
      };
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.message,
      };
      case SET_LOADING:
        return {
          ...state,     
          loading: !state.loading,
        };
    default:
      return state;
  }
}

export default reducer;
