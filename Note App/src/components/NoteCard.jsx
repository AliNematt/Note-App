import {formatNoteDate} from "./formatNoteDate"
import { useState } from "react"

export function NoteCard({id, title, text, date, backGround, onDelete, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedText, setEditedText] = useState(text);

    const handleEditClick = () => {
        setEditedTitle(title);
        setEditedText(text);
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(id, editedTitle, editedText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedTitle(title);
        setEditedText(text);
        setIsEditing(false);
    };

    return (
        <div className="note-card" id={id} style={{ backgroundColor: backGround}}>
            {isEditing ? (
                <>
                <input
                    type="text"
                    className="note-edit-title"
                    name="note-title"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    name="note-text"
                    className="note-edit-content"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    placeholder="Take a note..."
                    rows="4"
                />
                </>
            ) : (
                <>
                <h3 className="note-title">{title}</h3>
                <p className="note-content">{text}</p>
                </>
            )}
            <div className="note-footer">
                <span className="note-date">{formatNoteDate(date)}</span>
                <div className="note-tools">
                    {isEditing ? ( 
                        <>
                            <button className="tool-btn" title="Save" onClick={handleSave}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </button>
                            <button className="tool-btn" title="Cancel" onClick={handleCancel}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>      
                        </>
                    ) : (
                        <>
                            <button className="tool-btn" title="Edit" onClick={handleEditClick}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </button>  
                        </>
                    )}
                    <button className="tool-btn delete" title="Delete"  onClick={() => onDelete(id)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}