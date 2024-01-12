"use strict";

const getEleById = (id) => {
  return document.getElementById(id);
};
const getEleByCl = (cls) => {
  return document.getElementsByClassName(cls);
};

getEleById("table-1").addEventListener("click", () => {
  getEleById("table-1").classList.add("button--yellow");
  getEleById("table-1").classList.remove("button--white");
  getEleById("table-2").classList.add("button--white");
  getEleById("table-2").classList.remove("button--yellow");
  getEleById("table-3").classList.add("button--white");
  getEleById("table-3").classList.remove("button--yellow");
  getEleById("table-infomation-1").style.display = "block";
  getEleById("table-infomation-2").style.display = "none";
  getEleById("table-infomation-3").style.display = "none";
});
getEleById("table-2").addEventListener("click", () => {
  getEleById("table-2").classList.add("button--yellow");
  getEleById("table-2").classList.remove("button--white");
  getEleById("table-1").classList.add("button--white");
  getEleById("table-1").classList.remove("button--yellow");
  getEleById("table-3").classList.add("button--white");
  getEleById("table-3").classList.remove("button--yellow");
  getEleById("table-infomation-1").style.display = "none";
  getEleById("table-infomation-2").style.display = "block";
  getEleById("table-infomation-3").style.display = "none";
});
getEleById("table-3").addEventListener("click", () => {
  getEleById("table-3").classList.add("button--yellow");
  getEleById("table-3").classList.remove("button--white");
  getEleById("table-1").classList.add("button--white");
  getEleById("table-1").classList.remove("button--yellow");
  getEleById("table-2").classList.add("button--white");
  getEleById("table-2").classList.remove("button--yellow");
  getEleById("table-infomation-1").style.display = "none";
  getEleById("table-infomation-2").style.display = "none";
  getEleById("table-infomation-3").style.display = "block";
});