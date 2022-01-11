import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from '../services/api';

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface GenresProviderProps {
    children: ReactNode;
}

interface GenresContentData {
    genres: GenreResponseProps[];
    selectedGenreId: number;
    handleClickButton: (id: number) => void;
}

const GenresContext = createContext<GenresContentData>(
    {} as GenresContentData
);

export function GenresProvider({ children }: GenresProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
          setGenres(response.data);
        });
      }, []);

      function handleClickButton(id: number) {
        setSelectedGenreId(id);
      }

    return (
        <GenresContext.Provider value={{genres, selectedGenreId, handleClickButton}}>
            {children}
        </GenresContext.Provider>
    );
}

export function useGenres() {
    return useContext(GenresContext);
}