$(document).ready(function() {

    $("body").addClass("fixed-content fixed-aside");

    if ($("body").hasClass("no-sidebar"))
    {
        $("#aside").addClass("folded");
        if ($("#aside").hasClass("folded")) {
            $("#mainMenuToggle").addClass("hide");
            $("#content-main").addClass("px-lg-5");
        }
    }

     $("body").find('.nav-active-theme').parent().parent().attr("id", "wrapper");
     // Fakes the loading setting a timeout
     setTimeout(function () {
         $('body').addClass('loaded');
     }, 1000);
     $('#loader').fadeOut(1000);
     
     //density load in onloaad
     //$(".dt-custom").find("tbody tr td").addClass("density-padding");

    //Manage Users - Password resetting
    $('.resetting').click(function () {
         var inputValue = $(this).attr("value");
         var targetBox = $("." + inputValue);
         $(".reset-card-modal").not(targetBox).hide();
         $(targetBox).show();
    });

    //Hint section
    $("#hint-btn").click(function () {
         $(".hint-area").toggle();
         // $('i').removeClass("fa-question-circle").addClass("fa-times"); 
    });



    //Schedule Review page script
    $("#selectReviewerType").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".selectReviewer").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".selectReviewer").hide();
            }
        });
    }).change();

    //Multiple list items in clinic page
    $(".add-row").click(function() {
         var name = $("#selType :selected").text();
         var email = $("#selItem").val();
         var markup = "<tr><td><div class='control-group'><label class='cs-checkbox control-checkbox'><input type='checkbox' name='record'/><div class='control_indicator clinic-chk-align'></div></label></div></td><td>" + name + "</td><td>" + email + "</td></tr>";
         $("table tbody").append(markup);
    });


    $(".delete-row").click(function() {
         $("table tbody").find('input[name="record"]').each(function() {
             if ($(this).is(":checked")) {
                 $(this).parents("tr").remove();
             }
         });
    });


    //Add and Remove checklist in QSR module     
    $(".add-question").click(function() {
         //var name = $("#selType :selected").text();
         var questionslist = $("#delete-question").val();
         var applytotable = "<tr><td><div class='control-group'><label class='cs-checkbox control-checkbox'><input type='checkbox' name='record'/><div class='control_indicator re-chk-align'></div></label></div></td><td>" + questionslist + "</td></tr>";
         $("table tbody").append(applytotable);
    });

    $(".delete-question").click(function() {
         $("table tbody").find('input[name="record"]').each(function() {
             if ($(this).is(":checked")) {
                 $(this).parents("tr").remove();
             }
         });
    });

    $("#add-one-admin-btn").click(function() {
         $("#add-new-admin").clone().appendTo("#one-more-admin-section");
    });

    //Ranger slider
    $("#slider").on("input", function(){
        $("#result").text($(this).val());
    });

});

$("#mainMenuToggle").click(function () {
    $("#mainMenuToggle").toggleClass("added");
    $("#aside").toggleClass("folded");
    if ($("#aside").hasClass("folded")) {
        $(".sidebar-main").addClass("sidebar-fold-remove");
        $('a').on('click', function () {
            var target = $(this).attr('rel');
            $("#" + target).show().siblings("div").hide();

        });
    } else {
        //$("#content-main").removeClass("px-lg-5");
    }
});
 $(".nav-item-icon").click(function(){
     if($("#aside").hasClass("folded"))
     {
       $("#aside").removeClass("folded");
       $("#mainMenuToggle").removeClass("added");
     }

});

// Hiding sidebar tooltip after 2sec and click the menu
$('.menus-tooltip').mouseenter(function(){
    $('.tooltip-text').show(); 
    setTimeout(function(){
        $('.tooltip-text').hide(); 
    }, 3000);
});

$('.menus-tooltip').mouseleave(function(){
    $('.tooltip-text').hide();
});
$('.group-tooltip-text').mouseenter(function(){
    var that = $(this)
    that.tooltip('show');
    setTimeout(function(){
        that.tooltip('hide');
    }, 2000);
});

