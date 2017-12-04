var UI = setUpUI();
UI.init();

var App = setUpApp(UI);

App.setCounter();
App.generateLists();

// ********************

function setUpUI() {
  var counterChecked;
  var counterTotal;
  var documents;
  var clothing;
  var toiletries;
  var electronics;
  var misc;
  var categoryNames;
  var categoryLists;
  var categoryListLookup;

  var publicAPI = {
    init: initUI,
    createItemAndAddToCategoryList,
    updateCounter
  }
  
  return publicAPI;

  // ********************

  function initUI() {
    counterChecked = document.querySelector('.counter__checked');
    counterTotal = document.querySelector('.counter__total');

    documents = document.querySelector('.documents');
    clothing = document.querySelector('.clothing');
    toiletries = document.querySelector('.toiletries');
    electronics = document.querySelector('.electronics');
    misc = document.querySelector('.misc');

    categoryNames = document.querySelectorAll('.category__name');
    categoryLists = document.querySelectorAll('.category__list');

    categoryListLookup = {
      documents,
      clothing,
      toiletries,
      electronics,
      misc
    };

    for (let categoryName of categoryNames) {
      categoryName.addEventListener('click', toggleCategoryList);
    }
  }

  function toggleCategoryList() {
    var list = this.nextElementSibling;
    list.classList.toggle('open');
    if (list.style.maxHeight) {
      list.style.maxHeight = null;
    } 
    else {
      list.style.maxHeight = `${list.scrollHeight}px`;
    }
  }

  function createItemAndAddToCategoryList(item) {
    var list = categoryListLookup[item.category];
    var node = document.createElement('div');
    var content = `
      <input class="item__checkbox" type="checkbox" id="${item.name}" />
      <label class="item__name" for="${item.name}">${item.name}</label>
    `;
    node.classList.add('item');
    node.innerHTML = content;
    node.addEventListener('change', notifyCounter);
    list.appendChild(node);
  }

  function notifyCounter() {
    var itemCheckbox = this.children[0];
    App.updateCounter(itemCheckbox.checked);
  }

  function updateCounter(counter) {
    counterChecked.innerText = counter.checked;
    counterTotal.innerText = counter.total;
  }
}

// ********************

function setUpApp(UI) {
  var counter = {};
  var tasklistItems = [
    {
      name: 'toothbrush',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'toothpaste',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'floss',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'soap',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'shampoo',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'face cream',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'glasses cleaner',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'razor',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'ID',
      category: 'documents',
      completed: false
    },
    {
      name: 'athletic shoes',
      category: 'clothing',
      completed: false
    },
    {
      name: 'athletic shorts',
      category: 'clothing',
      completed: false
    },
    {
      name: 'nail clippers',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'comb',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'pomade',
      category: 'toiletries',
      completed: false
    },
    {
      name: 'underwear',
      category: 'clothing',
      completed: false
    },
    {
      name: 'pants',
      category: 'clothing',
      completed: false
    },
    {
      name: 'shorts',
      category: 'clothing',
      completed: false
    },
    {
      name: 'shirts',
      category: 'clothing',
      completed: false
    },
    {
      name: 'sweaters',
      category: 'clothing',
      completed: false
    },
    {
      name: 'raincoat',
      category: 'clothing',
      completed: false
    },
    {
      name: 'laptop',
      category: 'electronics',
      completed: false
    },
    {
      name: 'phone',
      category: 'electronics',
      completed: false
    },
    {
      name: 'chargers',
      category: 'electronics',
      completed: false
    },
    {
      name: 'USB cables',
      category: 'electronics',
      completed: false
    },
    {
      name: 'Kindle',
      category: 'electronics',
      completed: false
    }
  ];

  var publicAPI = {
    generateLists,
    setCounter,
    updateCounter
  };

  return publicAPI;

  // ********************

  function generateLists() {
    tasklistItems.forEach(item => {
      UI.createItemAndAddToCategoryList(item);
    });
  }

  function setCounter() {
    counter.checked = 0;
    counter.total = tasklistItems.length;
    UI.updateCounter(counter);
  }

  function updateCounter(checkboxIsChecked) {
    checkboxIsChecked ? counter.checked++ : counter.checked--;
    UI.updateCounter(counter);
  }
}
