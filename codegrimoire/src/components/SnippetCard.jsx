import React from 'react';
import styles from './SnippetCard.module.css';

// Known languages
const knownLanguages = ['C++', 'Python', 'R'];

// Mythical palette
const mythicalColors = [
  '#7f5af0', // Runic Violet
  '#2cb67d', // Mystic Jade
  '#ff7ac6', // Witchberry Pink
  '#00f0ff', // Arcane Cyan
  '#ff6b00', // Ember Orange
  '#9b5de5', // Eldritch Purple
  '#00b4d8', // Ice Rune Blue
];

function getLanguageStyle(language) {
  if (knownLanguages.includes(language)) {
    return { color: '#facc15' }; // Mythical Gold
  } else {
    const index = Math.floor(language.charCodeAt(0) % mythicalColors.length);
    return { color: mythicalColors[index] };
  }
}

function SnippetCard({ title, description, language, code }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p className={styles.topic}><strong>Topic:</strong> {description}</p>
      <p className={styles.language} style={getLanguageStyle(language)}>
        <strong>Language:</strong> {language}
      </p>
      <pre className={styles.codeBlock}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default SnippetCard;