$('.group-tooltip-text').mouseleave(function(){
    $(this).tooltip('hide');
});

// Click to hide the tooltip if it's necessary uncomment it
// $('.menus-tooltip > a').click(function(){
//     $('.tooltip-text').hide();
// });

//Close Sidebar in mobile view
$(function () {
    $(".custom-close").on('click', function() {
        $('#aside').modal('hide');
    });
});


//Space restriction
$(function () {

    $(".browserchk").keypress(function (e) {
        if (e.which === 32)
            return false;
    });
});

// Rotate icon while collapse / expand
$('.collapse-open-icon-alt').click(function(){
    $('#open-survey').toggleClass('collapse-icon-rotate ');
})
$('.collapse-open-icon').click(function(){
    $('#collapse-expand').toggleClass('collapse-icon-rotate ');
})

//Expand and collapse Approve/ change survey
$('#expand-survey').click(function(){ 
    $(this).find('i').toggleClass('fa-expand fa-compress')
});


// Change the table density
$('#densityChange').click(function() {
    
     $("td").toggleClass("density-padding");
     $(this).find('i').toggleClass('fa-list')
});



 //Right sidebar
 function openNav() {
     document.getElementById("right-sidebar-content").style.width = "300px";
     document.getElementById("content-main").style.marginRight = "300px";
     
     var x = document.getElementById("edit_div");
     var y = document.getElementById("create_div");
     var z = document.getElementById("Details_div");
     if (y.style.display == "none") {
         y.style.display = "block";
         x.style.display = "none";
         z.style.display = "none";
     }
}
 //Create
 function openCreateNav() {
     document.getElementById("right-sidebar-content").style.width = "300px";
     document.getElementById("content-main").style.marginRight = "300px";
     $("#creatediv").show();
     $("#editdiv").hide();
     $("#detailsdiv").hide();
    
}
 //Edit
 function openEditNav() {
     document.getElementById("right-sidebar-content").style.width = "300px";
     document.getElementById("content-main").style.marginRight = "300px";
     $("#creatediv").hide();
     $("#editdiv").show();
     $("#detailsdiv").hide();
    
}
 //Details
function openDetailsNav() {
     document.getElementById("right-sidebar-content").style.width = "300px";
     document.getElementById("content-main").style.marginRight = "300px";
     $("#creatediv").hide();
     $("#editdiv").hide();
     $("#detailsdiv").show();
    
}

function closeNav() {
    document.getElementById("right-sidebar-content").style.width = "0";
    document.getElementById("content-main").style.marginRight = "0";
}

 //Init dropify
 $('.dropify').dropify();

//Custom step form
$('a').on('click', function() {
     var target = $(this).attr('rel');
     $("#" + target).show().siblings("div").hide();

});

//SSO Enable
$(".showsso").hide();
$("#sso").click(function () {
    $(".showsso").toggle();
});

//Enable/disable subscription
$(".ars-module").hide();
$("#ars-module").click(function () {
    $(".ars-module").toggle();
});

$(".qsr-module").hide();
$("#qsr-module").click(function () {
    $(".qsr-module").toggle();
});

////Password toggle for show/hide
//$(".toggle-password12").click(function() {
   
//    $(this).toggleClass("far fa-eye far fa-eye-slash");
//    var input = $($(this).attr("toggle"));
//    if (input.attr("type") == "password") {
//         input.attr("type", "text");
//    }
//    else if ((input.attr("type") == "text") && browserName == "Chrome") {
//        var a = $(".browserchk").hasClass("pwd") ? true : false;
//        if (a) {
//            $(".browserchk").removeClass("pwd");
//        }
//        else {
//            $(".browserchk").addClass("pwd");
//        }
//    }
//    else {
//         input.attr("type", "password");
//    }
//});


//Password Hints

