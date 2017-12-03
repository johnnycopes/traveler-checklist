const categoryNames = document.querySelectorAll('.category-name');
const $categoryLists = document.querySelectorAll('.category-list');

const documents = document.querySelector('.documents');
const clothing = document.querySelector('.clothing');
const toiletries = document.querySelector('.toiletries');
const technology = document.querySelector('.technology');

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
    checked: false
  },
  {
    name: 'toothpaste',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'floss',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'soap',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'shampoo',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'face cream',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'glasses cleaner',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'razor',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'ID',
    category: 'documents',
    checked: false
  },
  {
    name: 'athletic shoes',
    category: 'clothing',
    checked: false
  },
  {
    name: 'athletic shorts',
    category: 'clothing',
    checked: false
  },
  {
    name: 'nail clippers',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'comb',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'pomade',
    category: 'toiletries',
    checked: false
  },
  {
    name: 'underwear',
    category: 'clothing',
    checked: false
  },
  {
    name: 'pants',
    category: 'clothing',
    checked: false
  },
  {
    name: 'shorts',
    category: 'clothing',
    checked: false
  },
  {
    name: 'shirts',
    category: 'clothing',
    checked: false
  },
  {
    name: 'sweaters',
    category: 'clothing',
    checked: false
  },
  {
    name: 'raincoat',
    category: 'clothing',
    checked: false
  },
  {
    name: 'laptop',
    category: 'technology',
    checked: false
  },
  {
    name: 'phone',
    category: 'technology',
    checked: false
  },
  {
    name: 'chargers',
    category: 'technology',
    checked: false
  },
  {
    name: 'USB cables',
    category: 'technology',
    checked: false
  },
  {
    name: 'Kindle',
    category: 'technology',
    checked: false
  }
];

generateLists();

// ********************
// ********************

function generateLists() {
  tasklistItems.forEach(item => {
    var list = categoryLists[item.category];
    console.log(list);
    var node = document.createElement('div');
    var content = `
      <input type="checkbox" id="${item.name}" />
      <label class="item__name" for="${item.name}">${item.name}</label>
      <i class="fa fa-trash-o" aria-hidden="true"></i>
    `;
    node.classList.add('item');
    node.innerHTML = content;
    list.appendChild(node);
  });
}

function appendItemToList(list, node) {
  list.appendChild(node);
}
