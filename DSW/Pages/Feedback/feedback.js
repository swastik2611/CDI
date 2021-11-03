function formValidation()//Feedback Form  Validation
{
  clearSpan();
  var validity=true;
  var fname=document.forms["form1"]["ffname"].value;
  var lname=document.forms["form1"]["flname"].value;
  var eid=document.forms["form1"]["femail"].value;
  var cno=document.forms["form1"]["fnumber"].value;
  var rdo=document.forms["form1"]["fradio1"].value;
  for(var i=0;i<fname.length;i++)//First name check
  {
    var x = fname.charCodeAt(i);
    if(!((x>=65&&x<=90)||(x>=97&&x<=122)))
    {
      document.querySelector("#fsfname").innerHTML="*Please enter aplhabets only";
      validity=false;
    }
  }
  for(var i=0;i<lname.length;i++)//Last name check
  {
    var x = lname.charCodeAt(i);
    if(!((x>=65&&x<=90)||(x>=97&&x<=122)))
    {
      document.querySelector("#fslname").innerHTML="*Please enter aplhabets only";
      validity=false;
    }
  }
  if(cno.length!==13)//Check number of digits in phone
  {
    document.querySelector("#fsnumber").innerHTML="*Invalid Number";
    validity=false;
  }
  for(var i=1;i<cno.length;i++)//Whether number contain only digits
  {
    var x=cno.charCodeAt(i);
    if(!(x>=48&&x<=57))
    {
      validity=false;
      document.querySelector("#fsnumber").innerHTML="*Enter numbers only";
    }
  }
  if(validity==true)
  {
    alert("Feedback Submitted Successfully!");
  }
  return validity;
}
document.querySelector(".b2").addEventListener("click",clearSpan);//Event listener on reset button
function clearSpan()//To clear all spans when reset or submitted again
{
  var l=document.querySelectorAll(".sp");
  for(var i=0;i<l.length;i++)
  {
      l[i].innerHTML=" ";
  }
}
