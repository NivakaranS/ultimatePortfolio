import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDyOyBvWHQgPdNXWC_bybiYaG24hClXypg",
    authDomain: "portfolio-a26f2.firebaseapp.com",
    databaseURL: "https://portfolio-a26f2-default-rtdb.firebaseio.com",
    projectId: "portfolio-a26f2",
    storageBucket: "portfolio-a26f2.appspot.com",
    messagingSenderId: "392259755590",
    appId: "1:392259755590:web:287394ca7faa77b2e27447",
    measurementId: "G-2KW15QM7J3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };