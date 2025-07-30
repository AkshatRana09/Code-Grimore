import React from "react";
import styles from "./Dashboard.module.css";
import { useSnippets } from '../context/SnippetContext';
import { BookOpen, Code, Clock, Flame } from "lucide-react";

function Dashboard() {
  const { snippets } = useSnippets();

  const totalSnippets = snippets.length;

  const languageCount = {};
  let lastUpdated = "N/A";

  snippets.forEach((snip) => {
    languageCount[snip.language] = (languageCount[snip.language] || 0) + 1;

    if (!lastUpdated || new Date(snip.updatedAt) > new Date(lastUpdated)) {
      lastUpdated = snip.updatedAt;
    }
  });

  const favoriteLang =
    Object.keys(languageCount).length > 0
      ? Object.entries(languageCount).sort((a, b) => b[1] - a[1])[0][0]
      : "None";

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>📜 Your Grimoire Dashboard</h1>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <BookOpen size={32} />
          <p className={styles.statTitle}>Total Spells</p>
          <h2>{totalSnippets}</h2>
        </div>

        <div className={styles.statCard}>
          <Code size={32} />
          <p className={styles.statTitle}>Fav Language</p>
          <h2>{favoriteLang}</h2>
        </div>

        <div className={styles.statCard}>
          <Clock size={32} />
          <p className={styles.statTitle}>Last Updated</p>
          <h2>{lastUpdated !== "N/A" ? new Date(lastUpdated).toLocaleString() : "—"}</h2>
        </div>

        <div className={styles.statCard}>
          <Flame size={32} />
          <p className={styles.statTitle}>Languages Used</p>
          <h2>{Object.keys(languageCount).length}</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
