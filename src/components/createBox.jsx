import { useState, useEffect } from "react";
import PostBox from "./postBox";

export default function CreateBox({ setCreateOpen }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [credit, setCredit] = useState("");
  const [data, setData] = useState([]);

  useEffect(
    (data) => {
      fetch(" https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
    [setData]
  );

  function onSave() {
    const url = " https://jsonplaceholder.typicode.com/posts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Content: content, Title: title, Credits: credit }),
    };
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const body = { title, content, credit };
    console.log(body);
  }
  
  return (
    <>
      <div className="header_box">
        <span>Home / </span>
        <span onClick={PostBox}>Posts / </span>
        <span> Create</span>
        <h2>Create Post</h2>
        <button onClick={() => setCreateOpen(true)}>Cancel</button> <br />
      </div>
      <div>
        <ul className="row_display">
          <label>Title</label>
          <input
            value={title}
            type="text"
            className="with"
            placeholder="Add Title of Post"
            onChange={(any) => setTitle(any.target.value)}
          />{" "}
          <br /> <br />
          <label>Content</label>
          <input
            value={content}
            type="text"
            className="with2"
            placeholder="Add the Source"
            onChange={(any) => setContent(any.target.value)}
          />{" "}
          <br /> <br />
          <label>Credits</label>
          <input
            value={credit}
            type="text"
            className="with3"
            placeholder="Add Credits"
            onChange={(any) => setCredit(any.target.value)}
          />
          <button className="save" onClick={onSave}>
            {" "}
            Save{" "}
          </button>
        </ul>
      </div>
    </>
  );
}
