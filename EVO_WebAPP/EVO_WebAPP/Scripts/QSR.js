/*
----------------------------------------------------------------------------------
16-Jul-2019  *** Rajendran ***Documnet Repository  File Upload 
----------------------------------------------------------------------------------
*/
function GetStaffList() {
    //
    $.ajax({
        type: "GET", //rest Type
        dataType: 'json',
        url: "/QSR/ScheduleSurvey/GetStaffList",
        data: { ClinicId: $("#lng_ClinicID :selected").val() },
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            //
            var pos = "<select id='lng_PrimaryContactStaffID'>";
            if (data.length != 0) {
                pos = pos + '<option selected=true value=' + "NULL" + '>' + "Select" + '</option>';

            }

            for (var i = 0; i < data.length; i++) {
                //if (i == 0)
                //{
                //    pos = pos + '<option value=' + "NULL" + '>' + "Select" + '</option>';
                //}
                //else {
                pos = pos + '<option value=' + data[i].lng_StaffID + '>' + data[i].NameWithMail + '</option>';
                //}

            }
            if (data.length == 0) {
                pos = pos + '<option value="NULL">' + 'No data available' + '</option>';

            }

            pos = pos + '</select>';
            $('#lng_PrimaryContactStaffID').html(pos);
        }
    });
    if ($("#lng_ReviewType :selected").val() != null && $("#lng_ReviewType :selected").val() != "" && $("#lng_ClinicID :selected").val() != null && $("#lng_ClinicID :selected").val() != "") {
        GetReviewerList();
    }
}
function GetRoleList(Name) {
    //
    var s = $("#lng_SurveyID :selected").val()

    if (s == "") {
        $(".ReviewType").hide();
        $(".physician").hide();
        //$(".Reviewrole").hide();

    }
    else {
        $(".ReviewType").show();
        $(".physician").hide();
    }

    $.ajax({
        type: "GET", //rest Type
        dataType: 'json',
        url: "/QSR/ScheduleSurvey/ScheduleSurvey",
        data: { Surveyid: $("#lng_SurveyID :selected").val() },
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            var pos = "<select id='lng_ReviewType'>";
            for (var i = 0; i < data.Rolelistt.length; i++) {

                if (i == 0) {
                    pos = pos + '<option value=' + "NULL" + ' Selected=true>' + "Select Review Type" + '</option>';
                }
                pos = pos + '<option value=' + data.Rolelistt[i].lng_RoleID + '>' + data.Rolelistt[i].str_RoleName + '</option>';


            }
            if (data.Rolelistt.length == 0) {
                pos = pos + '<option>' + 'Select' + '</option>';

            }
            pos = pos + '</select>';
            $('#lng_ReviewType').html(pos);
        }
    });

}

