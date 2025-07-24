import { Component } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
const apiLink = "https://striveschool-api.herokuapp.com/api/comments/"
const authorizationLink = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIzMjc4Y2RkZjAwMTU1ZDY3OWYiLCJpYXQiOjE3NTIyMTg0MTgsImV4cCI6MTc1MzQyODAxOH0.lkfAgPfvfUDCpsrHOcn2YILZ-vu_ug21gI7fwA-pGcE`

const initialReviewForm = {
  reviewComment: "",
  reviewRate: 0,
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
      header: {
        authorization: authorizationLink,
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
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>Leave a review:</Form.Label>
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
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default AddComment
