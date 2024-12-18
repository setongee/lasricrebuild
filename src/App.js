import './App.css';
import React, {useState, useEffect} from 'react';

// styles
import './global/styles/pageBrief.scss';

//components
import Header from './components/header/header';
import Router from './routes/routes';
import Footer from './components/footer/footer';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from './api/firebase/config';
import QuickInfo from './components/header/quickInfo';
import { useLocation } from 'react-router-dom';
import { getCurrentCohortNumber } from './api/firebase/admin/admin_applications';

function App() {

  const [authenticate, setAuthenticate] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [uid, setUID] = useState('');
  const [track, setTrack] = useState("users")

  const auth = getAuth();
  const {pathname} = useLocation()

  const [cohort, setCohort] = useState("");
  
  onAuthStateChanged(auth, (user) => {

      if (user) {
        setAuthenticate(true)
        setUID(user.uid)
        setTrack(user.displayName)
        //onSnapshot(doc(db, "users", user.uid), setChangedAuth(!changedAuth));  

      } else {
        setAuthenticate(false)
      }
  })
  
  useEffect(() => {

    //getUser(uid).then(user => setCurrentUser(user));
    
    if(uid !== '') {

      onSnapshot(doc(db, "users", uid), (doc) => {
          setCurrentUser(doc.data());
      });

    }
    
  }, [uid, authenticate, track])

  useEffect(() => {
    
    window.scroll(0,0);

  }, [pathname]);


  useEffect(() => {
        
    getCurrentCohortNumber()
    .then( res => setCohort(res[0].present) )

}, []);
  

  return (
    
    <div className="app">

      <div className={`fixedClass client_${pathname.split('/')[1]}`}>
        
        <QuickInfo cohort = {cohort} />
        <Header user = {currentUser} cohort = {cohort} />

      </div>

      <Router user = {currentUser} cohort = {cohort} />
      
      <Footer/>

    </div>

  );

}

export default App;