function GetReviewerList() {
    //

    if ($("#lng_ReviewType :selected").val() != null && $("#lng_ReviewType :selected").val() != "NULL" && $("#lng_ReviewType :selected").val() != "" && $("#lng_ClinicID :selected").val() != null && $("#lng_ClinicID :selected").val() != "" && $("#lng_ClinicID :selected").val() != "NULL") {
        $.ajax({
            type: "GET", //rest Type 
            url: "/QSR/ScheduleSurvey/GetRoleUserList",
            data: { RoleId: $("#lng_ReviewType :selected").val(), lng_ClinicID: $("#lng_ClinicID :selected").val() },
            async: false,
            success: function (data) {
                $('#ReviewerListDivId').html(data);
                $('[data-toggle="datepickerDue"]').change();
            }
        });
    }
    else {
        $("#lng_ReviewType").val("NULL");
        $("#ReviewRole").val("NULL");
        $("#Physician").val("NULL");
        $("#Physicist").val("NULL");

        $(".physician").hide();
        // toastr.warning("Please select Clinic Name");
        //$("#SheduleReviewform").validate({
        //    rules: {

        //        lng_ClinicID: {
        //            required: true,

        //        },
        //    },
        //        messages: {


        //            lng_ClinicID: {
        //                required: "Select Clinic Name",

        //            },
        //        },
        //        });
        return false;
    }
}
function Validate() {

    var _lng_ClinicID = $.trim($("#lng_ClinicID").val());
    var _lng_SurveyID = $.trim($("#lng_SurveyID").val());
    var _lng_ReviewType = $.trim($("#lng_ReviewType").val());
    var lng_PrimaryContactStaffID = $.trim($("#lng_PrimaryContactStaffID").val());

    //if (_lng_ReviewType == null || _lng_ReviewType == "") {
    //    toastr.warning("Select Review Type");
    //    return false;
    //}
    if ($('#SheduleReviewform').valid()) {
        var isChecked = $("#IsNotifyPrimaryContact").is(":checked");
        if (isChecked) {
            if (lng_PrimaryContactStaffID != "NULL") { $("#PrereviewText").html('If Notify Clinic primary contact is selected, then notification will be sent immediately to the respective staff. <b>' + $("#lng_PrimaryContactStaffID :selected").text() + '</b>') }
        }
        else {
            $("#PrereviewText").html('');
        }

        if (_lng_ReviewType == null || _lng_ReviewType == "" || _lng_ReviewType == "NULL") {
            toastr.warning("Select Review Type");
            return false;
        }
        if (isChecked) {
            if (lng_PrimaryContactStaffID == "" || lng_PrimaryContactStaffID == "NULL") {
                toastr.warning("Select Clinic primary contact");
                return false
            }
        }
        $(".scehduled").hide();
        $("#Processing").show();
        $(".Cancel").hide();

        if (_lng_ReviewType == 0) {
            if (($("#Physician").val() != null && $("#Physician").val() != "") && ($("#Physicist").val() != null && $("#Physicist").val() != "")
                && ($("#rvwdate-1").val() != null && $("#rvwdate-1").val() != "") && ($("#rvwdate-0").val() != null && $("#rvwdate-0").val() != "")) {
                $("#initiateSurveyModal").modal('show');
            }
            else {
                $("#initiateQueueModal").modal('show');
            }
        }
        else if (_lng_ReviewType == 5 || _lng_ReviewType == 6) {
            if (($("#ReviewRole").val() != null && $("#ReviewRole").val() != "") && ($("#rvwdate-0").val() != null && $("#rvwdate-0").val() != "")) {
                $("#initiateSurveyModal").modal('show');
            }
            else {
                $("#initiateQueueModal").modal('show');
            }
        }



        //var DocumentUpload = new FormData();
        //var other_formdata = $('#SheduleReviewform').serializeArray();
        //$.each(other_formdata, function (key, input) {
        //    if (input.name != "EnableSelfAssment") {
        //        DocumentUpload.append(input.name, input.value);
        //    }
        //});
        //DocumentUpload.append('EnableSelfAssment', $('#EnableSelfAssment').is(":checked"));

        //$.ajax({
        //    type: "POST", //rest Type 
        //    url: "/QSR/ScheduleSurvey/Schedulevalidation",
        //    contentType: false,
        //    processData: false,
        //    data: DocumentUpload,
        //    async: true,
        //    success: function (data) {
        //        if (data.ResultCode == 1) {

        //        }
        //        else if (data.ResultCode == -1) {
        //            toastr.warning(data.StrMsg);
        //            $("#initiateSurveyModal").modal('hide');

        //        }
        //        else {
        //            toastr.warning(data.StrMsg);
        //        }

        //        //
        //        // $('#ReviewerListDivId').html(data);
        //    }
        //})

    }
    else {
        $("#initiateSurveyModal").modal('hide');
    }
}
function PostScheduleReview() {
    //$('input[name="Directorrdb"]:checked').val();
    var DocumentUpload = new FormData();
    var other_formdata = $('#SheduleReviewform').serializeArray();

    $.each(other_formdata, function (key, input) {
        if (input.name != "EnableSelfAssment") {
            DocumentUpload.append(input.name, input.value);
        }
    });
    DocumentUpload.append('EnableSelfAssment', $('#EnableSelfAssment').is(":checked"));


    try {
        $("#btnSubmit").hide();
        $("#btnProcessSubmit").show();
        $("#btnSubmitQueue").hide();
        $("#btnProcessSubmitQueue").show();
        $("#btnSubmitQueueE").hide();
        $("#btnProcessSubmitQueueE").show();
        $(".cancel").hide();
        $.ajax({
            type: "POST", //rest Type 
            url: "/QSR/ScheduleSurvey/Add",
            contentType: false,
            processData: false,
            data: DocumentUpload,
            async: true,
            success: function (data) {
                if (data.ResultCode == 1) {
                    $("#PostScheduleReview").modal('hide');
                    sessionStorage.setItem("SuccessMsg", data.StrMsg);
                    window.location.href = '/QSR/ReviewDashboard/Index';
                }
                else if (data.ResultCode == -1) {
                    toastr.warning(data.StrMsg);
                    $("#initiateSurveyModal").modal('hide');

                }
                else {
                    toastr.warning(data.StrMsg);

                }
                $("#btnSubmit").show();
                $("#btnProcessSubmit").hide();
                $("#btnSubmitQueue").show();
                $("#btnProcessSubmitQueue").hide();
                $("#btnSubmitQueueE").show();
                $("#btnProcessSubmitQueueE").hide();
                //
                // $('#ReviewerListDivId').html(data);
            }
        });
    } catch (e) {
        toastr.warning(e.Messgae);

        //$("#btnSubmit").show();
        //$("#btnProcessSubmit").hide()
    }

}







