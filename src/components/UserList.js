import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="columns is-centered"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #e3f2fd, #bbdefb)",
        padding: "2rem",
      }}
    >
      <div className="column is-full">
        <div className="box has-shadow" style={{ borderRadius: "12px" }}>
          {/* Title and Add New Button */}
          <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
            <h1 className="title has-text-primary" style={{ fontSize: "2.5rem" }}>
              DATA KARYAWAN
            </h1>
            <Link
              to={`add`}
              className="button is-large has-text-weight-bold"
              style={{
                background: "linear-gradient(45deg, #00d1b2, #23d160)",
                color: "#fff",
                borderRadius: "50px",
              }}
            >
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
              <span>Tambahkan</span>
            </Link>
          </div>

          {/* User Table */}
          <div style={{ overflowX: "auto" }}>
            <table className="table is-striped is-fullwidth is-hoverable">
              <thead
                className="has-text-white"
                style={{
                  background: "linear-gradient(45deg, #3273dc, #209cee)",
                }}
              >
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Jenis Kelamin</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      <div className="buttons">
                        <Link
                          to={`edit/${user.id}`}
                          className="button is-small"
                          style={{
                            background: "linear-gradient(45deg, #03A9F4, #00BCD4)",
                            color: "#fff",
                            borderRadius: "8px",
                          }}
                        >
                          <span className="icon">
                            <i className="fas fa-edit"></i>
                          </span>
                          <span>Edit</span>
                        </Link>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="button is-small"
                          style={{
                            background: "linear-gradient(45deg, #E91E63, #F44336)",
                            color: "#fff",
                            borderRadius: "8px",
                          }}
                        >
                          <span className="icon">
                            <i className="fas fa-trash"></i>
                          </span>
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
