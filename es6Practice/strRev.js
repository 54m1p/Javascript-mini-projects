let inputBox = document.getElementById('inputBox');

let fnRev = () => {
    let split = inputBox.value.split("");
    let reverse = split.reverse().join("");
    console.log(reverse);
    document.getElementById('printBox').innerHTML = reverse;
}
