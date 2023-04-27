function hitung() {
    const nilaiA = document.getElementById("nilaiA").value;
    const nilaiB = document.getElementById("nilaiB").value;
    const nilaiC = document.getElementById("nilaiC").value;
    const ul = document.getElementsByTagName("ul")[0];
    const li = ul.getElementsByTagName("li")[3];

    let hasil, hapus, unit;

    if(nilaiA && nilaiB && nilaiC) {
        hasil = nilaiC * nilaiB;
        unit = (nilaiB * nilaiC) / nilaiA;

        document.getElementById("p1").innerHTML = `Anda membutuhkan Sebanyak ${hasil.toLocaleString()} ML/KG. Atau sebanyak ${Math.ceil(unit)} unit barang.`

        hapus = document.createElement("button");
        hapus.setAttribute("id", "hapus");
        hapus.setAttribute("onclick", "hapus()");
        hapus.appendChild(document.createTextNode("Hapus"));
        li.appendChild(hapus);
    }else if(nilaiA && nilaiB) {
        alert("Anda belum memasukan pack/unit!");
    }else if(nilaiA && nilaiC) {
        alert("Anda belum memasukan Resep!");
    }else if(nilaiB && nilaiC) {
        alert("Anda belum memasukan ML/KG!");
    }else if(nilaiA) {
        alert("Anda belum memasukan nilai Resep dan pack/unit!");
    }else if(nilaiB) {
        alert("Anda belum memasukan nilai ML/KG dan pack/unit!");
    }else if(nilaiC) {
        alert("Anda belum memasukan nilai ML/KG dan Resep!");
    }else{
        alert("Anda belum memasukan nilai sama sekali!");
    }
}

function hapus() {
    let nilaiA = document.getElementById("nilaiA");
    let nilaiB = document.getElementById("nilaiB");
    let nilaiC = document.getElementById("nilaiC");
    let p1 = document.getElementById("p1");

    nilaiA.value = "";
    nilaiB.value = "";
    nilaiC.value = "";
    p1.innerHTML = ""; 

    let hapus = document.getElementById("hapus");
    hapus.remove();
}