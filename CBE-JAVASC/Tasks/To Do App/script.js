"use strict";

const filterAll = document.getElementById("filterAll");
const filterOpen = document.getElementById("filterOpen");
const filterDone = document.getElementById("filterDone");

const todoInput = document.getElementById("todoInput");

const addTodoBtn = document.getElementById("addTodoBtn");

const todoList = document.querySelector(".todoList");

const removeDoneBtn = document.getElementById("removeDoneBtn");

let todos = [];

function saveTodos() {}
function loadTodos() {}
function addTodos() {}
function renderTodos() {}

function getSelectedFilter() {}

function removeDoneTodos() {}

filterAll.addEventListener("click", renderTodos);
filterOpen.addEventListener("click", renderTodos);
filterDone.addEventListener("click", renderTodos);
addTodoBtn.addEventListener("click", addTodos);
removeDoneBtn.addEventListener("click", removeDoneTodos);

loadTodos();
renderTodos();
