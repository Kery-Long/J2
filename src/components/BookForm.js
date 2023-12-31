import { useState } from 'react'
import {db} from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

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
  let emojis = [
  { id: 1, name: 'happy', image: '../images/smile.jpg'},
  { id: 2, name: 'sad', image: '../images/sad.jpg' },
  { id: 3, name: 'sick', image: '../images//sick.jpg' },
  { id: 4, name: 'mad', image: 'gs://book-list-8c209.appspot.com/angry.jpg' },
];

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
  

 {emojis.map((currEmoji, index) => (      
    <label key={`emo-${index}`}>
      <input
             type='radio'
          className='emoti'
          key={currEmoji.id}
          name={currEmoji.name}
          src={currEmoji.image}
          unchecked="true"
          onChange={(e) => setNewMoodEmoji(currEmoji.image)}
        />
        <img src={happy} alt='emoji choice' />
        <img src={sad} alt='emoji choice' />
        <img src={sick} alt='emoji choice' />
        <img src={mad} alt='emoji choice' />
      </label>
    ))}
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
