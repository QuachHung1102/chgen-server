const express = require("express");

const {
  getBasicGeneticVn,
  getBasicGeneticEn,
  getChromosomeListVn,
  getChromosomeListEn,
  getNstDetailVn,
  getNstDetailEn,
} = require("../controllers/genetics-library.controller");

const geneticLibraryRouter = express.Router();

geneticLibraryRouter.get("/basic-genetic-vn", getBasicGeneticVn);
geneticLibraryRouter.get("/basic-genetic-en", getBasicGeneticEn);
geneticLibraryRouter.get("/chromosome-list-vn", getChromosomeListVn);
geneticLibraryRouter.get("/chromosome-list-en", getChromosomeListEn);
geneticLibraryRouter.get("/nst-vn/:id", getNstDetailVn);
geneticLibraryRouter.get("/nst-en/:id", getNstDetailEn);

module.exports = {
  geneticLibraryRouter,
};
