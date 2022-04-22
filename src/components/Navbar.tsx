import { Link } from "react-router-dom";

export const Navbar = () => {
     return (
          <div className="bg-blue-200 w-full flex justify-end items-center h-14">
               <div className="login font-medium font text-xl">
                    <Link to="/login">Login</Link>
               </div>
               <div className="signup font-medium ml-10 mr-10 text-xl">
                    <Link to="/signup">Sign Up</Link>
               </div>
          </div>
     );
};
