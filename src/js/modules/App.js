export function setUpApp(UI) {
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