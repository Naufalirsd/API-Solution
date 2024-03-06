const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simpan data pengguna yang terdaftar
let users = [];

// Endpoint untuk mendaftar pengguna baru
app.post("/api/signup", (req, res) => {
    const { NIP, PASSWORD, NAME } = req.body;

    // Cek apakah NIP sudah terdaftar
    if (users.find((user) => user.NIP === NIP)) {
        return res
            .status(400)
            .json({ message: "nip sudah pernah ditambahkan" });
    }

    // Tambahkan pengguna baru ke dalam daftar
    users.push({ NIP, PASSWORD, NAME });

    // Kirim respons berhasil
    return res.status(201).json({ message: "pegawai baru ditambahkan" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
