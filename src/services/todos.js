
const axios = require('axios');


const getById = async payload => {
    let response;
    const { params: { postId } } = payload;
    try {
        response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
    } catch (error) { console.error(error); }

    return {
        message: `Fetch todos list by id successfully!`,
        data: response.data,
    }
}

const get = async payload => {
    let response;
    try {
        response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    } catch (error) { console.error(error); }

    return {
        message: `Fetch todos list successfully!`,
        data: response.data,
    }
}

const add = async payload => {
    let response;
    try {
        const options = payload.body;
        response = await axios.post('https://jsonplaceholder.typicode.com/todos', options);
    } catch (error) { console.error(error); }

    return {
        message: `Add todos list successfully!`,
        data: response.data,
    }
}

const update = async payload => {
    let response;
    try {
        const payloadBody = payload.body;
        const options = {
            data: payloadBody,
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }
        response = await axios.put(`http://jsonplaceholder.typicode.com/todos/${payloadBody.id}`, options);
    } catch (error) { console.error(error); }

    return {
        message: `Update todos list successfully!`,
        data: response.data?.data,
    }
}

const partialUpdate = async payload => {
    let response;
    try {
        const payloadBody = payload.body;
        const options = {
            body: payloadBody,
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
        }
        response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${payloadBody.id}`, options);
    } catch (error) { console.error(error); }

    return {
        message: `Partially update todo successfully!`,
        data: response.data,
    }
}

const remove = async payload => {
    let response;
    const { query: { id } } = payload;
    try {
        response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(response.status);
    } catch (error) { console.error(error); }

    return {
        message: `Delete todo successfully!`
    }
}


module.exports = { get, getById, add, update, partialUpdate, remove };