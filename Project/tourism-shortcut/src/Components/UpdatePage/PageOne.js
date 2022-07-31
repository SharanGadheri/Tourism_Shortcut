import React, { useEffect, useState } from "react";

const PageOne = () => {
  const [toursImg, setToursImg] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setToursImg(data));
  }, []);

  console.log(toursImg);
  return (
    <div>
      <h1>PageOne</h1>
    </div>
  );
};

export default PageOne;
