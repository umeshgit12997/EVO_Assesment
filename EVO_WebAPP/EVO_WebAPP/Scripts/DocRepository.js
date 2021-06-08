/*
----------------------------------------------------------------------------------
16-Jul-2019  *** Rajendran ***Documnet Repository  File Upload 
----------------------------------------------------------------------------------
*/
function PostDocumentforDelete() {
    var DocRepositoryDocumentId = sessionStorage.getItem("DeleteDocRepositoryDocumentId");
    $.ajax({
        type: "POST",
        url: "/DocumentRepository/DocumentUpload/DeleteDocument",
        data: { lng_DocID: DocRepositoryDocumentId },
        success: function (data) {
            if (data.result) {
                toastr.success(data.strMsg);
                $("#deleteModal").modal('hide');
                GetDocumentList($("#lng_DocRepositoryFolderID").val(), $("#strFolderType").val());
                closeNav();
            }
            else {
                toastr.warning(data.strMsg);

            }
        },
        error: function (jq, status, message) {
            //alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
        }
    });

}
function GetDocumentforDelete(DocRepositoryDocumentId) {
    sessionStorage.setItem("DeleteDocRepositoryDocumentId", DocRepositoryDocumentId);
    $("#h5delete").text($.trim($("#" + DocRepositoryDocumentId).text()));
    $("#deleteModal").modal('show');

}
function GetDocumentDetails(DocRepositoryDocumentId) {
    //
    $.ajax({
        type: "Get",
        url: "/DocumentRepository/DocumentUpload/DocumentDetailsById",
        data: { lng_DocID: DocRepositoryDocumentId },
        success: function (data) {
            $("#DetailsDocumentName").text(data.obj.str_DocName);
            $("#DetailsDocumentDesc").text(data.obj.str_DocDescription);
            $("#DetailsFolder").text(data.obj.str_FolderName);
            $("#DetailsClinic").text(data.obj.str_ClinicName);
            $("#DetailsUploadedBy").text(data.obj.str_UploadedName);
            $("#DetailsUploadedDate").text(data.DetailsUploadedDate);
            $("#DetailsFileSize").text(data.DetailsFileSize);

            var javastring = "javascript:DocRepDownloadanyFile" + "(" + "'0','" + DocRepositoryDocumentId + "','0','ClinicDocument'" + ")";

            //var FullURL = "/Base/DRFileDownload" + "?lng_DocRepositoryID=" + 0 + "&lng_OrganizationClinicFolderID=" + DocRepositoryDocumentId + "&lng_DocRepositoryFolderID=" + 0 + "&flag=" + "ClinicDocument";

            var DocumentDownload = "<span class='file-name text-ellipsis'><a href='#'>" + data.obj.str_DocName + "</a></span><span class='file-author'>" + data.obj.str_UploadedName + "</span> on " +
                "<span class='file-date'>" + data.DetailsUploadedDate + "</span><div class='file-size'>Size : " + data.DetailsFileSize + "</div>" +
                "<a onclick={href}> <span class='text-primary'>" + data.obj.str_Name + "</span></a>";
            //href='{href}' target = '_blank'
            DocumentDownload = DocumentDownload.replace("{href}", javastring);

            $("#detailsDocument").html(DocumentDownload);

            sessionStorage.setItem("DocRepositoryDocumentId", data.obj.lng_DocRepositoryFolderID);
            sessionStorage.setItem("Doclng_DocRepositoryFolderID", data.obj.lng_OrganizationClinicFolderID);
        },
        error: function (jq, status, message) {
            //alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
        },
        complete: function (data) {
            openDetailsNav();
        }
    });    
}
function GetDocumentEdit(DocRepositoryDocumentId) {

    $(".dropify-wrapper").removeClass('has-error');
    $(".dropify-errors-container").removeClass('visible');

    $.ajax({
        type: "Get",
        url: "/DocumentRepository/DocumentUpload/DocumentDetailsById",
        data: { lng_DocID: DocRepositoryDocumentId },
        success: function (data) {
            //$("#strPath").val(data.str_Path);

            $("#strEditDocumentName").val(data.obj.str_DocName);
            $("#strEditDocumentDescription").val(data.obj.str_DocDescription);
            console.log(data.obj.lng_ClinicID)
            if (data.obj.lng_ClinicID == 0) { $("#EditQSRFolderClinicId").prop("selectedIndex", 0) }
            else {
                $("#EditQSRFolderClinicId").val(data.obj.lng_ClinicID);
            }
            //$("#EditQSRFolderClinicId").val(data.obj.lng_ClinicID);
            $("#lng_DocSize").val(data.obj.lng_DocSize);
            $("#str_Name").val(data.obj.str_Name);
            $("#str_ActualName").val(data.obj.str_ActualName);
            $(".selectSearch").select2();
            var _EditFolder = data.obj.str_FolderName == "Audits" ? 1 :
                data.obj.str_FolderName == "Continuing Medical Education" ? 2 :
                    data.obj.str_FolderName == "Commissioning and Acceptance" ? 3 :
                        data.obj.str_FolderName == "Documentation Templates" ? 4 :
                            data.obj.str_FolderName == "Equipment Calibration" ? 5 :
                                data.obj.str_FolderName == "Equipment Quality Assurance" ? 6 :
                                    data.obj.str_FolderName == "External Dosimetry Checks" ? 7 :
                                        data.obj.str_FolderName == "Focus and Internal Outcome Studies" ? 8 :
                                            data.obj.str_FolderName == "License (Equipment)" ? 9 :
                                                data.obj.str_FolderName == "License (Staff)" ? 10 :
                                                    data.obj.str_FolderName == "Policies and Procedures" ? 11 :
                                                        data.obj.str_FolderName == "Radiation Safety" ? 12 :

                                                            data.obj.str_FolderName == "Shielding" ? 13 :
                                                                data.obj.str_FolderName == "Software and Hardware Upgrades" ? 14 :
                                                                    data.obj.str_FolderName == "Special Treatments" ? 15 :
                                                                        data.obj.str_FolderName == "QA Meetings" ? 16 :
                                                                            data.obj.str_FolderName == "Other" ? 17 : 0;
            $("#EditQSRFolderName").val(_EditFolder);

            //var FullURL = "/Base/GetDRFileDownload" + "?lng_DocRepositoryID=" + 0 + "&lng_OrganizationClinicFolderID=" + DocRepositoryDocumentId + "&lng_DocRepositoryFolderID=" + 0 + "&flag=" + "ClinicDocument";

            //var JavaString = "javascript:DocRepDownloadanyFile" + "(" + "'0','" + DocRepositoryDocumentId + "','0','clinicdocument'" + ")";
            //var DocumentDownload = "<a href='{href}' target='_blank' class='list-group-item b-l-primary'> <span class='float-right text-primary'> <i class='fas fa-download text-info'></i> </span>" + data.obj.str_Name + "</a>";
            //DocumentDownload = DocumentDownload.replace("{href}", FullURL);            

            var javastring = "javascript:DocRepDownloadanyFile" + "(" + "'0','" + DocRepositoryDocumentId + "','0','ClinicDocument'" + ")";

            //var FullURL = "/Base/DRFileDownload" + "?lng_DocRepositoryID=" + 0 + "&lng_OrganizationClinicFolderID=" + DocRepositoryDocumentId + "&lng_DocRepositoryFolderID=" + 0 + "&flag=" + "ClinicDocument";

            var DocumentDownload = "<span class='file-name text-ellipsis'><a href='#'>" + data.obj.str_DocName + "</a></span><span class='file-author'>" + data.obj.str_UploadedName + "</span> on " +
                "<span class='file-date'>" + data.DetailsUploadedDate + "</span><div class='file-size'>Size : " + data.DetailsFileSize + "</div>" +
                "<a onclick={href}> <span class='text-primary'>" + data.obj.str_Name + "</span></a>";
            //href='{href}' target = '_blank'
            DocumentDownload = DocumentDownload.replace("{href}", javastring);

            $("#EditdetailsDocument").html(DocumentDownload);
            $(".dropify-clear").click();

            //if (data.obj.strFolderType == "NW") {
            //    sessionStorage.setItem("DocRepositoryDocumentId", data.obj.lng_DocRepositoryFolderID);

            //}
            //else {
            //    sessionStorage.setItem("DocRepositoryDocumentId", DocRepositoryDocumentId);
            //}
            sessionStorage.setItem("DocRepositoryDocumentId", data.obj.lng_DocRepositoryFolderID);
            sessionStorage.setItem("Doclng_DocRepositoryFolderID", data.obj.lng_OrganizationClinicFolderID);
            ///sessionStorage.setItem("DocRepositoryDocumentId", DocRepositoryDocumentId);
            var configParamsObj = {
                //placeholder: 'Select', // Place holder text to place in the select
                minimumResultsForSearch: 3 // Overrides default of 15 set above
            };
            $(".selectSearch").select2(configParamsObj);
        },
        error: function (jq, status, message) {
            //alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
        }
    });
    ClearValidation("UploadDocDivId");
    ClearValidation("UpdateUploadDocDivId");
    openEditNav();
}



