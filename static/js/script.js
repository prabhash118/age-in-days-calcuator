//challenge 1 : your age in days
function ageInDays(){
var birthYear=prompt('what year were you born friend?');
var ageInDayss =(2020-birthYear) *365;
var h1=document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');//string concatination 
//takinmg a string and adding a variable
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();
}