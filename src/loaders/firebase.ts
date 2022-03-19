import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBZE1x7AwjLv8bVgWL8L2bdaGK-3O4BIE0',
  authDomain: 'venturahr-77f5d.firebaseapp.com',
  projectId: 'venturahr-77f5d',
  storageBucket: 'venturahr-77f5d.appspot.com',
  messagingSenderId: '480650234926',
  appId: '1:480650234926:web:c3ff3fe980df5420c023bf',
};

const firebaseInitialization = () => {
  initializeApp(firebaseConfig);
};

export { firebaseInitialization };
