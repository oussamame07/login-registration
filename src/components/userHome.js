// import React, { Component, useEffect, useState } from "react";

// export default function UserHome({ userData }) {
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };
//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <div>
//           Name<h1>{userData.fname}</h1>
//           Email <h1>{userData.email}</h1>
//           <br />
//           <button onClick={logOut} className="btn btn-primary">
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name <h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <Link to="/StreamPage" className="btn btn-primary">
            Started Stream
          </Link> {/* Add this Link */}
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
