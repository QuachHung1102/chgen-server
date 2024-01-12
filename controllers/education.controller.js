const path = require("path");
const { rootDir1, rootDir2 } = require("../utilities/path");

const getEducationPageVN = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "reproductive-education-vn.html")
    );
};

const getEducationPageEn = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "reproductive-education-en.html")
    );
};

module.exports = {
  getEducationPageVN,
  getEducationPageEn,
};
