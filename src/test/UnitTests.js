// userTests.js

const axios = require('axios');
import { expect } from 'chai';


describe('User Registration', () => {
  it('should register a new user successfully', async () => {
    const userData = { username: 'testuser', password: 'testpassword' };

    const response = await axios.post('http://localhost:9090/api/v1/customer/add', userData);

    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('admin', 'admin');
    
  });
});

describe('User Sign-In', () => {
  it('should sign in an existing user successfully', async () => {
    const username = 'admin';
    const password = 'admin';

    const url = `http://localhost:9090/api/v1/customer/get?email=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const response = await axios.get(url);

    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('admin', 'admin');
  
  });
});

describe('User Deletion', () => {
  it('should delete an existing user successfully', async () => {
    const username = 'admin';

    const response = await axios.delete(`http://localhost:8080/api/v1/customer/delete?i=${username}`);

    expect(response.status).to.equal(200);
    // Add more assertions as needed
  });
});
