'use strict';

const Request = require('../request/_request')

const action = async( context, params ) => {

  const todo = await (new Request( 'https://jsonplaceholder.typicode.com/todos/1' )).request()

  return {
    page: 'index',
    params,
    todo: todo,
    redirect: todo.id === 1 ? '/test' : null
  }
};

module.exports = action;
