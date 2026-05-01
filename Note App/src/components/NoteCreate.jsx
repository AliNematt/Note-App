import { useState } from "react";

export function NoteCreate({onAddNote}) {
    const [note, setNote] = useState({ title: "", text: "" });

    const handleKeyDown = (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();

                if (!note.title.trim() && !note.text.trim()) return;

                const newNote = {
                    ...note,
                    id: Date.now(),
                    submitDate: new Date()
                };

                onAddNote(newNote);

                setNote({ title: "", text: "" });
            }
        };

    return(
        <section className="create-note-container">
            <div className="create-note-box">            
                <div className="collapsible-section">
                    <input type="text" className="note-title-input" placeholder="Title"
                        value={note.title}
                        onChange={(e) => setNote(prev => ({ ...prev, title: e.target.value }))} 
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className="input-wrapper">
                    <textarea className="note-body-input" placeholder="Take a note..." rows="1" 
                        value={note.text} 
                        onChange={(e) => setNote(prev => ({ ...prev, text: e.target.value }))}
                        onKeyDown={handleKeyDown}
                        ></textarea>
                    <div className="idle-icons">
                        <button className="icon-btn" title="New list"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                    </div>
                </div>

                <div className="collapsible-section">
                    <div className="note-toolbar">
                        <div className="toolbar-tools">
                            <button className="icon-btn" title="Add Image"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></button>
                            <button className="icon-btn" title="Background Color"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></button>
                        </div>
                        <button className="btn-close">Close</button>
                    </div>
                </div>

            </div>
        </section>
    )
}