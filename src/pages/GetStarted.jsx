import React, { useContext, useState } from 'react'
import mobileLogo from '../assets/pics/logo.png'
import { NewCommaWhiteSVG, NewCommaCommaSVG } from '../assets/svgs'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../config/firebase'
import { SignInContext } from '../App';
import { ref, push, set, query, get } from 'firebase/database';


export default function GetStarted() {
  const [isSignedIn, setIsSignedIn ] = useContext(SignInContext)
  const [ userStatus, setUserStatus ] = useState('');
  const [ form, setForm ] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    newPassword: '',
    consent: true
  });
  const [ error, setError ] = useState({ email: ''});

  function saveUserData() {
    set(ref(db, 'users/' + form?.username ), form)
    .then(() => {
      console.log('user data saved successfully!')
    })
    .catch((error) => {
      console.log('could not save data')
    });
  }
  function checkUserStatus(e) {
    e.preventDefault();

    if (!form.email) {
        setError({
            ...error,
            email: 'Please provide an email'
        });
        console.log(error.email);
        return;
    }

    const usersRef = ref(db, 'users');
    const queryAllUsers = query(usersRef);

    get(queryAllUsers).then((snapshot) => {
        if (snapshot.exists()) {
            let userExists = false;
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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });

  function handleEmailSignup(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, form.email, form.newPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        saveUserData();
        setIsSignedIn(true)
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        console.log(errorCode)
        console.log(errorMessage)
      });
  }

  function handleEmailLogin(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsSignedIn(true)
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        console.log(errorCode)
        console.log(errorMessage)

      })
    } 


  function handleChange(e) {
    console.log('something happened!')
    const { name, type, value, checked} = e.target;
    setForm({
      ...form,
        [name] : type === 'checkbox' ? checked : value
    })
    console.log(form)
  }


  return (
    <div className='flex gap-[20px] font-SystemUi '>
    <div 
    style={{
      backgroundImage: `url(https://newcomma.com/images/naki2.webp)`
    }}
    
    className='xs:w-0 md:min-w-[58vw] bg-yellow-40 min-h-[100vh] bg-cover bg-center '
    >
      <NewCommaWhiteSVG />
    </div>

    <div className='flex flex-col px-[2%] gap-[48px] justify-center w-full' >
      
    <span className='xs:inline-block md:hidden w-[100px] pt-[24px] ' >
        <img  src={mobileLogo} />
      </span>
    <span>
      <h1 className="font-SharpGroteskBlack text-[52px] mb-[8px]" >GET STARTED</h1>
        <h4 className='text-[14px] font-SFpro text-[#a1a1aa] ' >
        {
          userStatus === 'new' ? 'Enter the rest of your details to ' :
        userStatus === 'old' ? 'Enter your Password to ' : 'Enter your Email to ' }<span className='text-[#222] font-semibold'>{ userStatus === 'new' ? 'Sign up' : userStatus === 'old' ? 'Sign in' : 'Continue'}</span></h4>
    </span>

      <form className='flex flex-col gap-[20px] w-full' >
        <span className='flex flex-col gap-[5px] w-full ' >
          <label 
          className='w-full text-[14px]' 
          htmlFor='email' >Email</label>
          <input 
          type='email' 
          name='email' 
          value={form.email}
          onChange={ handleChange } 
          className=' border-b  ' />
          { error.email && !form.email &&
            <p className='text-red-400 text-[14px] font-SystemUi' >{error.email}</p>
          }
          </span>      
        {
          userStatus === 'old' ? (
            <span className='flex flex-col gap-[5px] ' >
              <label 
              className='w-full text-[14px]'  
              htmlFor='email' >Password</label>
              <input 
              type='password' 
              name='password' 
              value={form.password}
              onChange={ handleChange } 
              className=' border-b  ' />
              </span>      

          ) :
          userStatus === 'new' ? (
            <>
            <span className='flex gap-[16px]' >
              <span className='flex flex-col gap-[5px] w-[50%] ' >
                <label 
                className='w-full text-[14px]'  
                  htmlFor='email' >First name</label>
                  <input 
                  type='text' 
                  name='firstName' 
                  value={form.firstName}
                  onChange={ handleChange } 
                  className=' border-b  ' />
                  </span>      
              <span className='flex flex-col gap-[5px] w-[50%] ' >
                  <label 
                  className='w-full text-[14px]' 
                  htmlFor='email' >Last name</label>
                  <input 
                  type='text' 
                  name='lastName' 
                  value={form.lastName}
                  onChange={ handleChange } 
                  className=' border-b  ' />
                  </span>      
            </span>
              <span className='flex flex-col gap-[5px] ' >
                  <label 
                  className='w-full text-[14px]' 
                  htmlFor='email' >Username</label>
                  <input
                  type='text' 
                  name='username' 
                  value={form.username}
                  onChange={ handleChange } 
                  className=' border-b  ' />
                  </span>      
              <span className='flex flex-col gap-[5px] ' >
                  <label 
                  className='w-full text-[14px]' 
                  htmlFor='newPassword' >Password</label>
                  <input 
                  type='password' 
                  name='newPassword' 
                  value={form.newPassword}
                  onChange={ handleChange }
                  className=' border-b  ' />
                  </span>      
                  <span className="flex gap-[8px]">
                  <input 
                  type='checkbox' 
                  name='consent'
                  checked={form.consent}
                  className=" size-[17px]" />
                  <p className="text-[12px] leading-[1.2] " >By ticking this box, you agree to receive email communications from NewComma</p>
                  </span>

                  <p className="text-[13px] text-[#a1a1aa] font-SFpro leading-[1.7]" >
                  By clicking Create Account, I agree that I have read and accepted the <span className="text-[#27272a]" >Terms of Use</span> and <span className="text-[#27272a]" >Privacy Policy</span>
                  </p></>
                 ): "" }
      <span className="flex gap-3" >
          <button 
          onClick={
              userStatus === 'new' ? handleEmailSignup :
              userStatus === 'old' ? handleEmailLogin: checkUserStatus
          }
          className='flex items-center justify-center font-SFpro w-fit gap-[8px] h-[40px] px-[24px] rounded-[24px] bg-[#ffcb00] ' >
            <NewCommaCommaSVG />
            <h3 className='font-bold'>
            {
              userStatus === 'new' ? 'Create Account':
              userStatus === 'old' ? 'Sign In' : 'Continue'
            }
            </h3>
          </button>
          {
            userStatus === 'old' && 
            <button className='flex items-center justify-center font-bold font-SFpro w-fit gap-[8px] h-[40px] px-[24px] rounded-[24px] bg-[#fff] ' >Forgot Password </button>
          }
          { userStatus === '' &&
            <button 
            className='flex items-center justify-center border text-[#222] border-[#fccb00] font-SFpro font-[600] w-fit h-[40px] px-[24px] rounded-[24px] bg-[#fff]' >Continue with Google</button>
          }
      </span>
      </form>
    </div>
    </div>
  )
}
