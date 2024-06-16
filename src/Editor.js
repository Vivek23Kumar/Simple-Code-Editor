import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx } from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'; // Import the JSX language definition

const Editor = () => {
  // use state
  const [code, setCode] = useState(`import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`);

// it's handle all changes which we will write inside textarea
  const handleChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <textarea
          value={code}
          onChange={(e) => handleChange(e.target.value)}
          style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: 14,
            width: '100%',
            minHeight: 200,
            padding: 10,
            border: '1px solid #ddd',
          }}
        />
      </div>
      <div style={{ border: '1px solid #ddd', borderRadius: 4 }}>
        <SyntaxHighlighter language="jsx" style={atomDark} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Editor;
