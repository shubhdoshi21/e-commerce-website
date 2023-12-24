import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex justify-evenly p-10 text-sm flex-row">
        <div className="flex flex-col text-slate-200">
          <h3 className="text-slate-400 py-2">ONLINE SHOPPING</h3>
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Kids</Link>
          <Link to="/">Home &amp; Living</Link>
          <Link to="/">Beauty</Link>
          <Link to="/">Gift Card</Link>
          <Link to="/">Myntra Insider</Link>
        </div>
        <div className="flex flex-col text-slate-200">
          <h3 className="text-slate-400 py-2">ABOUT</h3>
          <Link to="/">Contact us</Link>
          <Link to="/">About us</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Press</Link>
          <Link to="/">Corporate Information</Link>
        </div>
        <div className="flex flex-col text-slate-200">
          <h3 className="text-slate-400 py-2">HELP</h3>
          <Link to="/">Payment</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Cancellation & Returns</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Report Infringment</Link>
        </div>
        <div className="flex flex-col text-slate-200">
          <h3 className="text-slate-400 py-2">CONSUMER POLICY</h3>
          <Link to="/">Terms Of Use</Link>
          <Link to="/">Security</Link>
          <Link to="/">Cancellation & Returns</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Sitemap</Link>
          <Link to="/">EPR Compliance</Link>
        </div>
        <div className="flex flex-col text-slate-200">
          <h3 className="text-slate-400 py-2">Social</h3>
          <div className="flex flex-row justify-evenly w-full p-2">
            <div className="hover:-translate-y-[1vh] transition duration-300 hover:scale-125 p-2">
              <Link
                to="http://www.facebook.com/Paramarsh.ideasinfinite/"
                target="_blank"
              >
                <IoLogoFacebook size={25} className="icon" />
              </Link>
            </div>
            <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
              <Link
                to="http://instagram.com/msu_paramarsh?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <IoLogoInstagram size={25} className="icon1" />
              </Link>
            </div>
            <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
              <Link
                to="https://in.linkedin.com/company/paramarsh-ideas-infinite"
                target="_blank"
              >
                <IoLogoLinkedin size={25} className="icon2" />
              </Link>
            </div>
            <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
              <Link to="https://twitter.com/msu_paramarsh" target="_blank">
                <FaXTwitter size={25} className="icon3" />
              </Link>
            </div>
            <div className="hover:-translate-y-[1vh] transition duration-300 p-2 hover:scale-125">
              <Link to="https://www.youtube.com/@msu_paramarsh" target="_blank">
                <IoLogoYoutube size={25} className="icon4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex w-full text-slate-500 text-center items-center justify-center p-2">
        © 2023 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
