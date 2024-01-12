const express = require("express");

const {
  getTestingFacilityEn,
  getTestingFacilityVn,
} = require("../controllers/testing-facility.controller");

const testingFacilityRouter = express.Router();

testingFacilityRouter.get("/testing-facility-vn", getTestingFacilityVn);
testingFacilityRouter.get("/testing-facility-en", getTestingFacilityEn);

module.exports = {
  testingFacilityRouter,
};
