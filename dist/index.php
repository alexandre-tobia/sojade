<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sojade - Marie Claire</title>
</head>
<body>
<?php echo file_get_contents("http://www.marieclaire.fr/chunk/top/2615969"); ?>
<?php echo file_get_contents("./index.html"); ?>
<?php echo file_get_contents("http://www.marieclaire.fr/chunk/bottom/2615969"); ?>
</body>
</html>
