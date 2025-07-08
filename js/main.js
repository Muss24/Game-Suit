function setUserInput(userInput) {
    userInput = userInput.toLowerCase();
    let pilihan = ["batu", "gunting", "kertas"];
    let lawan = pilihan[Math.floor(Math.random() * pilihan.length)];

    if (!pilihan.includes(userInput)) {
        alert("Pilihan tidak valid.");
    } else {
        if (userInput === lawan) {
            Swal.fire({
                title: "Seri!",
                text: "Lawan anda memilih " + lawan + ", Seri!",
                icon: "info",
                confirmButtonText: "OK"
            });
        } else if (
            (userInput === "batu" && lawan === "gunting") ||
            (userInput === "gunting" && lawan === "kertas") ||
            (userInput === "kertas" && lawan === "batu")
        ) {
            Swal.fire({
                title: "Menang!",
                text: "Lawan anda memilih " + lawan + ", Anda menang!",
                icon: "success",
                confirmButtonText: "OK"
            });
        } else {
            Swal.fire({
                title: "Kalah!",
                text: "Lawan anda memilih " + lawan + ", Anda kalah!",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    }
}

