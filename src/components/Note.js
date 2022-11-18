import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;

//1.Use props to replace hardcode data in <Note />
//2.Use map to replace rewrite <Note />
