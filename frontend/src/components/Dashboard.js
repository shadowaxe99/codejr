```javascript
import React, { useState } from 'react';

const Dashboard = () => {
  const [projectName, setProjectName] = useState('');
  const [collaboratorEmail, setCollaboratorEmail] = useState('');

  const createProject = (event) => {
    event.preventDefault();
    // Logic to create a new project
  };

  const joinProject = (event) => {
    event.preventDefault();
    // Logic to join an existing project
  };

  const inviteCollaborator = (event) => {
    event.preventDefault();
    // Logic to invite a collaborator to the project
  };

  return (
    <div id="dashboard">
      <form onSubmit={createProject}>
        <input
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button type="submit">Create Project</button>
      </form>

      <form onSubmit={joinProject}>
        <input
          type="text"
          placeholder="Enter project ID"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button type="submit">Join Project</button>
      </form>

      <form onSubmit={inviteCollaborator}>
        <input
          type="email"
          placeholder="Enter collaborator's email"
          value={collaboratorEmail}
          onChange={(e) => setCollaboratorEmail(e.target.value)}
        />
        <button type="submit">Invite Collaborator</button>
      </form>
    </div>
  );
};

export default Dashboard;
```