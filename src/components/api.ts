export type News = {
  author: string;
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage: string;
  source: string;
};

export type NewsState = News & { article: string[] };

export const fetchNews = async (
  search: string,
  dateAt: any | null
): Promise<NewsState[]> => {
  const endpoint = `https://newsapi.org/v2/top-headlines?q=${search}&from=${dateAt}&apiKey=${process.env.REACT_APP_API_KEY}`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  if (data.status === "ok") {
    return data.articles.map((article: News) => ({
      ...article,
    }));
  } else if (data.status === "error") {
    return data.message;
  } else {
    return data;
  }
};
