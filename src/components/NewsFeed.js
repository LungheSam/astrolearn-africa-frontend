import React, { useState } from 'react';
import '../styles/NewsFeed.css';

const NewsFeed = () => {
  const [articles] = useState([
    {
      id: 1,
      title: 'New Mars Rover Findings',
      summary: 'Scientists discover evidence of ancient microbial life on Mars',
      date: '2025-05-28',
      category: 'discoveries'
    },
    {
      id: 2,
      title: 'African Space Agency Update',
      summary: 'Plans announced for first African-led lunar mission by 2030',
      date: '2025-05-25',
      category: 'news'
    },
    {
      id: 3,
      title: 'Student Rocket Competition',
      summary: 'Registration opens for pan-African water bottle rocket challenge',
      date: '2025-05-20',
      category: 'events'
    }
  ]);

  return (
    <div className="news-feed">
      {articles.map(article => (
        <div key={article.id} className="news-article">
          <div className="article-category">{article.category}</div>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <div className="article-date">
            {new Date(article.date).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;