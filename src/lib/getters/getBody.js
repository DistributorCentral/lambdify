const get = require('./../get');
const parseJson = require('./../parseJson');

module.exports = (event) => parseJson(get(event, 'body', '{}'));
