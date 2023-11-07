import mongoose from 'mongoose';

class MongoService {
  connect() {
    const uri = process.env.MONGO_HOST;
    const dbName = process.env.MONGO_DATABASE;

    try {
      mongoose.connect(uri, { dbName });
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }

    const dbConnection = mongoose.connection;
    dbConnection.once('open', () => {
      console.log(`Database connected: ${uri}`);
    });

    dbConnection.on('error', (err) => {
      console.error(`connection error: ${err}`);
    });
  }
}

export default new MongoService();
