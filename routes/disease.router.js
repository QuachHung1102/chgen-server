const express = require("express");

const {
  getDiseaseVn,
  getDiseaseEn,
  getAllDiseaseEn,
  getAllDiseaseVn,
  getDiseaseDetailVn,
  getDiseaseDetailEn,
} = require("../controllers/disease.controller");

const diseaseRouter = express.Router();

diseaseRouter.get("/disease-home-vn", getDiseaseVn);
diseaseRouter.get("/disease-home-en", getDiseaseEn);
diseaseRouter.get("/disease-all-vn", getAllDiseaseVn);
diseaseRouter.get("/disease-all-en", getAllDiseaseEn);
diseaseRouter.get("/disease-detail-vn", getDiseaseDetailVn);
diseaseRouter.get("/disease-detail-en", getDiseaseDetailEn);

module.exports = {
  diseaseRouter,
};
