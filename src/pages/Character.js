import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import KnownPlayers from '../components/KnownPlayers';
import MainStats from '../components/MainStats';
import AdvancedStats from '../components/AdvancedStats';
import { useDispatch, useSelector } from 'react-redux';
import { addAllCharacters } from '../actions/characters';
import getCharacters from '../api/getCharacters';


const Character = () => {

    const dispatch = useDispatch();

    const characters = useSelector(state => state.characters);
    const [character, setCharacter] = useState(null);
    const { character_id } = useParams();
    const [randomColor, setRandomColor] = useState("");


    const get_fixed = (num) => {
        return Math.floor(num * 1.3333 - 33.3333);
    };

    const get_color = (num) => {
        if (num >= 95) return "#00FFB9";
        else if (num >= 90) return "#00FF00";
        else if (num >= 85) return "#00DF00";
        else if (num >= 75) return "#25A000";
        else if (num >= 60) return "#B3B300";
        else if (num < 60 && num > 0) return "#9B0606";
        else return "#232323";
    };

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const fetchData = async () => {
        try {
            const characters = await getCharacters();
            dispatch(addAllCharacters(characters));
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    useEffect(() => {
        setRandomColor(getRandomColor());
        if (characters.length === 0) fetchData();
    }, []);

    useEffect(() => {
        if (characters.length > 0) {
            let character = characters.find(e => e.char_id.toString() === character_id);
            if (character) {
                setCharacter(character);
            }
        }
    }, [characters]);

    useEffect(() => {
        if (character) {

            document.querySelectorAll(".main-stats").forEach(c => {
                c.querySelectorAll(".main-stat-line").forEach(l => {
                    let min = 4;
                    let max = 10;
                    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                    for (let i = 0; i < randomNum; i++) {
                        l.querySelectorAll("span")[i].className += " filled";
                    }
                });
            });

            document.querySelectorAll(".advanced-stats-container").forEach(c => {
                c.querySelectorAll(".stat-line").forEach(l => {
                    let min = 55;
                    let max = 99;
                    let filler = l.querySelector(".filler");
                    let stat_value = null;
                    if (character.stats?.[l.id] != null) {
                        stat_value = character.stats[l.id];
                    } else {
                        stat_value = Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    filler.style.width = (get_fixed(stat_value)) + "%";
                    l.querySelector(".stat-val").textContent = stat_value;
                    filler.style.backgroundColor = get_color(stat_value);
                    l.querySelector(".stat-val").style.color = get_color(stat_value);
                });
            });
        }
    }, [character]);

    return (
        <div className='page-container page-container--character'>
            <Header />
            {character &&
                <div className='character-container'>
                    <div className='panels-container'>
                        <div className='left-container'>
                            <h1 className='character-name'> {character.full_name}</h1>
                            <h2 className='character-nick'>{character.nickname}</h2>
                            <p className='character-synopsis'>{character.synopsis}</p>
                            <h3 className='fighting-style-title char-info-title'>FIGHTING STYLE</h3>
                            <div className='fighting-style'>{character.fight_style}</div>
                            <h3 className='nation-title char-info-title'>NATION</h3>
                            <div className='flag-text-container'>
                                <img className='nation-flag' src={"/tekken-portal/img/nations/" + character.nation + ".png"} alt="img"></img>
                                <span className='country-name'>{character.nation}</span>
                            </div>
                        </div>
                        <div className='right-container'>
                            <div className="img-container" style={{ backgroundColor: randomColor }}>
                                <img src={"/tekken-portal/img/characters/big2/" + character.char_id + ".png"} alt='img'></img>
                            </div>
                        </div>
                    </div>

                    <MainStats />

                    <AdvancedStats character={character} />

                </div>
            }

            <KnownPlayers />

        </div>
    );
};

export default Character;