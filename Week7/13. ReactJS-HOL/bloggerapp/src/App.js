import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeViews, setActiveViews] = useState({
    books: true,
    blogs: true,
    courses: true
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const shouldShowContent = isLoggedIn && Object.values(activeViews).some(view => view);
  const renderContent = () => {
    if (!isLoggedIn) {
      return <div className="login-prompt">Please log in to view content</div>;
    }

    return (
      <div className="container">
        {activeViews.courses && <CourseDetails />}
        {activeViews.courses && activeViews.books && <div className="divider"></div>}
        {activeViews.books && <BookDetails showPrices={isLoggedIn} />}
        {activeViews.books && activeViews.blogs && <div className="divider"></div>}
        {activeViews.blogs && <BlogDetails />}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        {isLoggedIn && (
          <div className="view-toggles">
            <label>
              <input
                type="checkbox"
                checked={activeViews.courses}
                onChange={(e) => setActiveViews({...activeViews, courses: e.target.checked})}
              />
              Courses
            </label>
            <label>
              <input
                type="checkbox"
                checked={activeViews.books}
                onChange={(e) => setActiveViews({...activeViews, books: e.target.checked})}
              />
              Books
            </label>
            <label>
              <input
                type="checkbox"
                checked={activeViews.blogs}
                onChange={(e) => setActiveViews({...activeViews, blogs: e.target.checked})}
              />
              Blogs
            </label>
          </div>
        )}
      </div>
      {shouldShowContent ? renderContent() : <h2>Select content to display</h2>}
    </div>
  );
}

export default App;
