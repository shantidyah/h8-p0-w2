//soal 1
var kata;

function shoutOut(kata){
  console.log(kata);
}
shoutOut('Halo Function');

//soal 2

function calculateMultiply(num1,num2){
  return num1*num2;
}
var num1=5;
var num2=6;

var hasilperkalian = calculateMultiply(num1,num2);
console.log(hasilperkalian);

//soal 3

function processSentence(name,age,address,hobby){
  return("Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby);
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
