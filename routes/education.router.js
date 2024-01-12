const express = require("express");

const {
  getEducationPageVN,
  getEducationPageEn,
} = require("../controllers/education.controller");
const educationRouter = express.Router();

educationRouter.get("/reproductiveHeath-vn", getEducationPageVN);
educationRouter.get("/reproductiveHeath-en", getEducationPageEn);

module.exports = {
  educationRouter,
};
