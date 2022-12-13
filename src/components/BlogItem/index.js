// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, publishedDate, description} = blogDetails

  return (
    <li className="list">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
      <hr className="h-line" />
    </li>
  )
}

export default BlogItem
