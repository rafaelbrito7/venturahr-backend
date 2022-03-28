import mongoose from 'mongoose';

const mongoDbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL as string)
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
