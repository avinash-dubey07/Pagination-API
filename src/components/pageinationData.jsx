import React, { useState, useEffect } from "react";

export default function PaginationData({ setCreateOpen }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  function onAdd() {
    console.log("Creating New post");
  }

  const fetchData = (page) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice((page - 1) * 10, page * 10));
        setTotalPages(data.length / 10);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="header_box">
        <span>Home / Posts</span>
        <h2>Posts</h2>
        <button className="new_post" onClick={() => setCreateOpen(false)}>
          {" "}
          + New{" "}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id, index) => (
            <tr key={id} className={index % 2 ? "even-row" : "odd-row"}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Back
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
