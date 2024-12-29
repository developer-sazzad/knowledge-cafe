import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddtoBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-5">Blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddtoBookmarks={handleAddtoBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddtoBookmarks: PropTypes.func, 
    handleMarkAsRead: PropTypes.func
}

export default Blogs;