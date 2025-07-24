import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

const endpoint = 'https://striveschool-api.herokuapp.com/api/comments/'

class CommentArea extends Component {
  state = {
    recensioni: [],
  }

  getReviews = () => {
    // recupero le recensioni per il libro in cui sono montato!
    fetch(endpoint + this.props.id, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NTMzNzE0MTUsImV4cCI6MTc1NDU4MTAxNX0.fkQ1PcPENQMPrxVxiqkPF4xESggW4YNG0MdezLzZVls',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nel recupero recensioni')
        }
      })
      .then((arrayOfRecensioni) => {
        console.log(arrayOfRecensioni)
        this.setState({
          recensioni: arrayOfRecensioni,
        })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  componentDidMount() {
    this.getReviews()
  }

  render() {
    return (
      <>
        <h3>RECENSIONI</h3>
        <CommentsList recensioni={this.state.recensioni} />
        <AddComment id={this.props.id} />
      </>
    )
  }
}

export default CommentArea
