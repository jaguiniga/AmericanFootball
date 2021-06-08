import React, { useRef, useState,useContext } from 'react';
import {
    auth,  
    getFirebase,
    signInWithGoogle,
    signInWithFacebook,
    firestore,
    timestamp
  } from "../Firebase/firebase";
  import { UserContext } from "../auth/UserProvider";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import "./ChatRoom.css";






function App() {

  const [user] = useAuthState(auth);

  return (
    <div >
      <header>
        <h1>🏈 American Football </h1>
        
    
      </header>

      <section>
        {user ? <ChatRoom /> : <SignInChat />}
      </section>

    </div>
  );
}

function SignInChat() {

  
  return (
    <>
     <h2>Please Sign in to post </h2>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}



function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(15);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: timestamp,
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input 
        value={formValue} 
        onChange={(e) => setFormValue(e.target.value)} 
        placeholder="say something nice" />
      <button type="submit" disabled={!formValue}>🏈 </button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img2 src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;
