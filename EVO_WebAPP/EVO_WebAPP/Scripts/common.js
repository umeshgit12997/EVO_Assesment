/*
----------------------------------------------------------------------------------
11-Jul-2019  *** Renuka *** Download files - SSO File Download in the Details Page
----------------------------------------------------------------------------------
*/
function DownloadanyFile(filename, flag, ServiceName, FilePath, OrganizationName) {

    var urlv = '/Base/FileDownload';
    $.ajax({
        type: "POST",
        url: urlv,
        data: { filename: filename, flag: flag, ServiceName: ServiceName, FilePath: FilePath, OrganizationName: OrganizationName },
        // beforeSend: function () { $("#search_div").show() },
        success: function (data) {
            if (data.result == false) {
                toastr.error(data.strMsg);
                return false;
            }
            else {

                var FullURL = urlv + "?filename=" + encodeURIComponent(filename) + "&flag=" + flag + "&ServiceName=" + ServiceName + "&FilePath=" + encodeURIComponent(FilePath) + "&OrganizationName=" + encodeURIComponent(OrganizationName);

                //= urlv + "?lng_DocRepositoryID=" + lng_DocRepositoryID + "&lng_OrganizationClinicFolderID=" + lng_OrganizationClinicFolderID + "&lng_DocRepositoryFolderID=" + lng_DocRepositoryFolderID + "&flag=" + flag;

                var a = document.createElement('a');
                a.href = FullURL;

                a.setAttribute('target', '_blank');

                a.click();
                //window.location = urlv + "?filename=" + filename + "&flag=" + flag + "&ServiceName=" + ServiceName + "&FilePath=" + FilePath;
                // window.location = urlv + "?filename=" + filename + "&flag=" + flag + "&ServiceName=" + ServiceName + "&ActualFileName=" + ActualFileName;
            }
            // $("#search_div").hide();
        },
        error: function (ex) {
            //$("#search_div").hide();
            toastr.error(ex.responseText);
            return false;
        }
    });
}
function DocRepDownloadanyFile(lng_DocRepositoryID, lng_OrganizationClinicFolderID, lng_DocRepositoryFolderID, flag) {

    var urlv = '/Base/DRFileDownload';
    $.ajax({
        type: "POST",
        url: urlv,
        data: { lng_DocRepositoryID: lng_DocRepositoryID, lng_OrganizationClinicFolderID: lng_OrganizationClinicFolderID, lng_DocRepositoryFolderID: lng_DocRepositoryFolderID, flag: flag },
        // beforeSend: function () { $("#search_div").show() },
        success: function (data) {
            if (data.result == false) {
                toastr.error(data.strMsg);
            }
            else {
                urlv = '/Base/GetDRFileDownload';
                var FullURL = urlv + "?lng_DocRepositoryID=" + lng_DocRepositoryID + "&lng_OrganizationClinicFolderID=" + lng_OrganizationClinicFolderID + "&lng_DocRepositoryFolderID=" + lng_DocRepositoryFolderID + "&flag=" + flag;

                var a = document.createElement('a');
                a.href = FullURL;
                a.setAttribute('target', '_blank');
                a.click();


                //window.open(FullURL, '_blank');
                //window.location = urlv + "?filename=" + filename + "&flag=" + flag + "&ServiceName=" + ServiceName + "&FilePath=" + FilePath;
                // window.location = urlv + "?filename=" + filename + "&flag=" + flag + "&ServiceName=" + ServiceName + "&ActualFileName=" + ActualFileName;
            }
            // $("#search_div").hide();
        },
        error: function (ex) {
            //$("#search_div").hide();
            toastr.error(ex.responseText);
        }
    });
}

/*
----------------------------------------------------------------------------------
13-Jul-2019  *** Renuka ***Email Validation
----------------------------------------------------------------------------------
*/
function validate_mailaddress(email) {
    missing = 0;
    email = email.toLowerCase();
    if (email.trim() != '') {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {

        }
        else {
            toastr.warning("Enter valid email address");
            missing++;
            return;
        }
    }
    //else {
    //    toastr.warning("Enter Email Address");
    //    missing++;
    //    return;
    //}
    if (parseInt(missing) > 0) { return false; }
    else { return true; }
}

/*
----------------------------------------------------------------------------------
15-Jul-2019  *** Renuka *** URL Validation
----------------------------------------------------------------------------------
*/


function validate_isUrl(s) {
    missing = 0;
    //Regex for URL with http Page
    // var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    //Regex for urls  without http Page
    var regexp = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/
    if (regexp.test(s)) {

    }
    else {
        toastr.warning("Enter valid Domain URL");
        missing++;
        return;
    }

    if (parseInt(missing) > 0) { return false; }
    else { return true; }
    // return regexp.test(s);
}


/*
----------------------------------------------------------------------------------
16-Jul-2019  *** Renuka ***  
----------------------------------------------------------------------------------
*/

