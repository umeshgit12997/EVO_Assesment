//$('.sortable').nestedSortable({
//    forcePlaceholderSize: true,
//    items: 'li',
//    handle: 'a',
//    placeholder: 'menu-highlight',
//    listType: 'ul',
//    maxLevels: 3,
//    opacity: .6,
//});
$(function () {
    $("#ulpatientqsrForm").sortable();// Patient Form
    $("#sortable-1").sortable(); // Program Form
    $("#ulsortable").sortable(); // Program Form



});
$(document).on('click', '.question-lists button[type="button"]', function (e) {

    //$('.questions-list-items').on('click', 'input[type="button"]', function () {
    $(this).closest('li').remove();
});
$(document).on('click', '.add-subsection', function (e) {
    //$('.add-subsection').click(function () {
    var NewId = uuidv4();
    var _Parent = $(this).parent().parent().parent().find('ul.nwulsubsection');
    //var _Parent = $("ul.nwulsubsection");
    var txtId = "deletesubsection-" + NewId;
    var subHeaderId = "susection-" + NewId;
    var qtxtId = "qtext-" + NewId;
    var selectId = "select-" + NewId;

    var Ulsortable = "sortable-" + NewId;
    var Qulsortable = "QUL-" + NewId;
    var typrRoleId = $("#RoleTypeId").val();
    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    if (typrRoleId == 0) {
        SelectValueRoleType = `<option value selected>Select</option> <option value="0">  Physician and Physicist  </option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    }
    else if (typrRoleId == 5) {
        SelectValueRoleType = `<option value="5">Physicist Only</option>`;
    } else if (typrRoleId == 6) {
        SelectValueRoleType = `<option value="6">Physician Only</option>`;
    }
    //$(this).parent().parent().parent().parent().find('ul.mainsubmenu').append(`<li>
    _Parent.append(` <li>
                                                    <!-- Sub section name and remove sub sections START -->
                                                    <div class="row align-items-center">
                                                        <div class="col-md-11 col-12">
                                                            <div class=" d-flex">
                                                                <input type="text" name="subsection" id="`+ subHeaderId + `" class="form-control fb-section-input sr-subheader" placeholder="SubSection name" maxlength="500" value="">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-1 col-12">
                                                            <button class="btn dt-delete-btn btn-sm float-right ml-2 delete-subsection" data-toggle="tooltip" title="Remove Subsection" id="delete-subsection"><i class="fas fa-times-circle"></i> </button>
                                                        </div>
                                                    </div>
                                                    <ul class="question-lists" id="`+ Qulsortable + `">
                                                        <!-- Question list START -->

                                                        <li class="questions-row">
                                                            <div class="row">
                                                                <div class="col-md-8"><textarea name="questions" id="`+ qtxtId + `" class="question-item form-control" rows="1" maxlength="1000"></textarea></div>
                                                                <div class="col-md-3">
                                                                    <select class="form-control" id="`+ selectId + `">
                                                                      `+ SelectValueRoleType + `
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-1"> <button type="button" class="btn dt-delete-btn btn-sm" data-toggle="tooltip" title="Remove Question"><i class="fas fa-times-circle"></i> </button></div>
                                                            </div>

                                                        </li>

                                                        <!-- Question list END -->
                                                    </ul>
                                                    <div class="row add-question-btn">
                                                        <button class="btn dt-action-btn btn-sm mt-2 " type="button"><i class="far fa-question-circle"></i> &nbsp; Add Question</button>
                                                    </div>
                                                    <!-- Sub section name and remove sub sections START -->
                                                </li>
`);

    $('.sr-maiheader').prop('section', 'header');
    $('.sr-subheader').prop('section', 'subheader');
    if (typrRoleId == 0) {
        $("#" + selectId).val(null);
    }
    else {
        $("#" + selectId).val(typrRoleId);
    }

    //$('#' + Ulsortable).sortable({
    //    connectWith: 'sections-list'
    //});
    $('#' + Qulsortable).sortable({
        connectWith: 'ul.question-lists'
    });
});

$(document).on('click', '.add-section', function (e) {
    //$('.add-section').click(function () {
    var NewId = uuidv4();
    var txtId = "deletesubsection-" + NewId;
    var sectionId = "deletesection-" + NewId;
    var MainsectionId = "section-" + NewId;
    var subHeaderId = "susection-" + NewId;
    var qtxtId = "qtext-" + NewId;
    var selectId = "select-" + NewId;
    var Ulsortable = "sortable-" + NewId;
    var Qulsortable = "QUL-" + NewId;
    var Lisortable = "SectionSortable-" + NewId;
    var typrRoleId = $("#RoleTypeId").val();
    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    if (typrRoleId == 0) {
        SelectValueRoleType = `<option value>Select</option><option value="0">  Physician and Physicist  </option> <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    }
    else if (typrRoleId == 5) {
        SelectValueRoleType = `<option value="5">Physicist Only</option>`;
    } else if (typrRoleId == 6) {
        SelectValueRoleType = `<option value="6">Physician Only</option>`;
    }
    ///$("ul.mainmenu").append("Hi hi hi hi hi hi hi");
    $("ul.mainsectionmenu").append(` <!-- Section START -->

                                        <li class="hasSubsection" id="`+ Lisortable + `">
                                            <!-- Section name, Add subsection and delete sections START -->
                                            <div class="row align-items-center">
                                                <div class="col-md-9 col-12">
                                                    <div class="d-flex">
                                                        <input type="text" id="`+ MainsectionId + `" name="section" class="form-control  fb-section-input sr-maiheader" placeholder="Section name" value="" maxlength="500">
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-12">
                                                    <button class="btn dt-delete-btn btn-sm float-right ml-2 delete-section" data-toggle="tooltip" title="Delete Section" id="delete-section"><i class="far fa-trash-alt"></i> </button>
                                                    <button type="button"  class="btn dt-action-btn btn-sm float-right add-subsection" id="`+ sectionId + `"><i class="fas fa-equals"></i> &nbsp; Add Subsection</button>
                                                </div>
                                            </div>
                                            <!-- Section name, Add subsection and delete sections END -->
                                            <!-- Sub section START-->
                                            <ul id="`+ Ulsortable + `" class="sub-sections-list nwulsubsection">
                                                <li>
                                                    <!-- Sub section name and remove sub sections START -->
                                                    <div class="row align-items-center">
                                                        <div class="col-md-11 col-12">
                                                            <div class=" d-flex">
                                                                <input type="text" name="subsection" id="`+ subHeaderId + `" class="form-control fb-section-input sr-subheader" placeholder="SubSection name" value="" maxlength="500">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-1 col-12">
                                                            <button class="btn dt-delete-btn btn-sm float-right ml-2 delete-subsection" data-toggle="tooltip" title="Remove Subsection" id="`+ sectionId + `"><i class="fas fa-times-circle"></i> </button>
                                                        </div>
                                                    </div>
                                                    <ul class="question-lists" id=`+ Qulsortable + `>
                                                        <!-- Question list START -->

                                                        <li class="questions-row">
                                                            <div class="row">
                                                                <div class="col-md-8"><textarea name="questions" id="`+ qtxtId + `" class="question-item form-control" rows="1" maxlength="1000"></textarea></div>
                                                                <div class="col-md-3">
                                                                    <select class="form-control" id="`+ selectId + `">
                                                                        `+ SelectValueRoleType + `
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-1"> <button type="button" class="btn dt-delete-btn btn-sm" data-toggle="tooltip" title="Remove Question"><i class="fas fa-times-circle"></i> </button></div>
                                                            </div>

                                                        </li>

                                                        <!-- Question list END -->
                                                    </ul>
                                                    <div class="row add-question-btn">
                                                        <button class="btn dt-action-btn btn-sm mt-2 " type="button"><i class="far fa-question-circle"></i> &nbsp; Add Question</button>
                                                    </div>
                                                    <!-- Sub section name and remove sub sections START -->
                                                </li>

                                            </ul>
                                            <!-- Sub section END -->
                                        </li>
                                        <!-- Section END -->

 `);

    $('.sr-maiheader').prop('section', 'header');
    $('.sr-subheader').prop('section', 'subheader');
    if (typrRoleId == 0) {
        $("#" + selectId).val(null);
    }
    else {
        $("#" + selectId).val(typrRoleId);
    }
    $('#' + Lisortable).sortable({
        connectWith: 'ul.patientmainmenu'
    });
    $('#' + Ulsortable).sortable({
        connectWith: 'ul.sub-sections-list'
    });
    $('#' + Qulsortable).sortable({
        connectWith: 'ul.question-lists'
    });
});
$(document).on('click', '.add-sectionpatient', function (e) {
    //$('.add-section').click(function () {
    var NewId = uuidv4();
    var txtId = "deletesubsection-" + NewId;
    var sectionId = "deletesection-" + NewId;
    var MainsectionId = "section-" + NewId;
    var subHeaderId = "susection-" + NewId;
    var qtxtId = "qtext-" + NewId;
    var selectId = "select-" + NewId;
    var Ulsortable = "sortable-" + NewId;
    var Lisortable = "SectionSortable-" + NewId;
    var typrRoleId = $("#RoleTypeId").val();
    var Qulsortable = "QUL-" + NewId;

    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    if (typrRoleId == 0) {
        SelectValueRoleType = `<option value>Select</option> <option value="0">  Physician and Physicist  </option><option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    }
    else if (typrRoleId == 5) {
        SelectValueRoleType = `<option value="5">Physicist Only</option>`;
    } else if (typrRoleId == 6) {
        SelectValueRoleType = `<option value="6">Physician Only</option>`;
    }
    ///$("ul.mainmenu").append("Hi hi hi hi hi hi hi");
    $("ul.patientmainmenu").append(` <!-- Section START -->

                                        <li class="hasSubsection" id="`+ Lisortable + `">
                                            <!-- Section name, Add subsection and delete sections START -->
                                            <div class="row align-items-center">
                                                <div class="col-md-9 col-12">
                                                    <div class="d-flex">
                                                        <input type="text" id="`+ MainsectionId + `" name="section" class="form-control  fb-section-input sr-maiheader" placeholder="Section name" value="" maxlength="500">
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-12">
                                                    <button class="btn dt-delete-btn btn-sm float-right ml-2 delete-section" data-toggle="tooltip" title="Delete Section" id="delete-section"><i class="far fa-trash-alt"></i> </button>
                                                    <button type="button"  class="btn dt-action-btn btn-sm float-right add-subsection" id="`+ sectionId + `"><i class="fas fa-equals"></i> &nbsp; Add Subsection</button>
                                                </div>
                                            </div>
                                            <!-- Section name, Add subsection and delete sections END -->
                                            <!-- Sub section START-->
                                            <ul id="`+ Ulsortable + `" class="sub-sections-list nwulsubsection">
                                                <li>
                                                    <!-- Sub section name and remove sub sections START -->
                                                    <div class="row align-items-center">
                                                        <div class="col-md-11 col-12">
                                                            <div class=" d-flex">
                                                                <input type="text" name="subsection" id="`+ subHeaderId + `" class="form-control fb-section-input sr-subheader" placeholder="SubSection name" value="" maxlength="500">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-1 col-12">
                                                            <button class="btn dt-delete-btn btn-sm float-right ml-2 delete-subsection" data-toggle="tooltip" title="Remove Subsection" id="`+ sectionId + `"><i class="fas fa-times-circle"></i> </button>
                                                        </div>
                                                    </div>
                                                    <ul class="question-lists" id=`+ Qulsortable + `>
                                                        <!-- Question list START -->

                                                        <li class="questions-row">
                                                            <div class="row">
                                                                <div class="col-md-8"><textarea name="questions" id="`+ qtxtId + `" class="question-item form-control" rows="1" maxlength="1000"></textarea></div>
                                                                <div class="col-md-3">
                                                                    <select class="form-control" id="`+ selectId + `">
                                                                        `+ SelectValueRoleType + `
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-1"> <button type="button" class="btn dt-delete-btn btn-sm" data-toggle="tooltip" title="Remove Question"><i class="fas fa-times-circle"></i> </button></div>
                                                            </div>

                                                        </li>

                                                        <!-- Question list END -->
                                                    </ul>
                                                    <div class="row add-question-btn">
                                                        <button class="btn dt-action-btn btn-sm mt-2 " type="button"><i class="far fa-question-circle"></i> &nbsp; Add Question</button>
                                                    </div>
                                                    <!-- Sub section name and remove sub sections START -->
                                                </li>

                                            </ul>
                                            <!-- Sub section END -->
                                        </li>
                                        <!-- Section END --> `);

    $('.sr-maiheader').prop('section', 'header');
    $('.sr-subheader').prop('section', 'subheader');
    if (typrRoleId == 0) {
        $("#" + selectId).val(null);
    }
    else {
        $("#" + selectId).val(typrRoleId);
    }
    //
    $('#' + Lisortable).sortable({
        connectWith: 'ul.patientmainmenu'
    });
    $('#' + Ulsortable).sortable({
        connectWith: 'ul.sub-sections-list'
    });
    $('#' + Qulsortable).sortable({
        connectWith: 'ul.question-lists'
    });
});
//$(document).on('click', '.add-subsectionpatient', function (e) {
//    //$('.add-subsection').click(function () {
//    var NewId = uuidv4();
//    var _Parent = $(this).parent().parent().parent().parent().find('ul.submenu-list');
//    var txtId = "deletesubsection-" + NewId;
//    var subHeaderId = "susection-" + NewId;
//    var qtxtId = "qtext-" + NewId;
//    var selectId = "select-" + NewId;
//    var selectId = "select-" + NewId;
//    var Ulsortable = "sortable-" + NewId;
//    var typrRoleId = $("#RoleTypeId").val();
//    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician</option>   <option value="5">Physicist</option>`;
//    if (typrRoleId == 0) {
//        SelectValueRoleType = `<option value>Select</option>  <option value="6">Physician</option>   <option value="5">Physicist</option>`;
//    }
//    else if (typrRoleId == 5) {
//        SelectValueRoleType = `<option value="5">Physicist</option>`;
//    } else if (typrRoleId == 6) {
//        SelectValueRoleType = `<option value="6">Physician</option>`;
//    }
//    $(this).parent().parent().parent().parent().find('ul.patientmainsubmenu').append(`<li>
//                                            <div class="subsection-row">
//                                                <div class="row align-items-center">
//                                                     <div class="col-md-11">
//                                  <div class="d-flex">
//                                    <a href="javascript:void(0)"><i class="fas fa-expand-arrows-alt"></i></a>
//                                    <input id="`+ subHeaderId + `" name="subsection" class="form-control fb-section-input sr-subheader" placeholder="Subsection name" type="text">
//                                </div></div>
//                                <div class="col-md-1">
//                                     <button type="button" class="btn btn-danger btn-sm  float-right delete-subsection" data-toggle="tooltip" title="Remove Subsection" id="delete-subsection"><i class="fas fa-times-circle"></i></button>
//                                 </div>
//                                                </div>
//                                            </div>
//                                            <ul class="submenu-list">
//                                                <li>
//                                                    <a href="javascript:void(0)"><i class="fas fa-expand-arrows-alt"></i></a> Question
//                                                    <div class="questions-list p-3">
//                                                        <ul class="questions-list-items sortable" id="`+ Ulsortable +`">
//<li class="ui-state-default">
//                                                                                <div class="row">
//                                                                                    <div class="col-md-6">
//                                                                                        <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>
//                                                                                        <textarea name="questions" id="`+ qtxtId + `" class="question-item form-control" rows="1"></textarea>
//                                                                                    </div>
//                                                                                    <div class="col-md-4">
//                                                                                        <select class="form-control" id="`+ selectId + `">
//                                                                                            `+ SelectValueRoleType +`
//                                                                                        </select>
//                                                                                    </div>
//                                                                                    <div class="col-md-2"> <input type="button" value="Remove" class="btn btn-danger"></div>
//                                                                                </div>
//                                                                            </li></ul>
//                                                        <div class="add-question-btn mt-2">
//                                                            <input type="button" value="Add Question" class="btn btn-primary">
//                                                        </div>
//                                                    </div>
//                                                </li>

//                                            </ul>
//                                        </li>`);

//    if (typrRoleId == 0) {
//        $("#" + selectId).val(null);
//    }
//    else {
//        $("#" + selectId).val(typrRoleId);
//    }
//    $("#" + Ulsortable).sortable();
//    $("#" + Ulsortable).disableSelection();
//});

$(document).on('click', '.add-question-btn button[type="button"]', function (e) {
    //$('.add-question-btn input[type="button"]').click(function () {
    var NewId = uuidv4();
    var txtId = "qtext-" + NewId;
    var selectId = "select-" + NewId;
    var _result = $(this).parent("div").parent('li').find('ul.question-lists');
    var typrRoleId = $("#RoleTypeId").val();
    var Ulsortable = "sortable-" + NewId;
    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    if (typrRoleId == 0) {
        SelectValueRoleType = `<option value  selected>Select</option> <option value="0">  Physician and Physicist  </option> <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    }
    else if (typrRoleId == 5) {
        SelectValueRoleType = `<option value="5">Physicist Only</option>`;
    } else if (typrRoleId == 6) {
        SelectValueRoleType = `<option value="6">Physician Only</option>`;
    }
    var id = $(this).parent('ul').attr('id');
    //$("#sortable").append('<tr class="ui-state-default"><td><span class="ui-icon ui-icon-arrowthick-2-n-s"></span><textarea name="" id="" class="question-item form-control" rows="1"></textarea></td><td><select class="form-control"><option>Physician and Physicist</option><option>Physician</option><option>Physicist</option></select></td><td class="text-center"><input type="button" value="Delete" class="btn btn-danger" /></td></tr>');
    _result.append(
        ' <li class="questions-row"><div class="row"><div class="col-md-8">' +
        '<textarea name="' + txtId + '" id="' + txtId + '" class="question-item form-control" rows="1" maxlength="1000"></textarea></div>  <div class="col-md-3">' +
        '<select class="form-control" name="' + selectId + '" id="' + selectId + '">' + SelectValueRoleType + '</select></div>   <div class="col-md-1"> <button type="button" class="btn dt-delete-btn btn-sm" data-toggle="tooltip" title="Remove Question"><i class="fas fa-times-circle"></i> </button></div>   </div>  </li>');

    /*
     
     <li class="questions-row"><div class="row"><div class="col-md-8"><textarea name="questions" id="Qid" class="question-item form-control" rows="1"></textarea></div>  <div class="col-md-3">
       <select class="form-control" id="selectid">
           <option value="0">Physician and Physicist</option>
           <option value="6">Physician</option>
           <option value="5">Physicist</option>
       </select>
   </div>   <div class="col-md-1"> <button type="button" class="btn dt-delete-btn btn-sm" data-toggle="tooltip" title="Remove Question"><i class="fas fa-times-circle"></i> </button></div>   </div>  </li>
     */
    if (typrRoleId == 0) {
        $("#" + selectId).val(null);
    }
    else {
        $("#" + selectId).val(typrRoleId);
    }
    $("#" + Ulsortable).sortable();
    $("#" + Ulsortable).disableSelection();
});

$(".editable-ss").each(function (index) {
    document.getElementById("" + $(this).attr('id')).contentEditable = true;
});

$(".editable-s").each(function (index) {
    document.getElementById("" + $(this).attr('id')).contentEditable = true;
});

$("#addSection").click(function () {
    $('.clone-section').clone().appendTo('.menu-list').show();
});

///$(document).on('click', '.add-question-btn input[type="button"]', function (e) {
$(document).on('click', '.delete-section', function (e) {
    //$(".delete-section").click(function (e) {
    $(this).closest('li').remove();
});
$(document).on('click', '.delete-subsection', function (e) {
    //$(".delete-subsection").click(function (e) {
    $(this).closest('li').remove();
});
function qsrsubmitform() {

}

$('.sr-maiheader').prop('section', 'header');
$('.sr-subheader').prop('section', 'subheader');

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
    //return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    //    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    //)
}
//error
$(document).on('change', 'input,textarea,select', function () {
    //$("input").keypress(function () {
    if ($.trim($(this).val()) != "") {
        $(this).removeClass("error");
    }
    else {
        $(this).val($.trim($(this).val()));
        if ($(this).attr('id') != "strDescription") {
            $(this).addClass("error");
        }
    }
});
$(function () {
    //$('ul.sections-list').sortable({
    //    connectWith: 'ul.sections-list',
    //    beforeStop: function (ev, ui) {
    //        if ($(ui.item).hasClass('hasSubsection') && $(ui.placeholder).parent()[0] != this) {
    //            $(this).sortable('cancel');
    //        }
    //    }
    //});


    $('#sortable-1').sortable({
        connectWith: 'ul.question-lists'
    });
    $('#QUL-01').sortable({
        connectWith: 'ul.question-lists'
    });

    //$('ul.sub-sections-list').sortable({
    //    connectWith: 'ul.sub-sections-list'
    //});
    //$('ul.question-lists').sortable({
    //    connectWith: 'ul.question-lists'
    //});
});
