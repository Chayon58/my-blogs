import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs,setBlogs]=useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    console.log(blogs);
    return (
        <div>
            <h1 className='text-3xl font-bold'>Total: {blogs.length}</h1>

            <div className="all-blogs">
                {
                    blogs.map((blog)=> <Blog></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;