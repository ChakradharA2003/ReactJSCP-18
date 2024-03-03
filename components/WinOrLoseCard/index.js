// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score} = props
  if (score === 12) {
    return (
      <div className="won-result-card">
        <div className="result-details">
          <h1 className="heading">You Won</h1>
          <p className="para">Best Score</p>
          <p className="scores">{score}/12</p>
          <button type="button" className="play-btn">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="won-img"
        />
      </div>
    )
  }
  return (
    <div className="lose-result-card">
      <div className="result-details">
        <h1 className="heading">You Lose</h1>
        <p className="para">Score</p>
        <p className="scores">{score}/12</p>
        <button type="button" className="play-btn">
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="won-img"
      />
    </div>
  )
}
export default WinOrLoseCard
