function setUserInput(userInput) {
    userInput = userInput.toLowerCase();
    let pilihan = ["batu", "gunting", "kertas"];
    let lawan = pilihan[Math.floor(Math.random() * pilihan.length)];

    if (!pilihan.includes(userInput)) {
        alert("Pilihan tidak valid.");
    } else {
        if (userInput === lawan) {
            alert("Lawan anda memilih " + lawan +", Seri!");
        } else if (
            (userInput === "batu" && lawan === "gunting") ||
            (userInput === "gunting" && lawan === "kertas") ||
            (userInput === "kertas" && lawan === "batu")
        ) {
            alert("Lawan anda memilih " + lawan + ", Anda menang!");
        } else {
            alert("Lawan anda memilih " + lawan + ", Anda kalah!");
        }
    }
}