import axios from 'axios';
import { ErrorResponse } from './interfaces';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const getWordMeaning = async(word: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/${word}`);
    
    return {
      isSuccess: true,
      data
    };
  } catch (error) {
    const { data } = (error as ErrorResponse).response;

    return {
      isSuccess: false,
      data
    };
  }
};
