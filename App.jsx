import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';  // Import Firebase Database if needed

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAX6MHf52mQe10ZOZ1cnqxzLnZblUVQVO8',
  authDomain: 'escortcorp-mindustry.firebaseapp.com',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'escortcorp-mindustry',
  storageBucket: 'escortcorp-mindustry.firebasestorage.app',
  messagingSenderId: '629401476453',
  appId: '1:629401476453:web:351c4d392fed459aa6158c'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <div>
      <h1>Hello from App component!</h1>
    </div>
  );
};

export default App;
