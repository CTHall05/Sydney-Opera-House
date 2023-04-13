import React, { useState } from 'react';
import '../App.css'; // import your CSS file

function BookYourTicket() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [adults, setAdults] = useState(0);
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='bookYourTicket-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>BOOK YOUR TICKET</h2>
        <div className='form-grid'>
          <div className='form-input-container'>
            <label htmlFor='name'>Enter Your Name:</label>
            <input className="form-input" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-input-container'>
            <label htmlFor='email'>Enter Your Email:</label>
            <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='date-time-container'>
            <div className='form-input-container'>
              <label htmlFor='date'>Date:</label>
              <input className="form-input" type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-input-container'>
              <label htmlFor='time'>Time:</label>
              <input className="form-input" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>
          <div className='form-input-container'>
            <label htmlFor='contactNumber'>Enter Your Contact Number:</label>
            <input className="form-input" type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </div>
          <div className='form-input-container'>
            <label htmlFor='adults'>Adults:</label>
            <input className="form-input" type="number" min="0" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} />
          </div>
          <div className='form-input-container'>
            <label htmlFor='children'>Children:</label>
            <input className="form-input" type="number" min="0" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} />
          </div>
        </div>

        <div className='form-button-container'>
          <button className="btn-style1" type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
}

export default BookYourTicket;
