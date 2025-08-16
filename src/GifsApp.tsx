import { mockGifs } from "./mock-data/gifs.mock"

export const GifsApp = () => {
    return (
        <>
            <div className="contet-center">
                <h1>Gif finder</h1>
                <p>Discover and share the perfect gif</p>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Buscar gifs" />
                <button>Search</button>
            </div>

            <div className="previous-searches">
                <h2>Previous searches</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Elden Ring</li>
                </ul>
            </div>
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div className="gif-card" key={gif.id} >
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>
                                {gif.width}x{gif.height} (1.1MB)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}