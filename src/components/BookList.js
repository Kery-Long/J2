import '../pages/../styles/home.css'
import { db } from '../firebase/config'
import {doc, deleteDoc} from'firebase/firestore'
import Card from 'react-bootstrap/Card'
import '../styles/bookList.css'
import happy from '../images/smile.jpg'
import sad from '../images/sad.jpg'
import sick from '../images/sick.jpg'
import mad from '../images/angry.jpg'

export default function BookList({ books }) {


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
            <h2 class="card-title">{book.date} at {book.time}</h2>
            
            <h4 class="card-subtitle mb-2 text-muted">{book.title}</h4>
            <p class="card-text">{book.notes}</p>
            <pimg className='emoji'src={book.emoji} />
            </div>
            </Card>
        ))}
      
    </div>
    </div>
    
  )
}