const { v4: uuidv4 } = require('uuid');
const generateUID = () => uuidv4();
module.exports = generateUID;
