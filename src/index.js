module.exports = function check(str, bracketsConfig) {
  let bracketsArr = bracketsConfig.map( (e) => e.join("") );  //--multidimensialArr bracketsConfig to arr of pair brackets
  for (let i=0; i < bracketsArr.length; i++) {                //--iterating arr
    if (str.includes(bracketsArr[i])) {                       //--find pair brackets
      str=str.replace(bracketsArr[i],"");                     //--remove pair brackets from str
      i =-1;                                                  //--reiterating transformed arr
    }
  }
  return str.length === 0;
};
