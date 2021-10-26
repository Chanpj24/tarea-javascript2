console.log('punto 1')
const list =  ['miguel', 'estiven', 'raul', 'miranda', 'antonieta', 'sebastian', 'jose'];
list.sort();
console.log('la lista normal es', list)


console.log('punto 2.1')
let text = "esta tarea esta muy enredada";
let reverse  = "";
for (let i = text.length; i >=0; i--){
    reverse = reverse + text.charAt(i);
}
console.log('su texto normal es',text)
console.log('su texto al reves es', reverse)


console.log('punto 2.2')



console.log('punto 3')
const sentence = ' porfinacabelatarea '


let newSencentce = [];
let newSentenceString = '';
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != ' ') {
        newSencentce.push(sentence[i])

        newSentenceString += sentence[i]
    }
}

console.log('la oracion original es', sentence);
console.log('la oracion modificada es ', newSencentce.join('-'));


