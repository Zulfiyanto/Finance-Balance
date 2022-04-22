import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
     const [error, setError] = useState(null);
     const [isPending, setIsPending] = useState<boolean>(false);

     //  Interfaces
     interface SignupI {
          email: string | null;
          password: string | null;
          displayName: any | null;
     }

     const signUp = async ({ email, password, displayName }: SignupI): Promise<any> => {
          setError(null);
          setIsPending(true);
          try {
               const res = await createUserWithEmailAndPassword(
                    projectAuth,
                    email!,
                    password!
               );

               if (!res) throw new Error("Could not complete signup");

               await updateProfile(projectAuth.currentUser!, displayName);
               setIsPending(false);
               setError(null);
          } catch (error: any) {
               console.log(error);
               setError(error.message);
               setIsPending(false);
          }
     };
     return { signUp, error, isPending };
};
