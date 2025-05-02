import userPic from '../assets/user.png'
import { Link, NavLink } from 'react-router';



const Navbar = () => {
    
    return (
        <div className='flex justify-between'>
            <div className='left-side text-xl font-bold shadow-sm p-3 cursor-pointer'><span>Dragon</span><span className='animate-pulse text-secondary'>News</span></div>
            <div className='middle-nav flex gap-4 justify-center items-center  text-accent font-semibold '>
                
                <NavLink to='/category/0'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}>
                    Home</NavLink>
                <NavLink to='/about' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>About</NavLink>
                <NavLink to='/career' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Career</NavLink>
            </div>
            <div className='right-side flex justify-center items-center gap-3'>
                <img className='cursor-pointer' src={userPic} alt="" />
                <Link to='/auth/login' className='bg-primary text-white px-5 py-2 font-bold cursor-pointer'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;