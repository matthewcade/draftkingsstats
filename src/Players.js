import React, { useState } from 'react';

const database = [
    [1, 
        'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png', 
        'Patrick Mahomes', 
        'QB', 
        7000, 
        21.4, 
        63
    ], 
    [2, 
        'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png', 
        'Josh Allen', 
        'QB', 
        7400, 
        23.9, 
        60
    ], 
    [3, 
        'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png', 
        'Joe Burrow', 
        'QB', 
        7200, 
        23.2, 
        77
    ],
    [4,
        'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3916387.png',
        'Lamar Jackson',
        'QB',
        7000,
        23.9,
        69
    ]
];

let currentSort = [];

//Create player profiles
export function PlayerComponent() {
    const [players, setPlayers] = useState(database);

    //Sorts players from high to low
    function sortHighLow(item, arr) {        
        setPlayers(() => {   
            let sortPlayers = [...arr];
            sortPlayers.sort((a, b) => b[item] - a[item]);

            if ((currentSort.length == 0) || (currentSort == database) || (currentSort !== database && JSON.stringify(sortPlayers) !== JSON.stringify(currentSort))) {
                currentSort = sortPlayers;
                return sortPlayers;
            } else {
                currentSort = database;
                return database;
            }
        });
    }

    //Sorts players from low to high
    function sortLowHigh(item, arr) {        
        setPlayers(() => {   
            let sortPlayers = [...arr];
            sortPlayers.sort((a, b) => a[item] - b[item]);

            if ((currentSort.length == 0) || (currentSort == database) || (currentSort !== database && JSON.stringify(sortPlayers) !== JSON.stringify(currentSort))) {
                currentSort = sortPlayers;
                return sortPlayers;
            } else {
                currentSort = database;
                return database;
            }
        });
    }

    function sortAZ(item, arr) {
        setPlayers(() => {
            let sortPlayers = [...arr];
            sortPlayers.sort((a, b) => (a[item] < b[item] ? -1 : a[item] > b[item] ? 1 : 0));

            if ((currentSort.length == 0) || (currentSort == database) || (currentSort !== database && JSON.stringify(sortPlayers) !== JSON.stringify(currentSort))) {
                currentSort = sortPlayers;
                return sortPlayers;
            } else {
                currentSort = database;
                return database;
            }
        })
    }

    function sortZA(item, arr) {
        setPlayers(() => {
            let sortPlayers = [...arr];
            sortPlayers.sort((a, b) => (a[item] === b[item] ? 0 : a[item] < b[item] ? 1 : -1));

            if ((currentSort.length == 0) || (currentSort == database) || (currentSort !== database && JSON.stringify(sortPlayers) !== JSON.stringify(currentSort))) {
                currentSort = sortPlayers;
                return sortPlayers;
            } else {
                currentSort = database;
                return database;
            }
        })
    }

    //Buttons to sort the players by position
    function PositionButtons() {
        return (
            <div className='sorting'>
                <h2>Position</h2>
                <div>
                    <button className='sort-btns' onClick={() => sortAZ(3, players)}>^</button>
                    <button className='sort-btns' onClick={() => sortZA(3, players)}>v</button>
                </div>
            </div>
        )
    }

    //Buttons to sort the players by name
    function NameButtons() {
        return (
            <div className='sorting'>
                <h2>Name</h2>
                <div>
                    <button className='sort-btns' onClick={() => sortAZ(2, players)}>^</button>
                    <button className='sort-btns' onClick={() => sortZA(2, players)}>v</button>
                </div>
            </div>
        )
    }

    //Buttons to sort the players by cost
    function CostButtons() {
        return (
            <div className='sorting'>
                <h2>Cost</h2>
                <div>
                    <button className='sort-btns' onClick={() => sortHighLow(4, players)}>^</button>
                    <button className='sort-btns' onClick={() => sortLowHigh(4, players)}>v</button>
                </div>
            </div>
        )
    }

    //Buttons to sort the players by average points
    function AvgButtons() {
        return (
            <div className='sorting'>
                <h2>Avg Pts</h2>
                <div>
                    <button className='sort-btns' onClick={() => sortHighLow(5, players)}>^</button>
                    <button className='sort-btns' onClick={() => sortLowHigh(5, players)}>v</button>
                </div>
            </div>
        )
    }

    //Buttons to sort the players by opponent rating
    function OppButtons() {
        return (
            <div className='sorting'>
                <h2>Opp Rtg</h2>
                <div>
                    <button className='sort-btns' onClick={() => sortHighLow(6, players)}>^</button>
                    <button className='sort-btns' onClick={() => sortLowHigh(6, players)}>v</button>
                </div>
            </div>
        )
    }

    function PlayerCards() {
        return (
            <div id='player-wrapper'>
                <h1>Players</h1>
                <ul id='players'>{players.map((player) => (
                    <li className='player-card' key={player[0]}>
                        <img src={player[1]} key={`pic_${player[1]}`} alt={player[3]}  width='100px' height='75px' />
                        <ul>
                            <li key={`id=${player[0]}`}><strong>{player[3]}</strong> {player[2]}</li>
                            <li key={`cost_${player[0]}`}>Cost: {player[4]}</li>
                            <li key={`avg_${player[0]}`}>Avg.: {player[5]} pts.</li>
                            <li key={`opprtg_${player[0]}`}>Opp. Rtg.: {player[6]}</li>
                        </ul>
                    </li>
                ))}</ul>
            </div>
        )
    }

    function Lineup() {
        return (
            <div id='lineup'>
                <ul>
                    <li id='qb'>
                        <li><strong>QB</strong></li>
                    </li>
                    <li id='rb1'>
                        <li><strong>RB</strong></li>
                    </li>
                    <li id='rb2'>
                        <li><strong>RB</strong></li>
                    </li>
                    <li id='wr1'>
                        <li><strong>WR</strong></li>
                    </li>
                    <li id='wr2'>
                        <li><strong>WR</strong></li>
                    </li>
                    <li id='te'>
                        <li><strong>TE</strong></li>
                    </li>
                    <li id='flex'>
                        <li><strong>FLEX</strong></li>
                    </li>
                    <li id='defense'>
                        <li><strong>DEF</strong></li>
                    </li>
                    <li id='projection'>
                        <li><strong>Projected Score: </strong></li>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div id='wrapper'>
            <div id='sorting'>
                <PositionButtons />
                <NameButtons />
                <CostButtons />
                <AvgButtons />
                <OppButtons />
            </div>
            <div id='main'>
                <PlayerCards />
                <Lineup />
            </div>
        </div>
    );
}