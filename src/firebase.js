import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAAvy3NEaLz4R5C7dY_e18MhM-OGCd-WD4',
	authDomain: 'luberchenko-cv-react-firebase.firebaseapp.com',
	databaseURL:
		'https://luberchenko-cv-react-firebase-default-rtdb.firebaseio.com',
	projectId: 'luberchenko-cv-react-firebase',
	storageBucket: 'luberchenko-cv-react-firebase.appspot.com',
	messagingSenderId: '32629010980',
	appId: '1:32629010980:web:4e28b2a1001fedd67b1eb1',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)

export { app, database, storage }
