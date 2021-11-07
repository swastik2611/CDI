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
$username=$_POST['siemail'];
$pwd=$_POST['sipass'];
$qry="SELECT * FROM signup WHERE Email='$username' AND Password='$pwd';";
$result=mysqli_query($con,$qry);
if(mysqli_query($con,$qry))
{
  $rowcount=mysqli_num_rows($result);
  if($rowcount==0){
    echo "no record found";
    }
  else
  {
    $row = mysqli_fetch_array($result);

      echo $row['First_Name']." " .$row['Middle_Name']." " .$row['Last_Name']." " .$row['Contact_Number']
      ." " .$row['Email']." " .$row['Password'];

  }
}
else {
  echo "Error!".mysqli_error($con);
}
mysqli_close($con);
exit;
?>
?>
