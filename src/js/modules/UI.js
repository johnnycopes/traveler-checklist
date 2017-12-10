export function setUpUI() {
  var body;
  var header;
  var counterChecked;
  var counterTotal;
  var categoriesList;
  var categoryNames;
  var categoryDrawers;
  var categoryLists;

  var publicAPI = {
    init: initUI,
    createCategories,
    createItemAndAddToList,
    refreshCounter
  }
  
  return publicAPI;

  // ********************

  function initUI() {
    body = document.querySelector('body');
    header = document.querySelector('.header');
    counterChecked = document.querySelector('.counter__checked');
    counterTotal = document.querySelector('.counter__total');
    categoriesList = document.querySelector('.categories-list');
  }

  function createCategories(categories) {
    categories.forEach(category => {
      _createCategoryAndAddToList(category);
    });

    // after category lists are created, select their elements and
    // set the necessary heights dynamically
    categoryNames = document.querySelectorAll('.category__name');
    categoryDrawers = document.querySelectorAll('.category__drawer');
    categoryLists = document.querySelectorAll('.category__list');
    _setHeights();
    window.addEventListener('resize', _setHeights);
  }

  function _createCategoryAndAddToList(category) {
    // create item
    var node = document.createElement('li');
    var content = `
      <h3 class="category__name">
        ${category.name}
        <i class="category__toggle-form-btn hide">+</i>
      </h3>
      <div class="category__drawer category__triangle no-triangle">
        <form class="category__add-item-form category__add-item-form--hidden">
          <input class="category__add-item-input" type="text" placeholder="item name" />
          <button class="category__add-item-btn" type="submit">add</button>
        </form>
        <ul class="list category__list"></ul>
      </div>
    `;
    node.setAttribute('id', category.name);
    node.classList.add('category');
    node.innerHTML = content;

    // add to list and attach event handlers
    categoriesList.append(node);
    _attachCategoryEventListeners(category.name);
  }

  function _attachCategoryEventListeners(category) {
    var name = document.querySelector(`#${category} .category__name`);
    var drawer = document.querySelector(`#${category} .category__drawer`);
    var list = document.querySelector(`#${category} .category__list`);
    var toggleFormBtn = document.querySelector(`#${category} .category__toggle-form-btn`);
    var addItemForm = document.querySelector(`#${category} .category__add-item-form`);
    var addItemInput = document.querySelector(`#${category} .category__add-item-input`);

    name.addEventListener('click', function() {
      _toggleDrawer(drawer);
      name.classList.toggle('category__name--selected');
      drawer.classList.toggle('no-triangle');
      toggleFormBtn.classList.toggle('hide');
    });
    toggleFormBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      addItemForm.classList.toggle('category__add-item-form--hidden');
      list.classList.toggle('blur');
      addItemInput.focus();
    });
    addItemForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var item = {
        name: addItemInput.value,
        category
      };
      travellistApp.createItemAndAddToList(item);
      addItemInput.value = '';
    });
  }

  function createItemAndAddToList(item) {
    // create item
    var node = document.createElement('div');
    var checkedAttr = item.completed ? 'checked' : '';
    var content = `
      <input class="item__checkbox" type="checkbox" id="${item.uniqueID}" ${checkedAttr} />
      <label class="item__name" for="${item.uniqueID}">${item.name}</label>
    `;
    node.classList.add('item');
    node.innerHTML = content;

    // add to list and attach event handlers
    var drawer = document.querySelector(`#${item.category} .category__drawer`);
    var list = document.querySelector(`#${item.category} .category__list`);
    list.prepend(node);
    node.addEventListener('change', _notifyCounter);    
  }

  function _notifyCounter() {
    var itemCheckbox = this.children[0];
    travellistApp.updateCounter(itemCheckbox.checked);
  }

  function refreshCounter(counter) {
    counterChecked.innerText = counter.checked;
    counterTotal.innerText = counter.total;
  }

  function _setHeights() {
    var categoriesListHeight = window.innerHeight - header.scrollHeight;
    var categoryNameHeight = categoriesListHeight / categoryNames.length;

    categoryNames.forEach(name => {
      name.style.height = `${categoryNameHeight}px`;
    });

    categoryLists.forEach(list => {
      list.style.height = `${categoriesListHeight - categoryNameHeight}px`;
    });
  }

  function _toggleDrawer(clickedDrawer) {
    // save the open/close state of the clicked drawer before closing all drawers
    var drawerIsClosed = !clickedDrawer.style.maxHeight;
    
    body.classList.remove('no-scroll');
    categoryDrawers.forEach(drawer => {
      drawer.style.maxHeight = null;
    });

    if (drawerIsClosed) {
      body.classList.add('no-scroll');
      clickedDrawer.style.maxHeight = `${clickedDrawer.scrollHeight}px`;
      
      // scroll to clicked category
      setTimeout(function() {
        var name = clickedDrawer.previousElementSibling;
        var namePosition = name.getBoundingClientRect().top - header.scrollHeight;
        window.scroll({
          top: namePosition,
          left: 0,
          behavior: 'smooth'
        });
      }, 400);
    }
  }
}