<?php
if($_POST) {
 $username = $_POST['username'];
 $password = $_POST['password'];

 if (!empty($username) || !empty($password)) {
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
  	$query = "SELECT Email, Password From user_information Where Email='$username' AND Password='$password'";

   $result = mysqli_query($conn, $query);
   if ($result == 1) {
      session_start();
      $SESSION['authentication'] = 'true';
      header("location:../landingpage2/homes/index.html");
    }

    else {
      //$error ="Someone already registered using this email";
      echo "<h1>Log-in unsuccessful...</h1><br>";
      echo "<p>Wrong username or password<p>";
    }
  }
  $conn->close();
 }
 else {
  //$error = "All field are required";
  echo "<h1>All field are required</h1>";
  die();
 }
}
?>