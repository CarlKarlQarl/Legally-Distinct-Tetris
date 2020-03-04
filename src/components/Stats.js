import React, { Component } from 'react'
import Leaderboard from "./Leaderboard"

export default class Stats extends Component {

    state = {
        signUsername: "",
        signPassword: "",
        loginUsername: "",
        loginPassword: "",
        isScoreDisabled: false,
        signVisible: "",
        logVisible: "",
        currentUser: "None",
        currentID: null
    }

    handleTyping = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    restartStats = () => {
        this.setState({
            isScoreDisabled: false
        })
        this.props.restartGame()
    }

    signUpSubmission = (event) => {
        event.preventDefault()
        let { signUsername, signPassword } = event.target
        fetch("http://localhost:9000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: signUsername.value,
                password: signPassword.value
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log("Created new user", user.id, user.username)
        })
        .catch(error => console.log(error))

    }
    
    logInSubmission = (event) => {
        event.preventDefault()
        let { loginUsername, loginPassword } = event.target
        // console.log(loginUsername.value)
        // console.log(loginPassword.value)
        fetch("http://localhost:9000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginUsername.value,
                password: loginPassword.value
            })
        })
        .then(response => response.json())
        .then(user => {
            localStorage.setItem("token", user.token)
            console.log("Logged in, and got token: ", user.token)
        })
        .then(this.verifyUser)
    }

    logUserOut = () => {
        if (localStorage.token){
            localStorage.removeItem("token")
            this.setState({
                currentUser: "None",
                currentID: null
            })
        }
    }

    verifyUser = () => {
        if (localStorage.token){
            fetch("http://localhost:9000/verify", {
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                }
            })
            .then(response => response.json())
            .then(decodedToken => {
                this.setState({
                    currentUser: decodedToken.username,
                    currentID: decodedToken.id
                })
            })
            .catch(error => console.log(error))
        }
    }

    postScore = () => {
        this.setState({
            isScoreDisabled: true
        })
        if (this.state.currentID) {
            fetch("http://localhost:9000/scores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    points: this.props.score,
                    user_id: this.state.currentID
                })
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
        }
    }

    moveSignOffScreen = () => {
        this.setState({
            signVisible: "",
            logVisible: ""
        })
    }

    moveLogOffScreen = () => {
        this.setState({
            signVisible: " transform-sign",
            logVisible: " transform-log"
        })
    }

    componentDidMount = () => {
        this.verifyUser()
    }

    render() {
        const { startGame, level, score, lines } = this.props

        return (
            <div className="stats">
                <div className="game-button-container">
                    <button
                        className="start-button"
                        onClick={startGame}
                    >Start Game</button>
                    <button
                        className="restart-button"
                        onClick={this.restartStats}
                    >Restart Game</button>
                </div>

                <div className="game-stats">
                    <p className="level-p">Level: {level}</p>
                    <p className="score-p">Score: {score}</p>
                    <p className="lines-p">Lines: {lines}</p>
                </div>
    
                <div className="logged-in-user-actions">
                    <p className="logged-in-message">Current player: {this.state.currentUser}</p>
                    <div className="logged-in-buttons">
                        {this.state.currentID !== null
                            ? <button
                                className="logout-button" 
                                onClick={this.logUserOut}
                                >Log-out</button>
                            : null
                        }
                        {this.state.currentID !== null
                            ? <button 
                                className="post-score-button"
                                disabled={this.state.isScoreDisabled}
                                onClick={this.postScore}
                                >Submit Score</button>
                            : null
                        }
                    </div>
                </div>

                <div className="user-section">
                    <p className="toggle-prompt">Click here to...</p>
                    <div className="toggle-container">
                        <button
                            className="toggle-buttons"
                            onClick={this.moveSignOffScreen}
                        >Sign-up</button>
                        <p>or</p>
                        <button
                            className="toggle-buttons"
                            onClick={this.moveLogOffScreen}
                        >Log-in</button>
                    </div>
                    <div className="form-container">
                        <form
                            className={"signup-form" + this.state.signVisible}
                            onSubmit={this.signUpSubmission}
                        >
                            <p>Sign-up</p>
                            <input 
                                type="text" 
                                name="signUsername" 
                                placeholder="Enter a username" 
                                value={this.state.signUsername}
                                onChange={this.handleTyping}
                            ></input>
                            <input 
                                type="text" 
                                name="signPassword" 
                                placeholder="Enter a password" 
                                value={this.state.signPassword}
                                onChange={this.handleTyping}
                            ></input>
                            <input type="submit" value="Sign-Up"></input>
                        </form>
            
                        <form
                            className={"login-form" + this.state.logVisible}
                            onSubmit={this.logInSubmission}
                        >
                            <p>Log-in</p>
                            <input 
                                type="text" 
                                name="loginUsername" 
                                placeholder="Enter your username" 
                                value={this.state.loginUsername}
                                onChange={this.handleTyping}
                            ></input>
                            <input 
                                type="text" 
                                name="loginPassword" 
                                placeholder="Enter your password" 
                                value={this.state.loginPassword}
                                onChange={this.handleTyping}
                            ></input>
                            <input type="submit" value="Log-In"></input>
                        </form>
                    </div>
                </div>
                <Leaderboard/>
            </div>
        )
    }
}
