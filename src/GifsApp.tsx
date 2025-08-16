import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const previousSearches = ["Goku", "Superman", "Happy Birthday"]

const handleTermClicked = (term: string) => {
    console.log({term})
}

const handleSearch = (term:string) => {
    console.log({term})
}

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState('Johnny Ramone');

    return (
        <>
            <CustomHeader title="Gif finder" description="Discover and share the perfect gif" />

            <SearchBar  
                placeHolder="Search gif" 
                onQuery={handleSearch} 
                />

            <PreviousSearches 
                searches={previousSearches} onLabelClicked={handleTermClicked} />
            
            <GifList gifList={mockGifs} />
        </>
    )
}
