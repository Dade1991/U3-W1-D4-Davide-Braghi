import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

const endpoint = 'https://striveschool-api.herokuapp.com/api/comments/'

class AddComment extends Component {
  state = {
    comment: '', // collegato al form
    rate: '1', // collegato al form
    elementId: this.props.id, // fisso
  }

  submitReview = (e) => {
    e.preventDefault()
    // invio la recensione al server
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NTMzNzE0MTUsImV4cCI6MTc1NDU4MTAxNX0.fkQ1PcPENQMPrxVxiqkPF4xESggW4YNG0MdezLzZVls',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        if (response.ok) {
          alert('RECENSIONE SALVATA')
        } else {
          throw new Error('errore nel salvataggio recensione')
        }
      })
      .catch((err) => {
        console.log('errore', err)
        alert('RECENSIONE -NON- SALVATA')
      })
  }

  render() {
    return (
      <>
        <h4>Ti è piaciuto?</h4>
        <Form onSubmit={this.submitReview}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="testo"
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            />
            <Form.Select
              value={this.state.rate}
              onChange={(e) => this.setState({ rate: e.target.value })}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Button variant="success" type="submit">
              SALVA
            </Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default AddComment
