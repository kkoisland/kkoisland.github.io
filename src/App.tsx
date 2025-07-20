import { useState, useEffect } from 'react';
import {
  FaGithub,
  // FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaMedium,
  FaDiscord,
  FaInstagram,
} from 'react-icons/fa';

import zennIconLight from './assets/zenn-icon.svg';
import zennIconDark from './assets/zenn-icon-white.svg';
import noteIconLight from './assets/note-icon.svg';
import noteIconDark from './assets/note-icon-white.svg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const zennIcon = isDarkMode ? zennIconDark : zennIconLight;
  const noteIcon = isDarkMode ? noteIconDark : noteIconLight;

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className={isDarkMode ? 'dark' : ''}
      style={{
        backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff',
        color: isDarkMode ? '#f4f4f4' : '#2c2c2c',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.05rem',
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
      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <img
            src="/profile-icon.png"
            alt="Profile icon"
            style={{
              width: 120,
              height: 120,
              borderRadius: '30%',
              objectFit: 'contain',
              backgroundColor: '#fff',
            }}
          />
          <h1 style={{ fontSize: '2rem', margin: 0 }}>Keiko Higuchi</h1>
        </div>

        <p style={{ fontSize: '1.2rem' }}>Frontend Engineer</p>

        <p style={{ marginTop: '1rem', lineHeight: 1.6 }}>
          Based in the US. Frontend Engineer with React / TypeScript. (5 yrs)
          <br />
          Social accounts are mainly for contact.
        </p>
      </section>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginTop: '3rem',
        }}
      >
        {[
          { label: 'GitHub', icon: <FaGithub />, url: 'https://github.com/kkoisland' },
          // Temporarily removed for updates
          // {
          //   label: 'LinkedIn',
          //   icon: <FaLinkedin />,
          //   url: 'https://www.linkedin.com/in/keiko-higuchi-b554449/',
          // },
          {
            label: 'Zenn (JP)',
            icon: (
              <img
                src={zennIcon}
                alt="Zenn icon"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  objectFit: 'contain',
                  position: 'relative',
                  top: '-0.5rem',
                }}
              />
            ),
            url: 'https://zenn.dev/kkoisland',
          },
          { label: 'Medium (EN)', icon: <FaMedium />, url: 'https://medium.com/@kkoisland' },
          {
            label: 'note (JP)',
            icon: (
              <img
                src={noteIcon}
                alt="Note icon"
                style={{
                  width: '4rem',
                  height: '4rem',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  objectFit: 'contain',
                  position: 'relative',
                  top: '-0.5rem',
                  marginRight: '-1rem',
                }}
              />
            ),
            url: 'https://note.mu/kkoisland',
          },
          { label: 'Twitter (JP)', icon: <FaTwitter />, url: 'https://twitter.com/kkoisland' },
          { label: 'Twitter (EN)', icon: <FaTwitter />, url: 'https://twitter.com/kkoislandUS' },
          {
            label: 'Discord',
            icon: <FaDiscord />,
            url: 'https://discord.com/channels/@me/921968908561420338',
          },
          {
            label: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/kkoisland17/',
          },

          {
            label: 'Facebook',
            icon: <FaFacebook />,
            url: 'https://www.facebook.com/keiko.higuchi.509',
          },
          // { label: 'Speaker Deck', icon: '🎤', url: '#' },
          // {
          //   label: 'Bluesky',
          //   icon: <FaBluesky />,
          //   url: '',
          // },
        ].map((item) => (
          <a
            key={item.label}
            href={item.url}
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '1rem',
              borderRadius: '8px',
              color: 'inherit',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            <span style={{ fontSize: '3rem', marginRight: '0.5rem' }}>{item.icon}</span>
            <span
              style={{
                position: 'relative',
                top: '-1rem',
                fontWeight: 'bold',
              }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </section>
      <section style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Blog</h3>
        <p style={{ fontSize: '1rem' }}>
          <a
            href="https://past.kkoisland.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Past Writings (JP blog)
          </a>
        </p>
      </section>
      <section style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Interests</h3>
        <p style={{ fontSize: '1rem' }}>
          F1, NBA (Warriors), NFL (49ers), Jogging, Japanese Mythology, Greek Mythology, History
        </p>
      </section>

      <footer
        style={{
          marginTop: '3rem',
          fontSize: '0.9rem',
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
