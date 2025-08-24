import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeHolder?: string;
    onQuery: (query:string)=> void;
}

export const SearchBar = ({placeHolder = 'Search', onQuery}: Props) => {
    const [query, setQuery] = useState('')

    useEffect(( ) => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
    }
    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <>
        <div className="search-container">
                <input 
                    type="text" 
                    placeholder={placeHolder} 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={handleKeyUp}
                    />
                <button
                    onClick={handleSearch}
                >
                    Search
                    </button>
            </div>
        </>
    )
}
