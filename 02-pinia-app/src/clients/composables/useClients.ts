import { useQuery } from '@tanstack/vue-query';
import clientsApi from '@/api/clientsApi';
import type { Client } from '@/clients/interfaces/client';

const getClients = async(): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>('?_page=1');
  return data;
}

const useClients = () => {

  const { isLoading, data } = useQuery(
    ['clients?page=', 1],
    () => getClients(),
  );

  return {
    isLoading
  }

}

export default useClients;
