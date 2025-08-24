import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifsList, setGifsList] = useState<Gif[]>(mockGifs)
    
    const handleTermClicked = (term: string = '') => {
        //TODO add term to input
        handleSearch(term)
    }
    
    const handleSearch = async (term:string) => {
        // remove all whitespaces
        term = term.trim().toLowerCase();

        //validate that the search term isnt empty
        if(!term) return

        //create a copy of the array (spread or slice) to manipulate it
        const newPreviousTerms = [...previousTerms]

        //validate that the array doesn't contain the term, if it does, remove it
        if(newPreviousTerms.includes(term)){
            newPreviousTerms.splice(newPreviousTerms.indexOf(term),1)
        }

        //add the search term to the array
        newPreviousTerms.unshift(term)

        //validate if the length of the array is greater than 8
        if(newPreviousTerms.length > 8){
            // trim the array
            newPreviousTerms.splice(8)
        }

        //set the new array as the state
        setPreviousTerms(newPreviousTerms)

        //get gifs from Giphy API
        const resultGifs = await getGifsByQuery(term)
        setGifsList(resultGifs)
    }

    return (
        <>
            <CustomHeader title="Gif finder" description="Discover and share the perfect gif" />

            <SearchBar  
                placeHolder="Search gif" 
                onQuery={handleSearch} 
                />

            <PreviousSearches 
                searches={previousTerms} onLabelClicked={handleTermClicked} />
            
            <GifList gifList={gifsList} />
        </>
    )
}
