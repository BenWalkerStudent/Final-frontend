import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPosts = { ...form };

    await fetch("http://localhost:3001/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPosts),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    // setForm({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   age: "",
    //   currentCollege: "",
    // });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Whats on your mind?</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content </label>
          <input
            type="text"
            className="form-control"
            id="content"
            value={form.content}
            onChange={(e) => updateForm({ content: e.target.value })}
          />
        </div>

        <div className="form-group" style={{ marginTop: "10px" }}>
          <input
            type="submit"
            value="SHOW THE WORLD"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