var lowerCaseLetters = /[a-z]/g;//lowercase letters
var upperCaseLetters = /[A-Z]/g;//upperrcase letters
var numbers = /[0-9]/g;//numbers
var specialchar = ("[!/\'^�$%&*()}{@#~?><>,|=_+�-\]");//special charecters

$('#opassword').keyup(function () {
    var pswd = $(this).val().trim();
    if (pswd.match(lowerCaseLetters)) {
        $('#oletter').removeClass("invalid").addClass("valid");
    } else {
        $('#oletter').removeClass("valid").addClass("invalid");
    }

    if (pswd.match(upperCaseLetters)) {
        $('#ocaptial').removeClass("invalid").addClass("valid");
    } else {
        $('#ocaptial').removeClass("valid").addClass("invalid");
    }

    // Validate numbers

    if (pswd.match(numbers)) {
        $('#onumber').removeClass("invalid").addClass("valid");
    } else {
        $('#onumber').removeClass("valid").addClass("invalid");
    }

    // Validate length
    if (pswd.length >= 8) {
        $('#olength').removeClass("invalid").addClass("valid");
    } else {
        $('#olength').removeClass("valid").addClass("invalid");
    }
    // Validate specialchar
    if (pswd.match(specialchar)) {
        $('#ochar').removeClass("invalid").addClass("valid");
    } else {
        $('#ochar').removeClass("valid").addClass("invalid");
    }
});
$('#opassword').focus(function () {
    $('#opswd_info').show();
});

// When the user clicks outside of the password field, hide the message box
$('#opassword').blur(function () {
    $('#opswd_info').hide();
});


$('#npassword').keyup(function () {

    var pswd = $(this).val().trim();
    if (pswd.match(lowerCaseLetters)) {
        $('#nletter').removeClass("invalid").addClass("valid");
    } else {
        $('#nletter').removeClass("valid").addClass("invalid");
    }

    if (pswd.match(upperCaseLetters)) {
        $('#ncaptial').removeClass("invalid").addClass("valid");
    } else {
        $('#ncaptial').removeClass("valid").addClass("invalid");
    }

    // Validate numbers

    if (pswd.match(numbers)) {
        $('#nnumber').removeClass("invalid").addClass("valid");
    } else {
        $('#nnumber').removeClass("valid").addClass("invalid");
    }

    // Validate length
    if (pswd.length >= 8) {
        $('#nlength').removeClass("invalid").addClass("valid");
    } else {
        $('#nlength').removeClass("valid").addClass("invalid");
    }
    // Validate specialchar
    if (pswd.match(specialchar)) {
        $('#nchar').removeClass("invalid").addClass("valid");
    } else {
        $('#nchar').removeClass("valid").addClass("invalid");
    }
});

$('#npassword').focus(function () {
    $('#npswd_info').show();
});

// When the user clicks outside of the password field, hide the message box
$('#npassword').blur(function () {
    $('#npswd_info').hide();
});


$('#cpassword').keyup(function () {

    var pswd = $(this).val().trim();
    if (pswd.match(lowerCaseLetters)) {
        $('#cletter').removeClass("invalid").addClass("valid");
    } else {
        $('#cletter').removeClass("valid").addClass("invalid");
    }

    if (pswd.match(upperCaseLetters)) {
        $('#ccaptial').removeClass("invalid").addClass("valid");
    } else {
        $('#ccaptial').removeClass("valid").addClass("invalid");
    }

    // Validate numbers

    if (pswd.match(numbers)) {
        $('#cnumber').removeClass("invalid").addClass("valid");
    } else {
        $('#cnumber').removeClass("valid").addClass("invalid");
    }

    // Validate length
    if (pswd.length >= 8) {
        $('#clength').removeClass("invalid").addClass("valid");
    } else {
        $('#clength').removeClass("valid").addClass("invalid");
    }
    // Validate specialchar
    if (pswd.match(specialchar)) {
        $('#cchar').removeClass("invalid").addClass("valid");
    } else {
        $('#cchar').removeClass("valid").addClass("invalid");
    }
});

