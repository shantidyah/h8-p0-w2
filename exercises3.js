var nama='shanti';
var peran='tabib';


if(nama===''&&(peran===''||peran!=='')){
  console.log("nama harus diisi");
}
else if (peran==='') {
  console.log("Hallo "+nama+", Pilih peranmu untuk mulai game !");
}
else if (peran==='Ksatria') {
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!");
}
else if (peran==='tabib') {
  console.log("selamat datang di Dunia Proxytia, "+nama);
  console.log("hallo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka.");
}
else if (peran==='penyihir') {
  console.log("selamat datang di dunia proxytia, "+nama);
  console.log("halo "+peran+" "+nama+", ciptakan kerajaan yang membantu kemenanganmu!");
}
