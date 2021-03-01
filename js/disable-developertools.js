$(function () {
    $(document).keydown(function (event) {
        var keyCode = event.keyCode;

        var ctrlClick = event.ctrlKey;
        
        var shiftClick = event.shiftKey;

        if (keyCode == 111 || keyCode == 123) {
            return false;
        }

        // mac
        if ((keyCode == 55 || keyCode == 56) && (keyCode == 58 || keyCode == 61) && (keyCode == 8 || keyCode == 34)) {
            return false;
        }

        // Windows
        if (shiftClick && ctrlClick && (keyCode == 67 || keyCode == 73) || ctrlClick && keyCode == 85) {
            return false;
        }
    });
});