```javascript
import React, { useState } from 'react';

const Documentation = () => {
    const [document, setDocument] = useState('');

    const createDocument = (e) => {
        e.preventDefault();
        // Logic to create a new document
    }

    const manageDocument = (e) => {
        e.preventDefault();
        // Logic to manage existing document
    }

    return (
        <div id="documentation">
            <form onSubmit={createDocument}>
                <label>
                    Create Document:
                    <input type="text" value={document} onChange={e => setDocument(e.target.value)} />
                </label>
                <input type="submit" value="Create" />
            </form>
            <form onSubmit={manageDocument}>
                <label>
                    Manage Document:
                    <input type="text" value={document} onChange={e => setDocument(e.target.value)} />
                </label>
                <input type="submit" value="Manage" />
            </form>
        </div>
    );
}

export default Documentation;
```