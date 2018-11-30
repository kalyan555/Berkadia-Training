# Nginx
Steps to setup nginx are:

* Download NGinx (http://nginx.org/en/download.html) and uzip to C:\foobar\nginx
* Download nssm (https://nssm.cc/)
* Run "nssm install nginx" from the command line
* In NSSM gui do the following:
* On the application tab: set path to C:\foobar\nginx\nginx.exe, set startup directory to C:\foorbar\nginx
* On the I/O tab type "start nginx" on the Input slow. Optionally set C:\foobar\nginx\logs\service.out.log and C:\foobar\nginx\logs\service.err.log in the output and error slots.
* Click "install service". Go to services, start "nginx". Hit http://localhost:80 and you should get the nginx logon. Turn off the service, disable browser cache and refresh, screen should now fail to load.
* We will now be able to see the server running
