function UserGreeting() {
  const handleBooking = (flightNo) => {
    alert(`Ticket booked successfully for flight ${flightNo}!`);
  };

  return (
    <div className="greeting-container">
      <h1>Welcome back</h1>
      <div className="flights-container">
        <div className="flight-card">
          <h3>Flight AI101</h3>
          <p><strong>From:</strong> Mumbai</p>
          <p><strong>To:</strong> Delhi</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Price:</strong> ₹5,999</p>
          <button className="book-button" onClick={() => handleBooking('AI101')}>Book Now</button>
        </div>

        <div className="flight-card">
          <h3>Flight 6E202</h3>
          <p><strong>From:</strong> Bangalore</p>
          <p><strong>To:</strong> Chennai</p>
          <p><strong>Time:</strong> 2:30 PM</p>
          <p><strong>Price:</strong> ₹4,499</p>
          <button className="book-button" onClick={() => handleBooking('6E202')}>Book Now</button>
        </div>

        <div className="flight-card">
          <h3>Flight SG303</h3>
          <p><strong>From:</strong> Delhi</p>
          <p><strong>To:</strong> Kolkata</p>
          <p><strong>Time:</strong> 3:45 PM</p>
          <p><strong>Price:</strong> ₹6,299</p>
          <button className="book-button" onClick={() => handleBooking('SG303')}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default UserGreeting;