$('#cpassword').focus(function () {
    $('#cpswd_info').show();
});

// When the user clicks outside of the password field, hide the message box
$('#cpassword').blur(function () {
    $('#cpswd_info').hide();
});



$('.psw').keyup(function () {
    var pswd = $(this).val().trim();

    if (pswd.match(lowerCaseLetters)) {
        $('#letter').removeClass("invalid").addClass("valid");
    } else {
        $('#letter').removeClass("valid").addClass("invalid");
    }

    if (pswd.match(upperCaseLetters)) {
        $('#captial').removeClass("invalid").addClass("valid");
    } else {
        $('#captial').removeClass("valid").addClass("invalid");
    }

    // Validate numbers

    if (pswd.match(numbers)) {
        $('#number').removeClass("invalid").addClass("valid");
    } else {
        $('#number').removeClass("valid").addClass("invalid");
    }

    // Validate length
    if (pswd.length >= 8) {
        $('#length').removeClass("invalid").addClass("valid");
    } else {
        $('#length').removeClass("valid").addClass("invalid");
    }
    // Validate specialchar
    if (pswd.match(specialchar)) {
        $('#char').removeClass("invalid").addClass("valid");
    } else {
        $('#char').removeClass("valid").addClass("invalid");
    }
});

$('.psw').focus(function () {
    $('#pswd_info').show();
});

// When the user clicks outside of the password field, hide the message box
$('.psw').blur(function () {
    $('#pswd_info').hide();
});


//Sidebar Menu Active
$(function () {
    $('.nav-list li').click(function () {
        var item = $('a', this).attr('rel');

        if($(this).is(':first-child'))
        {
            $(this).removeClass('active');
        }

        else if(($('a', this).attr('rel')) == item) {

            // Activate corresponding div
            var res = '#' + item;
            $(res).show();

            $(this).addClass('active');
            $(".nav-list li.active").removeClass("active").addClass("active");
            $(this).siblings().removeClass('active');

            $(res).siblings().removeClass('active');
            $(res).addClass('active');
        }
        
        

    });
    $(".nav-list-items li").click(function () {
        $(this).siblings().removeClass('menulist-active');
        $(this).addClass('menulist-active');
        
        $(this).siblings().find("a").removeClass("menuactive");
        $(this).find("a").addClass("menuactive");
    });
});
//Show survey hint
$("#show-survey-hint").click(function(){
    $(".sinlge-row-hint").toggle(); 
});

$('#editprofilebtn').click(function () {
    $(".showprofilebtn").show();
    $("#profiledetails-div").hide();
    $("#profileedit-div").show();
    $("#viewprofilebtn").show();
    $("#editprofilebtn").hide();
});
$('#viewprofilebtn').click(function () {
    $(".showprofilebtn").hide();
    $("#profiledetails-div").show();
    $("#profileedit-div").hide();
    $("#viewprofilebtn").hide();
    $("#editprofilebtn").show();

});


//Survey overlay 
function openFullpageOverlay() {
    document.getElementById("fullPageOverlay").style.display = "block";
}

function closeFullpage() {
    document.getElementById("fullPageOverlay").style.display = "none";
}

/**
 * Clearable text inputs
 */
$(".clearable").each(function () {

    var $inp = $(this).find("input:text"),
        $cle = $(this).find(".clear-input");

    $inp.on("input", function () {
        $cle.toggle(!!this.value);
    });

    $cle.on("touchstart click", function (e) {
        e.preventDefault();
        $inp.val("").trigger("input");
        EnableSelfDisable();
    });

});

//Show hint / hide hint


$("#show-survey-hint").click(function(){
    $(this).text($(this).text() == 'Show Hint' ? 'Hide Hint' : 'Show Hint');
});

 // List item accordion icons
 $('#list-item-collapse .group-name').click(function(){
    $(this).next('.ctsi-grouped').slideToggle('500');
    $(this).find('i').toggleClass('fa-plus-square fa-minus-square')
});

 