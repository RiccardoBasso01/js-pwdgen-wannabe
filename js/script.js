console.log('JS OK');

// Recupero elemento dalla pagina
const password = document.getElementById('password');
console.log(password)

//Chiedere il nome, assegnarlo ad una variaible e verificare in console
const nome = prompt('Qual è il tuo nome?', 'Riccardo');
console.log(nome);

//Chiedere il cognome, assegnarlo ad una variaible e verificare in console
const cognome = prompt('Qual è il tuo cognome?', 'Basso');
console.log(cognome);

//Chiedere il colorePreferito, assegnarlo ad una variaible e verificare in console
const colorePreferito = prompt('Qual è il tuo colore preferito?', 'Nero');
console.log(colorePreferito);

//Unire tutti i dati formando la password e inserirla all' interno dell' HTML
password.innerText = nome + cognome + colorePreferito;

