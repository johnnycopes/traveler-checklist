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
  var counterChecked;
  var counterTotal;
  var documentsList;
  var clothingList;
  var toiletriesList;
  var electronicsList;
  var miscList;
  var categories;
  var addBtns;
  var categoryListLookup;

  var publicAPI = {
    init: initUI,
    createItemAndAddToList,
    refreshCounter
  }
  
  return publicAPI;

  // ********************

  function initUI() {
    counterChecked = document.querySelector('.counter__checked');
    counterTotal = document.querySelector('.counter__total');

    documentsList = document.querySelector('#documents .category__list');
    clothingList = document.querySelector('#clothing .category__list');
    toiletriesList = document.querySelector('#toiletries .category__list');
    electronicsList = document.querySelector('#electronics .category__list');
    miscList = document.querySelector('#misc .category__list');

    categories = document.querySelectorAll('.category');
    addBtns = document.querySelectorAll('.category__toggle-form-btn');
    categoryListLookup = {
      documents: documentsList,
      clothing: clothingList,
      toiletries: toiletriesList,
      electronics: electronicsList,
      misc: miscList
    };

    _generateCategories();
  }

  function _generateCategories() {
    categories.forEach(category => {
      var category = category.id;
      var name = document.querySelector(`#${category} .category__name`);
      var list = document.querySelector(`#${category} .category__list`);
      var toggleFormBtn = document.querySelector(`#${category} .category__toggle-form-btn`);
      var addItemForm = document.querySelector(`#${category} .category__add-item-form`);
      var addItemInput = document.querySelector(`#${category} .category__add-item-input`);
      name.addEventListener('click', function() {
        _toggleCategoryList(list);
      });
      toggleFormBtn.addEventListener('click', function() {
        alert('make this toggle the form!');
      });
      addItemInput.value = 'hey';
      addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var item = {
          name: addItemInput.value,
          category
        };
        App.createItemAndAddToList(item);
        addItemInput.value = '';
      });
    });
  }

  function _toggleCategoryList(list) {
    list.classList.toggle('open');
    if (list.style.maxHeight) {
      list.style.maxHeight = null;
    } 
    else {
      list.style.maxHeight = `${list.scrollHeight}px`;
    }
  }

  function createItemAndAddToList(item) {
    var list = categoryListLookup[item.category];
    var node = document.createElement('div');
    var checkedAttr = item.completed ? 'checked' : '';
    var content = `
      <input class="item__checkbox" type="checkbox" id="${item.uniqueID}" ${checkedAttr} />
      <label class="item__name" for="${item.uniqueID}">${item.name}</label>
    `;
    node.classList.add('item');
    node.innerHTML = content;
    node.addEventListener('change', _notifyCounter);
    list.appendChild(node);
    if (list.classList.contains('open')) {
      list.style.maxHeight = `${list.scrollHeight}px`;
    }
  }

  function _notifyCounter() {
    var itemCheckbox = this.children[0];
    App.updateCounter(itemCheckbox.checked);
  }

  function refreshCounter(counter) {
    counterChecked.innerText = counter.checked;
    counterTotal.innerText = counter.total;
  }
}

// ********************

function setUpApp(UI) {
  var tasklistItems = [
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
    total: tasklistItems.length
  };

  var publicAPI = {
    init: initApp,
    createItemAndAddToList,
    updateCounter
  };

  return publicAPI;

  // ********************

  function initApp() {
    tasklistItems.forEach(item => {
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
    tasklistItems.push(item);
    UI.createItemAndAddToList(item);
    updateCounter();
  }

  function updateCounter(checkboxValue) {
    if (arguments.length > 0) {
      checkboxValue ? counter.checked++ : counter.checked--;
    }
    if (counter.total !== tasklistItems.length) {
      counter.total = tasklistItems.length;
    }
    UI.refreshCounter(counter);
  }
}
