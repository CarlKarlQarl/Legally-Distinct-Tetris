import React, { Component } from 'react'

export default class Leaderboard extends Component {

    state = {
        allScores: [],
        allPlayers: []
    }

    componentDidMount = () => {
        fetch("https://legally-distinct-tetris-node.herokuapp.com/users")
        .then(response => response.json())
        .then(allPlayers => {
            this.setState({
                allPlayers
            })
        })

        fetch("https://legally-distinct-tetris-node.herokuapp.com/scores")
        .then(response => response.json())
        .then(allScores => {
            this.setState({
                allScores
            })
        })
    }

    playerScorePairs = () => {
        let topTenScores = this.state.allScores.sort((a,b) => (a.points < b.points) ? 1 : -1).slice(0, 10)

        let playerAndScore = []
        topTenScores.map(score => {
            return this.state.allPlayers.forEach(player => {
                if (score.user_id === player.id){
                    playerAndScore.push({
                        username: player.username,
                        points: score.points
                    })
                }
            })
        })

        return playerAndScore.map((score, index) => {
            return (
                <div 
                    key={index}
                    className="player-and-score"
                >
                    <p>{score.username}</p>
                    <p>{score.points}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="leaderboard">
                <h1>Highscores</h1>
                {this.playerScorePairs()}
            </div>
        )
    }
}
