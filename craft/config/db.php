<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

$url = getenv('JAWSDB_URL');
$dbparts = parse_url($url);


return array(
    '*' => array(
        // The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
        'server' => 'localhost',

        // The name of the database to select.
        'database' => 'craft_db',

        // The database username to connect with.
        'user' => 'root',

        // The database password to connect with.
        'password' => 'root',

        // The prefix to use when naming tables. This can be no more than 5 characters.
        'tablePrefix' => 'craft',
    ),
    'staging' => array(
        'server' => $dbparts['host'],
        'user' => $dbparts['user'],
        'password' => $dbparts['pass'],
        'database' => ltrim($dbparts['path'],'/'),
        'tablePrefix' => 'craft'
    )
);