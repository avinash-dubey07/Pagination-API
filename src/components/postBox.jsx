import { useEffect, useState } from "react";
import PostsData from "./postsData";

export default function PostBox() {
  const API = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10";

  const [posts, setPosts] = useState([]);
  const [filterId, setFilterId] = useState("");



  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setPosts(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <div className="header_box">
        <span>Home / Posts</span>
        <h2>Posts</h2>
        <button className="new_post"> + New </button>
      </div>

      <table>
        <input
          type="number"
          placeholder="Filter by ID"
        />
        <thead>
          <tr>
            <th>ID</th>
            <th> User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <PostsData users={posts} />
        </tbody>
      </table>
    </>
  );
}
