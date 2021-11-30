<?php
  $ansOne = $_POST["one"];
  $ansTwo = $_POST["two"];
  $ansThree = $_POST["three"];
  $ansFour = $_POST["four"];
  $ansFive = $_POST["five"];
  $correct = 0;

  if($ansOne=="a - Sperm Whale"){$correct++;}
  if($ansTwo=="c - Unkindness"){$correct++;}
  if($ansThree=="b - Rabbit"){$correct++;}
  if($ansFour=="d - Scotland"){$correct++;}
  if($ansFive=="c - 3"){$correct++;}

  echo "<h2>Animal Trivia !</h2";
  echo "<strong>Q1:</strong> What is the loudest animal on Earth?<br>";
  echo "You answered: " .$ansOne. "<br>";
  echo "Correct answer: a - Sperm Whale<br><br>";

  echo "<strong>Q2:</strong> A group of ravens is known as?<br>";
  echo "You answered: " .$ansTwo. "<br>";
  echo "Correct answer: c - Unkindness<br><br>";

  echo "<strong>Q3:</strong> What type of animal is a Flemish giant?<br>";
  echo "You answered: " .$ansThree. "<br>";
  echo "Correct answer: b - Rabbit<br><br>";

  echo "<strong>Q4:</strong> The unicorn is the national animal of which country?<br>";
  echo "You answered: " .$ansFour. "<br>";
  echo "Correct answer: d - Scotland<br><br>";

  echo "<strong>Q5:</strong> How many hearts does an octopus have?<br>";
  echo "You answered: " .$ansFive. "<br>";
  echo "Correct answer: c - 3<br><br>";

  echo "You answered " .$correct. "/5 questions correctly<br>";
  echo "Percentage: " .(($correct/5)*100). "%<br>";
?>