function checkAlreadyExist(txtname, pkID) {
    debugger;
    var urlv = '/Base/CheckAvailability';
    var _Name = "", _messageName = "";

    if (pkID > 0) {

        if (txtname == "OrganName") {
            _Name = $("#EtxtOrganName").val();
            _type = "Edit";

        }
        else if (txtname == "DomainName") {
            _Name = $("#EtxtDomainURL").val();
            _type = "Edit";
        } else if (txtname == "ACSURL") {
            _Name = $.trim($("#str_ACSURL").val());
            _type = "Edit";
        }
    }
    else {
        if (txtname == "OrganName") {
            _Name = $("#txtOrganName").val().trim();
            _type = "Create";

        }
        else if (txtname == "DomainName") {
            _Name = $("#txtDomainURL").val();
            _type = "Create";
        } else if (txtname == "ACSURL") {
            _Name = $("#str_ACSURL").val().trim();
            _type = "Create";
        }
    }

    var CheckAvailDataOrg = new FormData();

    CheckAvailDataOrg.append("acsUrlName", _Name);
    CheckAvailDataOrg.append("domainName", _Name);
    CheckAvailDataOrg.append("organizationName", _Name);
    CheckAvailDataOrg.append("Methodtype", _type);
    CheckAvailDataOrg.append("lng_OrganizationID", pkID);

    $.ajax({
        type: "POST",
        url: urlv,
        contentType: false,
        processData: false,
        data: CheckAvailDataOrg,
        success: function (data) {
            if (!data.result) {
                toastr.error(data.strMessage);
                return false;
            }
        }
    });
    //$.post(urlv,
    //    {
    //        fieldName: txtname, name: _Name, type: _type, lng_OrganizationID: pkID

    //    },
    //    function (data) {
    //        if (data == 0) {
    //            //toastr.success(_messageName + "Available!.you can take it.");
    //            //return 0;
    //        }
    //        else {
    //            toastr.error(_messageName + " already taken. Please try with different " + _messageName + ".");
    //        }
    //    });
}

/*
----------------------------------------------------------------------------------
17-Jul-2019  *** Renuka *** check Already Exist with Data
----------------------------------------------------------------------------------
*/
/*
----------------------------------------------------------------------------------
17-Jul-2019  *** Renuka *** check Already Exist with Data
----------------------------------------------------------------------------------
*/
/*
----------------------------------------------------------------------------------
21-Jul-2019  *** Sugany *** check Clinic Already Exist with Data
----------------------------------------------------------------------------------
*/


//function CheckAvailabilityClinic(txtname, pkID) {
//    //OrganName,   
//    var urlv = '/Base/CheckAvailabilityClinic';
//    var _Name = "", _messageName = "", _controller = "";

//    if (pkID > 0) {

//        if (txtname == "ClinicName") {
//            _Name = $("#txtClinic").val().trim();
//            _messageName = "Clinic Name";
//            _controller = "CheckAvailabilityOrg";
//            _type = "Edit";

//        }

//    }
//    else {
//        if (txtname == "ClinicName") {
//            _Name = $("#txtClinic").val().trim();
//            _messageName = "Clinic Name";
//            _controller = "CheckAvailabilityOrg";
//            _type = "Create";

//        }

//    }


//    $.post(urlv,
//        {
//            fieldName: txtname, name: _Name, type: _type, lng_OrganizationID: pkID

//        },
//        function (data) {

//            if (data == 0) {
//                //toastr.success(_messageName + "Available!.you can take it.");
//                //return 0;
//            }
//            else {

//                toastr.error(_messageName + " already taken. Please try with different " + _messageName + ".");
//                $("#txtClinic").focus();
//            }
//        });
//}



/*
----------------------------------------------------------------------------------
21-Jul-2019  *** Sugany *** check Clinic Already Exist with Data
----------------------------------------------------------------------------------
*/


function CheckAvailabilityOrgAdmin(txtname, pkID, aID) {
    //OrganName,

    var urlv = '/Base/CheckAvailabilityOrgAdmin';
    var _Name = "", _messageName = "", _controller = "";

    if (pkID > 0) {

        if (txtname == "OrgEmailName") {
            _Name = $("#str_OrgEmailAddress").val().trim();
            _messageName = "Email Address";
            _controller = "CheckAvailabilityOrgAdmin";
            _type = "Edit";

        }

    }
    else {
        if (txtname == "OrgEmailName") {
            _Name = $("#str_OrgEmailAddress").val().trim();
            _messageName = "Email Address";
            _controller = "CheckAvailabilityOrgAdmin";
            _type = "Create";

        }

    }


    $.post(urlv,
        {
            fieldName: txtname, name: _Name, type: _type, lng_OrganizationID: pkID, lng_OrgAdminUserID: aID

        },
        function (data) {

            if (data == 0) {
                //toastr.success(_messageName + "Available!.you can take it.");
                //return 0;
            }
            else {

                toastr.error(_messageName + " already taken. Please try with different " + _messageName + ".");
                $("#str_OrgEmailAddress").focus();
            }
        });
}
///////////////////////// Remve the Form Validation for Popup and Side bar
function ClearValidation(Id) {
    $.map($('#' + Id + ' :input'), function (el, idx) {
        var id = el.id;
        if (el.type == "select-one" || el.type == "text" || el.type == "textarea" || el.type == "file") {
            $("#" + id).removeClass("error");
            $("#" + id + "-error").remove();
        }
    });
}

/*
----------------------------------------------------------------------------------
31-Jul-2019  *** Renuka *** allow number only
----------------------------------------------------------------------------------
*/
//$(".allownumber").keypress(function (e)
//{
//     
//    //if the letter is not digit then display error and don't type anything
//    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57))
//    {
//        //display error message
//        toastr.error("Digits Only");
//      //  $("#errmsg").html("Digits Only").show().fadeOut("slow");
//        return false;
//    }
//});