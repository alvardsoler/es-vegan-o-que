let list = [];

fetch('allAditives.json').then(resp => resp.json()).then(json => list = json);

const emojis = {
  animal: '🚫',
  maybe: '❔',
  nodata: '❔',
  vegan: '🌱'
};

// https://en.wikipedia.org/wiki/E_number

const input = document.querySelector('#search');
const results = document.querySelector('#results');

if (!input) throw new Error('No encuentro el input!');

const _template = (aditive) => {
  return `<div class="item ${aditive.type}">
    <div class="title">
      <span>${emojis[aditive.type]} ${aditive.code}</span>
    </div>
    <div>${aditive.name}</div>
  </div>`
};

const onInput = () => {
  const text = input.value.split(' ').filter(text => !!text);
  if (text.length) {
    const aditivesMap = text.filter(t => t.match(/\d{3,4}/i)).reduce((map, text) => {
      const reg = new RegExp(text, 'i');
      const aditive = list.find(aditive => aditive.code.match(reg));
      if (aditive && !map.has(aditive.code)) {
        map.set(aditive.code, aditive);
      }
      return map;
    }, new Map());
    const aditives = [...aditivesMap.values()];
    results.innerHTML = aditives.map(aditive => _template(aditive)).reverse().join('\n');
  }
};

input.addEventListener('input', onInput);