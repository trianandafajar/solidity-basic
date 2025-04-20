// Ambil kontrak "Migrations" yang digunakan untuk mencatat status migrasi
const Migrations = artifacts.require("Migrations");

// Fungsi ini dipanggil oleh Truffle saat melakukan deploy kontrak
module.exports = function (deployer) {
  // Deploy kontrak Migrations ke jaringan blockchain
  deployer.deploy(Migrations);
};
