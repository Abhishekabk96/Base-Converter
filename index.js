function dec2bin(decim){
  temp="";

  while(decim>0){
    temp=(decim%2)+temp;
    decim=parseInt(decim/2);
  }
    document.getElementById('converted').value=temp;
    return;
}
function dec2octal(decim){
  temp="";
  while(decim>0){
    temp=(decim%8)+temp;
    decim=parseInt(decim/8);
  }
    document.getElementById('converted').value=temp;
    return;
}
function dec2hexa(decim){
  temp="";
  while(decim>0){
    if(decim%16<10)
    {
      temp=(decim%16)+temp;
      console.log(temp);
    }
    else {
      x=decim%16;
      str='A';
      temp=temp+String.fromCharCode((x-10+str.charCodeAt(0)));
    }
    decim=parseInt(decim/16);
  }
    document.getElementById('converted').value=temp;
    return;
}
function convertor(){
  decimal=document.getElementById('deci').value;
  operation=document.getElementById('mySelect').value;
  if(operation=="B")
  {
    dec2bin(parseInt(decimal));
    return;
  }
  else if(operation=="O")
  {
      dec2octal(parseInt(decimal));
  }
  else if(operation=="H")
  {
    dec2hexa(parseInt(decimal));
  }

}
