"use strict";
const { getAllUsers } = require("./services/user-service");

const healthCheck = async event => "Ok- The client";
const getUsers = async event => {
  const url = process.env.SERVICE_URL || "http://localhost:3000";
  return await getAllUsers(url);
};

module.exports = { healthCheck, getUsers };
