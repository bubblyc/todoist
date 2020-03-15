import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBOgd5cRqvNubskl91T_CPymJOaICffT3c",
    authDomain: "trying-react-todoist.firebaseapp.com",
    databaseURL: "https://trying-react-todoist.firebaseio.com",
    projectId: "trying-react-todoist",
    storageBucket: "trying-react-todoist.appspot.com",
    messagingSenderId: "498031247100",
    appId: "1:498031247100:web:bba168432afbfb96a0e179",
});

export { firebaseConfig as firebase };