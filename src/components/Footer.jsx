import React from "react";
import logo from "../assets/lifesync.logo.png";

const Footer = () => {
   return (
    <div className="md:mx-10">
     <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
         {/* ---- Left ---- */}
         <div>
           <img className='mb-5 w-40 ' src={logo} alt="LifeSync Logo"/>
           <p className='w-full md:w-2/3 text=gray-600 leading-6'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             It has been the industry's standard dummy text ever since the 1500s, when 
             an unknown printer took a galley of type and scrambled it to make a type 
             specimen book.
           </p>
         </div>

        {/* ---- Center ---- */}
        <div>
          <p className='text-xl font-medium md-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ----- Right ----- */}
        <div>
          <p className='text-xl font-medium md-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>9999999999</li>
            <li>SMC@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ---- Footer Bottom ---- */}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>&copy; 2024 LifeSync. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
