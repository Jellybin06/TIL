<?php
require('lib/print.php');
require('view/top.php');
?>
    <a href="create.php">create</a>
    <?php if(isset($_GET['id'])) { ?>
      <a href="update.php/id=<?php echo $_GET['id'];//<?=$_GET['id']; ?>">update</a>
    <?php } ?>
    <h2>

    <form action="update_process.php" method="post">
      <input type="hidden" name="old_title" value="">
      <p>
        <input type="text" name="title" placeholder="Title" value="<?php print_title(); ?>">
      </p>
      <p>
        <textarea name="description" placeholder="Description" value=<?php print_description(); ?>></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
    <?php
    require('view/bottom.php');
     ?>
