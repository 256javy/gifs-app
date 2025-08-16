import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const previousSearches = ["Goku", "Superman", "Happy Birthday"]

export const GifsApp = () => {
    return (
        <>
            <CustomHeader title="Gif finder" description="Discover and share the perfect gif" />

            <SearchBar  placeHolder="Search gif" />

            <PreviousSearches searches={previousSearches} />
            
            <GifList gifList={mockGifs} />
        </>
    )
}