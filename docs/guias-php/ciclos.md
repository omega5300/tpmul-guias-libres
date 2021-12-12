# ciclos o bucles

como todos los lenguajes de programaicón existe los ciclos o bucle para realizar repeticiones en un momento determinado estos son

``` php
<?php
// while
$max = 0;  
echo $i = 0;
echo ",";
echo $j = 1;  
echo ",";
$result=0;
 
while ($max < 10 )  
{  
    $result = $i + $j;  
 
    $i = $j;  
    $j = $result;  
 
    $max = $max + 1;  
    echo $result;
    echo ",";
}

// do-while
$handle = fopen("file.txt", "r");
if ($handle)
{
    do
    {
        $line = fgets($handle);
 
        // process the line content
 
    } while($line !== false);
}
fclose($handle);

// for
for ($i=1; $i<=10; ++$i) {
  echo sprintf("The square of %d is %d.</br>", $i, $i*$i);
}

// for each
$fruits = array('apple', 'banana', 'orange', 'grapes');
foreach ($fruits as $fruit)
{
  echo $fruit;
  echo "<br/>";
}
 
$employee = array('name' => 'John Smith', 'age' => 30, 'profession' => 'Software Engineer');
foreach ($employee as $key => $value)
{
  echo sprintf("%s: %s</br>", $key, $value);
  echo "<br/>";
}
?>
```