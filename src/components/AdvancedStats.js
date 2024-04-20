import React from 'react';

const AdvancedStats = ({ character }) => {
    return (
        <div className='advanced-stats-container'>
            <div className="test3">
                <img src={"/tekken-portal/img/characters/big/" + character.char_id + ".png"}
                    alt="img"></img>
            </div>
            <h1>ADVANCED STATS</h1>
            <div className='stats-container'>

                <div className='stats-col-container'>
                    <h2>MOVEMENT</h2>
                    <div className='stat-line' id="backdash">
                        <div className='stat-title'>Backdash</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="sidestep">
                        <div className='stat-title'>Sidestep</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                </div>

                <div className='stats-col-container'>
                    <h2>ATTACK</h2>
                    <div className='stat-line' id="poking-game">
                        <div className='stat-title'>Poking Game</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="50-50">
                        <div className='stat-title'>50-50</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="mids">
                        <div className='stat-title'>Mids</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="lows">
                        <div className='stat-title'>Lows</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="rushdown">
                        <div className='stat-title'>Rushdown</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="comeback">
                        <div className='stat-title'>Comeback</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="wall-pressure">
                        <div className='stat-title'>Wall Pressure</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="strings">
                        <div className='stat-title'>Strings</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="throw-game">
                        <div className='stat-title'>Throw Game</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                </div>
                <div className='stats-col-container'>
                    <h2>DEFENCE</h2>
                    <div className='stat-line' id="ovr-punishment">
                        <div className='stat-title'>Ovr. Punishment</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="ch-tools">
                        <div className='stat-title'>CH Tools</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="keepout-moves">
                        <div className='stat-title'>Keepout Moves</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="power-crush">
                        <div className='stat-title'>Power Crush</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="panic-moves">
                        <div className='stat-title'>Panic Moves</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="panic-moves">
                        <div className='stat-title'>Parry</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="evasiveness">
                        <div className='stat-title'>Evasiveness</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                </div>
                <div className='stats-col-container'>
                    <h2>PUNISHMENT</h2>
                    <div className='stat-line' id="i10_punish">
                        <div className='stat-title'>i10 Punish</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="i12_punish">
                        <div className='stat-title'>i12 Punish</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="i13_punish">
                        <div className='stat-title'>i13 Punish</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="i14_punish">
                        <div className='stat-title'>i14 Punish</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="ws-punishment">
                        <div className='stat-title'>WS Punishment</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="whiff-punishment">
                        <div className='stat-title'>Whiff Punishment</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                </div>
                <div className='stats-col-container'>
                    <h2>COMBOS</h2>
                    <div className='stat-line' id="combo-damage">
                        <div className='stat-title'>Combo Damage</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="wall-carry">
                        <div className='stat-title'>Wall Carry</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                </div>
                <div className='stats-col-container'>
                    <h2>RAGE</h2>
                    <div className='stat-line' id="rage-art">
                        <div className='stat-title'>Rage Art</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                    <div className='stat-line' id="rage-drive">
                        <div className='stat-title'>Rage Drive</div>
                        <div className='stat-bar'><div className='filler'></div></div>
                        <div className='stat-val'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvancedStats;
