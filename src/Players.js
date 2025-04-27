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

    //Buttons to sort the players
    function CostButtons() {
        return (
            <div id='sort-cost-btns'>
                <button className='sort-btns' onClick={() => sortHighLow(5, players)}>^</button>
                <button className='sort-btns' onClick={() => sortLowHigh(5, players)}>v</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Sort Cost</h2>
            <CostButtons />
            <h1>Players</h1>
            <ul>{players.map((player) => (
                <li key={player[0]}>
                    <img src={player[1]} key={`pic_${player[1]}`} alt={player[3]} width='100px' height='75px' />
                    <ul>
                        <li key={`id=${player[0]}`}><strong>{player[3]}</strong> {player[2]}</li>
                        <li key={`cost_${player[0]}`}>Cost: {player[4]}</li>
                        <li key={`avg_${player[0]}`}>Avg.: {player[5]} pts.</li>
                        <li key={`opprtg_${player[0]}`}>Opp. Rtg.: {player[6]}</li>
                    </ul>
                </li>
            ))}</ul>
        </div>
    );
}