var hari='2'; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=3; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun='2001'; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tampil='';

switch (bulan) {
  case 1:{
    tampil=hari+' Januari '+tahun;
    break;
  }
  case 2:{
    tampil=hari+' Februari '+tahun;
    break;
  }
  case 3:{
    tampil=hari+' Maret '+tahun;
    break;
  }
  case 4:{
    tampil=hari+' April '+tahun;
    break;
  }
  case 5:{
    tampil=hari+' Mei '+tahun;
    break;
  }
  case 6:{
    tampil=hari+' Juni '+tahun;
    break;
  }
  case 7:{
    tampil=hari+' Juli '+tahun;
    break;
  }
  case 8:{
    tampil=hari+' Agustus '+tahun;
    break;
  }
  case 9:{
    tampil=hari+' September '+tahun;
    break;
  }
  case 10:{
    tampil=hari+' Oktober '+tahun;
    break;
  }
  case 11:{
    tampil=hari+' November '+tahun;
    break;
  }
  case 12:{
    tampil=hari+' Desember '+tahun;
    break;
  }
  default:{
    tampil='bulan yang dimasukan salah';
  }
}

console.log(tampil);
