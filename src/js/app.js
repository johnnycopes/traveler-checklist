const categoryNames = document.querySelectorAll('.category__name');
const $categoryLists = document.querySelectorAll('.category__list');

const documents = document.querySelector('.documents');
const clothing = document.querySelector('.clothing');
const toiletries = document.querySelector('.toiletries');
const technology = document.querySelector('.technology');

var itemNames;
var itemCheckboxes;

const counterChecked = document.querySelector('.counter__checked');
const counterTotal = document.querySelector('.counter__total');

var categoryLists = {
  documents,
  clothing,
  toiletries,
  technology
};

for (let categoryName of categoryNames) {
  categoryName.addEventListener('click', function() {
    let list = this.nextElementSibling;
    list.classList.toggle('open');
    if (list.style.maxHeight) {
      list.style.maxHeight = null;
    } 
    else {
      list.style.maxHeight = `${list.scrollHeight}px`;
    }
  });
}

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
    category: 'technology',
    completed: false
  },
  {
    name: 'phone',
    category: 'technology',
    completed: false
  },
  {
    name: 'chargers',
    category: 'technology',
    completed: false
  },
  {
    name: 'USB cables',
    category: 'technology',
    completed: false
  },
  {
    name: 'Kindle',
    category: 'technology',
    completed: false
  }
];

generateLists();
setTaskEventListeners();
updateCounter();

// ********************
// ********************

function generateLists() {
  tasklistItems.forEach(item => {
    var list = categoryLists[item.category];
    var node = document.createElement('div');
    var content = `
      <input class="item__checkbox" type="checkbox" id="${item.name}" />
      <label class="item__name" for="${item.name}">${item.name}</label>
    `;
    node.classList.add('item');
    node.innerHTML = content;
    node.addEventListener('click', updateCounter);
    list.appendChild(node);
  });
}

function updateCounter() {
  itemCheckboxes = document.querySelectorAll('.item__checkbox');
  var completedItems = 0;
  itemCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      completedItems++;
    }
  });
  counterChecked.innerText = completedItems;
  counterTotal.innerText = tasklistItems.length;
}