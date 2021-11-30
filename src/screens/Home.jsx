import React from "react";
import { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import AppLoading from "../components/AppLoading";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <div className="mt-5">
        <ul>
          {items.map((item) => (
            // <li key={item.id}>{item.title}</li>
            <AppCard itemTitle={item.title} itemBody={item.body} />
          ))}
        </ul>
      </div>
    );
  }
};

export default Home;
