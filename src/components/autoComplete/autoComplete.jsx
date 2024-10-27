import React from "react";
import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(e) {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users, filteredUsers);

  return (
    <div className="px-7 py-20 w-full">
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            name="search-users"
            placeholder="search users.."
            value={searchParam}
            onChange={handleChange}
            className="w-full ring-1  ring-zinc-300 rounded-md px-3 py-1 outline-0 shadow-md placeholder:text-zinc-500 text-zinc-500"
          />
          <a
            href=""
            className="bg-blue-400 text-white font-semibold px-3 py-2 rounded-md hover:bg-blue-500"
          >
            search
          </a>
        </div>
      )}

      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutoComplete;
