const nama = "AR04";
let usia = 25;

let biodata = document.getElementById('biodata');

function generateBiodata() {
  let generasi;

  if (usia > 10 && usia < 18) {
    generasi = "GENERASI REMAJA";
  } 
  else if (usia > 18 && usia < 30) {
    generasi = "GENERASI DEWASA";
  }
  else if (usia >= 30) {
    generasi = "GENERASI TUA";
  }
  else if (usia > 2 && usia <= 10) {
    generasi = "GENERASI ANAK ANAK";
  }
  else {
    generasi = "GENERASI BAYI";
  }
  return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();