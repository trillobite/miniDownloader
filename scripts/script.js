/*
    Tool for downloading files.
    If you want to define a new root path, you can just type:
    downloader.path = "file://C:/myFolder";
*/

$(document).ready(function() { //this is optional, if you want it to load with the page load.
    var myDownloader = downloader.inputBox.build(); //build the downloader.
    myDownloader.appendTo('body'); //id of div that you want to append object to.
});


/*
            )
            (
        )   )
        (           v1.3.1
    .---------------------.
    |        _____        |___      
    |     .'`_,-._`'.      __ \
    |    /  ( [ ] )  \    |  ||
    |   /.-""`( )`""-.\   |  ||
    |  ' <'```(.)```'> '  | _||
    |    <'```(.)```'>    |/ _/
    |     <'``(.)``'>      ./
    |      <``\_/``>      |
    |       `'---'`       |
    \github.com/trillobite/    I like my coffee black,          
      \_________________/        like my code.
*/
