import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={isDarkMode ? 'dark' : ''}
      style={{
        backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff',
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
      <section style={{ marginBottom: '2rem' }}>
        <img
          src="/your-icon.png" // ← 後で差し替える
          alt="Profile icon"
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            marginBottom: '1rem',
          }}
        />
        <h1 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>Keiko Higuchi</h1>
        <p style={{ fontSize: '1.2rem', margin: 0 }}>Frontend Engineer</p>

        <p style={{ marginTop: '1.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
          Based in the US. Frontend Engineer with React / TypeScript. Writing on Zenn and Medium.
        </p>
      </section>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          margin: '2rem 0',
        }}
      >
        {[
          { label: 'GitHub', url: 'https://github.com/kkoisland' },
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/keiko-higuchi-b554449/' },
          { label: 'Discord', url: 'https://discord.com/channels/@me/921968908561420338' },
          { label: 'Twitter (JP)', url: 'https://twitter.com/kkoisland' },
          { label: 'Twitter (EN)', url: 'https://twitter.com/kkoislandUS' },
          { label: 'note', url: 'https://note.mu/kkoisland' },
          { label: 'Medium', url: 'https://medium.com/@kkoisland' },
          { label: 'Facebook', url: 'https://www.facebook.com/keiko.higuchi.509' },
          { label: 'Speaker Deck', url: '#' },
        ].map((item) => (
          <a
            key={item.label}
            href={item.url}
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '1rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'inherit',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            {item.label}
          </a>
        ))}
      </section>
      <section style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Interests</h3>
        <p style={{ fontSize: '1rem' }}>F1, NBA (Warriors), NFL (49ers)</p>
      </section>

      <footer
        style={{
          marginTop: '3rem',
          fontSize: '0.85rem',
          color: isDarkMode ? '#aaa' : '#5c4a32',
          textAlign: 'center',
          paddingBottom: '1rem',
        }}
      >
        © 2025 Keiko Higuchi
        <br />
        Also known as Keiko Higuchi-Nishiyama in Japan.
      </footer>
    </div>
  );
}

export default App;
