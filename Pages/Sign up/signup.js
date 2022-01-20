function formValidation()
{
  clearspan();
  var validity=true;
  var fname=document.forms["cform1"]["cfname"].value;
  var mname=document.forms["cform1"]["cmname"].value;
  var lname=document.forms["cform1"]["clname"].value;
  var phn=document.forms["cform1"]["cphone"].value;
  var eml=document.forms["cform1"]["cemail"].value;
  var pwd=document.forms["cform1"]["cpass"].value;
  var cpwd=document.forms["cform1"]["ccpass"].value;
  for(var i=0;i<fname.length;i++)//Check validity of first name
  {
    var x=fname.charCodeAt(i);
    if(!((x>=65&&x<=90)||(x>=97&&x<=122)))
    {
      document.querySelector("#fsp").innerHTML="*Invalid First Name";
      validity=false;
    }
  }
  for(var i=0;i<mname.length;i++)//Check Validity of middle name
  {
    var x=mname.charCodeAt(i);
    if(!((x>=65&&x<=90)||(x>=97&&x<=122)))
    {
      document.querySelector("#msp").innerHTML="*Invalid Middle Name";
      validity=false;
    }
  }
  for(var i=0;i<lname.length;i++)//Check validity of last name
  {
    var x=lname.charCodeAt(i);
    if(!((x>=65&&x<=90)||(x>=97&&x<=122)))
    {
      document.querySelector("#lsp").innerHTML="*Invalid Last Name";
      validity=false;
    }
  }
  if(phn.length!==13)//Check no. of digits in phone number
  {
    document.querySelector("#csp").innerHTML="*Invalid Number";
    validity=false;
  }
  for(var i=1;i<phn.length;i++)//Check whether digits contain phone number
  {
    var x=phn.charCodeAt(i);
    if(!(x>=48&&x<=57))
    {
      document.querySelector("#csp").innerHTML="*Invalid Character";
      validity=false;
    }
  }
//Password Validity
  var count=0;
  for(var i=0;i<pwd.length;i++)//Check for special characters
  {
    var x=pwd.charCodeAt(i);
    if(!((x>=65&&x<=90)||(x>=97&&x<=122)||(x>=48&&x<=57)))
    {
      count++;
    }
  }
  if(count==0)//Check flag for special characters
  {
    document.querySelector("#psp").innerHTML="*Include Special Characters(@,#,$)";
    validity=false;
  }
  if(pwd.length<8)//Check password length
  {
    document.querySelector("#psp").innerHTML="*Too Short";
    validity=false;
  }
//Confirm Password Validation
if(pwd!==cpwd)
{
  document.querySelector("#cpsp").innerHTML="*Passwords didn't match";
  validity=false;
}
if(validity==true)
{
  alert("Form Submitted Successfully!");
}
  return validity;
}

document.querySelector("#b2").addEventListener("click",clearspan);//Add event listener to reset button

function clearspan()//Clear all spans when reset or re submit
{
  var spa=document.querySelectorAll(".sp");
  for(var i=0;i<spa.length;i++)
  {
    spa[i].innerHTML=" ";
  }
}
