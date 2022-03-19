import { mongoDbConnection } from './loaders/database';
import { expressLoader, expressListen } from './loaders/express';
import { firebaseInitialization } from './loaders/firebase';

const app = expressLoader();

firebaseInitialization();

mongoDbConnection();

expressListen(app);
