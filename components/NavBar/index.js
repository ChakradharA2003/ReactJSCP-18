// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, bestScore} = props
  return (
    <div className="nav-container">
      <div className="emoji-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-img"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {bestScore}</p>
      </div>
    </div>
  )
}

export default NavBar
