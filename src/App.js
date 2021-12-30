import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Piano from './components/Piano';
import Feedback from './components/Feedback';
import About from './components/About';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyASbVGnoqXjQljVjgy44uE4RpPAuPEWJQg",
  authDomain: "jpthefishdemo1.firebaseapp.com",
  projectId: "jpthefishdemo1",
  storageBucket: "jpthefishdemo1.appspot.com",
  messagingSenderId: "57659623095",
  appId: "1:57659623095:web:1974a271dabb5191616f32"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/piano' element={<Piano />} />
        <Route path='/messaging' element={
          <main>
            <section className="antique">
              { user ? <ChatRoom /> : <SignIn /> }
            </section>
          </main>
        } />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <h1>Welcome to the Chatroom</h1>
      <p>Sign in with Google to participate in constructive discourse of any kind with an inviting community. Be mindful, however, of language/vulgarity lest you are banned.</p>
      <button onClick={ signInWithGoogle }>Sign in with Google</button>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={ () => auth.signOut() }>Sign Out</button>
  )
}

function ChatRoom() {
  return (
    <>
      <p>Yell heah</p>
      <SignOut />
    </>
  )
}

export default App;
