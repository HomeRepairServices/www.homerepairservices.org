<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

$base_url = getenv('HEROKU_APP_NAME') ? ("https://" . getenv('HEROKU_APP_NAME') . ".herokuapp.com/") : getenv('SITE_URL');
return array(
    '*' => array(
        // Base site URL
        'siteUrl' => array(
            'en_us' => 'http://localhost:8888/',
            'es_us' => 'http://localhost:8888/es/'
        ),

        // Environment-specific variables (see https://craftcms.com/docs/multi-environment-configs#environment-specific-variables)
        'environmentVariables' => array(),

        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs (true, false, "auto")
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true
    ),
    'staging' => array(
        'devMode' => false,
        'siteUrl' => array(
            'en_us' => $base_url,
            'es_us' => $base_url . 'es/'
        )
    )
);
