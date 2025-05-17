import { useQuery } from "@tanstack/react-query";
import { fetchJokes } from "../services/api";

export const useJokesQuery = () => {
    return useQuery({queryKey: ["jokes"], queryFn: fetchJokes})
    
}