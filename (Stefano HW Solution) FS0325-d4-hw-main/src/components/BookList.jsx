import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  state = {
    search: '',
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                })
              }}
            />
          </Col>
        </Row>
        <Row>
          {this.props.books
            // .filter((b) => {
            //   if (b.title.includes(this.state.search)) {
            //     return true
            //   } else {
            //     return false
            //   }
            // })
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((libro) => {
              return (
                <Col key={libro.asin} xs={12} md={6} lg={4}>
                  <SingleBook
                    immagine={libro.img}
                    titolo={libro.title}
                    asin={libro.asin}
                  />
                </Col>
              )
            })}
        </Row>
      </Container>
    )
  }
}

export default BookList
