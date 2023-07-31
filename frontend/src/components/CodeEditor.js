```javascript
import React, { useState } from 'react';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const editCode = () => {
    // Logic for editing code goes here
  };

  return (
    <div id="codeEditor">
      <textarea value={code} onChange={handleCodeChange} />
      <button onClick={editCode}>Edit Code</button>
    </div>
  );
};

export default CodeEditor;
```