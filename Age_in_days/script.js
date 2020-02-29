function ageInDays(){
    let birthYear = prompt('What year were you born in?');
    let ageInDayss = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are' + ageInDayss + 'days old');
    h1.setAttribute('id', 'ageInDayss');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}