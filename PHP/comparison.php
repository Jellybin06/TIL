<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Comparison Operators &amp;
    Boolean data type </h1>
    <?php
      print(1); //1
      var_dump(1); //int(1)
      var_dump('11'); //string(2) "11"
      var_dump(1+1); //int(2)
      var_dump(1==1); //bool(true)
      var_dump(1==2); //bool(false)
    ?>

    <h2>1 > 1</h2>
    <?php
      var_dump(1>1); //bool(false);
    ?>

    <h2>1 >= 1</h2>
    <?php
      var_dump(1>=1); //bool(true);
    ?>
  </body>
</html>
