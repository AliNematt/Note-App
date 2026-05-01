import { useState } from 'react'
import { Header } from './components/Header'
import { NoteCreate } from './components/NoteCreate'
import { NotesGrid } from './components/NotesGrid'

function App() {
  const [notes, setNote] = useState([])

  function addNote(newNote) {
    setNote(prev => [...prev, newNote])
  }
  return (
    <>
      <Header />
      <main>
        <NoteCreate onAddNote={addNote}/>
        <NotesGrid Notes={notes}/>
      </main>
    </>
  )
}

export default App
