// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let copyOfCats = [...cats, `${name}`];
    return copyOfCats;
}
function prependCat(name){
    let copyOfCats = [name, ...cats];
    return copyOfCats;
}
function removeLastCat(){
    let copyOfCats = cats.slice(0, cats.length - 1);
    return copyOfCats
}
function removeFirstCat(){
    let copyOfCats = cats.slice(1)
    return copyOfCats
}

console.log(cats.length);