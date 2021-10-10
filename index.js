function RollDice()
{
    document.getElementById("red").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("blue").value = Math.floor(Math.random() * 6) + 1;
}