<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

session_start();

function display($path)
{
    $file = fopen($path, "r");
    while (!feof($file)) {
        $line = fgets($file);
        echo $line;
    }
    fclose($file);
}
?>
<!DOCTYPE html>
<html>

<body>
    hi
</body>

</html>