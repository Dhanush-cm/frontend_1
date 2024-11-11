'use client';
import { useState } from 'react';

export default function Apply() {
  const [selectedRole, setSelectedRole] = useState('');
  const [experience, setExperience] = useState('');
  const [applicationReason, setApplicationReason] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('role', selectedRole);
    formData.append('experience', experience);
    formData.append('applicationReason', applicationReason);
    formData.append('additionalInfo', additionalInfo);
    formData.append('file', file);

    // Send the form data to an API route or backend
    console.log('Form submitted');
    // Here you can add code to handle form submission
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Tech Hiring</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>
            <input
              type="radio"
              value="Design"
              checked={selectedRole === 'Design'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> Design
          </label>
          <label>
            <input
              type="radio"
              value="Frontend Development"
              checked={selectedRole === 'Frontend Development'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> Frontend Development
          </label>
          <label>
            <input
              type="radio"
              value="Backend Development"
              checked={selectedRole === 'Backend Development'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> Backend Development
          </label>
          <label>
            <input
              type="radio"
              value="Cybersecurity Engineering"
              checked={selectedRole === 'Cybersecurity Engineering'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> Cybersecurity Engineering
          </label>
          <label>
            <input
              type="radio"
              value="Machine Learning and AI"
              checked={selectedRole === 'Machine Learning and AI'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> Machine Learning and AI
          </label>
          <label>
            <input
              type="radio"
              value="Data Science and Analytics"
              checked={selectedRole === 'Data Science and Analytics'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> Data Science and Analytics
          </label>
          <label>
            <input
              type="radio"
              value="NLP and LLM Specialization"
              checked={selectedRole === 'NLP and LLM Specialization'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> NLP and LLM Specialization
          </label>
          <label>
            <input
              type="radio"
              value="Ethical Hacking and Penetration Testing"
              checked={selectedRole === 'Ethical Hacking and Penetration Testing'}
              onChange={(e) => setSelectedRole(e.target.value)}
            /> Ethical Hacking and Penetration Testing
          </label>
        </div>
        <br />
        <div>
          <label>Resume/CV/Portfolio</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <br />
        <div>
          <label>Your Experience (if any)</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Your Experience (if any)"
            maxLength="120"
            rows="3"
            style={{ width: '100%' }}
          />
        </div>
        <br />
        <div>
          <label>Why are you applying to this particular role?</label>
          <textarea
            value={applicationReason}
            onChange={(e) => setApplicationReason(e.target.value)}
            placeholder="Why are you applying to this particular role?"
            maxLength="120"
            rows="3"
            style={{ width: '100%' }}
          />
        </div>
        <br />
        <div>
          <label>Is there anything else you would like us to know?</label>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Is there anything else you would like us to know?"
            maxLength="60"
            rows="2"
            style={{ width: '100%' }}
          />
        </div>
        <br />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
