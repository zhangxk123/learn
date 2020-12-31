// import testHandler from "./a";
// testHandler([1, 2, 3]);
const babel =require("@babel/core");
const code=`(n)=>n**2`
const result=babel.transform(code,{
  presets:["@babel/preset-env"]
})
console.log(result.code);