$('#ScheduleFilter').change(function () {
    var data = $(this).val();
    GetQSRDashboardList(data)
});
function GetQSRDashboardList(Status) {
    $.ajax({
        type: "GET", //rest Type 
        url: "/QSR/ReviewDashboard/DashBoardList",
        data: { Status: Status },
        async: false,
        success: function (data) {
            $('#ListSurveyUpdateDivid').html(data);
        }
    });

}
function GetQSRReviewDashboardCount() {
    $.ajax({
        type: "GET", //rest Type
        dataType: 'json',
        url: "/QSR/ReviewDashboard/GetDashboardCount",
        data: {},
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $("#queueCount").html(data.QueueCount);
            $("#scheduledCount").html(data.scheduledCount);
            $("#completedCount").html(data.completedCount);
            $("#inprogressCount").html(data.inprogressCount);
            $("#approvedCount").html(data.approvedCount);
            $("#defferedCount").html(data.defferedCount);
            $("#CancelledCount").html(data.cancelledCount);
            $("#noncomplaintCount").html(data.complaintCount);

        }
    });
}
function RedirectDashboardDetails(ClinicId, SurveyId, ScheduledSurveyID) {
    sessionStorage.setItem("OrgDashboardClinicId", ClinicId);
    sessionStorage.setItem("OrgDashboardSurveyId", SurveyId);
    sessionStorage.setItem("OrgDashboardScheduledSurveyID", ScheduledSurveyID);
    var r = $("#example #" + ScheduledSurveyID + "").text();
    sessionStorage.setItem("Sname", r.trim());
    window.location.href = '/QSR/ReviewDashboard/ViewDashboard';

}


function DashboardDashboardDetails(Workflag) {
    var _ClinicId = sessionStorage.getItem("OrgDashboardClinicId");
    var _SurveyId = sessionStorage.getItem("OrgDashboardSurveyId");
    var _ScheduledSurveyID = sessionStorage.getItem("OrgDashboardScheduledSurveyID");
    $('#udatetabcontentdiv').html('');
    $.ajax({
        type: "GET", //rest Type 
        cache: false,
        url: "/QSR/ReviewDashboard/OrgViewDashboardDetails",
        data: { ClinicId: _ClinicId, SurveyId: _SurveyId, ScheduledSurveyID: _ScheduledSurveyID, Workflag: Workflag },
        async: false,
        success: function (data) {

            //        if (Workflag == "Inventory") {
            //            var Inventory = "<div class='box p-4'>"
            //                                   + "<div class='row>"
            //                                     + "  <div class='col-lg-12'>"
            //                                         + "  <ul class='nav nav-sm nav-pills nav-active-primary mb-3 clearfix'>"
            //                                             + "  <li class='nav-item'> <a class='nav-link active' href='#' data-toggle='tab' data-target='#invEquipment' onclick='DashboardDashboardDetails('InvEquipment');'>"
            //                                                     + "  <i class='fas fa-wrench'></i> Equipment </li> "

            //                                                      + " <li class='nav-item'> <a class='nav-link  ' href='#' data-toggle='tab' data-target='#invMachine' onclick='DashboardDashboardDetails('InvMachine');'>"
            //                                                       + "  <i class='fas fa-desktop'></i>Machine</a>  </li>"
            //                                           + "<li class='nav-item'><a class='nav-link ' href='#' data-toggle='tab' data-target='#invSoftware'>"
            //                                                      + " <i class='fas fa-laptop-code' onclick='DashboardDashboardDetails('InvSoftware');'></i> Software</a></li>"


            //                                                     + "  </ul></div></div> </div>";
            //            var dd = Inventory + data;
            //            console.log(dd);
            //            $('#udatetabcontentdiv').html(dd);

            //        }
            //        else if (Workflag == "InvEquipment")
            //        {

            //            var Inventory = "<div class='box p-4'>"
            //                                   + "<div class='row>"
            //                                     + "  <div class='col-lg-12'>"
            //                                         + "  <ul class='nav nav-sm nav-pills nav-active-primary mb-3 clearfix'>"
            //                                             + "  <li class='nav-item'> <a class='nav-link active' href='#' data-toggle='tab' data-target='#invEquipment' onclick='DashboardDashboardDetails('InvEquipment');'>"
            //                                                     + "  <i class='fas fa-wrench'></i> Equipment </li> "

            //                                                      + " <li class='nav-item'> <a class='nav-link  ' href='#' data-toggle='tab' data-target='#invMachine' onclick='DashboardDashboardDetails('InvMachine');'>"
            //                                                       + "  <i class='fas fa-desktop'></i>Machine</a>  </li>"
            //                                           +"<li class='nav-item'><a class='nav-link ' href='#' data-toggle='tab' data-target='#invSoftware'>"
            //                                                      + " <i class='fas fa-laptop-code' onclick='DashboardDashboardDetails('InvSoftware');'></i> Software</a></li>"


            //                                                     + "  </ul></div></div> </div>";

            //            var dd = Inventory + data;

            //            $('#udatetabcontentdiv').html(dd);
            //        }
            //        else if (Workflag == "InvMachine")
            //{
            //            var Inventory = "<div class='box p-4'>"
            //                                   + "<div class='row>"
            //                                     + "  <div class='col-lg-12'>"
            //                                         + "  <ul class='nav nav-sm nav-pills nav-active-primary mb-3 clearfix'>"
            //                                             + "  <li class='nav-item'> <a class='nav-link active' href='#' data-toggle='tab' data-target='#invEquipment' onclick='DashboardDashboardDetails('InvEquipment');'>"
            //                                                     + "  <i class='fas fa-wrench'></i> Equipment </li> "

            //                                                      + " <li class='nav-item'> <a class='nav-link active ' href='#' data-toggle='tab' data-target='#invMachine' onclick='DashboardDashboardDetails('InvMachine');'>"
            //                                                       + "  <i class='fas fa-desktop'></i>Machine</a>  </li>"
            //                                           + "<li class='nav-item'><a class='nav-link ' href='#' data-toggle='tab' data-target='#invSoftware'>"
            //                                                      + " <i class='fas fa-laptop-code' onclick='DashboardDashboardDetails('InvSoftware');'></i> Software</a></li>"


            //                                                     + "  </ul></div></div> </div>";

            //            var dd = Inventory + data;

            //            $('#udatetabcontentdiv').html(dd);
            //        }
            //        else if (Workflag == "InvSoftware") {

            //                var Inventory = "<div class='box p-4'>"
            //                                       + "<div class='row>"
            //                                         + "  <div class='col-lg-12'>"
            //                                             + "  <ul class='nav nav-sm nav-pills nav-active-primary mb-3 clearfix'>"
            //                                                 + "  <li class='nav-item'> <a class='nav-link active' href='#' data-toggle='tab' data-target='#invEquipment' onclick='DashboardDashboardDetails('InvEquipment');'>"
            //                                                         + "  <i class='fas fa-wrench'></i> Equipment </li> "

            //                                                          + " <li class='nav-item'> <a class='nav-link active ' href='#' data-toggle='tab' data-target='#invMachine' onclick='DashboardDashboardDetails('InvMachine');'>"
            //                                                           + "  <i class='fas fa-desktop'></i>Machine</a>  </li>"
            //                                               + "<li class='nav-item'><a class='nav-link active' href='#' data-toggle='tab' data-target='#invSoftware'>"
            //                                                          + " <i class='fas fa-laptop-code' onclick='DashboardDashboardDetails('InvSoftware');'></i> Software</a></li>"


            //                                                         + "  </ul></div></div> </div>";

            //            var dd = Inventory + data;

            //            $('#udatetabcontentdiv').html(dd);
            //        }
            //        else {
            $('#udatetabcontentdiv').html(data);
            //}



        }
    });
}

