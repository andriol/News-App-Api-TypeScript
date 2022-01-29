import React, { useState } from "react";
import { fetchNews, NewsState } from "./components/api";

function App() {
  const [news, setNews] = useState<NewsState[]>([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState<any | null>(new Date(2020, 1, 1));
  const getNews = async (e: any) => {
    e.preventDefault();
    const articleNews = await fetchNews(input, date);

    setNews(articleNews);

    console.log(articleNews);
    console.log(news);
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
      {news.map((article, index) => {
        const { author, content, description, title, url, urlToImage, source } =
          article;
        return (
          <ul key={index}>
            <li style={{ color: "blue" }}>Title: {title}</li>
            <h4>Author: {author ? author : "no author provided"}</h4>
            <p>Content: {content}</p>
            <p>Description: {description}</p>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
