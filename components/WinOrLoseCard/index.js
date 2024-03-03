// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props
  console.log(score)
  const playAgain = () => {
    onClickPlayAgain()
  }
  if (score === 12) {
    return (
      <div className="bg-container">
        <div className="nav-container">
          <div className="emoji-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="nav-img"
            />
            <h1 className="emoji-heading">Emoji Game</h1>
          </div>
        </div>
        <div className="won-result-card">
          <div className="result-details">
            <h1 className="heading">You Won</h1>
            <p className="para">Best Score</p>
            <p className="scores">{score}/12</p>
            <button type="button" className="play-btn" onClick={playAgain}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="won-img"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-container">
      <div className="nav-container">
        <div className="emoji-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="nav-img"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
      </div>
      <div className="lose-result-card">
        <div className="result-details">
          <h1 className="heading">You Lose</h1>
          <p className="para">Score</p>
          <p className="scores">{score}/12</p>
          <button type="button" className="play-btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="won-img"
        />
      </div>
    </div>
  )
}
export default WinOrLoseCard
