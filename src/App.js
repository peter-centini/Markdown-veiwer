import React, { useState } from 'react';
import { marked } from 'marked'
import './App.css';

function App() {
  const [text, setText] = useState('')
  
  const changeTextHandler = event => {
    setText(event.target.value)
    console.log(marked(text))
  };
  const markdownToHTML = () => {
    return {__html: marked(text)}
  }

  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea
            rows="30"
            value={text}
            onChange={(e)=>changeTextHandler(e)}>
          </textarea>
        </div>

        <div className="element">
           <div  dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>
      </div>


    </div>
  );
}

export default App;
