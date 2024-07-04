// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickTabItem = () => {
    setActiveThumbnail(id)
  }

  return (
    <li className="thumbnail-list-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickTabItem}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
