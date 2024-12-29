import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 py-4 mb-10'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;