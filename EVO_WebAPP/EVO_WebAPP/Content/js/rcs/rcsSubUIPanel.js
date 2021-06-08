function HighlightActiveMenu() {
    $('.nav li a').click(function (e) {
        $('.nav li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
    });
}

function ToggleMenu() {
    $('#GpURL > div').each(function (i) {
        var activediv = $(this).hasClass('group-active-tab') ? true : false;
        if (activediv) {
            var divid = $(this).attr('id');

            $('#' + divid + '.list-item-collapse .group-name').next('.ctsi-grouped').slideToggle('500');
            $('#' + divid + '.list-item-collapse .group-name').find('i').toggleClass('fa-minus-square fa-plus-square');
            document.getElementById("listGroup").style.display = "block";
        }
    });
}

function ExpandCollapse() {
    $('.list-item-collapse .group-name').click(function () {
        $(this).next('.ctsi-grouped').slideToggle('500');
        $(this).find('i').toggleClass('fa-plus-square fa-minus-square')
    });
}

function MakeActiveGroupPane(id) {
    $('#GpURL > div').each(function (i) {
        if ($(this).attr('id') == id) {
            $(this).addClass('group-active-tab');
            $(this).removeClass('group-inactive-tab');
        }
        else {
            $(this).removeClass('group-active-tab');
            $(this).removeClass('group-inactive-tab');
            $(this).addClass('group-inactive-tab');
        }

    });
}

function MakeActive(id) {
    $('#listitemactive > li > a').each(function (i) {
        if ($(this).attr('id') == id) {
            $(this).addClass("active")
        }
        else {
            $(this).removeClass("active")
        }
    });
}