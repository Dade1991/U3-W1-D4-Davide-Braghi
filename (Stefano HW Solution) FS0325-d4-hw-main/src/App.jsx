import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import SingleBook from './components/SingleBook'
import fantasyBooks from './data/fantasy.json'
import BookList from './components/BookList'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <SingleBook
          immagine={fantasyBooks[0].img}
          titolo={fantasyBooks[0].title}
        />

        <BookList books={fantasyBooks} />

        {/* <AllTheBooks /> */}
      </Container>
      <MyFooter />
    </>
  )
}

export default App
