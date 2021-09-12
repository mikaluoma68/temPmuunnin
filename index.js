const fahrIn = document.getElementById("fahrenheit");
const celsIn = document.getElementById("celsius");
const inputs = document.getElementsByClassName("input");
  

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function(muunna) {
        let value = parseFloat(muunna.target.value);

        switch (muunna.target.name) {
            case "celsius":
                fahrIn.value = (value * 1.8) + 32;
                break;
            case "fahrenheit":
                celsIn.value = (value-32) / 1.8;
                break;
        }
    });
}
