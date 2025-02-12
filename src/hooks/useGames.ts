import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import { GameQuery } from "../pages/HomePage";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>('/games')
const useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => 
    apiClient.getAll({
    params: { 
      genres: gameQuery.genreId, 
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam
  }
  }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime: ms('24h')
})


// const useGames = (gameQuery: GameQuery) => 
//   useData<Game>('/games', {
//     params: { 
//       genres: gameQuery.genre?.id, 
//       platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText
//     }
//   }, [gameQuery]);

export default useGames;