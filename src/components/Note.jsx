import React from "react";
import Notes from '../Notes'

function Note(){

    var newNotes = function (NotesContent){
        return <Notes 
        key = {NotesContent.key}
        title = {NotesContent.title}
        content = {NotesContent.content} />
    }

    return (
        <>
        {Notes.map((newNotes)=>{
            return (
        <div className="note" key={newNotes.key}>
            <h1>{newNotes.title}</h1>
            <p>{newNotes.content}</p>
        </div>)
        })}
        </>
    );
}

export default Note;