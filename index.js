function takeANumber(katzDeli, ticket) {
  katzDeli.push(ticket);
 var i = 0;
 i++;
 
 return "Welcome, " + ticket + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0)
  {return "Currently serving " + katzDeliLine.shift() + "." }
  else
  {return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine) {

  var array = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."}
    
  else {
      for(let i = 0; i < katzDeliLine.length; i++) {
        array += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
      array = array.slice(0, array.length - 2);
      return "The line is currently: " + array;
    }
}

