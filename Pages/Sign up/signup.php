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
$fname=$_POST["cfname"];
$mname=$_POST['cmname'];
$lname=$_POST['clname'];
$phone=$_POST['cphone'];
$email=$_POST['cemail'];
$pass=$_POST['cpass'];
$qrychk="SELECT * FROM signup WHERE Email='$email';";//query to check for same email id acc
$result=mysqli_query($con,$qrychk);
$rowcount=mysqli_num_rows($result);
if($rowcount!=0){
  echo "Account already exists!";
  }
  else {//if acc doesn't exists already
    $qry="INSERT INTO signup (First_Name,Middle_Name,Last_Name,Contact_Number,Email,Password)
    VALUES('$fname','$mname','$lname','$phone','$email','$pass');";
    echo nl2br("\n");
    if(mysqli_query($con,$qry))
    {
      echo "Inserted";
      header("Location:../../index.html");
    }
    else {
      echo mysqli_error($con);
      echo "Not Inserted";
    }

  }

mysqli_close($con);
exit;
?>
