<?php
$db_host="localhost";
$db_name="CDI";
$db_user="cdi_www";
$db_pwd="a.HA[L4n]]B(qw8G";
$con=mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
if(mysqli_connect_error())
{
  echo mysqli_connect_error();
  exit;
}
else {
  echo "Successfully connected";
  echo nl2br("\n");
}
$fname=$_POST["ffname"];
$lname=$_POST["flname"];
$email=$_POST["femail"];
$number=$_POST["fnumber"];
$radio=$_POST["fradio1"];
$suggestions=$_POST["ftextarea"];
$qry="INSERT INTO Feedback (First_Name,Last_Name,Email,Contact_Number,Overall_Impression,Suggestions)
VALUES('$fname','$lname','$email','$number','$radio','$suggestions');";
if(mysqli_query($con,$qry))
{
  echo "Inserted";
  header("Location:../../index.html");
}
else {
  echo "NOt Inserted".mysqli_error($con);
}
 ?>
