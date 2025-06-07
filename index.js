title = document.getElementById("title");
mainInput = document.getElementById("mainInput");
fromC = document.getElementById("fromC");
fromF = document.getElementById("fromF");
fromK = document.getElementById("fromK");
fromBlanker = document.getElementById("fromBlanker");
toC = document.getElementById("toC");
toF = document.getElementById("toF");
toK = document.getElementById("toK");
toBlanker = document.getElementById("toBlanker");
submitBtn = document.getElementById("submitBtn");
resultLabel = document.getElementById("resultLabel");
indicatorArrow = document.getElementById("indicatorArrow");
resultLabelNew = document.getElementById("resultLabelNew");

let receivedInput;
let originUnit;
let destinationUnit;
let result;

receivedInput = 0;
result = 0;
mainInput.value = "";
resultLabel.value = "";
indicatorArrow.value = "";
resultLabelNew.value = "";
fromBlanker.checked = true;
toBlanker.checked = true;
fromBlanker.disabled = true;
toBlanker.disabled = true;
fromBlanker.hidden = true;
toBlanker.hidden = true;

function temp_unit_mapper() 
{
    switch (true) 
    {
        case fromC.checked:
            originUnit = "C";
            break;
        case fromF.checked:
            originUnit = "F";
            break;
        case fromK.checked:
            originUnit = "K";
            break;
    }

    switch (true) 
    {
        case toC.checked:
            destinationUnit = "C";
            break;
        case toF.checked:
            destinationUnit = "F";
            break;
        case toK.checked:
            destinationUnit = "K";
            break;
    }
}

submitBtn.onclick = function () 
{
    receivedInput = mainInput.value;

    if (isNaN(receivedInput) || receivedInput == "") 
    {
        mainInput.value = "";
        window.alert("Invalid Input. Try again.");
    }
    else 
    {
        receivedInput = Number(receivedInput);
        temp_unit_mapper();
        if (originUnit == destinationUnit) 
        {
            result = receivedInput;
        }
        else if (originUnit == "C") 
        {
            if (destinationUnit == "F") 
            {
                result = (receivedInput * (9 / 5)) + 32;
            }
            else if 
            {
                (destinationUnit == "K") result = receivedInput + 273.15;
            }
        }
        else if (originUnit == "F") 
        {
            if (destinationUnit == "C")
            {
                result = (receivedInput - 32) * (5 / 9);
            }
            else if 
            {
                (destinationUnit == "K") result = ((receivedInput - 32) * (5 / 9)) + 273.15;
            }
        }
        else if (originUnit == "K") 
        {
            if (destinationUnit == "C") 
            {
                result = receivedInput - 273.15;
            }
            else if (destinationUnit == "F") 
            {
                result = ((receivedInput - 273.15) * (9 / 5)) + 32;
            }
        }

        resultLabel.textContent = receivedInput + 
            "°" + 
            originUnit;
        indicatorArrow.textContent = "↓";
        resultLabelNew.textContent = result.toFixed(1) + 
            "°" + 
            destinationUnit;
        mainInput.value = "";
        fromBlanker.checked = true;
        toBlanker.checked = true;
    }
}
