import { useState } from 'react'
import { Header } from './components/Header'
import { NoteCreate } from './components/NoteCreate'
import { NotesGrid } from './components/NotesGrid'

function App() {

  return (
    <>
      <Header />
      <main>
        <NoteCreate/>
        <NotesGrid/>
      </main>
    </>
  )
}

export default App
