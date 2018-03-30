//SOAL NO 1
//looping pertama
var a=20;
var b=0;

console.log('looping pertama');

while (b<=a) {
  b=b+2;
  console.log(b + ' - I Love Coding');
}


//looping kedua
var x=20;
var y=0;

console.log('looping kedua');

while (y<x){
  console.log(x + ' - I will become fullstack developer')
  x=x-2;
}

//SOAL NO 2
//looping pertama
var c=20;
var d=0;

console.log('looping pertama');

while (d<=c) {
d++;
console.log(d + ' - I Love Coding');
}


//looping kedua
var e=20;
var f=0;

console.log('looping kedua');

while (f<e){
console.log(e + ' - I will become fullstack developer')
e--;
}


//SOAL NO 3
//no 1(ganjl-genap)
var counter=1;

while(counter<=100){
  if(counter%2==0){
    console.log("GENAP");
  }
  else{
    console.log("GANJIL");
  }
  counter++;
}


//no2(pertambahan 2,kelipatan 3)
var counter1=1;
while(counter1<=100){
  if(counter1%3==0){
    console.log(counter1+" kelipatan 3");
  }
  else{
    console.log("");
  }
  counter1=counter1+2;
}

//no3(pertambahan 5, kelipatan 6)
var counter2=1;
while(counter2<=100){
  if(counter2%6==0){
    console.log(counter2+" kelipatan 6");
  }
  else{
    console.log("");
  }
  counter2=counter2+5;
}

//no4(pertambahan pertambahan 9, kelipatan 10)
var counter3=1;
while(counter3<=100){
  if(counter3%10==0){
    console.log(counter3+" kelipatan 10");
  }
  else{
    console.log("");
  }
  counter3=counter3+9;
}
