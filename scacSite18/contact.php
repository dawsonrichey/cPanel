<?php
/* Set e-mail recipient */
$myemail  = "artscouncilscottcounty@gmail.com";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['yourname'], "Enter your name");
$email    = check_input($_POST['email']);
$subject  = check_input($_POST['subject'], "Write a subject");
$how_find = check_input($_POST['how']);
$comments = check_input($_POST['comments'], "Write your comments");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* If URL is not valid set $website to empty */
if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
{
    $website = '';
}

/* Let's prepare the message for the e-mail */
$message = "Hello!

Your contact form has been submitted by:

Name: $yourname
E-mail: $email

How did he/she find us? $how_find

Comments:
$comments

End of message
";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
echo'
   <script>
   window.onload = function() {
      alert("Thank you. Your message has been sent.");
      location.href = "index.html";  
   }
   </script>
';
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>