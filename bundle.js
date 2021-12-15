/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createBoardDOM.js":
/*!*******************************!*\
  !*** ./src/createBoardDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createBoardDOM(player, board) {\n  for (var i = 0; i < 10; i++) {\n    var row = document.createElement('div');\n    row.classList.add('row');\n\n    for (var j = 0; j < 10; j++) {\n      var cell = document.createElement('div');\n      cell.id = \"\".concat(i * 10 + j);\n\n      if (player.playerInfo.name == 'cpu') {\n        cell.classList.add('cpu');\n      } else {\n        cell.classList.add('player');\n      }\n\n      ;\n      row.appendChild(cell);\n    }\n\n    ;\n    board.appendChild(row);\n  }\n\n  ;\n\n  if (player.playerInfo.name == 'cpu') {\n    return;\n  } else {\n    var title = document.querySelector('.player-name');\n    title.textContent = \"\".concat(player.playerInfo.name);\n  }\n\n  ;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoardDOM);\n\n//# sourceURL=webpack://battleship/./src/createBoardDOM.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction GameBoard() {\n  var boardInfo = {\n    board: [],\n    missed: []\n  };\n\n  var initBoard = function initBoard() {\n    for (var i = 0; i < 100; i++) {\n      boardInfo.board.push({\n        ship: false,\n        isHit: false\n      });\n    }\n  };\n\n  if (boardInfo.board.length === 0) {\n    initBoard();\n  }\n\n  ;\n\n  var placeShip = function placeShip(ship, position) {\n    if (!ship.isVertical) {\n      for (var i = 0; i < ship.length; i++) {\n        boardInfo.board[position + i].ship = ship.type;\n      }\n\n      ;\n    } else if (ship.isVertical) {\n      for (var _i = 0; _i < ship.length * 10; _i += 10) {\n        boardInfo.board[position + _i].ship = ship.type;\n      }\n    }\n  };\n\n  var receiveAttack = function receiveAttack(position) {\n    if (boardInfo.board[position].ship && !boardInfo.board[position].isHit) {\n      boardInfo.board[position].isHit = true;\n    } else if (boardInfo.board[position].ship && boardInfo.board[position].isHit) {\n      return;\n    } else {\n      boardInfo.missed.push(position);\n    }\n  };\n\n  var allShipsSunk = function allShipsSunk() {\n    for (var i = 0; i < 100; i++) {\n      if (boardInfo.board[i].ship && !boardInfo.board[i].isHit) {\n        return false;\n      }\n    }\n\n    return true;\n  };\n\n  return {\n    boardInfo: boardInfo,\n    initBoard: initBoard,\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    allShipsSunk: allShipsSunk\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createBoardDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBoardDOM */ \"./src/createBoardDOM.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _newGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newGame */ \"./src/newGame.js\");\n/* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playGame */ \"./src/playGame.js\");\n\n\n\n\n\nvar gameboards = (0,_newGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nvar playerGameBoard = gameboards.playerGameBoard;\nvar cpuGameBoard = gameboards.cpuGameBoard;\nvar player = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Human');\nvar cpu = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('cpu');\nvar playerGameBoardDOM = document.querySelector(\".player-board\");\nvar cpuGameBoardDOM = document.querySelector(\".cpu-board\");\n(0,_createBoardDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player, playerGameBoardDOM);\n(0,_createBoardDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cpu, cpuGameBoardDOM);\ngameboards.addListeners();\ngameboards.placeCPUShips();\n(0,_playGame__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(player, playerGameBoard, cpu, cpuGameBoard);\nvar button = document.querySelector('.new-game');\nbutton.addEventListener('click', function () {\n  location.reload();\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/newGame.js":
