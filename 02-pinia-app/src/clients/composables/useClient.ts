import { ref, watch, computed } from 'vue';
import { useQuery, useMutation } from '@tanstack/vue-query';
import clientsApi from '@/api/clientsApi';
import type { Client } from '@/clients/interfaces/client';

const getClient = async ( id: number ): Promise<Client> => {
  const { data } = await clientsApi.get(`/${ id }`);
  return data;
}

const updateClient = async( client: Client ): Promise<Client> => {
  const { data } = await clientsApi.patch<Client>(`/${ client.id }`, client);
  return data;
}

const useClient = ( id: number ) => {

  const client = ref<Client>();

  const clientMutation = useMutation( updateClient );
  
  const { data, isError, isLoading } = useQuery(
    ['client', id],
    () => getClient(id),
    { retry: false }
  );

  watch(data, () => {
    if ( data.value ) client.value = {...data.value};
  }, { immediate: true });

  return {
    clientMutation,
    client,
    isError,
    isLoading,
    updateClient: clientMutation.mutate,
    isUpdating: computed( () => clientMutation.isLoading.value ),
    isUpdatingSuccess: computed( () => clientMutation.isSuccess.value ),
    isErrorUpdating: computed( () => clientMutation.isError.value )
  }

}

export default useClient;
