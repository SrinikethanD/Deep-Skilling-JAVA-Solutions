import { useState } from 'react';
import './App.css';
import UserGreeting from './components/UserGreeting';
import GuestGreeting from './components/GuestGreeting';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <>
            <UserGreeting />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <GuestGreeting />
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
