import React from "react";
import insta from '../../assets/instagram.png'
import { FaFacebook, FaGithub, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

const SocialLogin = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mb-3">Login with</h2>
        <div className="flex flex-col gap-2">
          {/* Email */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
          <HiOutlineMail size={18} />
            Login with Email
          </button>
          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
          <FcGoogle size={18} />
            Login with Google
          </button>

          {/* GitHub */}
          <button className="btn  bg-white text-black border-[#e5e5e5]">
          <FaGithub size={18}/>
            Login with GitHub
          </button>
        </div>
      </div>
      <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Find Us On</h2>
      <ul className="border border-black/20 rounded-xl group text-lg">
        <li className=" hover:bg-base-300 rounded-t-xl border-b border-black/20  p-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaFacebook className="text-blue-600" /> 
            <span>Facebook</span>
          </a>
        </li>
        <li className="hover:bg-base-300  border-b border-black/20 p-2">
          <a
            href="https://www.x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaXTwitter className="text-black" /> 
            <span>X</span>
          </a>
        </li>
        <li className="hover:bg-base-300 rounded-b-xl p-2">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
            
          >
           <img src={insta} alt="" />
            <span>Instagram</span>
          </a>
        </li>
    
      </ul>
      </div>
    </>
  );
};

export default SocialLogin;
