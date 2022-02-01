import React, { useState } from "react";
import { fetchNews, NewsState } from "./components/api";
import Card from "./components/card";
import { News } from "./components/api";
import "./styles.css";

const App: React.FC = () => {
  const [news, setNews] = useState<NewsState[]>([]);

  const [input, setInput] = useState<string>("");
  const [date, setDate] = useState<any | null>(new Date(2020, 1, 1));

  const getNews = async (e: React.FormEvent) => {
    e.preventDefault();
    const articleNews = await fetchNews(input, date);
    console.log(articleNews);

    setNews(articleNews);
  };

  console.log(news);
  return (
    <div className="App">
      <div className="app_title">News API</div>
      <form className="input">
        <label className="input_title">Search for news articles:</label>
        <input
          className="input__box"
          name="search"
          onChange={(e) => setInput(e.target.value)}
        />
        <label className="input_date">Date from:</label>
        <input
          className="input__box"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="input_submit" onClick={getNews}>
          Search
        </button>
      </form>
      {news?.map((article: News) => {
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
