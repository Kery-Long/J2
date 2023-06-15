import { useState } from 'react'
import {db} from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import  '../images/smile.jpg';
import happy from '../images/smile.jpg'
import sad from '../images/sad.jpg'
import sick from '../images/sick.jpg'
import mad from '../images/angry.jpg'


import { useAuthContext
 } from '../hooks/useAuthContext';

import'../styles/bookform.css'

export default function BookForm() {

  const [newBook, setNewBook] = useState('')
  const [newDate,setNewDate] = useState('')
  const [newTime, setNewTime] = useState('')
  const [newMoodEmoji, setNewMoodEmoji] = useState();


      
    
  const [newNotes, setNewNotes] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const ref = 
    await addDoc(collection(db, 'books'),{
      title: newBook,
      uid: user.uid,
      date: newDate,
      time: newTime,
      notes: newNotes,
      emoji: newMoodEmoji
    })

    setNewBook('')
    setNewDate('')
    setNewTime('')
    setNewNotes('')
    setNewMoodEmoji()
  }

  return (
    <form onSubmit={handleSubmit}>
      
        <label>
       
        <input 
          required
          type="date"
          onChange={(e) => setNewDate(e.target.value)}
          value={newDate}
          
        />
      </label>
      <label>Time:
      
      <input
      type='text' 
      required
      onChange={(e) => setNewTime(e.target.value)}
          value={newTime}/>
</label>
      
  

      

      <label>Mood
             
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
        <div className='emojis'>
        <label><input type="radio" name="test" value={happy} classNme='emoti' src = '.../images/smile.jpg'unchecked onChange={(e) => setNewMoodEmoji (e.target.src)}/>
  <img src ={happy} alt="Option 1" />
  </label>
        <label><input type="radio" name="test" value={sad} classNme='emoti' src = '../images/sad.jpg'unchecked onChange={(e) => setNewMoodEmoji (e.target.src)}/>
  <img src={sad} alt="Option 1" />
  </label>
        <label><input type="radio" name="test" value={sick} classNme='emoti' src = '../images/sick.jpg'unchecked onChange={(e) => setNewMoodEmoji (e.target.src)}/>
  <img src={sick} alt="Option 1" />
  </label>
        <label><input type="radio" name="test" value={mad}classNme='emoti' src = '../images/angry.jpg' unchecked onChange={(e) => setNewMoodEmoji (e.target.src)}/>
  <img src={mad} alt="Option 1" />
  </label>
</div>
        
      </label>
      <label>Notes:
        <textarea
        onChange={(e) => setNewNotes(e.target.value)}></textarea>
      </label>
      <button>Add</button>
    </form>
  )
}
