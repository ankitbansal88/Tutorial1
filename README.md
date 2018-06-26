# Tutorial1
1.	Create blank file
a.	Gruntfile.js
b.	File package.json
c.	File bower.json 
2.	Run command “npm init”
3.	Update dependencies in package.json for
a.	“Bower”:”*”
b.	“connect-openui5”:”^0.9.0”
c.	“grunt”:”^0.4.5”
d.	“grunt-cli”:”^0.1.13”
e.	“grunt-contrib-connect”:”^0.9.0”
f.	“grunt-openui55”:”^0.12.0”
g.	“npm”:”^6.1.0”
4.	Run command npm install 
5.	Run command npm install –g bower 
6.	Run command npm install –g grunt-cli 
7.	Add { “name”:”” } to bower.json file
8.	Run command bower init 
9.	Update dependencies in bower.json for 
a.	“openui5-sap.ui.core”:”openui5/packaged-sap.ui.core#1.44.19”
b.	“openui5-sap.m”:” openui5/packaged-sap.m#1.44.19”
c.	“openui5-sap.ui.layout”:” openui5/packaged-sap.ui.layout#1.44.19”
d.	“openui5-sap.uxap”:” openui5/packaged-sap.uxap#1.44.19”
e.	“openui5-themelib_sap_belize”:” openui5/packaged-themelib_sap_belize#1.44.19”
10.	Run command bower install 
11.	Update Gruntfile.js
a.	Openui5_connect->options->resources is necessary for local running instances 
b.	Openui5_connect->options->src is a mandatory object
c.	Command – is not required, can add “<%= dir.webapp %> to the resources and it should be good 
12.	To start a local version – run command grunt serve
