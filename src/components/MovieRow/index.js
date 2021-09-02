import React, { useState } from 'react';
import { MovieRow } from './styled';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {} from './styled';

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x =(window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <MovieRow className="movieRow" >
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow} >
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow} >
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea" >
                <div className="movieRow--list" 
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}
                >
                    {items.results.length &&
                        items.results.map((i,k)=>
                            <div key={k} className="movieRow--item" >
                                <img src={`https://image.tmdb.org/t/p/w300${i.poster_path}`} alt={i.original_name}/>
                            </div>
                        )
                    }
                </div>

                
            </div>
        </MovieRow>
    );
}

