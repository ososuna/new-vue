import { ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import clientsApi from '@/api/clientsApi';
import type { Client } from '@/clients/interfaces/client';

const getClient = async (id: number): Promise<Client> => {
  const { data } = await clientsApi.get(`/${ id }`);
  return data;
}

const useClient = ( id: number ) => {

  const client = ref<Client>();

  const { isLoading, data } = useQuery(
    ['client', id],
    () => getClient(id),
  );

  watch(data, () => {
    if ( data.value ) client.value = {...data.value};
  }, { immediate: true });

  return {
    client,
    isLoading
  }

}

export default useClient;
