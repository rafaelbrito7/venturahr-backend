/**
 * @jest-environment ./src/database/mongoose-environment-jest
 */

import request from 'supertest';

import { app } from '../app';
import { userType } from '../types/User';

jest.setTimeout(10000000);

describe('Create User Controller', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      name: 'Test',
      address: 'Test Avenue',
      phoneNumber: '+5521999999999',
      email: 'test@test.com',
      password: 'TestSecret',
      cpf: '99999999999',
      type: userType.Contractor,
      createdId: '1',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  it('should not be able to create an existing user', async () => {
    await request(app).post('/user').send({
      name: 'ExistingTest',
      address: 'Existing Test Avenue',
      phoneNumber: '+5521999999999',
      email: 'testexisting@test.com',
      password: 'ExistingTestSecret',
      cnpj: '99999999999',
      socialReason: 'Existing Test Company',
      type: userType.Contractor,
    });

    const response = await request(app).post('/user').send({
      name: 'ExistingTest',
      address: 'Existing Test Avenue',
      phoneNumber: '+5521999999999',
      email: 'testexisting@test.com',
      password: 'ExistingTestSecret',
      cnpj: '99999999999',
      socialReason: 'Existing Test Company',
      type: userType.Contractor,
    });

    expect(response.status).toBe(409);
    expect(response.body.message).toBe('User already exist.');
  });

  it('should be able to find an existing user', async () => {
    const user = await request(app).post('/user').send({
      name: 'ExistingTest',
      address: 'Existing Test Avenue',
      phoneNumber: '+5521999999999',
      email: 'testexisting@test.com',
      password: 'ExistingTestSecret',
      cnpj: '99999999999',
      socialReason: 'Existing Test Company',
      type: userType.Contractor,
    });

    const response = await request(app).get('/user').send(user.body.id);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });
});
