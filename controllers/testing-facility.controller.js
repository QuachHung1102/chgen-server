const path = require("path");
const { rootDir1, rootDir2 } = require("../utilities/path");

const getTestingFacilityVn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "cosoxetnghiem-vn.html"));
};

const getTestingFacilityEn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "cosoxetnghiem-en.html"));
};

module.exports = {
  getTestingFacilityVn,
  getTestingFacilityEn,
};
