<?php
//$error = "";
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$conPassword = $_POST['conPassword'];
$loginLink = "login.html";

if (!empty($username) || !empty($password) || !empty($email)) {
  $host = "localhost";
  $dbUsername = "root";
  $dbPassword = "";
  $dbName = "tourismuserinformation";

  //create connection
  $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
  if (mysqli_connect_error()) {
    die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
  }
  else {
   //$SELECT = "SELECT Email From user_information Where Email = ? Limit 1";
   $INSERT = "INSERT INTO user_information (Email, Password, Username) values (?, ?, ?)";

   //Prepare statement
   //$conn = $conn->prepare($SELECT);
   $stmt = $conn->prepare("SELECT Email From user_information Where Email = ? Limit 1");
   $stmt->bind_param("s", $email);
   $stmt->execute();
   $stmt->bind_result($email);
   $stmt->store_result();
   $rnum = $stmt->num_rows;
   if ($rnum == 0) {
      $stmt->close();
      if(strcmp($password, $conPassword) != 0) {
       //$error = "Passwords do not match";
       echo "<h1>Passwords do not match</h1>";
       die();
      }
     $stmt = $conn->prepare($INSERT);
     $stmt->bind_param("sss", $email , $username, $password);
     $stmt->execute();
     echo "<h1>Account created sucessfully</h1>";
     //$loginLink = "login.html";
     echo "<a
     href='$loginLink'>Click here to Log-in...</a>";
    } 

    else {
      //$error ="Someone already registered using this email";
      echo "<h1>Someone already registered using this email</h1>";
    }
  }
  //header("location:login.html");
  $stmt->close();
  $conn->close();
}
else {
  //$error = "All field are required";
  echo "<h1>All field are required</h1>";
  die();
}
?>