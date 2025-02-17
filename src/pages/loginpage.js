import React from 'react';
import { initializeApp } from 'firebase/app'; 
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyAVXESjp-PUvN0e77Ne-sIF_oKytDmL8jM",
  authDomain: "hospital-locator-9a4e8.firebaseapp.com",
  projectId: "hospital-locator-9a4e8",
  storageBucket: "hospital-locator-9a4e8.appspot.com", 
  messagingSenderId: "887613872399",
  appId: "1:887613872399:web:f5841738edfdec82af067a",
  measurementId: "G-DH1KVQD9BE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user);
      navigate('/home');
      
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
