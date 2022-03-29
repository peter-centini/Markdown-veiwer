import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(
    "# `Prévisualisateur - Peter`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Peter-Centini](https://github.com/peter-centini/Markdown-viewer)"
  );

  const changeTextHandler = (event) => {
    setText(event.target.value);
    console.log(marked(text));
  };
  const markdownToHTML = () => {
    return { __html: marked(text) };
  };

  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea
            rows="30"
            value={text}
            onChange={(e) => changeTextHandler(e)}
          ></textarea>
        </div>

        <div className="element">
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
