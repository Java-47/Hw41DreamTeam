import React, { useEffect, useState } from 'react';
import style from '../css_modules/farGalaxy.module.css';
import { base_url } from '../utils/constants';

const FarGalaxy = ()=> {

        const [opening_crawl, setopening_crawl] = useState('Loading...')
        
    
    useEffect(() => {
        const text = sessionStorage.getItem('opening_crawl');
        if (text) {
            setopening_crawl(text)
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setopening_crawl(data.opening_crawl)
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)
                });
        }
    }, []);

    

        return (
            <p className={style.farGalaxy}>{opening_crawl}</p>
        )

}

export default FarGalaxy