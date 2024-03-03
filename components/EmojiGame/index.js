/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    bestScore: 0,
    displayEmojis: true,
  }

  finishGameAndDisplayView = score => <WinOrLoseCard score={score} />

  onClickedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis, score, bestScore} = this.state
    const checkEmoji = clickedEmojis.includes(id)
    if (checkEmoji) {
      this.finishGameAndDisplayView(score)
      if (clickedEmojis.length < emojisList.length) {
        this.setState({
          score: 0,
        })
        if (clickedEmojis.length > bestScore) {
          this.setState({
            bestScore: clickedEmojis.length,
          })
        }
      }
      this.setState({
        clickedEmojis: [],
      })
    } else {
      if (score < emojisList.length) {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {score, bestScore} = this.state
    const emojisList = shuffledEmojisList()
    return (
      <>
        <NavBar score={score} bestScore={bestScore} />
        <div className="bg-container">
          <ul className="emojis-list">
            {emojisList.map(emoji => (
              <EmojiCard
                key={emoji.id}
                id={emoji.id}
                emojiName={emoji.emojiName}
                emojiUrl={emoji.emojiUrl}
                onClickedEmoji={this.onClickedEmoji}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default EmojiGame
