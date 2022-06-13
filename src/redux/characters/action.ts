import { Dispatch } from "redux";
import CharacterService from "../../service/CharacterService";
import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
  SET_LOADING,
} from "./types";

const getCharactersSuccessAction = (payload: any) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload,
});

const getCharactersFailureAction = (payload: any) => ({
  type: GET_CHARACTERS_ERROR,
  payload,
});

export const getCharactersAction = () => async (dispatch: Dispatch) => {
  try {
    const response = await CharacterService.getAllCharacters();
    dispatch(getCharactersSuccessAction(response.data.results));
  } catch (error) {
    dispatch(getCharactersFailureAction(error));
  }
};

export const setLoading = () => ({
  type: SET_LOADING,
});
