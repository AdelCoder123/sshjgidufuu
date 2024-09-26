<?php
session_start();
require 'db.php';

if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.php");
    exit;
}
?>

<h1>Admin Panel</h1>
<form method="POST" action="update_balance.php">
    <input type="number" name="user_id" placeholder="User ID" required>
    <input type="number" name="amount" placeholder="Amount" step="0.01" required>
    <select name="action">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
    </select>
    <button type="submit">Update Balance</button>
</form>
