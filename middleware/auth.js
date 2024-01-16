const jwt = require("jsonwebtoken");
const secret = "aasdasfsdgsdfafsfasfs";
const createToken = (data) => {
  const token = jwt.sign({ data }, secret);

  return token;
  console.log(token);
};

module.exports = { createToken };
