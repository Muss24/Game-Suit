function setUserInput(userInput) {
    userInput = userInput.toLowerCase();
    let pilihan = ["batu", "gunting", "kertas"];
    let lawan = pilihan[Math.floor(Math.random() * pilihan.length)];
    let images = {
        batu: "../assets/batu.png",
        gunting: "../assets/gunting.png",
        kertas: "../assets/kertas.png"
    };

    if (!pilihan.includes(userInput)) {
        alert("Pilihan tidak valid.");
    } else {
        let lawanImage = images[lawan];

        if (userInput === lawan) {
            Swal.fire({
                title: "Seri!",
                text: "Lawan anda memilih " + lawan + ", Seri!",
                imageUrl: lawanImage,
                imageWidth: 100,
                imageHeihgt: 100,
                confirmButtonText: "OK"
            });
        } else if (
            (userInput === "batu" && lawan === "gunting") ||
            (userInput === "gunting" && lawan === "kertas") ||
            (userInput === "kertas" && lawan === "batu")
        ) {
            Swal.fire({
                text: "Lawan anda memilih " + lawan + ", Anda menang!",
                title: "Menang!",
                imageUrl: lawanImage,
                imageWidth: 100,
                imageHeihgt: 100,
                confirmButtonText: "OK"
            });
        } else {
            Swal.fire({
                text: "Lawan anda memilih " + lawan + ", Anda kalah!",
                title: "Kalah!",
                imageUrl: lawanImage,
                imageWidth: 100,
                imageHeihgt: 100,
                confirmButtonText: "OK"
            });
        }
    }
}

