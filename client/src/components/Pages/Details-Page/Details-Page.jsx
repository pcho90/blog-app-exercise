import React, { useState, useEffect } from "react";
import "./Details-Page.Style.css";
import { useParams, useHistory } from "react-router-dom";
import { getPost, updatePost, deletePost } from "../../../services/posts";

const DetailsPage = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [input, setInput] = useState({ title: "", content: "" });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, input);
  };
  const handleDelete = async () => {
    await deletePost(id);
    push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPost(id);
      setInput(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" value={input.title} onChange={handleChange} />
        <input name="content" value={input.content} onChange={handleChange} />
        <button>Create</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DetailsPage;
