import React, { useState, useEffect } from "react";
import axios from "axios";
import '../pages/admindashboard.css'; // Import the CSS file
import NavbarDash from './NavbarDash';

function AdminDashboard() {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [solution, setSolution] = useState("");

  useEffect(() => {
    // Fetch all user queries on component mount
    fetchUserQueries();
  }, []);

  const fetchUserQueries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/queries");
      setQueries(response.data);
    } catch (error) {
      console.error("Error fetching queries", error);
    }
  };

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
    setSolution(""); // Clear solution when a new query is selected
  };

  const postSolution = async () => {
    try {
      await axios.post(`http://localhost:5000/queries/${selectedQuery._id}/solutions`, {
        solution,
      });

      // After posting the solution, you may want to update the state or refetch queries
      fetchUserQueries();

      // Clear the selected query and solution
      setSelectedQuery(null);
      setSolution("");

      // Show an alert to notify the admin that the solution has been posted
      alert("Solution posted successfully!");
    } catch (error) {
      console.error("Error posting solution", error);
    }
  };

  return (
    <>
    <NavbarDash/>
    <div className="admin-dashboard container mt-5">
      <h2 className="justify-content-center d-flex mb-5">Admin Dashboard</h2>
      <div style={{ display: "flex" }}>
        <div className="query-list">
          <h3 className="mb-3">User Queries</h3>
          <ul>
            {queries.map((query) => (
              <li key={query._id} onClick={() => handleQueryClick(query)}>
                {query.description}
              </li>
            ))}
          </ul>
        </div>
        {selectedQuery && (
          <div className="solution-container">
            <h3>Solution</h3>
            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="Enter solution..."
            ></textarea>
            <button className="mt-3 mb-3 Submitbtn" onClick={postSolution}>Post Solution</button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default AdminDashboard;