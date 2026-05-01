import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { NoteCreate } from './components/NoteCreate'
import { NotesGrid } from './components/NotesGrid'

function App() {
  const [notes, setNote] = useState(() => {
    const stored = localStorage.getItem("notes")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function addNote(newNote) {
    setNote(prev => [...prev, newNote])
  }

  function removeNote(id) {
    setNote(prev => prev.filter(n => n.id !== id))
  }

  return (
    <>
      <Header />
      <main>
        <NoteCreate onAddNote={addNote}/>
        <NotesGrid Notes={notes} onDelete={removeNote}/>
      </main>
    </>
  )
}

export default App
