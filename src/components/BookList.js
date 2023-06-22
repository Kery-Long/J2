import '../pages/../styles/home.css'
import { db } from '../firebase/config'
import {doc, deleteDoc} from'firebase/firestore'
import Card from 'react-bootstrap/Card'
import '../styles/bookList.css'


export default function BookList({books}) {
  
// const {documents: books } = useCollection(
//   'books',
//   ['uid', '==', user.uid], 'emoji' === book.emoji)


  const handleClick = async (id) => {
    const ref = doc(db, 'books', id)
    await deleteDoc(ref)
  }

  return (
    
    <div>
    
      
    <div className="book-list">



        {books.map(book => (
          <Card className = 'card'
          key={book.id} onClick={() => handleClick(book.id)}>
            <div className="card-body">
            <h2 className="card-title">{book.date} at {book.time}</h2>

            <h4 className="card-subtitle mb-2 text-muted">{book.title}</h4>
            <p className="card-text">{book.notes}</p>
            <img className='emoji'src={book.emoji}alt='emoji choice' />
            </div>
            </Card>
        ))}

    </div>
    </div>
    
  )
}