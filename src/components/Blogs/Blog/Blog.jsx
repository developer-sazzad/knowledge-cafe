import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full h-96' src={cover} alt={`This Cover Photo is ${title} `} />
            <div className='flex justify-between items-center my-4'>
                <div className='flex gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl font-semibold">{author}</h2>
                        <p>{`Posted Dated : `}</p>
                    </div>
                </div>
                <div>
                    <p>{`Reading Time ${reading_time}`}</p>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            {
                hashtags.map((hash, index) => <span key={index}><a className='px-1' href="">{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;