
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/home.css'




export default function Home() {

  const { user } = useAuthContext()
 const {documents: books } = useCollection(
  'books',
  ['uid', '==', user.uid])
  // console.log('books is', books) 
 

  return (
    <div className="App" id="home">
        <h1> What are your thoughts?</h1>
        <div className='main'>
       <BookForm className='book-form'/>
      {books && <BookList books={books} 
      className= "booklist"/>}
     </div>
    </div>
  );
}
