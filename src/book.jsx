import defaultBook from './img/defaultBook.png'
import Card from 'react-bootstrap/Card'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const Book = ({ id, volumeInfo }) => {
  let { title, authors, averageRating, imageLinks } = volumeInfo

  title = title || 'Title is not available'
  authors = authors || 'Author(s) name not available'
  averageRating = averageRating || 0

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imageLinks ? imageLinks.thumbnail : defaultBook}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
          <div>
            <Rater total={5} rating={averageRating} interactive={false}/>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Book
