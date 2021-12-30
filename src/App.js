import './App.css'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// import Body from './components/Body';

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
    <>
      <Navigation />
      {/* <Body /> */}
      <section className="antique">
        { user ? <ChatRoom /> : <SignIn /> }
      </section>
      <Footer />
    </>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={ signInWithGoogle }>Sign in with Google</button>
  )
}

function ChatRoom() {
  
}

export default App;
