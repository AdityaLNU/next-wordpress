
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {

  const [data, setData] = useState();

  const apiCalling = async () => {
    const options = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_API_URL
    }
    const res = await axios.request(options);
    setData(res.data.posts);
    console.log(res.data.posts)

  }

  useEffect(() => {
    apiCalling();
  }, [])
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1> NEXTJS WordPress example </h1>
      {data ? data.map((e,key) => {
        return (
          <div key={key} style={{ margin: "20px", borderBottom: "2px solid grey", paddingBottom: "10px", width: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <span style={{ margin: "5px" }}>{e.title} <em>by {e.author.name}</em></span>
            <button style={{ border: "1.5px solid black", borderRadius: "3px", backgroundColor: "white" }}><a href={`${e.URL}`} style={{ textDecoration: "none", color: "black" }}><b>Read More</b></a></button>

          </div>
        )
      }) : "Yet to recieve"}
    </div>
  );
}

export default Home;
