import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useRef } from 'react';

import './App.css'
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Research from './components/Research';
import Feedback from './components/Feedback';
import About from './components/About';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { async } from '@firebase/util';

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
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/messaging' element={
          <main>
            <section className="antique">
              { user ? <ChatRoom /> : <SignIn /> }
            </section>
          </main>
        } />
        <Route path='/research' element={<Research />} />
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
      <p>Sign in with Google to participate in constructive discourse, make friends, and showcase creative ideas.</p>
      <button className="button" onClick={ signInWithGoogle }>Sign in with Google</button>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="button" onClick={ () => auth.signOut() }>Sign Out</button>
  )
}

function ChatRoom() {
  const messageAreaBottom = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    messageAreaBottom.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className='chatroom-message-area'>
        {messages && messages.map(msg => <ChatMessage key={ msg.id } message={ msg } />)}
        <div ref={messageAreaBottom}></div>
      </div>

      <form className='chatroom-form' onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button className='button' type='submit'>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
          </svg>
        </button>
      </form>
      <SignOut />
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'message sent' : 'message received';

  return (<>
    <div className={ messageClass } >
      <img src={ photoURL } alt='' />
      <p>{ text }</p>
    </div>
  </>)
}

export default App;
