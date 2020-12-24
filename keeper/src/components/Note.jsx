import React from "react";


//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/


function Note(props) {
  return (
      <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
      </div>
  );
}

export default Note;
