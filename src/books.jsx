import { useState, useEffect } from 'react'
import axios from 'axios'
import Searchform from './searchForm'
import Book from './book'
import LoadingCard from './loadingCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const BookDetails = () => {
  const [details, setDetails] = useState([])
  const [term, setTerm] = useState('linus torvalds')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true)

      const resources = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=8`
      )

      setDetails(resources.data.items)
      setIsLoading(false)
    }

    fetchDetails()
  }, [term])

  const loadMore = async () => {
    const resources = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=4&startIndex=${details.length}`
    )

    setDetails(oldDetails => [...oldDetails, ...resources.data.items])
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1 className="text-capitalize">find a book</h1>
        </Col>
      </Row>

      <Searchform searchText={text => setTerm(text)}></Searchform>

      {isLoading ? (
        <LoadingCard />
      ) : !details ? (
        <Row className="justify-content-center mt-3">
          <Col className="text-center">
            <h1>Could not find books {term}</h1>
          </Col>
        </Row>
      ) : (
        <>
          <Row className="justify-content-center mt-3">
            {details.map((book, index) => (
              <Col xs={12} md={6} xl={3} key={index} className="mb-3">
                <Book {...book} key={index} />
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center mb-5">
            <Col sm={12} md={6} className="text-center">
              <Button variant="outline-dark" onClick={() => loadMore()}>
                Load More
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default BookDetails
