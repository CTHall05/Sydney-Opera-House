import React, { useState } from 'react';

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
      <h2>BOOK YOUR TICKET</h2>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='form-input-section'>
          <div className='form-section'>
            <label htmlFor="name">Enter Your Name:</label>
            <div>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <br />
            <div className='date-time-formSection'>
              <label htmlFor='date'>Date:
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </label>
              <br />
              <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </label>
            </div>
            <br />
            <label>
              Adults:
              <input type="number" min="0" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} />
            </label>
          </div>
          
          <div className='form-section'>
            <label>
              Enter Your Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Enter Your Contact Number:
              <input type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
            </label>
            <br />
            <label>
              Children:
              <input type="number" min="0" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} />
            </label>
            <br />
          </div>
        
        </div>
        
        <button type="submit">Book Now</button>
    </form>
    </div>
  );
}

export default BookYourTicket;
