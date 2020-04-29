const calcInsurance = (names, age, horsepower, countries, result) => {
    names = document.getElementById('name').value;
    age = document.getElementById('age').value;
    horsepower = document.getElementById('horsepower').value;
    countries = document.getElementById('select').value;
    result = document.getElementById('result');

    if ( !names ) {
        alert('Please add your name!')
        return
    }
    
    if( !age || age < 18) {
        alert('Sorry you are under 18 years!')
        return
    }

    let austria = Math.floor(horsepower * 100 / age + 50) + " €!";
    let hungary = Math.floor(horsepower * 120 / age + 100) + " €!";
    let greece = Math.floor(horsepower * 150 / (age + 3) + 150) + " €!";

    if (countries === "Austria") {
        result.innerHTML = names + " your insurance costs " + austria;
    }
    else if (countries === "Hungary") {
        result.innerHTML = names + " your insurance costs " + hungary;
    }
    else {
        result.innerHTML = names + " your insurance costs " + greece;
    }

}
let button = document.getElementById('btn').addEventListener('click', calcInsurance, false);


