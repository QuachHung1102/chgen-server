const express = require("express");

const { homeRouter } = require("./home.router");
const { educationRouter } = require("./education.router");
const { testingFacilityRouter } = require("./testing-facility.router");
const { diseaseRouter } = require("./disease.router");
const { geneticLibraryRouter } = require("./genetics-library.router");
const rootRouter = express.Router();

rootRouter.use("/home", homeRouter);
rootRouter.use("/education", educationRouter);
rootRouter.use("/", testingFacilityRouter);
rootRouter.use("/genetics-disease", diseaseRouter);
rootRouter.use("/genetics-library", geneticLibraryRouter);
module.exports = {
  rootRouter,
};
