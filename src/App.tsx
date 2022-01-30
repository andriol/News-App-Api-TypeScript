import React, { useState } from "react";
import { fetchNews, NewsState } from "./components/api";
import Card from "./components/card";
import { News } from "./components/api";
const App: React.FC = () => {
  const [news, setNews] = useState<NewsState[]>([]);
  const [input, setInput] = useState<string>("");
  const [date, setDate] = useState<any | null>(new Date(2020, 1, 1));

  const getNews = async (e: React.FormEvent) => {
    e.preventDefault();
    const articleNews = await fetchNews(input, date);
    setNews(articleNews);
  };

  return (
    <div className="App">
      <div>News API</div>
      <form className="form">
        <label>Search for news article:</label>
        <input name="search" onChange={(e) => setInput(e.target.value)} />
        <label>Date from:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={getNews}>Search</button>
      </form>

      {news.map((article: News) => {
        const { author, content, description, title } = article;
        return (
          <Card
            index={Date.now()}
            author={author}
            content={content}
            description={description}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default App;
