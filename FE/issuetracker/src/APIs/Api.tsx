import axios from 'axios';
import { useMutation, useQuery } from 'react-query';

export const useGetData = (key: string, URL: string) => useQuery(key, () => getData(URL));

export function usePostData<T extends string, U>(URL: T, updatedData: U) {
  const mutation = useMutation((updatedData: U) => postData(URL, updatedData));
  return mutation;
}

type ControlDataType = {
  [key: string]: number | string;
};

export async function usePostFetch(URL: string, updatedData: ControlDataType | undefined) {
  await axios.post(URL, updatedData);
}

export const getData = async (URL: string) => {
  const { data } = await axios.get(URL);
  return data;
};

export async function postData<T extends string, U>(URL: T, data: U) {
  const response = await axios.post(URL, data);
  return response;
}
