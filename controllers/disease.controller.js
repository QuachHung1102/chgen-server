const path = require("path");
const { rootDir1, rootDir2 } = require("../utilities/path");

const getDiseaseVn = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "genetic-diseases-vn.html")
    );
};
const getDiseaseEn = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "genetic-diseases-en.html")
    );
};

const getAllDiseaseVn = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "genetic-diseases-all-vn.html")
    );
};

const getAllDiseaseEn = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "genetic-diseases-all-en.html")
    );
};

const getDiseaseDetailVn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "down.vn.html"));
};

const getDiseaseDetailEn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "down.en.html"));
};

module.exports = {
  getDiseaseVn,
  getDiseaseEn,
  getAllDiseaseEn,
  getAllDiseaseVn,
  getDiseaseDetailVn,
  getDiseaseDetailEn,
};
