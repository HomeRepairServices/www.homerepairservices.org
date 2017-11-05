<?php


// Path to your craft/ folder
$craftPath = '../craft';

define('CRAFT_ENVIRONMENT', getenv('CRAFT_ENV'));
define('CRAFT_LOCALE', 'en_us');

// Do not edit below this line
$path = rtrim($craftPath, '/').'/app/index.php';

if (!is_file($path))
{
	if (function_exists('http_response_code'))
	{
		http_response_code(503);
	}

	exit('Could not find your craft/ folder. Please ensure that <strong><code>$craftPath</code></strong> is set correctly in '.__FILE__);
}

require_once $path;
