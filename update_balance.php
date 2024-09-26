<?php
session_start();
require 'db.php';

if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.php");
    exit;
}

$user_id = $_POST['user_id'];
$amount = $_POST['amount'];
$action = $_POST['action'];

$stmt = $pdo->prepare("SELECT wallet_balance FROM users WHERE id = ?");
$stmt->execute([$user_id]);
$current_balance = $stmt->fetchColumn();

if ($action === 'add') {
    $new_balance = $current_balance + $amount;
} else {
    $new_balance = max(0, $current_balance - $amount);
}

$stmt = $pdo->prepare("UPDATE users SET wallet_balance = ? WHERE id = ?");
$stmt->execute([$new_balance, $user_id]);

header("Location: admin.php");