/*!************************!*\
  !*** ./src/newGame.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n\nfunction NewGame() {\n  var playerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var cpuGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var status = document.querySelector('.status');\n  status.textContent = 'Please place your ships...'; // Start with ship with longest length\n\n  var current = {\n    type: 'carrier',\n    length: 5,\n    isVertical: false\n  }; // Display ship when hover\n\n  var displayShip = function displayShip(length, position) {\n    var hovered = document.querySelectorAll('.hovered');\n\n    for (var i = 0; i < hovered.length; i++) {\n      hovered[i].classList.remove('hovered');\n    }\n\n    ; // If ship is vertical\n\n    if (current.isVertical) {\n      // Within boundary\n      if (position + (length - 1) * 10 > 100) {\n        return;\n      }\n\n      ; // Check whether ship present then add .hovered class\n\n      for (var _i = position; _i < position + length * 10; _i += 10) {\n        var cell = document.querySelector(\".player[id='\".concat(_i, \"']\"));\n\n        if (cell.classList.contains('ship')) {\n          return;\n        }\n\n        ;\n        cell.classList.add('hovered');\n      }\n\n      ;\n    }\n\n    ; // If ship is horizontal\n\n    if (!current.isVertical) {\n      // Within boundary\n      if (position + length - 1 >= Math.ceil(position / 10) * 10 && position % 10 != 0) {\n        return;\n      }\n\n      ; // Check whether ship present then add .hovered class\n\n      for (var _i2 = position; _i2 < position + length; _i2++) {\n        var _cell = document.querySelector(\".player[id='\".concat(_i2, \"']\"));\n\n        if (_cell.classList.contains('ship')) {\n          return;\n        }\n\n        ;\n\n        _cell.classList.add('hovered');\n      }\n\n      ;\n    }\n\n    ;\n  };\n\n  var hoverShips = function hoverShips(e) {\n    var position = Number(e.target.id);\n\n    if (current.type == 'carrier') {\n      displayShip(5, position);\n    } else if (current.type == 'battleship') {\n      displayShip(4, position);\n    } else if (current.type == 'destroyer') {\n      displayShip(3, position);\n    } else if (current.type == 'submarine') {\n      displayShip(3, position);\n    } else if (current.type == 'patrol') {\n      displayShip(2, position);\n    }\n\n    ;\n  };\n\n  var placeShips = function placeShips(e) {\n    var status = document.querySelector('.status');\n\n    if (!e.target.classList.contains('hovered')) {\n      return;\n    }\n\n    ;\n    var hovered = document.querySelectorAll('.hovered');\n\n    for (var i = 0; i < hovered.length; i++) {\n      hovered[i].classList.remove('hovered');\n    }\n\n    ;\n    var position = Number(e.target.id);\n\n    if (current.type == 'carrier') {\n      var carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('carrier', 5, current.isVertical);\n      playerGameBoard.placeShip(carrier, position);\n      current.type = 'battleship';\n    } else if (current.type == 'battleship') {\n      var battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('battleship', 4, current.isVertical);\n      playerGameBoard.placeShip(battleship, position);\n      current.type = 'destroyer';\n    } else if (current.type == 'destroyer') {\n      var destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('destroyer', 3, current.isVertical);\n      playerGameBoard.placeShip(destroyer, position);\n      current.type = 'submarine';\n    } else if (current.type == 'submarine') {\n      var submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('submarine', 3, current.isVertical);\n      playerGameBoard.placeShip(submarine, position);\n      current.type = 'patrol';\n    } else if (current.type == 'patrol') {\n      var patrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('patrol', 2, current.isVertical);\n      playerGameBoard.placeShip(patrol, position);\n      current.type = '';\n      status.textContent = 'Battle!';\n    }\n\n    ;\n    current.length--;\n\n    for (var _i3 = 0; _i3 < 100; _i3++) {\n      var cell = document.querySelector(\".player[id='\".concat(_i3, \"']\"));\n\n      if (playerGameBoard.boardInfo.board[_i3].ship != false) {\n        cell.classList.add('ship');\n      }\n\n      ;\n    }\n\n    ;\n  }; // Change orientation button\n\n\n  var orientation = document.querySelector('.orientation');\n  orientation.addEventListener('click', function () {\n    current.isVertical = !current.isVertical;\n  });\n\n  var addListeners = function addListeners() {\n    document.querySelectorAll('.player').forEach(function (cell) {\n      cell.addEventListener('mouseover', hoverShips);\n      cell.addEventListener('click', placeShips);\n    });\n  }; // CPU ships\n\n\n  var placeCPUShips = function placeCPUShips() {\n    var carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"carrier\", 5, Math.random() < 0.5);\n    var battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"battleship\", 4, Math.random() < 0.5);\n    var destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"destroyer\", 3, Math.random() < 0.5);\n    var submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"submarine\", 3, Math.random() < 0.5);\n    var patrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"patrol\", 2, Math.random() < 0.5);\n\n    var randomPosition = function randomPosition() {\n      return Math.floor(Math.random() * 100);\n    };\n\n    var isEmpty = function isEmpty(ship, position) {\n      if (position + ship.length * 10 > 100) {\n        return false;\n      }\n\n      ;\n\n      if (position + ship.length - 1 >= Math.ceil(position / 10) && position % 10 != 0) {\n        return false;\n      }\n\n      ;\n\n      if (ship.isVertical) {\n        for (var i = position; i < position + ship.length * 10; i += 10) {\n          var cell = document.querySelector(\".cpu[id='\".concat(i, \"']\"));\n\n          if (cell.classList.contains('ship')) {\n            return false;\n          }\n\n          ;\n        }\n      } else {\n        for (var _i4 = position; _i4 < position + ship.length; _i4++) {\n          var _cell2 = document.querySelector(\".cpu[id='\".concat(_i4, \"']\"));\n\n          if (_cell2.classList.contains('ship')) {\n            return false;\n          }\n\n          ;\n        }\n\n        ;\n      }\n\n      ;\n      return true;\n    };\n\n    var getCPUPosition = function getCPUPosition(ship) {\n      var position = randomPosition();\n\n      if (ship.isVertical) {\n        while (position + ship.length * 10 > 100 && !isEmpty(ship, position)) {\n          position = randomPosition();\n        }\n\n        ;\n      } else {\n        while (position + ship.length - 1 >= Math.ceil(position / 10) * 10 && position % 10 != 0 && !isEmpty(ship, position)) {\n          position = randomPosition();\n        }\n\n        ;\n      }\n\n      ;\n      return position;\n    };\n\n    var position = getCPUPosition(carrier);\n    cpuGameBoard.placeShip(carrier, position);\n    position = getCPUPosition(battleship);\n    cpuGameBoard.placeShip(battleship, position);\n    position = getCPUPosition(destroyer);\n    cpuGameBoard.placeShip(destroyer, position);\n    position = getCPUPosition(submarine);\n    cpuGameBoard.placeShip(submarine, position);\n    position = getCPUPosition(patrol);\n    cpuGameBoard.placeShip(patrol, position); // for (let i = 0; i < 100; i++) {\n    //   const cell = document.querySelector(`.cpu[id='${i}']`);\n    //   if (cpuGameBoard.boardInfo.board[i].ship != false) {\n    //     cell.classList.add('ship');\n    //   };\n    // };\n  };\n\n  return {\n    playerGameBoard: playerGameBoard,\n    cpuGameBoard: cpuGameBoard,\n    addListeners: addListeners,\n    placeCPUShips: placeCPUShips\n  };\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewGame);\n\n//# sourceURL=webpack://battleship/./src/newGame.js?");

/***/ }),

