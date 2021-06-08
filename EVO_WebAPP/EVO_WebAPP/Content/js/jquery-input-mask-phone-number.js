// ==================================================
// 
// jquery-input-mask-phone-number v1.0
//
// Licensed (The MIT License)
// 
// Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>
//
// ==================================================

(function ($) {
    $.fn.usPhoneFormat = function (options) {
       
        var params = $.extend({
            format: 'xxx-xxx-xxxx',
            international: false,

        }, options);
       
        if (params.format === 'xxx-xxx-xxxx') {
            $(this).bind('paste', function (e) {
                
                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 12);
                    $(this).val(inputValue);
                }
            });
            $(this).on('keydown touchend', function (e) {
                //console.log(e.which)
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 97 || e.which > 105)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                } else if (curchr == 7 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '12');
            });

        }
        else if (params.format === '(xxx) xxx-xxxx') {
            $(this).on('keypress touchend', function (e) {
                var evt = (e) ? e : window.event;
                var charCode = (evt.keyCode) ? evt.keyCode : evt.which;
                ///console.log(charCode)
                if ( charCode != 32  && charCode != 46   && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val('(' + curval + ')' + " ");
                } else if (curchr == 9 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '14');
            });
            $(this).bind('paste', function (e) {
             
                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 14);
                    $(this).val(inputValue);
                }
            });

        }
        else if (params.format === '(xxx) xxxx-xxxx') {
            $(this).on('keypress touchend', function (e) {
                console.log(e.which)
                var evt = (e) ? e : window.event;
                var charCode = (evt.keyCode) ? evt.keyCode : evt.which;
                ///console.log(charCode)
                if (charCode != 32 && charCode != 46 && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                var curchr = this.value.length;
               
                var curval = $(this).val();
                console.log(curchr)
                if (curchr == 0 && e.which != 8 && e.which != 0) {
                    $(this).val('+' + curval);
                }
                else if (curchr == 2 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + " " + '(');
                }
                else if (curchr == 7 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + ')' + " ");
                } else if (curchr == 12 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '17');
            });
            $(this).bind('paste', function (e) {

                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 14);
                    $(this).val(inputValue);
                }
            });

        }
     
       
    }
}(jQuery));


