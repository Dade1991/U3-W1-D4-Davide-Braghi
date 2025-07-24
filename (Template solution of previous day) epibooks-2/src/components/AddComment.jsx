import { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
const apiLink = "https://striveschool-api.herokuapp.com/api/comments/"
const authorizationLink = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIzMjc4Y2RkZjAwMTU1ZDY3OWYiLCJpYXQiOjE3NTIyMTg0MTgsImV4cCI6MTc1MzQyODAxOH0.lkfAgPfvfUDCpsrHOcn2YILZ-vu_ug21gI7fwA-pGcE`

const initialReviewForm = {
  reviewComment: "",
  reviewRate: "1",
}

class AddComment extends Component {
  state = {
    reviewForm: initialReviewForm,
  }

  submitReview = (e) => {
    e.preventDefault()
    fetch(apiLink + this.props.bookId, {
      method: "POST",
      body: JSON.stringify(this.state.reviewForm),
      headers: {
        authorization: authorizationLink,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Review saved!")
          this.setState({
            reviewForm: initialReviewForm,
          })
        } else {
          throw new Error("Error has occured during submit of the review")
        }
      })
      .catch((err) => {
        console.log("Error!", err)
        alert("Error, review not saved")
      })
  }

  render() {
    return (
      <>
        <Container className="mt-3 border-1 bg-danger text-light p-3 rounded-3">
          <Row>
            <Col>
              <h2>Rate our books here:</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={this.submitReview}>
                <Form.Group>
                  <Form.Label className="fst-italic">
                    Leave a review:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type here..."
                    value={this.state.reviewForm.reviewComment}
                    onChange={(e) => {
                      this.setState({
                        reviewForm: {
                          ...this.state.reviewForm,
                          reviewComment: e.target.value,
                        },
                      })
                    }}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label className="fst-italic">
                    Rate the book from 1 to 5
                  </Form.Label>
                  <Form.Select
                    aria-label="book rating"
                    value={this.state.reviewForm.reviewRate}
                    onChange={(e) => {
                      this.setState({
                        reviewForm: {
                          ...this.state.reviewForm,
                          reviewRate: e.target.value,
                        },
                      })
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" className="mt-3">
                  Submit your review!
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default AddComment
