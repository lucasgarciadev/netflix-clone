import React, { useEffect, useState } from 'react';
import Tmdb from './TmdbApi';

import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';
import Header from './components/FeaturedMovie/Header';

import './App.css'

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      //Recuperando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      console.log(list);

      //Recuperando o Featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
    }
    loadAll();
  }, [])

  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page" >

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists" >
        {movieList.map((i, k) => 
          <MovieRow key={k} title={i.title} items={i.items} />
        )}
      </section>

      <footer>
        <p>Developed by: <a href="https://www.github.com/lucasgarciadev" >github.com/lucasgarciadev</a></p>
        <p>Design inspired by: <a href="https://www.netflix.com" >Netflix</a></p>
        <p>Data from: <a href="https://www.themoviedb.org">The Movie DataBase</a></p>
      </footer>
      
      {movieList.length <= 0 &&
        <div className="loading" >
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
      </div>
      }
  
    </div>
  );
}

export default App;
