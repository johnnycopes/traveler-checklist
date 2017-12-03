const checklist = document.querySelector('.checklist');

var tasklistItems = [
  {
    name: 'toothbrush',
    type: 'object',
    checked: false
  },
  {
    name: 'toothpaste',
    type: 'object',
    checked: false
  },
  {
    name: 'floss',
    type: 'object',
    checked: false
  },
  {
    name: 'soap',
    type: 'object',
    checked: false
  },
  {
    name: 'shampoo',
    type: 'object',
    checked: false
  },
  {
    name: 'face cream',
    type: 'object',
    checked: false
  },
  {
    name: 'glasses cleaner',
    type: 'object',
    checked: false
  },
  {
    name: 'razor',
    type: 'object',
    checked: false
  },
  {
    name: 'ID',
    type: 'object',
    checked: false
  },
  {
    name: 'athletic shoes',
    type: 'object',
    checked: false
  },
  {
    name: 'athletic shorts',
    type: 'object',
    checked: false
  },
  {
    name: 'nail clippers',
    type: 'object',
    checked: false
  },
  {
    name: 'comb',
    type: 'object',
    checked: false
  },
  {
    name: 'pomade',
    type: 'object',
    checked: false
  },
  {
    name: 'underwear',
    type: 'object',
    checked: false
  },
  {
    name: 'pants',
    type: 'object',
    checked: false
  },
  {
    name: 'shorts',
    type: 'object',
    checked: false
  },
  {
    name: 'shirts',
    type: 'object',
    checked: false
  },
  {
    name: 'sweaters',
    type: 'object',
    checked: false
  },
  {
    name: 'raincoat',
    type: 'object',
    checked: false
  }
];

function populateChecklist() {
  tasklistItems.forEach(item => {
    var node = document.createElement('div');
    var content = `
      <input type="checkbox" id="${item.name}" />
      <label class="item__name" for="${item.name}">${item.name}</label>
      <i class="fa fa-trash-o" aria-hidden="true"></i>
    `;
    node.innerHTML = content;
    checklist.appendChild(node);
  });
}

populateChecklist();