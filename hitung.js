let barang = [
{
    kode  : '001',
    nama  : 'A',
    harga : 10.000
},
{
    kode : '002',
    nama : 'B',
    harga : 20.000
},
{
    kode : '003',
    nama  : 'C',
    harga : 30.000
}
];

    function caribarang(kode)
{
    for(let i = 0 ; i < barang.length; i++){
        if (barang[i].kode === kode)
        return barang[i]
    }
    return null;
}

    function proses() {
        const formBarang = document.querySelector('#form-barang');
    }