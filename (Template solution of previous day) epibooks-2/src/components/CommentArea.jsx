import { Component } from "react"
import { ListGroup } from "react-bootstrap"
import AddComment from "./AddComment"
// import CommentList from "./CommentList"
const apiLink = "https://striveschool-api.herokuapp.com/api/comments/"
const authorizationLink = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIzMjc4Y2RkZjAwMTU1ZDY3OWYiLCJpYXQiOjE3NTIyMTg0MTgsImV4cCI6MTc1MzQyODAxOH0.lkfAgPfvfUDCpsrHOcn2YILZ-vu_ug21gI7fwA-pGcE`

class CommentArea extends Component {
  state = {
    reviews: [],
  }

  componentDidMount() {
    fetch(apiLink + this.props.bookId, {
      headers: {
        authorization: authorizationLink,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Error has occured while retrieving reviews infos")
        }
      })
      .then((arrayOfBookReviews) => {
        this.setState({
          reviews: arrayOfBookReviews,
        })
      })
      .catch((err) => {
        console.log("Error!", err)
      })
  }

  render() {
    return (
      <>
        <ListGroup>
          {this.state.reviews.map((review) => (
            <ListGroup.Item key={review._id}> {review.comment}</ListGroup.Item>
          ))}
        </ListGroup>
        <AddComment />
        {/* <CommentList /> */}
      </>
    )
  }
}

export default CommentArea
