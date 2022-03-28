/**
 * @jest-environment ./src/database/mongoose-environment-jest
 */
import request from 'supertest';

import { app } from '../app';

describe('Authenticate User', () => {
  it('should be able to create a jwt token to authenticated user', async () => {
    const userData = {
      name: 'Test',
      address: 'Test Avenue',
      phoneNumber: '+5521999999999',
      email: 'test@test.com',
      password: 'TestSecret',
      cpf: '99999999999',
      socialReason: 'Test Company',
      type: 'ADMIN',
      createdId: '1',
    };

    await request(app).post('/user').send(userData);

    const response = await request(app)
      .post('/auth/login')
      .send({ email: userData.email, password: userData.password });

    expect(response.status).toBe(200);
  });
});
