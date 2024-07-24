import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { genres } from "../data/genres";

const apiClient = new ApiClient<Genre>('/genres');
export interface Genre {
  id: number,
  name: string,
  image_background: string,
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24h
  initialData: genres
})

// const useGenres = () => {
//   const fetchGenres = () => 
//     axios
//       .get<Genre[]>('https://api.rawg.io/api/genres')
//       .then(res => res.data)

// return { data, error, isLoading } = useQuery({
//       queryKey: ['genres'],
//       queryFn: fetchGenres
//     })

// }
;
export default useGenres;