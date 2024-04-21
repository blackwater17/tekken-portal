import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import getCharacters from '../api/getCharacters';
import { addAllCharacters } from '../actions/characters';

const HomePage = () => {

    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);

    const [searchResults, setSearchResults] = useState([]);
    const [resultsClass, setResultsClass] = useState("");

    const main = async () => {

        const characters = await getCharacters();
        dispatch(addAllCharacters(characters));

        let path = "tekken-portal/sounds/hover2.wav";
        let audio = new Audio(path);
        document.querySelectorAll(".character").forEach(d => {
            d.addEventListener("mouseenter", () => {
                audio.play();
            });
        });

        document.getElementById("search").addEventListener("input", () => {
            let text = document.getElementById("search").value;
            setResultsClass(text.length > 1 ? "show" : "");
            const newSearchResults = characters.reduce((acc, char, i) => {
                if (char.character_name.toLowerCase().includes(text.toLowerCase())) {
                    acc.push({ character_name: char.character_name.charAt(0).toUpperCase() + char.character_name.slice(1), character_id: i + 1 });
                }
                return acc;
            }, []);
            setSearchResults(newSearchResults);
        });

        const handleClickOutside = (event) => {
            const divElement = document.querySelector('.search-results');
            if (divElement) {
                const isClickInside = divElement.contains(event.target);
                if (!isClickInside) {
                    setResultsClass("");
                }
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }

    useEffect(() => {
        main()
    }, []);


    return (
        <div className='page-container page-container--homepage'>
            <Header />
            <div className='search-bar-container'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                    <path d="M853.988 783.582L704.985 634.578c29.249-49.501 46.054-107.229 46.054-168.891 0-183.636-148.866-332.504-332.503-332.504S86.034 282.051 86.034 465.688 234.9 798.19 418.536 798.19c61.662 0 119.39-16.805 168.892-46.055L736.43 901.138c32.462 32.462 85.094 32.462 117.558 0 32.462-32.461 32.462-85.094 0-117.556z m-435.452-21.339c-163.784 0-296.557-132.775-296.557-296.556 0-163.784 132.773-296.557 296.557-296.557 163.782 0 296.556 132.773 296.556 296.557 0 163.781-132.773 296.556-296.556 296.556z m411.939 115.384c-19.476 19.478-51.056 19.478-70.534 0L615.726 733.411a334.417 334.417 0 0 0 70.421-70.379l148.017 151.781c19.478 19.479 15.789 43.336-3.689 62.814z" fill="#cd3b5a" />
                </svg>
                <input id="search" type="text" placeholder='Search...' autoFocus autoComplete="off"></input>
                <div className={"search-results " + resultsClass}>
                    {searchResults.length > 0 && searchResults.map((e, i) => (
                        <div className='search-result-container' key={i}>
                            <div className='search-result-img'
                                style={{ backgroundImage: `url(/tekken-portal/img/characters/small/${e.character_id}.png)` }}>
                            </div>
                            <div className='result-texts-container'>
                                <div className='result-name'>{e.character_name}</div>
                                <div className='result-type'>(CHARACTER)</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className='chars-title'>CHOOSE YOUR <span>CHARACTER</span></h1>
            <div className='characters-container'>
                {characters.map((character, index) => (
                    <NavLink
                        to={`/character/${character.char_id}/${character.character_name.toLowerCase().replace(/ /g, "-")}/`}
                        key={index}
                        className="character"
                    >
                        <img src={`/tekken-portal/img/characters/small/${index + 1}.png`} alt="character" />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default HomePage;