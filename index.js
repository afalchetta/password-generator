
function genChar(length){
  let password = '';
  const value = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#*()+={}/?~;,.-_';
  const charLen = value.length;
  for (let i = 0; i < length; i++){
    password += value.charAt(Math.floor(Math.random() * charLen));
  }
  return password;

}
document.getElementById('passwordDiv').value = genChar(18);


console.log(genChar(17));
