neillsilva.com
========

Source code to my personal portfolio website. Using Bootstrap/jQuery/AngularJS.

Pretty URLS
========
If you use locationProvider HTML5 mode, you will need to configure the server to work with it.
For Apache, you would use the following code in your .htaccess file:

RewriteEngine on

# Don't rewrite files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Rewrite everything else to index.html to allow html5 state links
RewriteRule ^ index.html [L]