import axios from "axios";
import { getJWToken } from "./token";

export const MangadexAPI = "https://api.mangadex.org";
let headerObject = {};
(async () => {
  const token = await getJWToken("token");
  headerObject = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
})();

export const get = async (endpoint: string, params = {}): Promise<unknown> => {
  endpoint = `${MangadexAPI}${endpoint}`;
  console.log(headerObject);
  if (params) headerObject = { ...headerObject, params };
  const response = await axios.get(endpoint, headerObject);
  if (endpoint.includes("data")) console.log(response);
  return response.data;
};
export const post = async (endpoint: string, data: unknown): Promise<unknown> => {
  endpoint = MangadexAPI + endpoint;
  const response = await axios.post(endpoint, data, headerObject);
  return response.data;
};
export const put = async (endpoint: string, data: unknown): Promise<unknown> => {
  endpoint = MangadexAPI + endpoint;
  const response = await axios.put(endpoint, data);
  return response.data;
};
export const del = async (endpoint: string): Promise<unknown> => {
  endpoint = MangadexAPI + endpoint;
  const response = await axios.delete(endpoint);
  return response.data;
};
