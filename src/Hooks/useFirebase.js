

import { useLocation, useNavigate } from "react-router-dom"
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword,  updateUserName, veryfayUserEmail,sendEmailVerification,updateProfile, onAuthStateChanged,signOut} from "firebase/auth"
import { useEffect, useState } from "react";

const useFirebase = () =>{
   let navigate = useNavigate();
   let location = useLocation();

   const [user,setUser] = useState();


    // Register with email and password

  const signUpWithEmailAndPass = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateUserName(name);
        veryfayUserEmail();
        const user = userCredential.user;
        setUser(user);
        navigate("/home", { replace: true });
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

    // update user name
    const updateUserName = (name) => {
        console.log(name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error.message);
          });
      };
    
      // very email
      const veryfayUserEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
        });
      };
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
          }
        });
      }, []);
      const handleLogOut = () => {
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .catch((error) => {});
      };

      return {
        
        signUpWithEmailAndPass,
    
        user,
        handleLogOut
        
      };



};

export default useFirebase;
