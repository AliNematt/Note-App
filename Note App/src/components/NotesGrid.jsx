import { NoteCard } from "./NoteCard"

export function NotesGrid({Notes, onDelete, onEdit}) {
    return (
        <section className="notes-grid">     
            {Notes.map(item => (
                    <NoteCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      date={item.submitDate}
                      backGround={item.backGround} 
                      onDelete={onDelete}
                      onEdit={onEdit}
                    />
                  ))}
        </section>
    )
}