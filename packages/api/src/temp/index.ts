import axios from 'axios';
import { ENDPOINT_URL } from '../config';

const getApi = async (): Promise<string> => {
  const resp = await axios.get<string>(`${ENDPOINT_URL}/temp`);
  return resp.data;
};

const TempGetApi = {
  getApi,
};

export default TempGetApi;
