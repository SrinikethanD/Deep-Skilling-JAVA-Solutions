import React, { Component } from 'react';
import './App.css';

function App() {

  const office = {
    name: 'Downtown Work Hub',
    rent: 55000,
    address: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?fit=crop&w=600&q=80'
  };


const officeList = [
  {
    name: 'Tech Park One',
    rent: 45000,
    address: '45 IT Road, Pune',
    image: '/images/office1.jpg'
  },
  {
    name: 'Infinity Tower',
    rent: 62000,
    address: '87 Corporate Avenue, Mumbai',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?fit=crop&w=600&q=80'
  },
  {
    name: 'WorkNest',
    rent: 58000,
    address: '11 Eco Space, Hyderabad',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?fit=crop&w=600&q=80'
  },
  {
    name: 'Orbit Plaza',
    rent: 70000,
    address: '204 Startup Lane, Chennai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=600&q=80'
  }
];


  return (
    <div className="App">
   
      <h1 style={{ textAlign: 'center' }}>Office Space Rental</h1>

      <img src={office.image} alt="Office Space" style={{ display: 'block', margin: '0 auto' }} />

    
      <div style={{ padding: '10px', border: '1px solid gray', margin: '20px', maxWidth: '400px' }}>
        <h2>{office.name}</h2>
        <p><strong>Address:</strong> {office.address}</p>
        <p>
          <strong>Rent:</strong>{' '}
          <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            ₹{office.rent}
          </span>
        </p>
      </div>


      <h2 style={{ textAlign: 'center' }}>Available Office Spaces</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {officeList.map((item, index) => (
          <div key={index} style={{ border: '1px solid gray', padding: '10px', width: '300px' }}>
               <img
      src={item.image}
      alt={item.name}
      width="280"
      height="140"
      style={{ borderRadius: '6px', marginBottom: '10px' }}
    />
            <h3>{item.name}</h3>
            <p><strong>Address:</strong> {item.address}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
                ₹{item.rent}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
