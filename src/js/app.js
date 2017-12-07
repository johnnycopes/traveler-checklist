// TODO: make triangles on categories
// TODO: scroll to top of category when clicked
// TODO: set min-height of list to be screen height when opened
// TODO: add drag and drop rearrangement

var helpers = {
  generateUniqueID: function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
};

var UI = setUpUI();
UI.init();

var App = setUpApp(UI);
App.init();

// ********************

function setUpUI() {
  var header;
  var counterChecked;
  var counterTotal;
  var categoriesList;
  var categoryNames;

  var publicAPI = {
    init: initUI,
    createCategories,
    createItemAndAddToList,
    refreshCounter
  }
  
  return publicAPI;

  // ********************

  function initUI() {
    header = document.querySelector('.header');
    counterChecked = document.querySelector('.counter__checked');
    counterTotal = document.querySelector('.counter__total');
    categoriesList = document.querySelector('.categories-list');
  }

  function createCategories(categories) {
    categories.forEach(category => {
      _createCategoryAndAddToList(category);
    });

    // after category lists are created, set their names' heights dynamically
    categoryNames = document.querySelectorAll('.category__name');
    _setCategoryNameHeights();
    window.addEventListener('resize', _setCategoryNameHeights);
  }

  function _createCategoryAndAddToList(category) {
    // create item
    var node = document.createElement('li');
    var content = `
      <h3 class="category__name">
        ${category.name}
        <i class="category__toggle-form-btn hide">+</i>
      </h3>
      <div class="category__drawer">
        <form class="category__add-item-form">
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
      toggleFormBtn.classList.toggle('hide');
    });
    toggleFormBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      addItemForm.classList.toggle('reveal-form');
      list.classList.toggle('blur');
      addItemInput.focus();
    });
    addItemForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var item = {
        name: addItemInput.value,
        category
      };
      App.createItemAndAddToList(item);
      addItemInput.value = '';
    });
  }

  function _toggleDrawer(drawer) {
    drawer.classList.toggle('open');


    // console.log(window.scrollY);
    // console.log(drawer.getBoundingClientRect());
    // console.log(name);
    // var drawerHeight = window.innerHeight - name.scrollHeight - header.scrollHeight;
    // if (drawer.classList.contains('open')) {
    //   var drawerPosition = drawer.getBoundingClientRect().top;
    //   window.scrollTo(100, 100);
    // }
    if (drawer.style.maxHeight) {
      drawer.style.maxHeight = null;
    } 
    else {
      drawer.style.maxHeight = `${drawer.scrollHeight}px`;
      // setTimeout(function() {
      //   var name = drawer.previousElementSibling;
      //   var namePosition = name.getBoundingClientRect().top - header.scrollHeight;
      //   window.scroll({
      //     top: namePosition,
      //     left: 0,
      //     behavior: 'smooth'
      //   });
      // }, 300);
    }
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
    if (drawer.classList.contains('open')) {
      drawer.style.maxHeight = `${list.scrollHeight}px`;
    }
    node.addEventListener('change', _notifyCounter);    
  }

  function _notifyCounter() {
    var itemCheckbox = this.children[0];
    App.updateCounter(itemCheckbox.checked);
  }

  function refreshCounter(counter) {
    counterChecked.innerText = counter.checked;
    counterTotal.innerText = counter.total;
  }

  function _setCategoryNameHeights() {
    var allottedCategoriesListHeight = window.innerHeight - 60;
    var categoryNameHeight = allottedCategoriesListHeight / categoryNames.length;
    categoryNames.forEach(name => {
      name.style.height = `${categoryNameHeight}px`;
    });
  }
}

// ********************

function setUpApp(UI) {
  var categories = [
    {
      name: 'documents',
      icon: ''
    },
    {
      name: 'clothing',
      icon: ''
    },
    {
      name: 'toiletries',
      icon: ''
    },
    {
      name: 'electronics',
      icon: ''
    },
    {
      name: 'misc',
      icon: ''
    }
  ];
  var listItems = [
    {
      uniqueID: 0,
      name: 'fake item',
      category: 'misc',
      completed: false
    },
    {
      uniqueID: 1,
      name: 'toothbrush',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 2,
      name: 'toothpaste',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 3,
      name: 'floss',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 4,
      name: 'soap',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 5,
      name: 'shampoo',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 6,
      name: 'face cream',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 7,
      name: 'glasses cleaner',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 8,
      name: 'razor',
      category: 'toiletries',
      completed: true
    },
    {
      uniqueID: 9,
      name: 'driver\'s license',
      category: 'documents',
      completed: true
    },
    {
      uniqueID: 10,
      name: 'athletic shoes',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 11,
      name: 'athletic shorts',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 12,
      name: 'nail clippers',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 13,
      name: 'comb',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 14,
      name: 'pomade',
      category: 'toiletries',
      completed: false
    },
    {
      uniqueID: 15,
      name: 'underwear',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 16,
      name: 'pants',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 17,
      name: 'shorts',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 18,
      name: 'shirts',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 19,
      name: 'sweaters',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 20,
      name: 'raincoat',
      category: 'clothing',
      completed: false
    },
    {
      uniqueID: 21,
      name: 'laptop',
      category: 'electronics',
      completed: false
    },
    {
      uniqueID: 22,
      name: 'phone',
      category: 'electronics',
      completed: false
    },
    {
      uniqueID: 23,
      name: 'chargers',
      category: 'electronics',
      completed: false
    },
    {
      uniqueID: 24,
      name: 'USB cables',
      category: 'electronics',
      completed: false
    },
    {
      uniqueID: 25,
      name: 'Kindle',
      category: 'electronics',
      completed: false
    }
  ];
  var counter = {
    checked: 0,
    total: listItems.length
  };

  var publicAPI = {
    init: initApp,
    createItemAndAddToList,
    updateCounter
  };

  return publicAPI;

  // ********************

  function initApp() {
    UI.createCategories(categories);

    listItems.forEach(item => {
      if (item.completed) {
        counter.checked++;
      }
      UI.createItemAndAddToList(item);
    });

    UI.refreshCounter(counter);
  }

  function createItemAndAddToList(item) {
    var item = {
      uniqueID: helpers.generateUniqueID(),
      name: item.name,
      category: item.category,
      completed: false
    };
    listItems.unshift(item);
    UI.createItemAndAddToList(item);
    updateCounter();
  }

  function updateCounter(checkboxValue) {
    if (arguments.length > 0) {
      checkboxValue ? counter.checked++ : counter.checked--;
    }
    if (counter.total !== listItems.length) {
      counter.total = listItems.length;
    }
    UI.refreshCounter(counter);
  }
}
