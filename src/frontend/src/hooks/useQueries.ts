import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Lead } from '../backend';

export function useGetAllLeadsOrderedByTimestamp() {
  const { actor, isFetching } = useActor();

  return useQuery<Lead[]>({
    queryKey: ['leads', 'timestamp'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLeadsOrderedByTimestamp();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllLeadsOrderedByName() {
  const { actor, isFetching } = useActor();

  return useQuery<Lead[]>({
    queryKey: ['leads', 'name'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLeadsOrderedByName();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetLeadsByBusinessStage(stage: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Lead[]>({
    queryKey: ['leads', 'stage', stage],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeadsByBusinessStage(stage);
    },
    enabled: !!actor && !isFetching && !!stage,
  });
}
