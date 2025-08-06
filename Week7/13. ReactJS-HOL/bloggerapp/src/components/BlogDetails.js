import React, { useState } from 'react';
import { blogs } from '../data';

const BlogDetails = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showContent, setShowContent] = useState(true);

    const renderBlogContent = (blog) => {
        if (!showContent) return null;
        return (
            <div>
                <p>{blog.content}</p>
                <em>By: {blog.author}</em>
            </div>
        );
    };
    const content = (() => {
        if (!blogs.length) return <p>No blogs available</p>;
        
        return blogs.map(blog => (
            <div key={blog.id} className="detail-item" onClick={() => setSelectedBlog(blog.id)}>
                <h3>{blog.title}</h3>
                {/* Nested conditional rendering */}
                {selectedBlog === blog.id && renderBlogContent(blog)}
            </div>
        ));
    })();

    return (
        <div className="v1">
            <h1>Blog Details</h1>
            <button onClick={() => setShowContent(!showContent)}>
                {showContent ? 'Hide' : 'Show'} Content
            </button>
            {content}
        </div>
    );
};

export default BlogDetails;
