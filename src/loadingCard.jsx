import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const loadingCard = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Book Title</Card.Title>
              <Card.Text>Book Description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default loadingCard