function DRFileUpload(blnIsPublic, worgflag) {
    $('#UploadRepDocumentFiles').rules('add', {
        required: true   // set a new rule
    });
 
    $(".dropify-wrapper").removeClass('has-error');
    $(".dropify-errors-container").removeClass('visible');
    
    var strURL = "";
    var DocumentUpload = new FormData();
    if (worgflag == 'Insert') {
        if (!($("#UploadDocDivId").valid())) {
            return false;
        }
        var other_formdata = $('#UploadDocDivId').serializeArray();
        DocumentUpload = new FormData();
        var _strDocumentDescription = $('#strDocumentDescription').val();
        var _strDocumentName = $("#strDocumentName").val();
        //if (_strDocumentName == null || $.trim(_strDocumentName) == "") {
        //    $('#strDocumentName').val($.trim(_strDocumentName));
        //    $('#strDocumentName').focus();
        //    toastr.warning("Enter Document Name");
        //    return false;
        //}
        //if (_strDocumentDescription == null || $.trim(_strDocumentDescription) == "") {
        //    $('#strDocumentDescription').val($.trim(_strDocumentDescription));
        //    $('#strDocumentDescription').focus();
        //    toastr.warning("Enter Document Description");
        //    return false;
        //}
        var files = $("#UploadRepDocumentFiles").get(0).files;
        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                DocumentUpload.append("UploadRepDocumentFiles", files[i]);
            }
        }
        //else {
        //    toastr.warning("Please choose file");
        //    return false;

        //}
        if (blnIsPublic == 0) {
            DocumentUpload.append("blnIsPublic", false);
        }
        else {
            DocumentUpload.append("blnIsPublic", true);
        }

        $.each(other_formdata, function (key, input) {
            DocumentUpload.append(input.name, input.value);
        });
        DocumentUpload.append("strWorkflag", "I");

        //strURL = "/api/JDocument/UploadDocument";
        strURL = "/DocumentRepository/DocumentUpload/UploadDocument";
    }
    else if (worgflag == 'Update') {
        if (!($("#UpdateUploadDocDivId").valid())) {
            return false;
        }

        var other_formdata = $('#UpdateUploadDocDivId').serializeArray();
        DocumentUpload = new FormData();
        var _strDocumentDescription = $('#strEditDocumentDescription').val();
        var _strDocumentName = $("#strEditDocumentName").val();
        if (_strDocumentName == null || $.trim(_strDocumentName) == "") {

            toastr.warning("Enter Document Name");
            return false;
        }
        if (_strDocumentDescription == null || $.trim(_strDocumentDescription) == "") {

            toastr.warning("Enter Document Description");
            return false;
        }
        var files = $("#EditUploadRepDocumentFiles").get(0).files;
        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                DocumentUpload.append("UploadRepDocumentFiles", files[i]);
            }
        }
        //else {
        //    toastr.warning("Please choose file");
        //    return false;

        //}
        if (blnIsPublic == 0) {
            DocumentUpload.append("blnIsPublic", false);
        }
        else {
            DocumentUpload.append("blnIsPublic", true);
        }

        $.each(other_formdata, function (key, input) {

            if (input.name == "strEditDocumentDescription") {
                DocumentUpload.append("strDocumentDescription", input.value);
            } if (input.name == "strEditDocumentName") {
                DocumentUpload.append("strDocumentName", input.value);
            }
            if (input.name == "EditQSRFolderClinicId") {
                DocumentUpload.append("QSRFolderClinicId", input.value);
            }
            if (input.name == "EditQSRFolderName") {
                DocumentUpload.append("QSRFolderName", input.value);
            }

        });
        DocumentUpload.append("strName", $("#str_Name").val());
        DocumentUpload.append("strActualName", $("#str_ActualName").val());

        //DocumentUpload.append("strPath", $("#strPath").val()); 
        DocumentUpload.append("strPath", "");
        DocumentUpload.append("strFolderType", $("#strFolderType").val());
        DocumentUpload.append("strWorkflag", "U");
        DocumentUpload.append("lng_DocRepositoryFolderID", sessionStorage.getItem("DocRepositoryDocumentId"));
        DocumentUpload.append("lng_OrganizationClinicFolderID", sessionStorage.getItem("Doclng_DocRepositoryFolderID"));
        DocumentUpload.append("lng_DocSize", $("#lng_DocSize").val());
        DocumentUpload.append("SaveNetPath", $("#SaveNetPath").val());


        strURL = "/DocumentRepository/DocumentUpload/UploadDocument";

    }
    $.ajax({
        type: "POST",
        url: strURL,
        //contentType: "application/json",
        contentType: false,
        processData: false,
        data: DocumentUpload, beforeSend: function () { $("#btnSave").hide(); $("#btnProcess").show(); },
        success: function (result) {
            if (result.result) {
                toastr.success(result.strMsg);
                $('#UploadRepDocumentFiles').val('');
                $('#strDocumentDescription').val('');
                $('#strDocumentName').val('');
                $(".dropify-clear").click();
                closeNav();
                GetDocumentList($("#lng_DocRepositoryFolderID").val(), $("#strFolderType").val());
            }
            else {
                toastr.warning(result.strMsg);
            }
            $("#btnSave").show(); $("#btnProcess").hide();
        },
        error: function (jq, status, message) {
            $("#btnSave").show(); $("#btnProcess").hide();
            //alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
        }
    })
}
function GetDocumentList(folderId, folderType) {
    $.ajax({
        type: "Get",
        url: "/DocumentRepository/DocumentUpload/RepDocumentList",
        data: { lng_DocRepositoryFolderID: folderId, FolderType: folderType },
        success: function (data) {
            $("#DocumentListdiv").html(data);
        },
        error: function (jq, status, message) {
            //alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
        }
    });
}
/// 17 July 2019 SUKUMAR  : Get the Folder List based organization
function GetViewFolderList(OrgId) {
    $.ajax({
        type: "GET",
        url: '/DocumentRepository/DocumentFolder/RepFolderList/',
        data: { lng_OrganizationID: OrgId },
        success: function (data) {
            $("#FolderListDivid").html(data);
        }
    });
}

// 12 Aug 2019 SRAJ
function GetDocumentListbyFolder(foldername, folderId) {
    $.ajax({
        type: "Get",
        url: "/DocumentRepository/DocumentUpload/RepDocumentList",
        data: { lng_DocRepositoryFolderID: folderId },
        success: function (data) {
            $("#DocumentListdiv").html(data);
        },
        error: function (jq, status, message) {
            //alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
        }
    });
}
function DRFileUploadCancel() {

}
function CretaeDocumentFolder() {
    //
    $.ajax({
        type: "Get",
        url: "/DocumentRepository/DocumentFolder/CreateFolder",
        data: {},
        success: function (data) {

        },
        error: function (jq, status, message) {
            //alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
        }
    });

}