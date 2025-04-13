import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={isDarkMode ? 'dark' : ''}
      style={{
        backgroundColor: isDarkMode ? '#2c2c2c' : '#fff8f0',
        color: isDarkMode ? '#f4f4f4' : '#2c2c2c',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          outline: 'none',
        }}
        aria-label="Toggle theme"
      >
        {isDarkMode ? '🌙' : '☼'}
      </button>
      Hello, World!
    </div>
  );
}

export default App;
