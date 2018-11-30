# Setting up Apache Server:

Steps to be followed to setting up an apache server are:
* Go to the Apache Win32 download directory. You will need to download two pieces of software in a temporary directory. The first is the new Microsoft MSI package installer (MSIEXEC) instmsi.exe, standard in Windows Me and 2000, recently made available by Microsoft for Windows NT and 95/98. The second is the file apache 1.3.x.x-win32-xxxx.msi file with the apache server packaged to be installed with MSIEXEC. Run the instmsi.exe file to install MSIEXEC. Once MSIEXEC is installed then double-click on the 1.3.x.x-win32-xxxx.msi file. Install apache in C:\Apache instead of the default in Program Files. During the installation you will be asked for a server name (you can enter localhost, or an IP number, or yet a FQDN), and a domain name -- use the domain of your provider. Note: be sure you have Perl downloaded and installed before you install Apache, if you intend to use Perl to write CGI scripts.

* The package will automatically create all the directories for you besides installing the software. The document root will be in c:/Apache/Apache/htdocs. The server root will be located in c:/Apache/Apache. The path to the apache program is C:/Apache/Apache/Apache.exe, but in NT it runs as a service, which is also automatically installed.

* In addition a variety of directories are created: cgi-bin, htdocs, icons, include, lib, libexec, etc. In the htdocs directory you will store the Web pages for your server. In the cgi-bin directory you will store your CGI programs.

* In the server root three directories are created: conf, logs and modules. In the conf directory you will find the three basic Apache configuration files: httpd.conf, access.conf and srm.conf. In the logs directory you will find the access and error logs. The modules directory is where the Apache modules are resident
