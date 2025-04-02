import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();
  return (
    <>
      <div className="bg-gray-500 text-white p-10 text-center text-4xl font-medium">
        GitHub Followers {data.followers}
      </div>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}