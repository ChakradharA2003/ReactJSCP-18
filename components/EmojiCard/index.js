// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {id, emojiName, emojiUrl, onClickedEmoji} = props
  const emojiClicked = () => {
    onClickedEmoji(id)
  }
  return (
    <li className="list">
      <button type="button" className="emoji-btn" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
