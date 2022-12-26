import { watch, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';
import clientsApi from '@/api/clientsApi';
import type { Client } from '@/clients/interfaces/client';
import { useClientsStore } from '@/store/clients';

const getClients = async( page: number ): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>(`?_page=${ page }`);
  return data;
}

const useClients = () => {

  const store = useClientsStore();
  const { currentPage, clients, totalPages } = storeToRefs( store );

  const { isLoading, data } = useQuery(
    ['clients?page=', currentPage],
    () => getClients( currentPage.value )
  );

  watch( data, clients => {
    if (clients) store.setClients( clients );
  });

  return {
    // Properties
    clients,
    currentPage,
    isLoading,
    totalPages,
    // Methods
    getPage( page: number ) {
      store.setPage( page );
    },
    // Getter
    totalPageNumbers: computed(
      () => [...new Array(totalPages.value)].map((_, i) => i + 1)
    )
  }

}

export default useClients;