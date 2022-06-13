import api from "../helpers/AxiosInstance";

const CharacterService = {
  getAllCharacters : () => api.get('/character')
}

export default CharacterService;