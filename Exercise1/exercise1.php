<?php
  echo"<table border = 2px>";
  for($row=1; $row<=100;$row++){
    echo"<tr>";
    for($col=1; $col<=100;$col++){
      echo"<td>";
      echo $row*$col;
      echo"</td>";
    }
    echo"</tr>";
  }
  echo"<table>";
?>