function NetworkDashboardDetails(Workflag) {

    var _ClinicId = sessionStorage.getItem("OrgDashboardClinicId");
    var _SurveyId = sessionStorage.getItem("OrgDashboardSurveyId");
    var _ScheduledSurveyID = sessionStorage.getItem("OrgDashboardScheduledSurveyID");
    $('#udatetabcontentdiv').html('');

    $.ajax({
        type: "GET", //rest Type 
        cache: false,
        url: "/QSR/ReviewerSurvey/NetworkDashboardDetails",
        data: { ClinicId: _ClinicId, SurveyId: _SurveyId, ScheduledSurveyID: _ScheduledSurveyID, Workflag: Workflag },
        async: false,
        success: function (data) {

            $("#udatetabcontentdiv").show();
            $("#editNSurvey").hide();
            $("#cancelbtn").show();
            $('#udatetabcontentdiv').html(data);


        }
    });
}
function PostSurveybyReviewer(wf) {

    //$('input[name="Directorrdb"]:checked').val();
    var reviewForm = new FormData();
    var other_formdata = $('#Reviewform').serializeArray();
    $.each(other_formdata, function (key, input) {
        reviewForm.append(input.name, input.value);
    });
    reviewForm.append("wf", wf);


    try {
        $("#btnSubmit").hide();
        $("#btnProcessSubmit").show()
        $(".cancel").hide()
        $.ajax({
            type: "POST", //rest Type 
            url: "/QSR/ReviewerSurvey/UpdateSurvey",
            contentType: false,
            processData: false,
            data: reviewForm,
            async: true,
            success: function (data) {
                if (data.ResultCode == 1) {
                    $("#initiateSurveyModal").modal('hide');
                    // toastr.success(data.StrMsg);
                    window.location.href = '/QSR/ReviewerSurvey/Index';
                }
                else if (data.ResultCode == -1) {
                    toastr.warning(data.StrMsg);

                }
                else {
                    toastr.warning(data.StrMsg);
                }
                $("#btnSubmit").show();
                $("#btnProcessSubmit").hide()
                //
                // $('#ReviewerListDivId').html(data);
            }
        });
    } catch (e) {
        toastr.warning(e.Messgae);

        //$("#btnSubmit").show();
        //$("#btnProcessSubmit").hide()
    }

}


