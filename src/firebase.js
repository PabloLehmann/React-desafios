import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCYnnmN0qDgWyuRr5lZLBAQOZA-SZ5R9eU",
    authDomain: "galeria-lehmann.firebaseapp.com",
    projectId: "galeria-lehmann",
    storageBucket: "galeria-lehmann.appspot.com",
    messagingSenderId: "466454427880",
    appId: "1:466454427880:web:519530ec13489e3219315d"
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
