
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../pages/dashboard.css';
import NavbarDash from './NavbarDash';
import 'bootstrap/dist/css/bootstrap.css';
function Dashboard() {
  const [queries, setQueries] = useState([]);
  const [newQuery, setNewQuery] = useState("");
  const [editQuery, setEditQuery] = useState({ queryId: '', description: '' });

  useEffect(() => {
    // Fetch user queries on component mount
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/queries");
      setQueries(response.data);
    } catch (error) {
      console.error("Error fetching queries", error);
    }
  };

  const postQuery = async () => {
    try {
      await axios.post("http://localhost:5000/queries", {
        description: newQuery,
      });

      // After posting the query, you may want to update the state or refetch queries
      fetchQueries();

      // Clear the input field after posting the query
      setNewQuery("");
    } catch (error) {
      console.error("Error posting query", error);
    }
  };

  const handleDelete = (queryId) => {
    // Send a request to delete the query
    axios.delete(`http://localhost:5000/queries/${queryId}`)
      .then((response) => {
        console.log(response.data);
        // Update the local state to reflect the deleted query
        setQueries(queries.filter((query) => query._id !== queryId));
      })
      .catch((error) => {
        console.error('Error deleting query:', error);
      });
  };

  

  const handleEdit = (queryId, description) => {
    // Set the edited query state
    setEditQuery({ queryId, description });
  };

  const handleUpdate = () => {
    // Send a request to update the query
    axios.put(`http://localhost:5000/queries/${editQuery.queryId}`, {
      description: editQuery.description,
    })
      .then((response) => {
        console.log(response.data);
        // Clear the edited query state
        setEditQuery({ queryId: '', description: '' });
        // Update the local state to reflect the edited query
        setQueries((prevQueries) =>
          prevQueries.map((query) =>
            query._id === editQuery.queryId
              ? { ...query, description: editQuery.description }
              : query
          )
        );
      })
      .catch((error) => {
        console.error('Error updating query:', error);
      });
  };

  return (
    <>
    <NavbarDash/>
    <div className="background">
    <div className="user-dashboard container mt-5">
      <h2 className="justify-content-center d-flex mb-5">User Dashboard</h2>
      <div>
      <h3>Add Querey</h3>
        <textarea
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
          placeholder="Enter your query..."
        ></textarea>
        <button onClick={postQuery} className="mt-3 mb-3 Submitbtn">Submit Query</button>
      </div>

      <ul>
      <h3 className="mt-3 mb-2">Ticket History</h3>
        {queries.map((query) => (
          <li key={query._id}>
            <strong>Status:</strong> {query.status}
            <br />
            <strong>Description:</strong> {query.description}
            <br />
            {query.solution && (
              <div>
                <strong>Solution:</strong> {query.solution}
              </div>
            )}
            {query.status === 'Closed' && (
              <button className="deletebtn mt-1" onClick={() => handleDelete(query._id)}>Delete</button>
            )}
            {query.status === 'Open' && (
              <>
                <button className="editbtn mt-1" onClick={() => handleEdit(query._id, query.description)}>
                  Edit
                </button>
                {editQuery.queryId === query._id && (
                  <>
                    <input
                      type="text"
                      value={editQuery.description}
                      onChange={(e) =>
                        setEditQuery({ ...editQuery, description: e.target.value })
                      }
                    />
                    <button className="editbtn mt-1" onClick={handleUpdate}>Update</button>
                  </>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default Dashboard;