import React from "react";
import User from "./user";
import { useState, useEffect } from "react";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleSubmit() {
    fetchGithubUserData();
  }

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }
  console.log(userData);

  return (
    <div className="github-profile-container px-7 py-10">
      <div className="input-wrapper ring-1 m-5 ring-zinc-300 p-2 flex justify-between rounded-md w-[70%]">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          autoFocus
          className="outline-0 placeholder:text-zinc-600"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-300 px-4 py-2 rounded-lg text-white font-semibold"
        >
          Search
        </button>
      </div>
      {userData !== null ? (
        <User user={userData} />
      ) : (
        <p>No user with such name</p>
      )}
    </div>
  );
};

export default GithubProfileFinder;
