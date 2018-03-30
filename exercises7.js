//soal 1
var rows1=5;

for(i=0;i<rows1;i++){
  console.log("*");
}


//soal 2
var rows2=5;

for(i=0;i<rows2;i++){
  var star='';
  for(j=0;j<rows2;j++){
    star += '*';
  }
  console.log(star);
}


//soal 3

var rows3=5;

for(i=0;i<rows3;i++){
  var bintang='';
  for(j=0;j<=i;j++){
    bintang += '*';
  }
  console.log(bintang);
}
