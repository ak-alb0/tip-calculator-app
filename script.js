const input = document.querySelector(".money1")
const money11 = document.querySelector(".money11")

const input2 = document.querySelector(".money2")
const money22 = document.querySelector(".money22")


input.addEventListener("input", () => {
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4);
    }
    // if (input.value.startsWith("-")) {
    //     input.value = input.value.replace("-", "");
    // }
    money11.textContent = input.value;
});

input2.addEventListener("input", () => {
    if (input2.value.length > 4) {
        input2.value = input2.value.slice(0, 4);
    }
    money22.textContent = input2.value;
});