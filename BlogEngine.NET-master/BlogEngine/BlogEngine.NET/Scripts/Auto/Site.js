//also in toastr.js, blog.js
$(function () {

    var websiteName = "Sharpdoor.com";

    $('body').find('a').each(function () {

        var href = $(this).attr('href');
        if (href) {
            href = href.toLowerCase();
            if (href.indexOf('blogengine') > 0 || href.indexOf('dnbe.net') > 0) {
                $(this).attr('href', '..');
            }
        }
    });

    $('body').find('img').each(function () {
        var href = $(this).attr('alt');
        if (href) {
            href = href.toLowerCase();
            if (href.indexOf('blogengine') != -1 || href.indexOf('e.net') != -1) {
                $(this).attr('alt', websiteName);
            }
        }
    });

});