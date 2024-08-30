import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'white', backgroundColor: '#333', padding: '50px' }}>
            <h1>Hello! Let's start learning!</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">
                Name:
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: '10px', padding: '2px', fontSize: '16px' }}
                        />
  </label>
        </div>
            <br />
              <div>
                <label htmlFor="email">
                    Email:
                      <input
                        id="email"
                          type="email"
                          value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ marginLeft: '10px', padding: '2px', fontSize: '16px' }}
                        />
                    </label>
                </div>
                <br />
                <button type="submit" style={{ padding: '8px 8px', fontSize: '16px' }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
