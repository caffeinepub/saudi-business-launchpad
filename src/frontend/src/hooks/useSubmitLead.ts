import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitLeadParams {
  name: string;
  email: string;
  phone: string | null;
  businessStage: string | null;
  message: string;
}

export function useSubmitLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitLeadParams) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      await actor.submitLead(
        params.name,
        params.email,
        params.phone,
        params.businessStage,
        params.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}
