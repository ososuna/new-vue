import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';
import clientsApi from '@/api/clientsApi';
import type { Client } from '@/clients/interfaces/client';
import { useClientsStore } from '@/store/clients';
import { watch } from 'vue';

const getClients = async(): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>('?_page=1');
  return data;
}

const useClients = () => {

  const store = useClientsStore();
  const { currentPage, clients, totalPages } = storeToRefs( store );

  const { isLoading, data } = useQuery(
    ['clients?page=', 1],
    () => getClients()
  );

  watch( data, clients => {
    if (clients) store.setClients( clients );
  });

  return {
    // Properties
    isLoading,
    clients
  }

}

export default useClients;
