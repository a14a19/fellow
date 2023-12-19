import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return(
        <>
            <div className="footer flex justify-center items-center">
                <div className="box rounded-xl px-12 py-16 flex justify-between items-start flex-col md:flex-row">
                    <div className="left-side">
                        <div className="heading text-4xl text-gray-200 text-start">Fellow</div>
                        <div className="info text-xl mt-5 text-gray-300">Where tech founders hire great</div>
                        <div className="info text-xl text-gray-300">developers really fast.</div>
                        <div className="social-icons mt-6 flex justify-start items-start gap-3">
                            <Link><FacebookIcon/></Link>
                            <Link><LinkedInIcon/></Link>
                            <Link><TwitterIcon/></Link>
                            <Link><YouTubeIcon/></Link>
                            <Link><InstagramIcon/></Link>
                        </div>
                        <div className="copy-write mt-6">© 2023 Fellow</div>
                    </div>
                    <div className="right-side flex justify-between items-start gap-12 flex-col mt-8 sm:mt-6 md:flex-row mt-0">
                        <div className="row1 flex flex-col justify-start">
                            <div className="text-xl font-semibold text-gray-200">FOR PRODUCT MANAGER</div>
                            <Link><div className="text-xl font-semibold mt-3 text-gray-400 hover:text-gray-200">Get Coaching</div></Link>
                            <Link><div className="text-xl font-semibold mt-3 text-gray-400 hover:text-gray-200">Get Remote Jobs</div></Link>
                        </div>
                        <div className="row2 flex flex-col gap-4">
                            <Link to="/"><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">For Companies</div></Link>
                            <Link to="/"><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">For Mentors</div></Link>
                            <Link to="/"><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">Community</div></Link>
                            <Link to="/"><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">Careers</div></Link>
                            <Link to="/"><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">About Us</div></Link>
                            <Link to="/"><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">Blogs</div></Link>
                            <Link to="/"><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">Events</div></Link>
                        </div>
                        <div className="row3 flex flex-col gap-3">
                            <Link><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">Privacy Policy</div></Link>
                            <Link><div className="text-gray-400 font-semibold hover:text-gray-200 text-xl">Terms & Condition</div></Link>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}