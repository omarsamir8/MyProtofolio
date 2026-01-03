'use client'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useRouter } from "next/navigation";
function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="navbar text-black d-flex justify-content-between align-items-center ">
        <div className="logoContainer">
          {/* <img src="./Assets/logo.jpg" alt="Logo" width="50" /> */}
          <h2><span style={{color:"coral"}}>Omar</span> Samir</h2>
        </div>
        <div
          className="barcontainer"
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer" }}
        >
          <div className={`bar ${open ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* القائمة اللي بتظهر لما تضغط على البار */}
      {open && (
        <div className="menu bg-white text-black p-3">
          <ul className="list-unstyled mb-0">
            <li onClick={()=>{router.push("/");}} className="py-1">Home</li>
            <li onClick={()=>{router.push("/MyServices");}} className="py-1">Service</li>
            <li onClick={()=>{router.push("/MyEducations");}} className="py-1">Education</li>
            <li onClick={()=>{router.push("/MyProjects");}} className="py-1"> Projects</li>
            <li onClick={()=>{router.push("/MyTools");}} className="py-1">Tools & Experience</li>
            <li onClick={()=>{router.push("/MyContacts");}} className="py-1">Contact Us</li>           
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
