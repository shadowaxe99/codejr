```javascript
import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signin', { email, password });
            if (response.status === 200) {
                // Redirect to dashboard or handle successful sign in
            }
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form id="signInForm" onSubmit={handleSignIn}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                {error && <p>{error}</p>}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
```