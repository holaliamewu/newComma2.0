import React, { useContext, useState, useEffect } from 'react';
import mobileLogo from '../assets/pics/logo.png';
import { NewCommaWhiteSVG, NewCommaCommaSVG } from '../assets/svgs';
import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../config/firebase';
import { FormContext, MyDataContext, SignInContext, WhereOnTheAppContext } from '../App';
import { ref, push, set, query, get } from 'firebase/database';

export default function GetStarted() {
  const provider = new GoogleAuthProvider();
  const [isSignedIn, setIsSignedIn] = useContext(SignInContext);
  const [whereOnTheApp, setWhereOnTheApp] = useContext(WhereOnTheAppContext);
  const [form, setForm] = useContext(FormContext);
  const [myData, setMyData] = useContext(MyDataContext);
  const [userStatus, setUserStatus] = useState('');
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorNewPassword, setErrorNewPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorConsent, setErrorConsent] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserData();
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, [setIsSignedIn]);

  async function getUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      console.log('User data retrieved from localStorage:', JSON.parse(userData));
      setMyData(JSON.parse(userData));
      return JSON.parse(userData);
    } else {
      console.log('No data available for this user in localStorage');
    }
  }

  function checkUserStatus(e) {
    e.preventDefault();

    const usersRef = ref(db, 'users');
    const queryAllUsers = query(usersRef);

    if (!form.email) {
      setErrorEmail('Please provide an email');
      console.log(errorEmail);
      return;
    }

    get(queryAllUsers).then((snapshot) => {
      let userExists = false;
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const userData = childSnapshot.val();
          if (userData.email === form.email) {
            userExists = true;
            setUserStatus('old');
            return;
          }
        });

        if (!userExists) {
          setUserStatus('new');
          console.log('No user found with this email.');
        }
      } else {
        setUserStatus('new');
        console.log('No user data found in the database.');
      }
    }).catch((error) => {
      console.error('Error retrieving user data:', error);
    });
  }

  function handleGoogleSignup(e) {
    e.preventDefault();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    auth.languageCode = 'it';

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setMyData({...myData, email: user.email, displayName: user.displayName})
        console.log('User:', user);
        console.log('Token:', token);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error code:', errorCode);
        console.error('Error message:', errorMessage);
        console.error('Email:', email);
        console.error('Credential:', credential);
      });
  }

  function handleEmailSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, form.email, form.newPassword)
      .then((userCredential) => {
        localStorage.setItem('userData', JSON.stringify(form));
        getUserData();
        setIsSignedIn(true);
        console.log("my data from sign up: ", myData);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage === "auth/weak-password") {
          setErrorNewPassword("Weak Password");
        }
        if (errorMessage === "auth/invalid-email") {
          setErrorEmail("Enter a proper email");
        }
        if (errorMessage === "auth/email-already-in-use") {
          setErrorEmail("Email is already in use");
        }
        if (!form.firstName) {
          setErrorFirstName("You forgot to enter your first name");
        }
        if (!form.lastName) {
          setErrorLastName("You forgot to enter your last name");
        }
        if (!form.newPassword) {
          setErrorNewPassword("Your Password, please");
        }
        if (!form.consent) {
          setErrorConsent("Your consent is needed here");
        }
        if (!form.username) {
          setErrorUsername("Get yourself a username");
        }
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  function handleEmailLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        getUserData();
        setIsSignedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage === "auth/wrong-password") {
          setErrorPassword("Wrong Password");
        }
        if (!form.password) {
          setErrorPassword("Your Password, please");
        }
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
    console.log(form);
  }

  return (
    <div className='flex gap-[20px] font-SystemUi'>
      <div
        style={{
          backgroundImage: `url(https://newcomma.com/images/naki2.webp)`
        }}
        className='xs:w-0 md:min-w-[58vw] bg-yellow-40 min-h-[100vh] bg-cover bg-center'
      >
        <NewCommaWhiteSVG />
      </div>

      <div className='flex flex-col px-[2%] gap-[48px] justify-center w-full'>
        <span className='xs:inline-block md:hidden w-[100px] pt-[24px]'>
          <img src={mobileLogo} alt="Logo" />
        </span>
        <span>
          <h1 className="font-SharpGroteskBlack text-[52px] mb-[8px]">GET STARTED</h1>
          <h4 className='text-[14px] font-SFpro text-[#a1a1aa]'>
            {userStatus === 'new' ? 'Enter the rest of your details to ' :
              userStatus === 'old' ? 'Enter your Password to ' : 'Enter your Email to '}
            <span className='text-[#222] font-semibold'>
              {userStatus === 'new' ? 'Sign up' : userStatus === 'old' ? 'Sign in' : 'Continue'}
            </span>
          </h4>
        </span>

        <form className='flex flex-col gap-[20px] w-full'>
          <span className='flex flex-col gap-[5px] w-full'>
            <label className='w-full text-[14px]' htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='border-b border-b-[lightgray] outline-none focus:border-b-[black]'
            />
            {errorEmail &&
              <p className='text-red-400 text-[14px] font-SystemUi'>{errorEmail}</p>
            }
          </span>
          {
            userStatus === 'old' ? (
              <span className='flex flex-col gap-[5px]'>
                <label className='w-full text-[14px]' htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                  className='border-b border-b-[lightgray] outline-none focus:border-b-[black]'
                />
                {errorPassword && !form.password &&
                  <p className='text-red-400 text-[14px] font-SystemUi'>{errorPassword}</p>
                }
              </span>
            ) :
              userStatus === 'new' ? (
                <>
                  <span className='flex gap-[16px]'>
                    <span className='flex flex-col gap-[5px] w-[50%]'>
                      <label className='w-full text-[14px]' htmlFor='firstName'>First name</label>
                      <input
                        type='text'
                        name='firstName'
                        value={form.firstName}
                        onChange={handleChange}
                        className='border-b border-b-[lightgray] outline-none focus:border-b-[black]'
                      />
                      {errorFirstName && !form.firstName &&
                        <p className='text-red-400 text-[14px] font-SystemUi'>{errorFirstName}</p>
                      }
                    </span>
                    <span className='flex flex-col gap-[5px] w-[50%]'>
                      <label className='w-full text-[14px]' htmlFor='lastName'>Last name</label>
                      <input
                        type='text'
                        name='lastName'
                        value={form.lastName}
                        onChange={handleChange}
                        className='border-b border-b-[lightgray] outline-none focus:border-b-[black]'
                      />
                      {errorLastName && !form.lastName &&
                        <p className='text-red-400 text-[14px] font-SystemUi'>{errorLastName}</p>
                      }
                    </span>
                  </span>
                  <span className='flex flex-col gap-[5px]'>
                    <label className='w-full text-[14px]' htmlFor='username'>Username</label>
                    <input
                      type='text'
                      name='username'
                      value={form.username}
                      onChange={handleChange}
                      className='border-b border-b-[lightgray] outline-none focus:border-b-[black]'
                    />
                    {errorUsername && !form.username &&
                      <p className='text-red-400 text-[14px] font-SystemUi'>{errorUsername}</p>
                    }
                  </span>
                  <span className='flex flex-col gap-[5px]'>
                    <label className='w-full text-[14px]' htmlFor='newPassword'>Password</label>
                    <input
                      type='password'
                      name='newPassword'
                      value={form.newPassword}
                      onChange={handleChange}
                      className='border-b border-b-[lightgray] outline-none focus:border-b-[black]'
                    />
                    {errorNewPassword && !form.newPassword &&
                      <p className='text-red-400 text-[14px] font-SystemUi'>{errorNewPassword}</p>
                    }
                  </span>
                  <span className="flex gap-[8px]">
                    <input
                      type='checkbox'
                      name='consent'
                      checked={form.consent}
                      onChange={handleChange}
                      className='border-b border-b-[lightgray] outline-none focus:border-b-[black]'
                    />
                    <p className="text-[12px] leading-[1.2]">By ticking this box, you agree to receive email communications from NewComma</p>
                  </span>
                  {errorConsent && !form.consent &&
                    <p className='text-red-400 text-[14px] font-SystemUi'>{errorConsent}</p>
                  }

                  <p className="text-[13px] text-[#a1a1aa] font-SFpro leading-[1.7]">
                    By clicking Create Account, I agree that I have read and accepted the <span className="text-[#27272a]">Terms of Use</span> and <span className="text-[#27272a]">Privacy Policy</span>
                  </p>
                </>
              ) : ""
          }
          <span className="flex gap-3">
            <button
              onClick={
                userStatus === 'new' ? handleEmailSignup :
                  userStatus === 'old' ? handleEmailLogin : checkUserStatus
              }
              className='flex items-center justify-center font-SFpro w-fit gap-[8px] h-[40px] px-[24px] rounded-[24px] bg-[#ffcb00]'
            >
              <NewCommaCommaSVG />
              <h3 className='font-bold'>
                {userStatus === 'new' ? 'Create Account' :
                  userStatus === 'old' ? 'Sign In' : 'Continue'}
              </h3>
            </button>
            {
              userStatus === 'old' &&
              <button className='flex items-center justify-center font-bold font-SFpro w-fit gap-[8px] h-[40px] px-[24px] rounded-[24px] bg-[#fff]'>Forgot Password</button>
            }
            {userStatus === '' &&
              <button
                onClick={handleGoogleSignup}
                className='flex items-center justify-center border text-[#222] border-[#fccb00] font-SFpro font-[600] w-fit h-[40px] px-[24px] rounded-[24px] bg-[#fff]'>
                Continue with Google
              </button>
            }
          </span>
        </form>
      </div>
    </div>
  );
}
