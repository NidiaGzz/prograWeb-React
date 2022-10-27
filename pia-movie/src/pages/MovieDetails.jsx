import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import styles from "./MovieDetails.module.css";
import Navbar from "../components/Navbar/Navbar";

export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then(data =>{
            setMovie(data);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div>
            <Navbar/>
            <div className={styles.detailsContainer}>
                <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
                <div className={styles.col + " " + styles.movieDetails}>
                    <p className={styles.firstItem}>
                        <strong>Title:</strong> {movie.title}
                    </p>
                    <p className={styles.firstItem}>
                        <strong>Genres:</strong>{" "}
                        {movie.genres.map(genre => genre.name).join(", ")}
                    </p>
                    <p className={styles.firstItem}>
                        <strong>Description:</strong> {movie.overview}
                    </p>
                </div>
            </div>
        </div>
    );
}