import React, {useState, useEffect} from 'react';
import '../../global/styles/Auth.scss'
import '../../global/styles/fragments.scss'
import {Link, useNavigate} from 'react-router-dom'

import logo from '../../assets/svg/logo__lasric.svg'
import mark from '../../assets/auth/quote.svg'
import { ArrowLeft, ArrowUpRight } from 'iconoir-react';

import { setDocument } from '../../api/firebase/auth';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification , signOut} from "firebase/auth";
import Loader from '../../components/loader/loader';

const Register = () => {

    const initialState = {
        lastname : '',
        email : '',
        phone : '',
        firstname : '',
        address : '',
        password : '',
        password2 : ''
    }

    const dataSubmitted = {
        lastname : '',
        email : '',
        phone : '',
        firstname : '',
        address : '',
        password : '',
        password2 : ''
    }


    const auth = getAuth()

    const [data, setData] = useState(dataSubmitted);
    const [success, setSuccess] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        
        const emailOnly = localStorage.getItem('emailOnly')

        if(emailOnly !== null) {
            setData({...data, email : emailOnly})
        }

    }, []);

    const authOut = () => {

        signOut(auth).then(() => window.location.href = "/login" )

    }

    const handleSubmit = async e => {
      
        e.preventDefault();

        if(data.password === data.password2) {

            setSuccess(true);

            const { email, password, lastname, firstname, phone } = data;

            const auth = getAuth();

            createUserWithEmailAndPassword( auth, email, password )
            .then((userCredential) => {

                const user = userCredential.user;

                setDocument(user.uid, lastname, firstname, email, phone, "user", "No Track", password).then(() => {

                    authOut();
                    setSuccess(false); 
                    setData(initialState);
                    navigate('/login');

                })

            })

            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === "auth/email-already-in-use") {
                    
                    alert('Sorry this email address is already in use.')

                }

                if (errorCode === "auth/weak-password") {
                    
                    alert('Password is weak : Password hould be at least 6 characters.')
                    
                }

                setSuccess(false)

            });
            
        } else{
            
            alert("both passwords must be the same...try again!");
            
        }    
    }
  
    const handleChange = (e) => {

        const {name, value} = e.target;
    
        setData(data => {
        return {

            ...data,
            [name] : value

        }
        })
    
    }

    return (

        <div className="authComponent">

            {
                success ? <div className="loadingLoader"> <Loader/> </div> : null
            }

            <div className="platform">

                <p>
                    
                    <div className="quote"><img src={mark} alt="" /></div>
                    
                    👋  Welcome to LASRIC – your gateway to innovation and excellence. Log in to explore groundbreaking opportunities, drive impactful change, and be a part of shaping the future. Together, let's innovate and inspire!

                    <div className="authr">
                        <div className="nameArthr">Engr (Mrs) Ibilola Kasunmu</div>
                        <div className='posi'> Permanent Secretary Lagos State Ministry of Innovation, Science and Technology </div>
                    </div>

                </p>

            </div>

            <div className="Register">

                <div className="headerAuth">

                    <div className="logoPin"><img src={logo} alt="" /></div>
                    <Link to = "/" className="back"> Go to Main Site <div className="icon"><ArrowUpRight/></div> </Link>

                </div>

                <div className="authTitle" >
                    <p>Get Started Today : Join LASRIC</p>
                    <div className='di'>Kickstart your journey here</div>
                </div>


                <form onSubmit = {handleSubmit}>

                    <div className="field-data">

                        <div className="half-type">

                            <div className="inputArea">
                                <label htmlFor="">Lastname</label>
                                <input name = 'lastname' onChange = {handleChange} value = {data.lastname} type="text" placeholder = 'Enter Lastname' required autoFocus/>
                            </div>

                        </div>

                        <div className="half-type">

                            <div className="inputArea">
                                <label htmlFor="">Firstname</label>
                                <input type="text" placeholder = 'Enter Firstname' required name = 'firstname' onChange = {handleChange} value = {data.firstname}/>
                            </div>
                            
                        </div>

                    </div>

                    <div className="field-data">


                        <div className="full-type">

                            <div className="inputArea">
                                <label htmlFor="">Email address</label>
                                <input type="email" placeholder = 'Enter Email' required name = 'email' onChange = {handleChange} value = {data.email}/>
                            </div>
                            
                        </div>


                    </div>

                    <div className="field-data">


                        <div className="full-type">

                            <div className="inputArea">
                                <label htmlFor="">Phone number</label>
                                <input type="text" placeholder = 'Enter Phone' required name = 'phone' onChange = {handleChange} value = {data.phone}/>
                            </div>

                        </div>


                    </div>

                    <div className="field-data">

                        <div className="half-type">

                            <div className="inputArea">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder = 'Enter Password' required name = 'password' onChange = {handleChange} value = {data.password}/>
                            </div>

                        </div>

                        <div className="half-type">
                            
                            <div className="inputArea">
                                <label htmlFor="">Repeat password</label>
                                <input type="password" placeholder = 'Repeat Password'  required name = 'password2' onChange = {handleChange} value = {data.password2}/>
                            </div>
                            
                        </div>

                    </div>


                    <button className="submit-btn" type="submit"> Create Account </button>

                    <div className="login-trigger">
                        Already have an account? <Link to='/login' className="login-btn">Sign In</Link>
                    </div>

                    

                </form>

            </div>

        </div>


    );
}

export default Register;
