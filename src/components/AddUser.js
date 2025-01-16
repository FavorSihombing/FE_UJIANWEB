import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Laki-Laki");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="columns is-centered"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #f0f4c3, #dcedc8)",
        padding: "2rem",
      }}
    >
      <div className="column is-two-thirds">
        <div
          className="box"
          style={{
            borderRadius: "12px",
            padding: "2rem",
            background: "#fff",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            className="title has-text-centered has-text-success mb-4"
            style={{ fontSize: "2.5rem", fontWeight: "700" }}
          >
            TAMBAHKAN DATA KARYAWAN BARU
          </h1>
          <form onSubmit={saveUser}>
            {/* Name Field */}
            <div className="field">
              <label className="label has-text-weight-semibold">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input is-medium"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan Nama Anda"
                  style={{
                    border: "2px solid #00d1b2",
                    borderRadius: "8px",
                    transition: "border-color 0.3s ease",
                  }}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="field">
              <label className="label has-text-weight-semibold">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input is-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan Email Anda"
                  style={{
                    border: "2px solid #209cee",
                    borderRadius: "8px",
                    transition: "border-color 0.3s ease",
                  }}
                />
              </div>
            </div>

            {/* Gender Field */}
            <div className="field">
              <label className="label has-text-weight-semibold">Jenis Kelamin</label>
              <div className="control">
                <div
                  className="select is-fullwidth is-medium"
                  style={{
                    border: "2px solid #ffdd57",
                    borderRadius: "8px",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="field has-text-centered mt-4">
              <button
                type="submit"
                className="button is-success is-medium is-rounded"
                style={{
                  background: "linear-gradient(45deg, #00d1b2, #23d160)",
                  color: "#fff",
                  transition: "transform 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
