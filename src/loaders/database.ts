import mongoose from 'mongoose';

const connectionURL =
  'mongodb://mongoadmin:root@localhost:27017/venturahR?authSource=admin';

const mongoDbConnection = () => {
  mongoose
    .connect(connectionURL)
    .then(() => {
      console.log('Successfully connected to MongoDB');
    })
    .catch(error => {
      console.log('Connection failed. Exiting now...');
      console.error(error);
      process.exit(1);
    });
};

export { mongoDbConnection };
