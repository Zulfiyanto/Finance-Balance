import { useState } from "react";

export const Login = () => {
     const [email, setEmail] = useState<any | null>("");
     const [password, setPassword] = useState<any | null>("");

     const OnSubmit = (e: any) => {
          e.preventDefault();
          console.log(email, password);
     };
     return (
          <form
               className="w-1/2 mx-auto bg-slate-800 flex flex-col items-center"
               onSubmit={OnSubmit}
          >
               <div className="login text-white">Login</div>
               <div className="username flex flex-col">
                    <label htmlFor="" className="text-white">
                         Email
                    </label>
                    <input
                         type="email"
                         className="w-full"
                         onChange={(e) => setEmail(e.target.value)}
                         value={email}
                    />
               </div>
               <div className="password flex flex-col">
                    <label htmlFor="" className="text-white">
                         Password
                    </label>
                    <input
                         type="password"
                         className="w-full"
                         onChange={(e) => setPassword(e.target.value)}
                         value={password}
                    />
               </div>
               <button className="bg-sky-500/100 w-1/2 h-10 ">Login</button>
          </form>
     );
};
