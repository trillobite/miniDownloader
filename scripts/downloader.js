/*
    downloader
        Uses jsonHTML to generate a download link for objects
        by specifying the name of the file. Root folder path
        is hard coded.

    How to use:
        Define your root folder path under downloader.path, 
        then use this function:
        $(document).ready(function() { //this is optional, if you want it to load with the page load.
            var myDownloader = downloader.inputBox.build(); //build the downloader.
            myDownloader.appendTo('body'); //id of div that you want to append object to.
        });
*/

var downloader = {};

downloader.path = "file:///home/trillobite/Documents/gitProjects/downloader";
downloader.inputBox = {};
downloader.inputBox.isClicked = false;
downloader.inputBox.input = $jConstruct('textbox', {
    id: 'inputBoxTextbox',
});

downloader.inputBox.downloadButton = $jConstruct('button', {
    id: 'inputBoxDownloadButton',
    text: 'set',
}).event('click', function() {
    var thisObject = downloader.inputBox;
    var tmp = $('#' + thisObject.input.id).val();

    var setToDiv = function() {
        thisObject.isClicked = false;
        thisObject.downloadButton.type = 'button';
        thisObject.downloadButton.text = 'set';
        thisObject.downloadButton.href = '';
        thisObject.downloadButton.refresh();
    };

    var setToA = function() {
        thisObject.isClicked = true;
        thisObject.downloadButton.type = 'a';
        thisObject.downloadButton.href = downloader.buildHref(tmp);
        thisObject.downloadButton.download = tmp;
        thisObject.downloadButton.text = 'download';
        thisObject.downloadButton.refresh();
    };

    if(!thisObject.isClicked) {
        if(tmp.length) {
            setToA(); //transform into a link.
        }
    } else {
        setToDiv(); //transform back into a div.
    }
});

downloader.buildHref = function(fileName) {
    return downloader.path + '/' + fileName;
};

downloader.inputBox.build = function() {
    var container = $jConstruct('div').css({
        'border': '1px solid black',
        'border-radius': '5px',
        'display': 'inline-block',
    });
    container.addChild(downloader.inputBox.input);
    container.addChild($jConstruct('div').addChild(downloader.inputBox.downloadButton));
    
    return container;
};

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