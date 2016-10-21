# miniDownloader
Just a simple mini downloader tool written with jsonHTML.

use
---

Requires jQuery, and jsonHTML (included).

downloader.js located within the scripts folder is what you want for your project.

```javascript
downloader.path = "file://C:/myFolder"
var myDownloader = downloader.inputBox.build(); //build the downloader.
myDownloader.appendTo('#myDivID'); //id of div that you want to append object to.
```
[How to setup your file paths](http://stackoverflow.com/questions/6342854/help-with-relative-path-link-to-local-file)
