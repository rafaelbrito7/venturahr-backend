/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const NodeEnvironment = require('jest-environment-node');
const { MongoClient } = require('mongodb');
const { resolve } = require('path');

require('dotenv').config({
  path: resolve(__dirname, '..', '..', '.env.test'),
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.connectionString = `${process.env.DATABASE_URL}`;
    this.client = null;
  }

  async setup() {
    await super.setup();
    this.client = await MongoClient.connect(this.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async teardown() {
    const db = this.client.db();

    await db.dropDatabase();
    await this.client.close();
  }
}

module.exports = CustomEnvironment;
