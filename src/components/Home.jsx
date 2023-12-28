// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import FetchData from "./FetchData";

const Home = () => {
  const { Data: blogs, Ispending, error } = FetchData('http://localhost:3000/blogs');
  return (

    <div className="Home">
      
      {error && <div>{error}</div>}
      {Ispending && <div>Loading......</div>}
      {blogs && <BlogList blogs={blogs} />}

    </div>
  );
}

export default Home;