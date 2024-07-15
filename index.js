document.getElementById('convert').onclick = function() {
    let temp = document.getElementById('temp_inp').value;
    if (!isNaN(temp) && typeof parseFloat(temp) === "number") {
        temp = parseFloat(temp);
        celsius_btn = document.getElementById('celsius');
        fahrenheit_btn = document.getElementById('fahrenheit');
        if (celsius_btn.checked){
            document.getElementById('ftocel').innerHTML = '';
            fahrenheit = (temp * 9/5) + 32;
            fahrenheit = fahrenheit.toFixed(2);
            document.getElementById('celtof').innerHTML = `${fahrenheit} <span>&#8451;</span>`;
        }
        else if(fahrenheit_btn.checked){
            document.getElementById('celtof').innerHTML = '';
            celsius = (temp - 32) * 5/9;
            celsius = celsius.toFixed(2);
            document.getElementById('ftocel').innerHTML = `${celsius} <span>&#8457;</span>`;
        }
        else{
            window.alert('Please select a unit to convert to');
        }
    }	
    else {
        window.alert('Please enter a valid number!Not a string');
    }
}