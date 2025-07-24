// CommentsList è un componente che riceve l'array delle recensioni
// dal papà CommentArea e le deve far vedere in una ListGroup di bootstrap

import { ListGroup } from 'react-bootstrap'

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.recensioni.map((r) => {
        return (
          <ListGroup.Item key={r._id}>
            {r.comment} - {r.rate}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default CommentsList
