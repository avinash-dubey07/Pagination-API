import "./App.css";
import { useState } from "react";
import PaginationData from "./components/pageinationData";
import PostBox from "./components/postBox";
import CreateBox from "./components/createBox";

export default function App() {
  const [createOpen, setCreateOpen] = useState(true);
  return (
    <>
      <div>
        {createOpen ? (
          <PaginationData setCreateOpen={setCreateOpen} />
        ) : (
          <CreateBox setCreateOpen={setCreateOpen} />
        )}
      </div>
    </>
  );
}
