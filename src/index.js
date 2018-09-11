module.exports = function solveEquation(equation) {
  let regExpMask=/[+-]?\s*\d+/g;
  let regEx=new RegExp(regExpMask);
  let parameters=equation.match(regEx).map(elem=>elem.replace(" ",""));
  if (parameters.length===3) parameters.unshift(1);
  parameters.splice(1,1);
  //to be able to handle larger values
  let average=(Math.abs(parameters[0])+Math.abs(parameters[1])+Math.abs(parameters[2]))/3;
  let a=parameters[0]/average;
  let b=parameters[1]/average;
  let c=parameters[2]/average;
  const discSqrt=Math.sqrt((Math.pow(b,2)-4*a*c));
  return [Math.round(-b/2/a-discSqrt/2/a), Math.round(-b/2/a+discSqrt/2/a)].sort((a,b)=>{return a-b})}