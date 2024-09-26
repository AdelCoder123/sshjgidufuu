<?php
$host = "sqlXXX.infinityfree.com";  // ضع هنا عنوان الـHost الخاص بقاعدة البيانات
$dbname = "اسم قاعدة البيانات";
$username = "اسم المستخدم لقاعدة البيانات";
$password = "كلمة المرور لقاعدة البيانات";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
