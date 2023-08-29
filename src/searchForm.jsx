import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { BsSearch } from 'react-icons/bs'

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (text === '' || !text.trim()) return

    searchText(text)
  }

  const onChangeValue = e => {
    e.preventDefault()

    setText(e.target.value)

    if (e.target.value === '') setText(text)
  }

  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center align-items-center">
              <Col sm={12} md={8} className="my-1">
                <Form.Label
                  htmlFor="inlineFormInputGroupBookName"
                  visuallyHidden
                >
                  BookName
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <BsSearch />
                  </InputGroup.Text>
                  <Form.Control
                    id="inlineFormInputGroupBookName"
                    placeholder="Search book name"
                    onChange={onChangeValue}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default SearchForm