/***/ "./src/playGame.js":
/*!*************************!*\
  !*** ./src/playGame.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction playGame(player, playerGameBoard, cpu, cpuGameBoard) {\n  var checkMissed = function checkMissed() {\n    var _iterator = _createForOfIteratorHelper(playerGameBoard.boardInfo.missed),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var i = _step.value;\n        document.querySelector(\".player[id='\".concat(i, \"']\")).classList.add('missed');\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    ;\n\n    var _iterator2 = _createForOfIteratorHelper(cpuGameBoard.boardInfo.missed),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var _i = _step2.value;\n        document.querySelector(\".cpu[id='\".concat(_i, \"']\")).classList.add('missed');\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    ;\n  };\n\n  var checkHit = function checkHit() {\n    for (var i = 0; i < 100; i++) {\n      if (playerGameBoard.boardInfo.board[i].isHit) {\n        document.querySelector(\".player[id='\".concat(i, \"']\")).classList.add('hit');\n      }\n\n      ;\n\n      if (cpuGameBoard.boardInfo.board[i].isHit) {\n        document.querySelector(\".cpu[id='\".concat(i, \"']\")).classList.add('hit');\n      }\n\n      ;\n    }\n\n    ;\n  };\n\n  var checkWin = function checkWin() {\n    var status = document.querySelector('.status');\n\n    if (playerGameBoard.allShipsSunk()) {\n      status.textContent = 'Computer Wins!';\n    } else if (cpuGameBoard.allShipsSunk()) {\n      status.textContent = \"\".concat(player.playerInfo.name, \" Wins!\");\n      document.querySelectorAll('.cpu').forEach(function (cell) {\n        cell.removeEventListener('click', playerPlay);\n      });\n    }\n\n    ;\n  };\n\n  var cpuPlay = function cpuPlay() {\n    playerGameBoard.receiveAttack(cpu.randomMove());\n    checkMissed();\n    checkHit();\n    checkWin();\n  };\n\n  var playerPlay = function playerPlay(e) {\n    var status = document.querySelector('.status');\n    var position = Number(e.target.id);\n\n    if (status.textContent == 'Battle!') {\n      cpuGameBoard.receiveAttack(position);\n      checkMissed();\n      checkHit();\n      checkWin();\n      cpuPlay();\n    }\n  };\n\n  document.querySelectorAll('.cpu').forEach(function (cell) {\n    cell.addEventListener('click', playerPlay);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playGame);\n\n//# sourceURL=webpack://battleship/./src/playGame.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Player(name) {\n  var playerInfo = {\n    name: name,\n    prevShots: []\n  };\n\n  var getRandom = function getRandom() {\n    return Math.floor(Math.random() * 100);\n  };\n\n  var randomMove = function randomMove() {\n    var position = getRandom();\n\n    while (playerInfo.prevShots.includes(position)) {\n      position = getRandom();\n    }\n\n    ;\n    playerInfo.prevShots.push(position);\n    return position;\n  };\n\n  return {\n    playerInfo: playerInfo,\n    randomMove: randomMove\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(type, length, isVertical) {\n  var hits = [];\n\n  var hit = function hit(position) {\n    if (hits.includes(position) || position < 0 || position >= length) {\n      return;\n    }\n\n    ;\n    hits.push(position);\n  };\n\n  var isSunk = function isSunk() {\n    return hits.length === length;\n  };\n\n  return {\n    type: type,\n    length: length,\n    isVertical: isVertical,\n    hits: hits,\n    hit: hit,\n    isSunk: isSunk\n  };\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n\\t--bg: #282828;\\n\\t--text: #ebdbb2;\\n\\t--cell: #fabd2f;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tbox-sizing: border-box;\\n}\\n\\nbutton {\\n\\tbackground-color: var(--text);\\n\\toutline: none;\\n\\tborder: none;\\n\\tpadding: 0.9em 1em;\\n\\tcursor: pointer;\\n\\tfont-family: inherit;\\n}\\n\\nhtml {\\n\\theight: 100%;\\n}\\n\\nbody {\\n\\tmin-height: 100%;\\n\\tbackground-color: var(--bg);\\n\\tcolor: var(--text);\\n\\tfont-family: \\\"Press Start 2P\\\";\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\nheader {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tgap: 20px;\\n\\tpadding-top: 30px;\\n\\tfont-size: 1.1em;\\n}\\n\\n.status {\\n\\tcolor: white;\\n\\tpadding-top: 20px;\\n}\\n\\n.new-game {\\n\\tmargin-top: 50px;\\n}\\n\\nmain {\\n\\tdisplay: flex;\\n\\tflex: 1;\\n}\\n\\n.left-container,\\n.right-container {\\n\\twidth: 100%;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: space-evenly;\\n\\talign-items: center;\\n\\tflex: 1;\\n}\\n\\n.title {\\n\\tfont-size: 1.3em;\\n}\\n\\n.board {\\n\\tborder: 3px solid var(--cell);\\n\\theight: 350px;\\n\\twidth: 350px;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tcursor: pointer;\\n}\\n\\n.row {\\n\\tflex: 1;\\n\\tdisplay: flex;\\n}\\n\\n.player,\\n.cpu {\\n\\tborder: 1px solid var(--cell);\\n\\tflex: 1;\\n}\\n\\n.hide {\\n\\tvisibility: hidden;\\n}\\n\\n.hovered {\\n\\tbackground-color: var(--cell);\\n}\\n\\n.ship {\\n\\tbackground-color: var(--cell);\\n}\\n\\n.hit {\\n\\tbackground-color: red;\\n}\\n\\n.missed {\\n\\tbackground-color: var(--text);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;