const { test } = require('node:test')
const assert = require('assert')
const request = require('supertest')
const appServer = require('../server')


test('Users return 200', async(t) =>{
    const response = await request(appServer).get('/users')
    assert.equal(response.statusCode,200)
})

test('ValidateUser errors', async (t)=>{
    await test('UserFind return 406', async(t) =>{
        const response = await request(appServer).get('/users/d')
        assert.equal(response.statusCode,406)
    })
    
    await test('UserUpdate return 406', async(t) =>{
        const response = await request(appServer).put('/users/d')
        assert.equal(response.statusCode,406)
    })
})

