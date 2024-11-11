"use client"; // This line ensures that the page runs as a Client Component

import Head from 'next/head';
import { useState } from 'react';

export default function Apply() {
  const [setSelectedRole] = useState('');
  const [setFile] = useState(null);
  const [experience, setExperience] = useState('');
  const [reason, setReason] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="container">
      <Head>
        <title>Tech Hiring Application</title>
      </Head>
      <h1>Tech Hiring</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="roles">
          {['Design', 'Frontend Development', 'Backend Development', 'Cybersecurity Engineering', 'Machine Learning and AI', 'Data Science and Analytics', 'NLP and LLM Specialization', 'Ethical Hacking and Penetration Testing'].map((role) => (
            <label key={role} className="role-option">
              <input
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              {role}
            </label>
          ))}
        </div>
        <div className="upload-section">
          <label>Resume/CV/Portfolio</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <textarea
          placeholder="Your Experience (if any)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          maxLength={120}
        ></textarea>
        <div className="dual-inputs">
          <textarea
            placeholder="Why are you applying to this particular role?"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            maxLength={120}
          ></textarea>
          <textarea
            placeholder="Is there anything else you would like us to know?"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            maxLength={60}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1 {
          text-align: center;
        }
        .roles {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 20px;
        }
        .role-option {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .upload-section {
          margin-bottom: 20px;
        }
        textarea {
          width: 100%;
          margin-bottom: 15px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .dual-inputs {
          display: flex;
          gap: 10px;
        }
        .dual-inputs textarea {
          flex: 1;
        }
        button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
