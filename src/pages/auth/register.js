import React, {useState, useEffect} from 'react';
import '../../global/styles/Auth.scss'
import '../../global/styles/fragments.scss'
import {Link} from 'react-router-dom'
import { setDocument } from '../../api/firebase/auth';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification , signOut} from "firebase/auth";

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

    useEffect(() => {
        
        const emailOnly = localStorage.getItem('emailOnly')

        if(emailOnly !== null) {
            setData({...data, email : emailOnly})
        }

    }, []);

    const authOut = () => {

        console.log('Signing Out...')
        signOut(auth).then(() => window.location.href = "/login" )

    }

    const handleSubmit = async e => {
      
        e.preventDefault();

        if(data.password === data.password2) {

            const { email, password, lastname, firstname, phone } = data;

            const auth = getAuth();

            createUserWithEmailAndPassword( auth, email, password )
            .then((userCredential) => {

                const user = userCredential.user;

                setDocument(user.uid, lastname, firstname, email, phone, "user", "No Track", password)
                
                setSuccess(true);

                setTimeout(async () => {

                    setSuccess(false); 
                    authOut()
                    window.location.href = "/login"

                }, 3500);

                setData(initialState);

            })

            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

                alert('Sorry this email address is already in use.')

            });
            
        } else{
            alert("both passwords must be the same...try again!")
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

        <div className="Register">

            {

                success ? 
                (   
                    <div className="success">
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_gtsd5caj.json" background="#fff"  speed="1.5"  style={{"width": "700px", "height": "700px"}} autoplay></lottie-player>
                    </div>
                    
                ) : null

            }

            <div className="title-tag">
                <h1 style={{margin: "0 auto"}}> Get Started Today.</h1>
            </div>

            <form onSubmit = {handleSubmit}>

                <div className="field-data">

                    <div className="half-type">

                        <div className="icon-form"><i className="fi fi-rr-user"></i></div>
                        
                        <div className="inputArea">
                            <input name = 'lastname' onChange = {handleChange} value = {data.lastname} type="text" placeholder = 'Enter Lastname' required autoFocus/>
                        </div>

                    </div>

                    <div className="half-type">

                        <div className="icon-form"><i className="fi fi-rr-user"></i></div>
                        
                        <div className="inputArea">
                            <input type="text" placeholder = 'Enter Firstname' required name = 'firstname' onChange = {handleChange} value = {data.firstname}/>
                        </div>
                        
                    </div>

                </div>

                <div className="field-data">


                    <div className="full-type">

                        <div className="icon-form"><i className="fi fi-rr-envelope"></i></div>
                            
                        <div className="inputArea">
                            <input type="email" placeholder = 'Enter Email' required name = 'email' onChange = {handleChange} value = {data.email}/>
                        </div>
                        
                    </div>


                </div>

                <div className="field-data">


                    <div className="full-type">

                        <div className="icon-form"><i className="fi fi-rr-smartphone"></i></div>
                            
                        <div className="inputArea">
                            <input type="text" placeholder = 'Enter Phone' required name = 'phone' onChange = {handleChange} value = {data.phone}/>
                        </div>

                    </div>


                </div>

                <div className="field-data">

                    <div className="half-type">

                        <div className="icon-form"><i className="fi fi-rr-lock"></i></div>
                        
                        <div className="inputArea">
                            <input type="password" placeholder = 'Enter Password' required name = 'password' onChange = {handleChange} value = {data.password}/>
                        </div>

                    </div>

                    <div className="half-type">

                        <div className="icon-form"><i className="fi fi-rr-lock"></i></div>
                        
                        <div className="inputArea">
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

    );
}

export default Register;