function ValidateSurvey(id) {

    var _QuestionCategory = $("#str_QuestionCategory").val();

    if ($("#frmSurveDetails").valid()) {
        if (_QuestionCategory == 0) {
            $("#" + id).show();
            if ($.trim($("ul.mainmenu").html()) != "") {

            }
            var a = $(".sections-list").length;
            $("#seconddiv").html(`<a href="javascript:ValidateProgramSurvey('survey-form-step-three')" class="btn btn-primary mr-2" id="PPatientSurvey">Continue</a>`);

        }
        else if (_QuestionCategory == 1) {
            if ($.trim($("ul.mainmenu").html()) != "") {
                $(".add-section").click();
            }
            $("#" + id).show();

            $("#seconddiv").html(`<a href="javascript:PatientSurvey('success-section')"   class="btn btn-primary mr-2">Finish Survey</a>`);
        } else if (_QuestionCategory == 2) {
            if ($.trim($("ul.patientmainmenu").html()) == "") {
                $(".add-sectionpatient").click();
            }
            $("#survey-form-step-three").show();
        }
        $("#survey-form-step-one").hide();
    }
    var typrRoleId = $("#RoleTypeId").val();
    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;

    if (typrRoleId == 0) {
        SelectValueRoleType = `<option  value  selected="selected">Select</option> <option value="0">  Physician and Physicist  </option> <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
        var _selectId = $("#selectid").val();
        if ($("#selectid").val() != null) {
            $("#selectid").val($("#selectid").val());
        }
        //if ($("#selectid").val() == 0)
        //{
        //    $("#selectid").val(null); 
        //}
        //else {
        //    $("#selectid").val(null); 
        //}         
        $("#selectid").html(SelectValueRoleType);
        $("#selectid").val(_selectId);
    }
    else if (typrRoleId == 5) {
        SelectValueRoleType = `<option value="5">Physicist Only</option>`;
        $("#selectid").html(SelectValueRoleType);
        $("#selectid").val(typrRoleId);
    } else if (typrRoleId == 6) {
        SelectValueRoleType = `<option value="6">Physician Only</option>`;
        $("#selectid").html(SelectValueRoleType);
        $("#selectid").val(typrRoleId);

    }



    $("#divReviewType").text($.trim($("#RoleTypeId :selected").text()));
    $("#divSurveyType").text($.trim($("#str_QuestionCategory :selected").text()));
    $("#divReviewType1").text($.trim($("#RoleTypeId :selected").text()));
    $("#divSurveyType1").text($.trim($("#str_QuestionCategory :selected").text()));

    /// Update the Select Value for Review Type dropdown
    var validformMap = $.map($('#qsrForm :input'), function (el, idx) {
        if (el.type == "select-one") {
            var x, actualname;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }
            if (x == "select-one") {
                var selectedValue = el.value;
                $("#" + el.id).html('');
                $("#" + el.id).html(SelectValueRoleType);
                if (typrRoleId == 0) {
                    $("#" + el.id).val(selectedValue);

                }
            }
        }
     
        if (el.type !== "button" && el.type != "submit") {          
            $("#" + el.id).removeClass("error");
        }



    });
    // 


    /// Update the Select Value for Review Type dropdown
    var validformMap = $.map($('#patientqsrForm :input'), function (el, idx) {
        if (el.type == "select-one") {
            var x, actualname;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }
            if (x == "select-one") {
                var selectedValue = el.value;
                $("#" + el.id).html('');
                $("#" + el.id).html(SelectValueRoleType);
                if (typrRoleId == 0) {
                    $("#" + el.id).val(selectedValue);

                }
            }            
        }
        if (el.type !== "button" && el.type != "submit") {
            $("#" + el.id).removeClass("error");
        }

    });
    // 

}
function ValidateProgramSurvey(id) {

    var Isvalid = true;
    var QuestionCount = 0, SubHeaderCount = 0;
    var validformMap = $.map($('#qsrForm :input'), function (el, idx) {
        if (el.type !== "button" && el.type != "submit") {
            //
            var x, actualname;
            x = el.section;

            if (typeof x === "undefined") {
                x = el.type;
            }
            if (x == "subheader") {
                QuestionCount = 0;
            }
            if (x == "textarea") {// To check one or more question must be enter the Sub Section
                QuestionCount++;
            }
            actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
            //if (x == "select-one") {
            //    $("#" + el.id).html('');
            //    $("#" + el.id).html(SelectValueRoleType);
            //    $("#" + el.id).val(el.value);
            //}
            if ($.trim(el.value) == "") {
                $("#" + el.id).addClass("error");
                Isvalid = false;
                return false;
            }
            else {
                $("#" + el.id).removeClass("error");
                return {
                    type: $.trim(el.type),
                    value: $.trim(el.value),
                    name: $.trim(el.name),
                    section: $.trim(x)
                };
            }
        }

    });
    if (validformMap.length == 0) {
        toastr.warning("Please add atleast one section");
        return false;
    }
    if (QuestionCount == 0) {
        toastr.warning("Please ensure each sub header has at least one or more questions");
        return false;
    }
    if (!Isvalid) {
        return;
    }
    if (Isvalid) {
        $("#" + id).show();
        $("#survey-form-step-one").hide();
        $("#survey-form-step-two").hide();

        if ($.trim($("ul.patientmainmenu").html()) == "") {
            $(".add-sectionpatient").click();
        }
    }

    var typrRoleId = $("#RoleTypeId").val();
    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;

    if (typrRoleId == 0) {
        SelectValueRoleType = `<option  value  selected="selected">Select</option> <option value="0">  Physician and Physicist  </option> <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    }
    else if (typrRoleId == 5) {
        SelectValueRoleType = `<option value="5">Physicist Only</option>`;

    } else if (typrRoleId == 6) {
        SelectValueRoleType = `<option value="6">Physician Only</option>`;

    }

    /// Update the Select Value for Review Type dropdown
    var validformMap = $.map($('#patientqsrForm :input'), function (el, idx) {
        if (el.type == "select-one") {
            var x, actualname;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }
            if (x == "select-one") {
                var selectedValue = el.value;
                $("#" + el.id).html('');
                $("#" + el.id).html(SelectValueRoleType);
                if (typrRoleId == 0) {
                    $("#" + el.id).val(selectedValue);

                }
            }
        }

    });

    var validformMap = $.map($('#patientqsrForm :input'), function (el, idx) {
        if (el.type == "select-one") {
            var x, actualname;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }
            if (x == "select-one") {
                var selectedValue = el.value;
                $("#" + el.id).html('');
                $("#" + el.id).html(SelectValueRoleType);
                if (typrRoleId == 0) {
                    $("#" + el.id).val(selectedValue);

                }
            }
        }
        if (el.type !== "button" && el.type != "submit") {
            $("#" + el.id).removeClass("error");
        }

    });
    // 



}
function PatientSurvey(id) {

    var Isvalid = true;
    var QuestionCount = 0, SubHeaderCount = 0;
    var _QuestionCategory = $("#str_QuestionCategory").val();
    /// str_QuestionCategory =Survey Type  0- Prog and Patient , 1 - Program , 2 -Patient
    if (_QuestionCategory == 1) {
        var validformMap = $.map($('#qsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    // toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            return;
        }
    }
    else if (_QuestionCategory == 2) {
        var validPatientformMap = $.map($('#patientqsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    // toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validPatientformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            return;
        }
    }
    else {
        var validformMap = $.map($('#qsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    // toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            return;
        }

        var validPatientformMap = $.map($('#patientqsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    // toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validPatientformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            return;
        }
    }





    if (Isvalid) {
        //$("#" + id).show();
        //$("#survey-form-step-one").hide();
        //$("#survey-form-step-two").hide();
        //$("#survey-form-step-three").hide();

        FinishSurvey(id);

    }
}




function FinishSurvey(id) {
    var Isvalid = true;
    var QuestionCount = 0, SubHeaderCount = 0;
    var workflag = sessionStorage.getItem("SurveyWorkflag");


    var formMap = $.map($('#qsrForm :input'), function (el, idx) {

        if (el.type !== "button" && el.type != "submit") {
            var x;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }

            return {
                type: $.trim(el.type),
                value: $.trim(el.value),
                name: $.trim(el.name),
                section: $.trim(x),
                category: "PS"
            };
        }

    });

    var PatientformMap = $.map($('#patientqsrForm :input'), function (el, idx) {

        if (el.type !== "button" && el.type != "submit") {
            var x;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }

            return {
                type: $.trim(el.type),
                value: $.trim(el.value),
                name: $.trim(el.name),
                section: $.trim(x),
                category: "PA"
            };
        }

    });
    if (Isvalid) {


        var _getPatientData = JSON.stringify(PatientformMap, null, " ");
        var _getData = JSON.stringify(formMap, null, " ");
        $("#showsurveyName").text($.trim($("#SurveyName").val()));
        var IsUpdateNew = false, IsCopy = false;
        var strURL = "/QSR/Survey/SurveyQuestion";
        if (workflag == "U") {
            strURL = "/QSR/Survey/UpdateSurveyQuestion";
            var versionupdate = $("input[name='versionupdate']:checked").val();
            IsUpdateNew = versionupdate == "UP" ? false : versionupdate == "UN" ? true : false;
        }
        if (workflag == "C") {
            strURL = "/QSR/Survey/SurveyQuestion";
            IsCopy = true;
        }
        // _result: _getData 
        $.ajax({
            type: "POST", //rest Type 
            url: strURL,
            data: { _result: _getData, _patientresult: _getPatientData, strSurveyName: $.trim($("#SurveyName").val()), strDescription: $.trim($("#strDescription").val()), strSurveyType: $.trim($("#str_QuestionCategory :selected").val()), ReviewType: $("#RoleTypeId :selected").val(), lng_SurveyID: sessionStorage.getItem("EditSurveyId"), IsUpdateNewVersion: IsUpdateNew, isCopy: IsCopy, SurveyFlag: "C" },
            async: false,
            success: function (data) {
                if (data.result) {
                    // toastr.success(data.message);
                    $("#" + id).show();
                    $("#survey-form-step-one").hide();
                    $("#survey-form-step-two").hide();
                    $("#survey-form-step-three").hide();
                    var _SurveyName = $.trim($("#SurveyName").val());
                    if (IsUpdateNew) {
                        $("#showsurveyMsg").text('You have successfully created the new version of Survey.');
                        _SurveyName = $.trim($("#SurveyName").val());
                    }
                    $("#showsurveyName").text(_SurveyName);
                    if (workflag == "C") {
                        $("#showsurveyMsg").text(' You have successfully copied the survey');
                    }
                }
                else {
                    toastr.warning(data.message);
                    $("#" + id).hide();
                    $("#survey-form-step-one").show();
                    $("#survey-form-step-two").hide();
                    $("#survey-form-step-three").hide();

                }
            }
        });
    }


}

$("#btntempsave").click(function () {


    var Isvalid = true;
    var QuestionCount = 0, SubHeaderCount = 0;
    var validformMap = $.map($('#qsrForm :input'), function (el, idx) {
        if (el.type !== "button" && el.type != "submit") {
            //
            var x, actualname;
            x = el.section;

            if (typeof x === "undefined") {
                x = el.type;
            }
            if (x == "subheader") {
                QuestionCount = 0;
            }
            if (x == "textarea") {// To check one or more question must be enter the Sub Section
                QuestionCount++;
            }
            actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";

            if ($.trim(el.value) == "") {
                $("#" + el.id).addClass("error");
                Isvalid = false;
                return false;
            }
            else {
                $("#" + el.id).removeClass("error");
                return {
                    type: $.trim(el.type),
                    value: $.trim(el.value),
                    name: $.trim(el.name),
                    section: $.trim(x)
                };
            }
        }

    });
    if (validformMap.length == 0) {
        toastr.warning("Please add atleast one section");
        return false;
    }
    if (QuestionCount == 0) {
        toastr.warning("Please ensure each sub header has at least one or more questions");
        return false;
    }

    var typrRoleId = $("#RoleTypeId").val();
    var SelectValueRoleType = `<option value="0">Physician and Physicist</option>  <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;

    if (typrRoleId == 0) {
        SelectValueRoleType = `<option  value  selected="selected">Select</option> <option value="0">  Physician and Physicist  </option> <option value="6">Physician Only</option>   <option value="5">Physicist Only</option>`;
    }
    else if (typrRoleId == 5) {
        SelectValueRoleType = `<option value="5">Physicist Only</option>`;

    } else if (typrRoleId == 6) {
        SelectValueRoleType = `<option value="6">Physician Only</option>`;

    }

    if (!Isvalid) {
        toastr.warning("Fields should not be empty");

        return;
    }
    if (Isvalid) {
        AutoSaveSurvey();
    }

})

$("#btntempsavePat").click(function () {


    var Isvalid = true;
    var QuestionCount = 0, SubHeaderCount = 0;
    var _QuestionCategory = $("#str_QuestionCategory").val();
    /// str_QuestionCategory =Survey Type  0- Prog and Patient , 1 - Program , 2 -Patient
    if (_QuestionCategory == 1) {
        var validformMap = $.map($('#qsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    //toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            toastr.warning("Fields should not be empty");

            return;
        }
    }
    else if (_QuestionCategory == 2) {
        var validPatientformMap = $.map($('#patientqsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    // toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validPatientformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            toastr.warning("Fields should not be empty");
            return;
        }
    }
    else {
        var validformMap = $.map($('#qsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    // toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            toastr.warning("Fields should not be empty");
            return;
        }

        var validPatientformMap = $.map($('#patientqsrForm :input'), function (el, idx) {
            if (el.type !== "button" && el.type != "submit") {
                var x, actualname;
                x = el.section;

                if (typeof x === "undefined") {
                    x = el.type;
                }
                if (x == "subheader") {
                    QuestionCount = 0;
                }
                if (x == "textarea") {// To check one or more question must be enter the Sub Section
                    QuestionCount++;
                }
                actualname = x == "header" ? "Section" : x == "subheader" ? "Subsection" : x == "textarea" ? "Question Name" : "";
                if ($.trim(el.value) == "") {
                    $("#" + el.id).addClass("error");
                    //$("#" + el.id).focus();
                    // toastr.warning("Please enter the " + actualname);
                    Isvalid = false;
                    return false;
                }
                else {
                    $("#" + el.id).removeClass("error");
                    return {
                        type: $.trim(el.type),
                        value: $.trim(el.value),
                        name: $.trim(el.name),
                        section: $.trim(x)
                    };
                }
            }

        });
        if (validPatientformMap.length == 0) {
            toastr.warning("Please add atleast one section");
            return false;
        }
        if (QuestionCount == 0) {
            toastr.warning("Please ensure each sub header has at least one or more questions");
            return false;
        }
        if (!Isvalid) {
            toastr.warning("Fields should not be empty");

            return;
        }
    }
    if (Isvalid) {
        //$("#" + id).show();
        //$("#survey-form-step-one").hide();
        //$("#survey-form-step-two").hide();
        //$("#survey-form-step-three").hide();

        AutoSaveSurvey();

    }

})

function AutoSaveSurvey() {

    var Isvalid = true;
    var QuestionCount = 0, SubHeaderCount = 0;
    var workflag = sessionStorage.getItem("SurveyWorkflag");

    var formMap = $.map($('#qsrForm :input'), function (el, idx) {

        if (el.type !== "button" && el.type != "submit") {
            var x;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }

            return {
                type: $.trim(el.type),
                value: $.trim(el.value),
                name: $.trim(el.name),
                section: $.trim(x),
                category: "PS"
            };
        }

    });

    var PatientformMap = $.map($('#patientqsrForm :input'), function (el, idx) {

        if (el.type !== "button" && el.type != "submit") {
            var x;
            x = el.section;
            if (typeof x === "undefined") {
                x = el.type;
            }

            return {
                type: $.trim(el.type),
                value: $.trim(el.value),
                name: $.trim(el.name),
                section: $.trim(x),
                category: "PA"
            };
        }

    });
    if (Isvalid) {

        var _getPatientData = JSON.stringify(PatientformMap, null, " ");
        var _getData = JSON.stringify(formMap, null, " ");
        $("#showsurveyName").text($.trim($("#SurveyName").val()));
        var IsUpdateNew = false, IsCopy = false;
        var strURL = "/QSR/Survey/SurveyQuestion";
        if (workflag == "U") {
            strURL = "/QSR/Survey/UpdateSurveyQuestion";
            var versionupdate = $("input[name='versionupdate']:checked").val();
            IsUpdateNew = versionupdate == "UP" ? false : versionupdate == "UN" ? true : false;

        }
        if (workflag == "C") {
            strURL = "/QSR/Survey/SurveyQuestion";
            IsCopy = true;
        }
        // _result: _getData 
        $.ajax({
            type: "POST", //rest Type 
            url: strURL,
            data: { _result: _getData, _patientresult: _getPatientData, strSurveyName: $.trim($("#SurveyName").val()), strDescription: $.trim($("#strDescription").val()), strSurveyType: $.trim($("#str_QuestionCategory :selected").val()), ReviewType: $("#RoleTypeId :selected").val(), lng_SurveyID: sessionStorage.getItem("EditSurveyId"), IsUpdateNewVersion: IsUpdateNew, isCopy: IsCopy, SurveyFlag: "PC" },
            async: false,
            success: function (data) {
                if (data.result) {

                    toastr.success("Survey saved successfully");

                    var SurveyID = null;
                    $.ajax({
                        type: "GET", //rest Type 
                        url: "/QSR/Survey/GetLastSurveyID",
                        success: function (HH) {
                            if (HH) {
                                SurveyID = HH.obj.lng_SurveyId;
                                if (workflag == "I") {

                                    ASGetEditSurvey(SurveyID);


                                }

                                var _SurveyName = $.trim($("#SurveyName").val());
                                if (IsUpdateNew) {
                                    $("input[name=versionupdate][value='UP']").prop('checked', true);

                                    ASGetEditSurvey(SurveyID);

                                    $("#showsurveyMsg").text('You have successfully created the new version of Survey.');
                                    _SurveyName = $.trim($("#SurveyName").val());
                                }
                                $("#showsurveyName").text(_SurveyName);
                                if (workflag == "C") {
                                    $("#showsurveyMsg").text(' You have successfully copied the survey');
                                }

                            }

                        }
                    });

                }
                else {
                    toastr.warning(data.message);
                    //$("#" + id).hide();
                    $("#survey-form-step-one").show();
                    $("#survey-form-step-two").hide();
                    $("#survey-form-step-three").hide();
                }
            }
        });
    }


}


function ASGetEditSurvey(SurveyId) {
    sessionStorage.setItem("Autosave", true);
    sessionStorage.setItem("IsCopySurvey", false);
    sessionStorage.setItem("EditSurveyId", SurveyId);
    sessionStorage.setItem("SurveyWorkflag", 'U');// For add and Edit the survey for in One javascript function /// QSR.js
    window.location.href = "/QSR/Survey/UpdateQuestion";
}

function OnePrev(id) {
    var _QuestionCategory = $("#str_QuestionCategory").val();
    if (_QuestionCategory == 0) {
        $("#" + id).show();
        $("#survey-form-step-three").hide();
        $("#survey-form-step-two").hide();

    }
    else if (_QuestionCategory == 1) {
        $("#" + id).show();
        $("#survey-form-step-three").hide();
        $("#survey-form-step-two").hide();
    } else if (_QuestionCategory == 2) {
        $("#survey-form-step-three").show();
    }
}
function TwoPrev(id) {
    var _QuestionCategory = $("#str_QuestionCategory").val();

    if (_QuestionCategory == 0) {
        $("#survey-form-step-one").hide();
        $("#survey-form-step-three").hide();
        $("#survey-form-step-two").show();

    }
    else if (_QuestionCategory == 1) {
        $("#survey-form-step-one").show()
        $("#survey-form-step-three").hide();
        $("#survey-form-step-two").hide();
    } else if (_QuestionCategory == 2) {
        $("#survey-form-step-one").show()
        $("#survey-form-step-three").hide();
        $("#survey-form-step-two").hide();
    }
}

function RedirectNetworkDashboardDetails(ClinicId, SurveyId, ScheduledSurveyID) {
    sessionStorage.setItem("OrgDashboardClinicId", ClinicId);
    sessionStorage.setItem("OrgDashboardSurveyId", SurveyId);
    sessionStorage.setItem("OrgDashboardScheduledSurveyID", ScheduledSurveyID);
    //
    var r = $("#example #" + ScheduledSurveyID + "").text();
    sessionStorage.setItem("Sname", r.trim());
    // sessionStorage.setItem("SurveyName",)
    window.location.href = '/QSR/ReviewerSurvey/DetailsView';
}
