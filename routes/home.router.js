const express = require("express");

const {
  getHomePageVN,
  getHomePageEn,
} = require("../controllers/home.controller");
const homeRouter = express.Router();

homeRouter.get("/home-vn", getHomePageVN);
homeRouter.get("/home-en", getHomePageEn);

module.exports = {
  homeRouter,
};
