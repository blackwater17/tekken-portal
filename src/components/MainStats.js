import React from 'react';

const MainStats = () => {
    return (
        <div className='main-stats-container'>
            <h1>MAIN STATS</h1>
            <div className='main-stats'>
                <div className='main-stat-line'>
                    <div className='main-stat-title'>DAMAGE</div>
                    <div className='main-stat-boxes'>
                        {[...Array(10)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>
                </div>
                <div className='main-stat-line'>
                    <div className='main-stat-title'>NEUTRAL</div>
                    <div className='main-stat-boxes'>
                        {[...Array(10)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>
                </div>
                <div className='main-stat-line'>
                    <div className='main-stat-title'>MOVEMENT</div>
                    <div className='main-stat-boxes'>
                        {[...Array(10)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>
                </div>
                <div className='main-stat-line'>
                    <div className='main-stat-title'>PUNISHMENT</div>
                    <div className='main-stat-boxes'>
                        {[...Array(10)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>
                </div>
                <div className='main-stat-line'>
                    <div className='main-stat-title'>DIFFICULTY</div>
                    <div className='main-stat-boxes'>
                        {[...Array(10)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>
                </div>
                <div className='main-stat-line'>
                    <div className='main-stat-title'>RANGE</div>
                    <div className='main-stat-boxes'>
                        {[...Array(10)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainStats;
