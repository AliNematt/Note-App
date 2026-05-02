import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { NoteCreate } from './components/NoteCreate'
import { NotesGrid } from './components/NotesGrid'

function App() {
  const [notes, setNote] = useState(() => {
    const stored = localStorage.getItem("notes")
    return stored ? JSON.parse(stored) : []
  })

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function addNote(newNote) {
    setNote(prev => [...prev, newNote])
  }

  function removeNote(id) {
    setNote(prev => prev.filter(n => n.id !== id))
  }

  function editNote(id, title, text) {
    setNote(prev => prev.map(
      t => t.id === id 
      ? { ...t, title: title ,text:  text}
      : t
    ))
  }

  const filteredNotes = notes.filter(note => {
    const lowerSearch = searchText.toLowerCase();
    return (
      note.title.toLowerCase().includes(lowerSearch) || 
      note.text.toLowerCase().includes(lowerSearch)
    );
  })

  return (
    <>
      <Header onSearch={setSearchText} />
      <main>
        <NoteCreate onAddNote={addNote}/>
        <NotesGrid Notes={filteredNotes} onDelete={removeNote} onEdit={editNote}/>
      </main>
    </>
  )
}

export default App
