import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {AiFillYoutube ,  AiOutlineInstagram} from 'react-icons/ai';

const socialLinks = [
    {
        path: "https://www.youtube.com/c/CodingWithMuhib",
        icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>,

    },
    
    {
        path: "https://www.instagram.com/muhib160.official/",
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>,
    },
   
];

const quickLinks01 =[
    {
        path: "/home", display: "Home",
    },
    {
        path: "/",

        display: "About Us",
    },
    {
        path: "/services", display: "Services",
    },
    {
        path: "/", display: "Blog",
    },
];

const quickLinks02 =[
    {
        path: "/find-a-doctor", display: "Find a Doctor",
    },
    {
        path: "/",

        display: "Request an Appointment",
    },
    {
        path: "/", display: "Find a Location",
    },
    {
        path: "/", display: "Find a Opinion",
    },
];




const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='pb-16 pt-10'>
            <div className='container'>
                <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
                    <div>
                        <img src ={logo} alt='' />
                        <p className='text-[16px] leading-7 font-[400] text-textColor'>
                            Copyright @ {year} developed by Navneet Tiwari all right reserved .
                        </p>

                        <div className='flex items-center gap-3 mt-4'>
                            {socialLinks.map((link , index) => (
                                <Link to={link.path} key={index} 
                                className='w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center 
                                justify-center group hover:bg-primaryColor hover:border-none'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className='text-[20px] leading-[30p] font-[700] mb-6 text-headingColor'>
                            Quick Links
                        </h2>

                        <ul>
                            {quickLinks01.map((item ,index) => <li key={index} className='mb-4'>
                                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[20px] leading-[30p] font-[700] mb-6 text-headingColor'>
                            i want too:
                        </h2>

                        <ul>
                            {quickLinks02.map((item ,index) => <li key={index} className='mb-4'>
                                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
                        </ul>
                    </div>

                    
                </div>
            </div>
        </footer>
    )
};
export default Footer;