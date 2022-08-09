<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Array</title>
  </head>
  <body>
    <h1>Array</h1>
    <?php
      $coworkers = array('egoing', 'leezche', 'duru', 'jelly');
      echo $coworkers[1].'<br>';
      echo $coworkers[3].'<br>';
      echo count($coworkers);
      //var_dump(count($coworkers)); //int(4)
      array_push($coworkers, 'graphittie');
      var_dump($coworkers);

    ?>
  </body>
</html>
