import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export const Signup = () => {
     const [email, setEmail] = useState<string | null>("");
     const [password, setPassword] = useState<string | null>("");
     const [displayName, setDeisplayName] = useState<string | null>("");

     const { signUp, error, isPending } = useSignup();

     const OnSubmit = (e: any) => {
          e.preventDefault();
          signUp({ email, password, displayName });
     };
     return (
          <form
               className="w-1/2 mx-auto  flex flex-col items-center bg-green-500 rounded-md shadow-xl py-10"
               onSubmit={OnSubmit}
          >
               <div className="login font-semibold text-5xl">Login</div>
               <div className="username w-1/2 flex flex-col mb-5">
                    <label htmlFor="" className="text-2xl mb-3">
                         Email
                    </label>
                    <input
                         type="email"
                         className="w-full border-2 rounded-md h-10 pl-5"
                         onChange={(e) => setEmail(e.target.value)}
                         value={email!}
                    />
               </div>
               <div className="password w-1/2 flex flex-col mb-5">
                    <label htmlFor="" className="text-2xl mb-3">
                         Password
                    </label>
                    <input
                         type="password"
                         className="w-full border-2 rounded-md h-10 pl-5"
                         onChange={(e) => setPassword(e.target.value)}
                         value={password!}
                    />
               </div>
               <div className="displayname w-1/2 flex flex-col mb-10">
                    <label htmlFor="" className="text-2xl mb-3">
                         Display Name
                    </label>
                    <input
                         type="text"
                         className="w-full border-2 rounded-md h-10 pl-5"
                         onChange={(e) => setDeisplayName(e.target.value)}
                         value={displayName!}
                    />
               </div>
               {isPending ? (
                    <button className="border-2 rounded-md text-2xl font-semibold border-white w-1/2 h-14 shadow-md">
                         ........
                    </button>
               ) : (
                    <button className="border-2 rounded-md text-2xl font-semibold border-white w-1/2 h-14 shadow-md ">
                         Login
                    </button>
               )}
               {error && <p>{error}</p>}
          </form>
     );
};
