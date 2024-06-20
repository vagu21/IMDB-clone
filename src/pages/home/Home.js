import React, { useEffect ,useState} from 'react'
import './Home.css'
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const [popular,SetPopular]=useState([]);
    useEffect(()=>{
fetch('https://api.themoviedb.org/3/movie/popular?api_key=6ca4ec4b877c3457a13490e0f1372beb').then(
    response=>response.json()).then(
        data=>SetPopular(data.results)
    )
    },[])
  return (
    <div className='poster'>
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
            {
                 popular.map(movie => (
                    <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage__rating">
                                    {movie ? movie.vote_average :""}
                                    <i className="fas fa-star" />{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                    </Link>
                ))
            }
        </Carousel>
        </div>
  )
}

export default Home