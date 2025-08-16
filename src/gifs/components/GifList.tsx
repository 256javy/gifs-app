import type { Gif } from "../../mock-data/gifs.mock"

interface Props {
    gifList: Gif[];
}

export const GifList = ({ gifList }: Props) => {
    return (
        <>
            <div className="gifs-container">
                {
                    gifList.map((gif) => (
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
