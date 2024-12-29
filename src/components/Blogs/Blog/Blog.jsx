import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";


const Blog = ({ blog, handleAddtoBookmarks, handleMarkAsRead }) => {
    const {id, title, cover, author_img, author, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full h-96 rounded-lg' src={cover} alt={`This Cover Photo is ${title} `} />
            <div className='flex justify-between items-center my-4'>
                <div className='flex gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl font-semibold">{author}</h2>
                        <p>{`Posted Dated : `}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p>{`Reading Time ${reading_time}`}</p>
                    <button className='ml-2 text-2xl'
                        onClick={() => handleAddtoBookmarks(blog)}
                    ><IoBookmarks />
                    </button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <div>
                {
                    hashtags.map((hash, index) => <span key={index}><a className='px-1' href="">{hash}</a></span>)
                }
            </div>
            <button
                onClick={() => handleMarkAsRead(reading_time, id)} 
                className='text-purple-800 underline font-bold text-xl'
            >Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;