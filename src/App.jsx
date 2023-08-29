import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Books from './books'

function App() {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <Col>
            <Books />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
