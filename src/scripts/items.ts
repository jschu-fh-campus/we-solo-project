import axios from 'axios';

interface Item {
    name: string
}

let bag: Item[] = [];

function getById(id: string) {
     return document.getElementById(id);
}

function createListItem(prefix: String, item: Item): String {
    return `<li id="${prefix}-${item.name}" class="underline cursor-pointer">${item.name}</li>`;
}

function createBagEntry(prefix: String, item: Item): String {
    return `<li id="${prefix}-${item.name}">${item.name}</li>`;
}

function addToBag(item: Item): void {
    bag = [...bag, item];
    const id = 'bag';
    getById(id)!.innerHTML = bag.map(item => createBagEntry(id, item)).join('');
}

async function loadItemList() {    
    axios.get(`https://pokeapi.co/api/v2/item?limit=100`).then(response => {
      const result: Array<Item> = response.data.results;
      const id = 'items';
      let itemList = result.map(item => createListItem(id, item)).join('');
      getById(id)!.innerHTML = itemList;
      result.forEach(item => {
        getById(`${id}-${item.name}`)!.addEventListener('click', () => addToBag(item));
      });
    });
}

export default function setupItemList() {
    loadItemList();
}