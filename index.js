// Write your code in this file!
//scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
function scuberGreetingForFeet(x){
  if (x<=400){
    return 'This one is on me!';
  }
  else if (x>2000 && x<=2500){
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

//
