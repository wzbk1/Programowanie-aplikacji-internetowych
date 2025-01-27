import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import UserModal from "./components/UserModal";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Pobranie danych z API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Funkcja filtrowania
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // Funkcja zamknięcia modalnego okna
  const closeModal = () => setSelectedUser(null);

  return (
    <div className="App">
      <h1>User Directory</h1>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <UserList users={filteredUsers} onUserSelect={setSelectedUser} />
      {selectedUser && (
        <UserModal user={selectedUser} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
