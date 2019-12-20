let list = [];

fetch('allAditives.json').then(resp => resp.json()).then(json => list = json);

const emojis = {
  animal: '🚫',
  meaby: '❔',
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
  const text = input.value.replace(/e/ig, '').split(' ');
  if (text.length) {
    const aditivesMap = text.filter(t => t.match(/^(e)?\d{3,4}$/i)).map(t => {
      const sotredAditive = list.find(aditive => aditive.code === t);
      if (sotredAditive) return sotredAditive;
    }).reduce((map, aditive) => {
      if (!map.has(aditive.code)) map.set(aditive.code, aditive);
      return map;
    }, new Map());
    const aditives = [...aditivesMap.values()];
    results.innerHTML = aditives.map(aditive => _template(aditive)).join('\n');
  }
};

input.addEventListener('input', onInput);

// setTimeout(() => {
//   input.value = '431 542 220 110 111 200 120';
//   onInput();
// }, 500);