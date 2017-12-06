/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// =============\n// JS\n// =============\n\n__webpack_require__(1);\n// import \"./app\";\n\n\n// =============\n// SCSS\n// =============\n\n__webpack_require__(2);\n__webpack_require__(3);\n// import \"../scss/main.scss\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0EsbUJBQUFBLENBQVEsQ0FBUjtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09XG4vLyBKU1xuLy8gPT09PT09PT09PT09PVxuXG5yZXF1aXJlKCcuL2pzL2FwcC5qcycpO1xuLy8gaW1wb3J0IFwiLi9hcHBcIjtcblxuXG4vLyA9PT09PT09PT09PT09XG4vLyBTQ1NTXG4vLyA9PT09PT09PT09PT09XG5cbnJlcXVpcmUoJy4vc2Nzcy9yZXNldC5zY3NzJyk7XG5yZXF1aXJlKCcuL3Njc3MvbWFpbi5zY3NzJyk7XG4vLyBpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// IDEA: save categories' elements in an object on creation that can later be referenced\n\nvar helpers = {\n  generateUniqueID: function uuidv4() {\n    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {\n      return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);\n    });\n  }\n};\n\nvar UI = setUpUI();\nUI.init();\n\nvar App = setUpApp(UI);\nApp.init();\n\n// ********************\n\nfunction setUpUI() {\n  var header;\n  var counterChecked;\n  var counterTotal;\n  var categoriesList;\n  var documentsList;\n  var clothingList;\n  var toiletriesList;\n  var electronicsList;\n  var miscList;\n  var categories;\n  var categoryNames;\n  var addBtns;\n  var categoryListLookup;\n\n  var publicAPI = {\n    init: initUI,\n    createItemAndAddToList: createItemAndAddToList,\n    refreshCounter: refreshCounter\n  };\n\n  return publicAPI;\n\n  // ********************\n\n  function initUI() {\n    header = document.querySelector('.header');\n    counterChecked = document.querySelector('.counter__checked');\n    counterTotal = document.querySelector('.counter__total');\n\n    categoriesList = document.querySelector('.categories-list');\n    documentsList = document.querySelector('#documents .category__list');\n    clothingList = document.querySelector('#clothing .category__list');\n    toiletriesList = document.querySelector('#toiletries .category__list');\n    electronicsList = document.querySelector('#electronics .category__list');\n    miscList = document.querySelector('#misc .category__list');\n\n    categories = document.querySelectorAll('.category');\n    categoryNames = document.querySelectorAll('.category__name');\n    addBtns = document.querySelectorAll('.category__toggle-form-btn');\n\n    _initCategories();\n    _setHeights();\n    window.addEventListener('resize', _setHeights);\n  }\n\n  function _initCategories() {\n    categories.forEach(function (category) {\n      var category = category.id;\n      var name = document.querySelector('#' + category + ' .category__name');\n      var drawer = document.querySelector('#' + category + ' .category__drawer');\n      var list = document.querySelector('#' + category + ' .category__list');\n      var toggleFormBtn = document.querySelector('#' + category + ' .category__toggle-form-btn');\n      var addItemForm = document.querySelector('#' + category + ' .category__add-item-form');\n      var addItemInput = document.querySelector('#' + category + ' .category__add-item-input');\n\n      name.addEventListener('click', function () {\n        _toggleElement(drawer);\n      });\n      toggleFormBtn.addEventListener('click', function (event) {\n        event.stopPropagation();\n        _toggleElement(addItem);\n      });\n      addItemForm.addEventListener('submit', function (event) {\n        event.preventDefault();\n        var item = {\n          name: addItemInput.value,\n          category: category\n        };\n        App.createItemAndAddToList(item);\n        addItemInput.value = '';\n      });\n    });\n  }\n\n  function _toggleElement(element) {\n    element.classList.toggle('open');\n    if (element.style.maxHeight) {\n      element.style.maxHeight = null;\n    } else {\n      element.style.maxHeight = element.scrollHeight + 'px';\n    }\n  }\n\n  function createItemAndAddToList(item) {\n    // create item\n    var node = document.createElement('div');\n    var checkedAttr = item.completed ? 'checked' : '';\n    var content = '\\n      <input class=\"item__checkbox\" type=\"checkbox\" id=\"' + item.uniqueID + '\" ' + checkedAttr + ' />\\n      <label class=\"item__name\" for=\"' + item.uniqueID + '\">' + item.name + '</label>\\n    ';\n    node.classList.add('item');\n    node.innerHTML = content;\n    node.addEventListener('change', _notifyCounter);\n\n    // add to list\n    var container = document.querySelector('#' + item.category + ' .category__list-container');\n    var list = document.querySelector('#' + item.category + ' .category__list');\n    list.prepend(node);\n    if (container.classList.contains('open')) {\n      container.style.maxHeight = list.scrollHeight + 'px';\n    }\n  }\n\n  function _notifyCounter() {\n    var itemCheckbox = this.children[0];\n    App.updateCounter(itemCheckbox.checked);\n  }\n\n  function refreshCounter(counter) {\n    counterChecked.innerText = counter.checked;\n    counterTotal.innerText = counter.total;\n  }\n\n  function _setHeights() {\n    var categoriesListHeight = window.innerHeight - 60;\n    var categoryHeight = categoriesListHeight / categories.length;\n    categoryNames.forEach(function (name) {\n      name.style.height = categoryHeight + 'px';\n    });\n  }\n}\n\n// ********************\n\nfunction setUpApp(UI) {\n  var tasklistItems = [{\n    uniqueID: 0,\n    name: 'fake item',\n    category: 'misc',\n    completed: false\n  }, {\n    uniqueID: 1,\n    name: 'toothbrush',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 2,\n    name: 'toothpaste',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 3,\n    name: 'floss',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 4,\n    name: 'soap',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 5,\n    name: 'shampoo',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 6,\n    name: 'face cream',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 7,\n    name: 'glasses cleaner',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 8,\n    name: 'razor',\n    category: 'toiletries',\n    completed: true\n  }, {\n    uniqueID: 9,\n    name: 'driver\\'s license',\n    category: 'documents',\n    completed: true\n  }, {\n    uniqueID: 10,\n    name: 'athletic shoes',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 11,\n    name: 'athletic shorts',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 12,\n    name: 'nail clippers',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 13,\n    name: 'comb',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 14,\n    name: 'pomade',\n    category: 'toiletries',\n    completed: false\n  }, {\n    uniqueID: 15,\n    name: 'underwear',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 16,\n    name: 'pants',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 17,\n    name: 'shorts',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 18,\n    name: 'shirts',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 19,\n    name: 'sweaters',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 20,\n    name: 'raincoat',\n    category: 'clothing',\n    completed: false\n  }, {\n    uniqueID: 21,\n    name: 'laptop',\n    category: 'electronics',\n    completed: false\n  }, {\n    uniqueID: 22,\n    name: 'phone',\n    category: 'electronics',\n    completed: false\n  }, {\n    uniqueID: 23,\n    name: 'chargers',\n    category: 'electronics',\n    completed: false\n  }, {\n    uniqueID: 24,\n    name: 'USB cables',\n    category: 'electronics',\n    completed: false\n  }, {\n    uniqueID: 25,\n    name: 'Kindle',\n    category: 'electronics',\n    completed: false\n  }];\n  var counter = {\n    checked: 0,\n    total: tasklistItems.length\n  };\n\n  var publicAPI = {\n    init: initApp,\n    createItemAndAddToList: createItemAndAddToList,\n    updateCounter: updateCounter\n  };\n\n  return publicAPI;\n\n  // ********************\n\n  function initApp() {\n    tasklistItems.forEach(function (item) {\n      if (item.completed) {\n        counter.checked++;\n      }\n      UI.createItemAndAddToList(item);\n    });\n    UI.refreshCounter(counter);\n  }\n\n  function createItemAndAddToList(item) {\n    var item = {\n      uniqueID: helpers.generateUniqueID(),\n      name: item.name,\n      category: item.category,\n      completed: false\n    };\n    tasklistItems.unshift(item);\n    UI.createItemAndAddToList(item);\n    updateCounter();\n  }\n\n  function updateCounter(checkboxValue) {\n    if (arguments.length > 0) {\n      checkboxValue ? counter.checked++ : counter.checked--;\n    }\n    if (counter.total !== tasklistItems.length) {\n      counter.total = tasklistItems.length;\n    }\n    UI.refreshCounter(counter);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOlsiaGVscGVycyIsImdlbmVyYXRlVW5pcXVlSUQiLCJ1dWlkdjQiLCJyZXBsYWNlIiwiYyIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsIlVJIiwic2V0VXBVSSIsImluaXQiLCJBcHAiLCJzZXRVcEFwcCIsImhlYWRlciIsImNvdW50ZXJDaGVja2VkIiwiY291bnRlclRvdGFsIiwiY2F0ZWdvcmllc0xpc3QiLCJkb2N1bWVudHNMaXN0IiwiY2xvdGhpbmdMaXN0IiwidG9pbGV0cmllc0xpc3QiLCJlbGVjdHJvbmljc0xpc3QiLCJtaXNjTGlzdCIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeU5hbWVzIiwiYWRkQnRucyIsImNhdGVnb3J5TGlzdExvb2t1cCIsInB1YmxpY0FQSSIsImluaXRVSSIsImNyZWF0ZUl0ZW1BbmRBZGRUb0xpc3QiLCJyZWZyZXNoQ291bnRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaW5pdENhdGVnb3JpZXMiLCJfc2V0SGVpZ2h0cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJpZCIsIm5hbWUiLCJkcmF3ZXIiLCJsaXN0IiwidG9nZ2xlRm9ybUJ0biIsImFkZEl0ZW1Gb3JtIiwiYWRkSXRlbUlucHV0IiwiX3RvZ2dsZUVsZW1lbnQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFkZEl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsIml0ZW0iLCJ2YWx1ZSIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzdHlsZSIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm5vZGUiLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tlZEF0dHIiLCJjb21wbGV0ZWQiLCJjb250ZW50IiwidW5pcXVlSUQiLCJhZGQiLCJpbm5lckhUTUwiLCJfbm90aWZ5Q291bnRlciIsImNvbnRhaW5lciIsInByZXBlbmQiLCJjb250YWlucyIsIml0ZW1DaGVja2JveCIsImNoaWxkcmVuIiwidXBkYXRlQ291bnRlciIsImNoZWNrZWQiLCJjb3VudGVyIiwiaW5uZXJUZXh0IiwidG90YWwiLCJjYXRlZ29yaWVzTGlzdEhlaWdodCIsImlubmVySGVpZ2h0IiwiY2F0ZWdvcnlIZWlnaHQiLCJsZW5ndGgiLCJoZWlnaHQiLCJ0YXNrbGlzdEl0ZW1zIiwiaW5pdEFwcCIsInVuc2hpZnQiLCJjaGVja2JveFZhbHVlIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUlBLFVBQVU7QUFDWkMsb0JBQWtCLFNBQVNDLE1BQVQsR0FBa0I7QUFDbEMsV0FBTyxDQUFDLENBQUMsR0FBRCxJQUFNLENBQUMsR0FBUCxHQUFXLENBQUMsR0FBWixHQUFnQixDQUFDLEdBQWpCLEdBQXFCLENBQUMsSUFBdkIsRUFBNkJDLE9BQTdCLENBQXFDLFFBQXJDLEVBQStDO0FBQUEsYUFDcEQsQ0FBQ0MsSUFBSUMsT0FBT0MsZUFBUCxDQUF1QixJQUFJQyxVQUFKLENBQWUsQ0FBZixDQUF2QixFQUEwQyxDQUExQyxJQUErQyxNQUFNSCxJQUFJLENBQTlELEVBQWlFSSxRQUFqRSxDQUEwRSxFQUExRSxDQURvRDtBQUFBLEtBQS9DLENBQVA7QUFHRDtBQUxXLENBQWQ7O0FBUUEsSUFBSUMsS0FBS0MsU0FBVDtBQUNBRCxHQUFHRSxJQUFIOztBQUVBLElBQUlDLE1BQU1DLFNBQVNKLEVBQVQsQ0FBVjtBQUNBRyxJQUFJRCxJQUFKOztBQUVBOztBQUVBLFNBQVNELE9BQVQsR0FBbUI7QUFDakIsTUFBSUksTUFBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLGFBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsTUFB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R1RGLGdCQUFVYSxLQUFLYixRQUhOO0FBSVR3QixpQkFBVztBQUpGLEtBQVg7QUFNQXFCLGtCQUFjRSxPQUFkLENBQXNCbEMsSUFBdEI7QUFDQTNDLE9BQUdvQixzQkFBSCxDQUEwQnVCLElBQTFCO0FBQ0FzQjtBQUNEOztBQUVELFdBQVNBLGFBQVQsQ0FBdUJhLGFBQXZCLEVBQXNDO0FBQ3BDLFFBQUlDLFVBQVVOLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJLLHNCQUFnQlgsUUFBUUQsT0FBUixFQUFoQixHQUFvQ0MsUUFBUUQsT0FBUixFQUFwQztBQUNEO0FBQ0QsUUFBSUMsUUFBUUUsS0FBUixLQUFrQk0sY0FBY0YsTUFBcEMsRUFBNEM7QUFDMUNOLGNBQVFFLEtBQVIsR0FBZ0JNLGNBQWNGLE1BQTlCO0FBQ0Q7QUFDRHpFLE9BQUdxQixjQUFILENBQWtCOEMsT0FBbEI7QUFDRDtBQUNGIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJREVBOiBzYXZlIGNhdGVnb3JpZXMnIGVsZW1lbnRzIGluIGFuIG9iamVjdCBvbiBjcmVhdGlvbiB0aGF0IGNhbiBsYXRlciBiZSByZWZlcmVuY2VkXG5cbnZhciBoZWxwZXJzID0ge1xuICBnZW5lcmF0ZVVuaXF1ZUlEOiBmdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgcmV0dXJuIChbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxuICAgICAgKGMgXiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmIDE1ID4+IGMgLyA0KS50b1N0cmluZygxNilcbiAgICApXG4gIH1cbn07XG5cbnZhciBVSSA9IHNldFVwVUkoKTtcblVJLmluaXQoKTtcblxudmFyIEFwcCA9IHNldFVwQXBwKFVJKTtcbkFwcC5pbml0KCk7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqXG5cbmZ1bmN0aW9uIHNldFVwVUkoKSB7XG4gIHZhciBoZWFkZXI7XG4gIHZhciBjb3VudGVyQ2hlY2tlZDtcbiAgdmFyIGNvdW50ZXJUb3RhbDtcbiAgdmFyIGNhdGVnb3JpZXNMaXN0O1xuICB2YXIgZG9jdW1lbnRzTGlzdDtcbiAgdmFyIGNsb3RoaW5nTGlzdDtcbiAgdmFyIHRvaWxldHJpZXNMaXN0O1xuICB2YXIgZWxlY3Ryb25pY3NMaXN0O1xuICB2YXIgbWlzY0xpc3Q7XG4gIHZhciBjYXRlZ29yaWVzO1xuICB2YXIgY2F0ZWdvcnlOYW1lcztcbiAgdmFyIGFkZEJ0bnM7XG4gIHZhciBjYXRlZ29yeUxpc3RMb29rdXA7XG5cbiAgdmFyIHB1YmxpY0FQSSA9IHtcbiAgICBpbml0OiBpbml0VUksXG4gICAgY3JlYXRlSXRlbUFuZEFkZFRvTGlzdCxcbiAgICByZWZyZXNoQ291bnRlclxuICB9XG4gIFxuICByZXR1cm4gcHVibGljQVBJO1xuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqXG5cbiAgZnVuY3Rpb24gaW5pdFVJKCkge1xuICAgIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBjb3VudGVyQ2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyX19jaGVja2VkJyk7XG4gICAgY291bnRlclRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXJfX3RvdGFsJyk7XG5cbiAgICBjYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzLWxpc3QnKTtcbiAgICBkb2N1bWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvY3VtZW50cyAuY2F0ZWdvcnlfX2xpc3QnKTtcbiAgICBjbG90aGluZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvdGhpbmcgLmNhdGVnb3J5X19saXN0Jyk7XG4gICAgdG9pbGV0cmllc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9pbGV0cmllcyAuY2F0ZWdvcnlfX2xpc3QnKTtcbiAgICBlbGVjdHJvbmljc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWxlY3Ryb25pY3MgLmNhdGVnb3J5X19saXN0Jyk7XG4gICAgbWlzY0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWlzYyAuY2F0ZWdvcnlfX2xpc3QnKTtcblxuICAgIGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnknKTtcbiAgICBjYXRlZ29yeU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5X19uYW1lJyk7XG4gICAgYWRkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeV9fdG9nZ2xlLWZvcm0tYnRuJyk7XG5cbiAgICBfaW5pdENhdGVnb3JpZXMoKTtcbiAgICBfc2V0SGVpZ2h0cygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBfc2V0SGVpZ2h0cyk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdENhdGVnb3JpZXMoKSB7XG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgIHZhciBjYXRlZ29yeSA9IGNhdGVnb3J5LmlkO1xuICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjYXRlZ29yeX0gLmNhdGVnb3J5X19uYW1lYCk7XG4gICAgICB2YXIgZHJhd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2F0ZWdvcnl9IC5jYXRlZ29yeV9fZHJhd2VyYCk7XG4gICAgICB2YXIgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NhdGVnb3J5fSAuY2F0ZWdvcnlfX2xpc3RgKTtcbiAgICAgIHZhciB0b2dnbGVGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2F0ZWdvcnl9IC5jYXRlZ29yeV9fdG9nZ2xlLWZvcm0tYnRuYCk7XG4gICAgICB2YXIgYWRkSXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjYXRlZ29yeX0gLmNhdGVnb3J5X19hZGQtaXRlbS1mb3JtYCk7XG4gICAgICB2YXIgYWRkSXRlbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2F0ZWdvcnl9IC5jYXRlZ29yeV9fYWRkLWl0ZW0taW5wdXRgKTtcblxuICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdG9nZ2xlRWxlbWVudChkcmF3ZXIpO1xuICAgICAgfSk7XG4gICAgICB0b2dnbGVGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIF90b2dnbGVFbGVtZW50KGFkZEl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBhZGRJdGVtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAgICBuYW1lOiBhZGRJdGVtSW5wdXQudmFsdWUsXG4gICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgfTtcbiAgICAgICAgQXBwLmNyZWF0ZUl0ZW1BbmRBZGRUb0xpc3QoaXRlbSk7XG4gICAgICAgIGFkZEl0ZW1JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgaWYgKGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7ZWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUl0ZW1BbmRBZGRUb0xpc3QoaXRlbSkge1xuICAgIC8vIGNyZWF0ZSBpdGVtXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgY2hlY2tlZEF0dHIgPSBpdGVtLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnO1xuICAgIHZhciBjb250ZW50ID0gYFxuICAgICAgPGlucHV0IGNsYXNzPVwiaXRlbV9fY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7aXRlbS51bmlxdWVJRH1cIiAke2NoZWNrZWRBdHRyfSAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiaXRlbV9fbmFtZVwiIGZvcj1cIiR7aXRlbS51bmlxdWVJRH1cIj4ke2l0ZW0ubmFtZX08L2xhYmVsPlxuICAgIGA7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX25vdGlmeUNvdW50ZXIpO1xuXG4gICAgLy8gYWRkIHRvIGxpc3RcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aXRlbS5jYXRlZ29yeX0gLmNhdGVnb3J5X19saXN0LWNvbnRhaW5lcmApO1xuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aXRlbS5jYXRlZ29yeX0gLmNhdGVnb3J5X19saXN0YCk7XG4gICAgbGlzdC5wcmVwZW5kKG5vZGUpO1xuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSBgJHtsaXN0LnNjcm9sbEhlaWdodH1weGA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX25vdGlmeUNvdW50ZXIoKSB7XG4gICAgdmFyIGl0ZW1DaGVja2JveCA9IHRoaXMuY2hpbGRyZW5bMF07XG4gICAgQXBwLnVwZGF0ZUNvdW50ZXIoaXRlbUNoZWNrYm94LmNoZWNrZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmcmVzaENvdW50ZXIoY291bnRlcikge1xuICAgIGNvdW50ZXJDaGVja2VkLmlubmVyVGV4dCA9IGNvdW50ZXIuY2hlY2tlZDtcbiAgICBjb3VudGVyVG90YWwuaW5uZXJUZXh0ID0gY291bnRlci50b3RhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRIZWlnaHRzKCkge1xuICAgIHZhciBjYXRlZ29yaWVzTGlzdEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDYwO1xuICAgIHZhciBjYXRlZ29yeUhlaWdodCA9IGNhdGVnb3JpZXNMaXN0SGVpZ2h0IC8gY2F0ZWdvcmllcy5sZW5ndGg7XG4gICAgY2F0ZWdvcnlOYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgbmFtZS5zdHlsZS5oZWlnaHQgPSBgJHtjYXRlZ29yeUhlaWdodH1weGA7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKipcblxuZnVuY3Rpb24gc2V0VXBBcHAoVUkpIHtcbiAgdmFyIHRhc2tsaXN0SXRlbXMgPSBbXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDAsXG4gICAgICBuYW1lOiAnZmFrZSBpdGVtJyxcbiAgICAgIGNhdGVnb3J5OiAnbWlzYycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMSxcbiAgICAgIG5hbWU6ICd0b290aGJydXNoJyxcbiAgICAgIGNhdGVnb3J5OiAndG9pbGV0cmllcycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMixcbiAgICAgIG5hbWU6ICd0b290aHBhc3RlJyxcbiAgICAgIGNhdGVnb3J5OiAndG9pbGV0cmllcycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMyxcbiAgICAgIG5hbWU6ICdmbG9zcycsXG4gICAgICBjYXRlZ29yeTogJ3RvaWxldHJpZXMnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDQsXG4gICAgICBuYW1lOiAnc29hcCcsXG4gICAgICBjYXRlZ29yeTogJ3RvaWxldHJpZXMnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDUsXG4gICAgICBuYW1lOiAnc2hhbXBvbycsXG4gICAgICBjYXRlZ29yeTogJ3RvaWxldHJpZXMnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDYsXG4gICAgICBuYW1lOiAnZmFjZSBjcmVhbScsXG4gICAgICBjYXRlZ29yeTogJ3RvaWxldHJpZXMnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDcsXG4gICAgICBuYW1lOiAnZ2xhc3NlcyBjbGVhbmVyJyxcbiAgICAgIGNhdGVnb3J5OiAndG9pbGV0cmllcycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogOCxcbiAgICAgIG5hbWU6ICdyYXpvcicsXG4gICAgICBjYXRlZ29yeTogJ3RvaWxldHJpZXMnLFxuICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogOSxcbiAgICAgIG5hbWU6ICdkcml2ZXJcXCdzIGxpY2Vuc2UnLFxuICAgICAgY2F0ZWdvcnk6ICdkb2N1bWVudHMnLFxuICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMTAsXG4gICAgICBuYW1lOiAnYXRobGV0aWMgc2hvZXMnLFxuICAgICAgY2F0ZWdvcnk6ICdjbG90aGluZycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMTEsXG4gICAgICBuYW1lOiAnYXRobGV0aWMgc2hvcnRzJyxcbiAgICAgIGNhdGVnb3J5OiAnY2xvdGhpbmcnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDEyLFxuICAgICAgbmFtZTogJ25haWwgY2xpcHBlcnMnLFxuICAgICAgY2F0ZWdvcnk6ICd0b2lsZXRyaWVzJyxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIHVuaXF1ZUlEOiAxMyxcbiAgICAgIG5hbWU6ICdjb21iJyxcbiAgICAgIGNhdGVnb3J5OiAndG9pbGV0cmllcycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMTQsXG4gICAgICBuYW1lOiAncG9tYWRlJyxcbiAgICAgIGNhdGVnb3J5OiAndG9pbGV0cmllcycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMTUsXG4gICAgICBuYW1lOiAndW5kZXJ3ZWFyJyxcbiAgICAgIGNhdGVnb3J5OiAnY2xvdGhpbmcnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDE2LFxuICAgICAgbmFtZTogJ3BhbnRzJyxcbiAgICAgIGNhdGVnb3J5OiAnY2xvdGhpbmcnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDE3LFxuICAgICAgbmFtZTogJ3Nob3J0cycsXG4gICAgICBjYXRlZ29yeTogJ2Nsb3RoaW5nJyxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIHVuaXF1ZUlEOiAxOCxcbiAgICAgIG5hbWU6ICdzaGlydHMnLFxuICAgICAgY2F0ZWdvcnk6ICdjbG90aGluZycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMTksXG4gICAgICBuYW1lOiAnc3dlYXRlcnMnLFxuICAgICAgY2F0ZWdvcnk6ICdjbG90aGluZycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMjAsXG4gICAgICBuYW1lOiAncmFpbmNvYXQnLFxuICAgICAgY2F0ZWdvcnk6ICdjbG90aGluZycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMjEsXG4gICAgICBuYW1lOiAnbGFwdG9wJyxcbiAgICAgIGNhdGVnb3J5OiAnZWxlY3Ryb25pY3MnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDIyLFxuICAgICAgbmFtZTogJ3Bob25lJyxcbiAgICAgIGNhdGVnb3J5OiAnZWxlY3Ryb25pY3MnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDIzLFxuICAgICAgbmFtZTogJ2NoYXJnZXJzJyxcbiAgICAgIGNhdGVnb3J5OiAnZWxlY3Ryb25pY3MnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgdW5pcXVlSUQ6IDI0LFxuICAgICAgbmFtZTogJ1VTQiBjYWJsZXMnLFxuICAgICAgY2F0ZWdvcnk6ICdlbGVjdHJvbmljcycsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB1bmlxdWVJRDogMjUsXG4gICAgICBuYW1lOiAnS2luZGxlJyxcbiAgICAgIGNhdGVnb3J5OiAnZWxlY3Ryb25pY3MnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH1cbiAgXTtcbiAgdmFyIGNvdW50ZXIgPSB7XG4gICAgY2hlY2tlZDogMCxcbiAgICB0b3RhbDogdGFza2xpc3RJdGVtcy5sZW5ndGhcbiAgfTtcblxuICB2YXIgcHVibGljQVBJID0ge1xuICAgIGluaXQ6IGluaXRBcHAsXG4gICAgY3JlYXRlSXRlbUFuZEFkZFRvTGlzdCxcbiAgICB1cGRhdGVDb3VudGVyXG4gIH07XG5cbiAgcmV0dXJuIHB1YmxpY0FQSTtcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKlxuXG4gIGZ1bmN0aW9uIGluaXRBcHAoKSB7XG4gICAgdGFza2xpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY29tcGxldGVkKSB7XG4gICAgICAgIGNvdW50ZXIuY2hlY2tlZCsrO1xuICAgICAgfVxuICAgICAgVUkuY3JlYXRlSXRlbUFuZEFkZFRvTGlzdChpdGVtKTtcbiAgICB9KTtcbiAgICBVSS5yZWZyZXNoQ291bnRlcihjb3VudGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUl0ZW1BbmRBZGRUb0xpc3QoaXRlbSkge1xuICAgIHZhciBpdGVtID0ge1xuICAgICAgdW5pcXVlSUQ6IGhlbHBlcnMuZ2VuZXJhdGVVbmlxdWVJRCgpLFxuICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICB0YXNrbGlzdEl0ZW1zLnVuc2hpZnQoaXRlbSk7XG4gICAgVUkuY3JlYXRlSXRlbUFuZEFkZFRvTGlzdChpdGVtKTtcbiAgICB1cGRhdGVDb3VudGVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb3VudGVyKGNoZWNrYm94VmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoZWNrYm94VmFsdWUgPyBjb3VudGVyLmNoZWNrZWQrKyA6IGNvdW50ZXIuY2hlY2tlZC0tO1xuICAgIH1cbiAgICBpZiAoY291bnRlci50b3RhbCAhPT0gdGFza2xpc3RJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNvdW50ZXIudG90YWwgPSB0YXNrbGlzdEl0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgVUkucmVmcmVzaENvdW50ZXIoY291bnRlcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("// removed by extract-text-webpack-plugin\n    if(false) {\n      // 1512563526247\n      var cssReload = require(\"../../node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9yZXNldC5zY3NzP2VhYmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsdUdBQXVHLFlBQVksU0FBUyxFQUFFO0FBQzlIO0FBQ0E7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTEyNTYzNTI2MjQ3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3Jlc2V0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("// removed by extract-text-webpack-plugin\n    if(false) {\n      // 1512563526302\n      var cssReload = require(\"../../node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/OTM4YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsWUFBWSxTQUFTLEVBQUU7QUFDOUg7QUFDQTtBQUNBIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1MTI1NjM1MjYzMDJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);