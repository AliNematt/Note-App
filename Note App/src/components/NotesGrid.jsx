import { NoteCard } from "./NoteCard"

export function NotesGrid({Notes, onDelete, onEdit}) {
    return Notes.length === 0 ? (
        <div className="empty-state" style={{ textAlign: 'center', marginTop: '50px', color: 'var(--text-color)', opacity: 0.5 }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <p>No notes yet. Add one above!</p>
        </div>
    ) : (
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
    );
}
