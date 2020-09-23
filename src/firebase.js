import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCKi9hAVcbRFfeAz-r39xquqDm9OlLvgYc',
	authDomain: 'clone-1ad28.firebaseapp.com',
	databaseURL: 'https://clone-1ad28.firebaseio.com',
	projectId: 'clone-1ad28',
	storageBucket: 'clone-1ad28.appspot.com',
	messagingSenderId: '515557045563',
	appId: '1:515557045563:web:7f25a4679034638c1e731e',
	measurementId: 'G-1WPW9GNK78',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
