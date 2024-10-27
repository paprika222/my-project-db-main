import React, { useState } from 'react';
import axios from 'axios';
import './insert.css';
import Header from '../componemt/Heder';

function Insert() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    type: '',
    flavor: '',
    price: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://localhost:7222/api/Desserts', formData);
      setFormData({
        id: '',
        name: '',
        type: '',
        flavor: '',
        price: ''
      });
      setSubmitSuccess(true); // Set submit success state to true
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <Header/>
    <div className="home-container-insert">
    <div className="insert-container">
      <h2>Insert Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input 
            type="text" 
            name="id" 
            value={formData.id}
            onChange={handleChange} 
          />
        </label>
        <br />
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <label>
          Type:
          <input 
            type="text" 
            name="type" 
            value={formData.type} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <label>
          Flavor:
          <input 
            type="text" 
            name="flavor" 
            value={formData.flavor} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <label>
          Price:
          <input 
            type="text" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitSuccess && <p>Data submitted successfully!</p>} {/* Display success message if submitSuccess is true */}
    </div>
    </div>
    </>
  );
}

export default Insert;
