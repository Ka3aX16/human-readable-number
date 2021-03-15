module.exports = function toReadable (number) {
var numString = number.toString();
var onesHundred = +(numString.substring(1));
var single = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
var double = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
var triple = ' hundred';
var str = '';

if (number == 0) {
    return 'zero';
}

if (number < 20) {
  return single[number].trim(); 
}

if (numString.length == 2) {
str += double[+(numString[0])];
str += single[+(numString[1])];
  return str.trim();
}

str =  single[+(numString[0])] + triple;
if (onesHundred < 20){
  str += single[onesHundred];
  return str.trim(); 
} else {
  str += double[+(numString[1])];
  str += single[+(numString[2])];
  return str.trim();
}

}
