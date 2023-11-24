import React from "react";



const Footer = () => {
  return (
    <div className="main-footer">
    <div className="footer-middle">
      <div className="container">
       
        <div className="footer-bottom">
          <p className="text-center">
            &copy;{new Date().getFullYear()} Ticketease - All Rights Reserved
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer


