interface Props {
    placeHolder?: string;
}

export const SearchBar = ({placeHolder = 'Search'}: Props) => {
    return (
        <>
        <div className="search-container">
                <input type="text" placeholder={placeHolder} />
                <button>Search</button>
            </div>
        </>
    )
}
