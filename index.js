let cats = ['Milo','Otis','Garfield']
console.log (cats)

function arrayfunction (cats) {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
};

function destructivelyAppendCat (){
  cats.push ('Ralph')
  console.log (cats)
}

function destructivelyPrependCat (){
  cats.unshift ('Bob')
  console.log (cats)
}

function destructivelyRemoveLastCat (){
  cats.pop (1)
  console.log (cats)
}

function destructivelyRemoveFirstCat (){
  cats.shift (1)
  console.log (cats)
}

function appendCat (Broom){
  return[ ...cats,'Broom']
  
}

function prependCat (Arnold){
  return['Arnold', ...cats]
  
}

function removeLastCat (){
  return cats.slice (0, cats.length -1)
}

function removeFirstCat (){
  return cats.slice (1)
}