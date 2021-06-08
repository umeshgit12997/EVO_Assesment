var storeJSON = fnCheckAndLoadJSONLocalStorage("storeJSON", {
    "data": [
        { statusid: 1, nodename: "Consultation" }
        , { statusid: 2, nodename: "Simulation" }
        , { statusid: 3, nodename: "Tx Planning" }
        , { statusid: 10, nodename: "MD Review" }
        , { statusid: 4, nodename: "Plan QA" }
        , { statusid: 5, nodename: "Tx Prep" }
        , { statusid: 6, nodename: "On Tx" }
        , { statusid: 7, nodename: "End" }
        , { statusid: 8, nodename: "Followup" }
        , { statusid: 9, nodename: "Archive" }
    ]
});

var storePatientsCountByStatus = fnCheckAndLoadJSONLocalStorage("storePatientsCountByStatus",[
                { name: 'Consult', y: 12, sliced: true, selected: true },
                { name: 'Simulation', y: 3 },
                { name: 'Prescription', y: 8 },
                { name: 'Treatment Planning', y: 3 },
                { name: 'Treatment', y: 18 }
]);
var storePatientList = fnCheckAndLoadJSONLocalStorage("storePatientList",[
    { PID: 1, MRN: '0522c0072', FirstName: 'Kelsey', MiddleName: '', LastName: 'Leyton', StatusID: 3, Status: 'Tx Planning', StartDate: '06/14/2018', ConsultDate: '06/01/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '12/14/1939', Gender: 'Male', Address: 'N7855 Swan Rd', City: 'Mesquite', State: 'TX', Zip: '75149', Diagnosis: 'Head/Neck', Photo: '/Content/img/PatientPicture/Male5.jpg', HomePhone: '158.669.4487', WorkPhone: '', CellPhone: '709.587.1478', Email: 'jsmith@email.com', Resident: '', DaysPending: 15, proknowID: "5ba01ae10f00172ddf15b3f7ee123567", TxSite: 'Head/Neck' },
    { PID: 2, MRN: 'PM105', FirstName: 'Linda', MiddleName: '', LastName: 'Barter', StatusID: 3, Status: 'Tx Planning', StartDate: '06/12/2018', ConsultDate: '05/14/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1975', Gender: 'Female', Address: '4877 South St', City: 'Mesquite', State: 'TX', Zip: '75149', Diagnosis: 'Lt Breast', Photo: '/Content/img/PatientPicture/Female1.jpg', HomePhone: '459.847.8874', WorkPhone: '', CellPhone: '', Email: 'lbarter@email.com', Resident: '', DaysPending: 4, proknowID: "", TxSite: 'Lt Breast' },
    { PID: 3, MRN: 'PM107', FirstName: 'Cyndy', MiddleName: '', LastName: 'Crop', StatusID: 3, Status: 'Tx Planning', StartDate: '06/10/2018', ConsultDate: '05/21/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1965', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Left Hand', Photo: '/Content/img/PatientPicture/Female2.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 5, proknowID: "", TxSite: '' },
    { PID: 4, MRN: 'PM102', FirstName: 'Sonali', MiddleName: '', LastName: 'Shiekh', StatusID: 2, Status: 'Simulation', StartDate: '05/30/2018', ConsultDate: '04/16/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1971', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Right Leg', Photo: '/Content/img/PatientPicture/Female3.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 6, proknowID: "", TxSite: '' },
    { PID: 5, MRN: 'PM305', FirstName: 'Johnny', MiddleName: '', LastName: 'Doerr', StatusID: 1, Status: 'Consultation', StartDate: '05/16/2018', ConsultDate: '04/16/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Sarah Jones', Physician: 'Dr. Rob', DOB: '5/14/1972', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Right Hand', Photo: '/Content/img/PatientPicture/Male1.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 7, proknowID: "", TxSite: '' },
    { PID: 6, MRN: 'PM505', FirstName: 'Steve', MiddleName: '', LastName: 'Johnson', StatusID: 4, Status: 'Plan QA', StartDate: '06/02/2018', ConsultDate: '06/02/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1973', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Right Knee', Photo: '/Content/img/PatientPicture/Male2.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 4, proknowID: "", TxSite: '' },
    { PID: 7, MRN: 'PM109', FirstName: 'Maria', MiddleName: '', LastName: 'Shephered', StatusID: 1, Status: 'Consultation', StartDate: '06/01/2018', ConsultDate: '05/31/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1974', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Right Knee', Photo: '/Content/img/PatientPicture/Female4.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 1, proknowID: "", TxSite: '' },
    { PID: 8, MRN: 'PM111', FirstName: 'Martina', MiddleName: '', LastName: 'Taylor', StatusID: 6, Status: 'On Tx', StartDate: '05/30/2018', ConsultDate: '05/25/2018', LastTreatmentDate: '03/12/2018', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1976', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Left Knee', Photo: '/Content/img/PatientPicture/Female5.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 6, proknowID: "", TxSite: '' },
    { PID: 9, MRN: 'PM215', FirstName: 'Ross', MiddleName: '', LastName: 'Smith', StatusID: 2, Status: 'Simulation', StartDate: '06/14/2018', ConsultDate: '04/18/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1977', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Nose', Photo: '/Content/img/PatientPicture/Male2.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 12, proknowID: "", TxSite: '' },
    { PID: 10, MRN: 'PM211', FirstName: 'Brandon', MiddleName: '', LastName: 'Powell', StatusID: 1, Status: 'Consultation', StartDate: '06/10/2018', ConsultDate: '06/10/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1978', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Neck', Photo: '/Content/img/PatientPicture/Male3.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 14, proknowID: "", TxSite: '' },
    { PID: 11, MRN: 'PM121', FirstName: 'Ricky', MiddleName: '', LastName: 'Waugh', StatusID: 1, Status: 'Consultation', StartDate: '06/06/2018', ConsultDate: '06/06/2018', LastTreatmentDate: '', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Sarah Jones', Physician: 'Dr. Rob', DOB: '5/14/1971', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Left Hand', Photo: '/Content/img/PatientPicture/Male4.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 4, proknowID: "", TxSite: '' },
    { PID: 12, MRN: 'PM125', FirstName: 'Chris', MiddleName: '', LastName: 'Lewis', StatusID: 6, Status: 'On Tx', StartDate: '06/06/2018', ConsultDate: '06/06/2018', LastTreatmentDate: '03/12/2018', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1979', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Left Knee', Photo: '/Content/img/PatientPicture/Male5.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 10, proknowID: "", TxSite: '' },
    { PID: 13, MRN: 'PM106', FirstName: 'Sunil', MiddleName: '', LastName: 'Chowdhry', StatusID: 6, Status: 'On Tx', StartDate: '06/09/2018', ConsultDate: '06/10/2018', LastTreatmentDate: '03/12/2018', FacilityID: 1001, FacilityName: 'TXO - Mesquite', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1978', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Right Knee', Photo: '/Content/img/PatientPicture/Male1.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 9, proknowID: "", TxSite: '' },
    { PID: 14, MRN: 'PM101', FirstName: 'John', MiddleName: '', LastName: 'Smith', StatusID: 1, Status: 'Consultation', StartDate: '03/12/2018', ConsultDate: '03/12/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1985', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Left Leg', Photo: '/Content/img/PatientPicture/Male2.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 8, proknowID: "", TxSite: '' },
    { PID: 15, MRN: 'PM105', FirstName: 'Linda', MiddleName: '', LastName: 'Barter', StatusID: 3, Status: 'Tx Planning', StartDate: '03/14/2018', ConsultDate: '03/14/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1981', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Left Leg', Photo: '/Content/img/PatientPicture/Female1.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 4, proknowID: "", TxSite: '' },
    { PID: 16, MRN: 'PM107', FirstName: 'Cyndy', MiddleName: '', LastName: 'Crop', StatusID: 3, Status: 'Tx Planning', StartDate: '03/15/2018', ConsultDate: '03/15/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1982', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Right Leg', Photo: '/Content/img/PatientPicture/Female2.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 7, proknowID: "", TxSite: '' },
    { PID: 17, MRN: 'PM102', FirstName: 'Sonali', MiddleName: '', LastName: 'Shiekh', StatusID: 2, Status: 'Simulation', StartDate: '03/16/2018', ConsultDate: '03/16/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Sarah Jones', Physician: 'Dr. Rob', DOB: '5/14/1983', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Right Leg', Photo: '/Content/img/PatientPicture/Female3.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 6, proknowID: "", TxSite: '' },
    { PID: 18, MRN: 'PM305', FirstName: 'Johnny', MiddleName: '', LastName: 'Doerr', StatusID: 1, Status: 'Consultation', StartDate: '03/16/2018', ConsultDate: '03/16/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1979', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Forehead', Photo: '/Content/img/PatientPicture/Male3.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 2, proknowID: "", TxSite: '' },
    { PID: 19, MRN: 'PM505', FirstName: 'Steve', MiddleName: '', LastName: 'Johnson', StatusID: 4, Status: 'Plan QA', StartDate: '03/18/2018', ConsultDate: '03/18/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1980', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Forehead', Photo: '/Content/img/PatientPicture/Female4.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 16, proknowID: "", TxSite: '' },
    { PID: 20, MRN: 'PM109', FirstName: 'Maria', MiddleName: '', LastName: 'Shephered', StatusID: 1, Status: 'Consultation', StartDate: '03/23/2018', ConsultDate: '03/23/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1972', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Chest', Photo: '/Content/img/PatientPicture/Female5.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 3, proknowID: "", TxSite: '' },
    { PID: 21, MRN: 'PM111', FirstName: 'Martina', MiddleName: '', LastName: 'Taylor', StatusID: 6, Status: 'On Tx', StartDate: '03/25/2018', ConsultDate: '03/25/2018', LastTreatmentDate: '03/12/2018', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Dawn Henrich', Physician: 'Dr. Joe', DOB: '5/14/1977', Gender: 'Female', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Throat', Photo: '/Content/img/PatientPicture/Female1.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 4, proknowID: "", TxSite: '' },
    { PID: 22, MRN: 'PM215', FirstName: 'Ross', MiddleName: '', LastName: 'Smith', StatusID: 2, Status: 'Simulation', StartDate: '03/30/2018', ConsultDate: '03/31/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1961', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Throat', Photo: '/Content/img/PatientPicture/Male4.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 6, proknowID: "", TxSite: '' },
    { PID: 23, MRN: 'PM211', FirstName: 'Brandon', MiddleName: '', LastName: 'Powell', StatusID: 1, Status: 'Consultation', StartDate: '04/01/2018', ConsultDate: '04/01/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1962', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Forehead', Photo: '/Content/img/PatientPicture/Male5.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 5, proknowID: "", TxSite: '' },
    { PID: 24, MRN: 'PM121', FirstName: 'Ricky', MiddleName: '', LastName: 'Waugh', StatusID: 1, Status: 'Consultation', StartDate: '04/05/2018', ConsultDate: '04/06/2018', LastTreatmentDate: '', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Jerry Green', Physician: 'Dr. Rob', DOB: '5/14/1965', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Nose', Photo: '/Content/img/PatientPicture/Male1.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 11, proknowID: "", TxSite: '' },
    { PID: 25, MRN: 'PM125', FirstName: 'Chris', MiddleName: '', LastName: 'Lewis', StatusID: 6, Status: 'On Tx', StartDate: '04/06/2018', ConsultDate: '04/06/2018', LastTreatmentDate: '03/12/2018', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Sarah Jones', Physician: 'Dr. Joe', DOB: '5/14/1992', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Lower Leg', Photo: '/Content/img/PatientPicture/Male2.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 13, proknowID: "", TxSite: '' },
    { PID: 26, MRN: 'PM106', FirstName: 'Sunil', MiddleName: '', LastName: 'Chowdhry', StatusID: 6, Status: 'On Tx', StartDate: '04/09/2018', ConsultDate: '04/10/2018', LastTreatmentDate: '03/12/2018', FacilityID: 1004, FacilityName: 'TXO - Willowbrook', Owner: 'Sarah Jones', Physician: 'Dr. Joe', DOB: '5/14/1985', Gender: 'Male', Address: '', City: '', State: '', Zip: '', Diagnosis: 'Lower Leg', Photo: '/Content/img/PatientPicture/Male3.jpg', HomePhone: '', WorkPhone: '', CellPhone: '', Email: '', Resident: '', DaysPending: 15, proknowID: "", TxSite: '' }
]);

var storePatientVolumeByTxIntent = fnCheckAndLoadJSONLocalStorage("storePatientVolumeByTxIntent",[{ name: 'Curative', y: 85, drilldown:"Curative" }, { name: 'Palliative', y: 25, drilldown:"Palliative" }, { name: 'Control', y: 11, drilldown:"Control" }]);
var storePatientVolumeByTxIntentDrillDown = fnCheckAndLoadJSONLocalStorage("storePatientVolumeByTxIntentDrillDown",[{
        name: 'Curative', id: "Curative", data: [{ name: "Breast", y: 39 }, { name: "Head & Neck", y: 21 },{ name: "Lung", y: 9 }, {name:"Prostate",y:16}]
    },
    {
        name: 'Palliative', id: "Palliative", data: [{ name: "Brain", y: 16 }, { name: "Bone", y: 9 }]
    },
    {
        name: 'Control', id: "Control", data: [{ name: "Lung", y: 9 }, { name: "Bladder", y: 2 }]
    }]);
var storePatientVolumeByTxIntentByFacility = fnCheckAndLoadJSONLocalStorage("storePatientVolumeByTxIntentByFacility", [{ name: 'Curative', y: 58, drilldown: "Curative" }, { name: 'Palliative', y: 13, drilldown: "Palliative" }, { name: 'Control', y: 29, drilldown: "Control" }]);
var storePatientVolumeByTxIntentDrillDownByFacility = fnCheckAndLoadJSONLocalStorage("storePatientVolumeByTxIntentDrillDownFacility", [{
    name: 'Curative', id: "Curative", data: [{ name: "Breast", y: 30 }, { name: "Head & Neck", y: 10 }, { name: "Lung", y: 20 }, { name: "Prostate", y: 40 }]
},
{
    name: 'Palliative', id: "Palliative", data: [{ name: "Brain", y: 40 }, { name: "Bone", y: 60 }]
},
{
    name: 'Control', id: "Control", data: [{ name: "Lung", y: 90 }, { name: "Bladder", y: 10 }]
}]);
var storePatientVolumeByTxSite = fnCheckAndLoadJSONLocalStorage("storePatientVolumeByTxSite",[{ name: 'Bladder', y: 2 }, { name: 'Brain', y: 7 }, { name: 'Breast', y: 35 }
    , { name: 'Cervical', y: 3 }, { name: 'Esophageal', y: 1 }, { name: 'Head & Neck', y: 10 }, { name: 'Lung', y: 15 }
    , { name: 'Pancreas', y: 1 }, { name: 'Prostate', y: 23 }, { name: 'Skin', y: 3 }
]);
var storePatientVolumeByTxTechnique = fnCheckAndLoadJSONLocalStorage("storePatientVolumeByTxTechnique",[{ name: '3D-CRT', y: 40 }, { name: 'Electron (EBT)', y: 5 }, { name: 'HDR Brachytherapy', y: 2 }
    , { name: 'IMRT/IGRT', y: 37 }, { name: 'LDR Brachytherapy', y: 1 }, { name: 'IORT', y: 1 }, { name: 'SBRT/SABR', y: 8 }
    , { name: 'SRS', y: 5 }, { name: 'Superficial (SRT)', y: 1 }
]);
var storePlanningTasksList = fnCheckAndLoadJSONLocalStorage("storePlanningTasksList",[
    { PID: 1, MRN: '0522c0070', Name: 'Kelsey Leyton', FacilityName: 'TXO - Mesquite', DateAssigned: '08/01/2018', Task: 'Tx Plan', DaysPending: 15, FacilityID: '1001' },
    { PID: 2, MRN: 'PM105', Name: 'Linda Barter', FacilityName: 'TXO - Willowbrook', DateAssigned: '08/14/2018', Task: 'Physics QA', DaysPending: 6, FacilityID: '1002' },
    { PID: 3, MRN: 'PM107', Name: 'Cyndy Crop', FacilityName: 'TXO - Mesquite', DateAssigned: '08/31/2018', Task: 'Physics QA', DaysPending: 5, FacilityID:'1001' }
    
]);
var storePatientMessagesList = fnCheckAndLoadJSONLocalStorage("storePatientMessagesList",[
    { PID: 10, MRN: 'PM211', Name: 'Brandon Powell', FacilityName: 'TXO - Mesquite', DateAdd: '08/01/2018', Message: 'Calculation redone due to prescription change.  Please verify.', From: 'Karen Slower', FacilityID: '1001' }
]);
var storeRemindersList = fnCheckAndLoadJSONLocalStorage("storeRemindersList",[
    { RID: 1, MRN: '598775', Reminder: 'Leave machine on for physics tonight', FacilityName: 'TXO - Mesquite', DateAdd: '08/01/2018', AddedBy: 'Karen Slower', Due: '08/23/2018', FacilityID: '1001' },
    { RID: 2, MRN: '148996', Reminder: 'Dr. Joe is at satellite facility on Weds.  Have him review all pending patient plans prior.', FacilityName: 'TXO - Willowbrook', DateAdd: '08/05/2018', AddedBy: 'Susan Panten', Due: '08/29/2018', FacilityID: '1002' },
    { RID: 3, MRN: '147889', Reminder: 'Vendor training tentatively scheduled for 2nd week in September.', FacilityName: 'TXO - Willowbrook', DateAdd: '08/20/2018', AddedBy: 'Karen Slower', Due: '09/12/2018', FacilityID: '1002' }
]);
var storeMyFacilityList = fnCheckAndLoadJSONLocalStorage("storeMyFacilityList", [{ "FacilityID": 1001, "Name": "Texas Oncology Mesquite", "Logo": "/Content/img/TexasOncology.png", "Location": "4700 N. Galloway Mesquite, TX 75150", "PatientsOnTreat": "42", "PatientsPreTx": "25", "Region": "Dallas Region", "Address": "4700 N. Galloway", "City": "Mesquite", "State": "TX", "Zip": "75150", "lat": "32.7786622", "lon": "-96.6265984" },
    { "FacilityID": 1002, "Name": "TXO Willowbrook", "Logo": "/Content/img/TexasOncology.png", "Location": "13215 Dostson Rd Houston, TX 77070", "PatientsOnTreat": "20", "PatientsPreTx": "12", "Region": "Gulf Coast Region", "Address": "13215 Dotson Rd", "City": "Houston", "State": "TX", "Zip": "77070", "lat": "29.967863", "lon": "-95.5561447" },
    { "FacilityID": 1003, "Name": "TXO El Paso East", "Logo": "/Content/img/TexasOncology.png", "Location": "1400 George St. El Paso, TX 79936", "PatientsOnTreat": "28", "PatientsPreTx": "15", "Region": "West Texas Region", "Address": "7848 Gateway East Blvd.", "City": "El Paso", "State": "TX", "Zip": "79915", "lat": "31.8127225", "lon": "-106.2759027" },
    { "FacilityID": 1004, "Name": "Amsterdam Cancer Center", "Logo": "/Content/img/NYOH logo.png", "Location": "1700 Riverfront Center Amsterdam, NY 12010", "PatientsOnTreat": "32", "PatientsPreTx": "10", "Region": "Northeast Region", "Address": "1700 Riverfront Center", "City": "Amsterdam", "State": "NY", "Zip": "12010", "lat": "42.9371239", "lon": "-74.192891" },
    { "FacilityID": 1005, "Name": "Texas Oncology- Baylor Carrollton", "Logo": "", "Location": "4352 N. Josey Lane  Carrollton, TX 75010", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Dallas Region", "Address": "4352 N. Josey Lane ", "City": "Carrollton", "State": "TX", "Zip": "75010", "lat": "33.0282839", "lon": "-96.88360759999999" },
    { "FacilityID": 1006, "Name": "Texas Oncology- Garland", "Logo": "", "Location": "530 Clara Barton Blvd, Ste. 250 Garland, TX 75042", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Dallas Region", "Address": "530 Clara Barton Blvd, Ste. 250", "City": "Garland", "State": "TX", "Zip": "75042", "lat": "32.9172763", "lon": "-96.66097219999999" },
    { "FacilityID": 1007, "Name": "Texas Oncology - Medical City Dallas Radiation Oncology ", "Logo": "", "Location": "7777 Forest Ln. Dallas, TX 75230", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Dallas Region", "Address": "7777 Forest Ln.", "City": "Dallas", "State": "TX", "Zip": "75230", "lat": "32.9129011", "lon": "-96.77340749999999" },
    { "FacilityID": 1009, "Name": "Texas Oncology - Presbyterian Cancer Center Dallas", "Logo": "", "Location": "8200 Walnut Hill Lane Dallas, TX 75231", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Dallas Region", "Address": "8200 Walnut Hill Lane", "City": "Dallas", "State": "TX", "Zip": "75231", "lat": "32.8794383", "lon": "-96.76320079999999" },
    { "FacilityID": 1010, "Name": "Texas Oncology - Midland Allison Cancer Center ", "Logo": "", "Location": "400 N Garfield Midland, TX 79701", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "West Texas Region", "Address": "400 N Garfield", "City": "Midland", "State": "TX", "Zip": "79701", "lat": "31.9971425", "lon": "-102.0989927" },
    { "FacilityID": 1011, "Name": "Texas Oncology - Odessa West Texas Cancer Center ", "Logo": "", "Location": "301 N Washington Odessa, TX 79761", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "West Texas Region", "Address": "301 N Washington", "City": "Odessa", "State": "TX", "Zip": "79761", "lat": "31.8454067", "lon": "-102.3735887" },
    { "FacilityID": 1012, "Name": "Texas Oncology - Abilene South (West TX POD)", "Logo": "", "Location": "1957 Antilley Rd. Abilene, TX 79606", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "West Texas Region", "Address": "1957 Antilley Rd.", "City": "Abilene", "State": "TX", "Zip": "79606", "lat": "32.3719016", "lon": "-99.7472202" },
    { "FacilityID": 1013, "Name": "Texas Oncology - Amarillo", "Logo": "", "Location": "1000 S. Coulter Amarillo, TX 79106", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "West Texas Region", "Address": "1000 S. Coulter", "City": "Amarillo", "State": "TX", "Zip": "79106", "lat": "35.20441160000001", "lon": "-101.9231135" },
    { "FacilityID": 1014, "Name": "Texas Oncology - Wichita Falls Texoma Cancer Center", "Logo": "", "Location": "5400 West Kell Blvd. Wichita Falls, TX 76310", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "West Texas Region", "Address": "5400 West Kell Blvd.", "City": "Wichita Falls", "State": "TX", "Zip": "76310", "lat": "33.8729645", "lon": "-98.5789267" },
    { "FacilityID": 1016, "Name": "Texas Oncology - El Paso West", "Logo": "", "Location": "1901 Grandview Ave. El Paso, TX 79902", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "West Texas Region", "Address": "1901 Grandview Ave.", "City": "El Paso", "State": "TX", "Zip": "79902", "lat": "31.77939049999999", "lon": "-106.4762023" },
    { "FacilityID": 1017, "Name": "Texas Oncology - Beaumont Mamie McFadden Ward Cancer Center", "Logo": "", "Location": "690 N. 14th St. Beaumont, TX 77702", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Gulf Coast Region", "Address": "690 N. 14th St.", "City": "Beaumont", "State": "TX", "Zip": "77702", "lat": "30.0873681", "lon": "-94.1330036" },
    { "FacilityID": 1018, "Name": "Texas Oncology - Memorial Herman/Memorial City ", "Logo": "", "Location": "925 Gessner, Ste. 100 Houston, TX 77024", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Gulf Coast Region", "Address": "925 Gessner, Ste. 100", "City": "Houston", "State": "TX", "Zip": "77024", "lat": "29.7817282", "lon": "-95.5445844" },
    { "FacilityID": 1019, "Name": "Texas Oncology - Deke Slayton Cancer Center(Gulf ", "Logo": "", "Location": "501 Medical Center Blvd. Webster, TX 77598", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Gulf Coast Region", "Address": "501 Medical Center Blvd.", "City": "Webster", "State": "TX", "Zip": "77598", "lat": "29.5395551", "lon": "-95.12720519999999" },
    { "FacilityID": 1020, "Name": "Texas Oncology - Sugar Land", "Logo": "", "Location": "1350 First Colony Blvd. Sugar Land, TX 77479", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Gulf Coast Region", "Address": "1350 First Colony Blvd.", "City": "Sugar Land", "State": "TX", "Zip": "77479", "lat": "29.602663", "lon": "-95.63659799999999" },
    { "FacilityID": 1022, "Name": "Cancer Care Centers Of South Texas - Metropolitan ", "Logo": "", "Location": "1200 Brooklyn Avenue San Antonio, TX 78212", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "1200 Brooklyn Avenue", "City": "San Antonio", "State": "TX", "Zip": "78212", "lat": "29.4401637", "lon": "-98.49050629999999" },
    { "FacilityID": 1023, "Name": "Cancer Care Centers Of South Texas - Northeast", "Logo": "", "Location": "2130 NE Loop 410, Suite 100 San Antonio, TX 78217", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "2130 NE Loop 410, Suite 100", "City": "San Antonio", "State": "TX", "Zip": "78217", "lat": "29.5152237", "lon": "-98.4269677" },
    { "FacilityID": 1024, "Name": "Cancer Care Centers Of South Texas - Medical Center ", "Logo": "", "Location": "4411 Medical Drive San Antonio, TX 78229", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "4411 Medical Drive", "City": "San Antonio", "State": "TX", "Zip": "78229", "lat": "29.5106565", "lon": "-98.5723592" },
    { "FacilityID": 1025, "Name": "Cancer Care Centers Of South Texas - Comal/Guadalupe", "Logo": "", "Location": "1448 E Common St. New Braunfels, TX 78130", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "1448 E Common St.", "City": "New Braunfels", "State": "TX", "Zip": "78130", "lat": "29.7223505", "lon": "-98.0995992" },
    { "FacilityID": 1026, "Name": "Compass Oncology - Vancouver Cancer Center", "Logo": "", "Location": "210 SE 136th Ave. Vancouver, WA 98684", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "210 SE 136th Ave.", "City": "Vancouver", "State": "WA", "Zip": "98684", "lat": "45.6198314", "lon": "-122.5344438" },
    { "FacilityID": 1027, "Name": "Compass Oncology - Rose Quarter Cancer Center", "Logo": "", "Location": "265 N. Broadway Portland, OR 97227", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "265 N. Broadway", "City": "Portland", "State": "OR", "Zip": "97227", "lat": "45.5351837", "lon": "-122.6699195" },
    { "FacilityID": 1028, "Name": "Wilshire Oncology Medical Group, Inc - Corona", "Logo": "", "Location": "1280 Corona Pointe Ct, suite 112 Corona, CA 92879", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "1280 Corona Pointe Ct, suite 112", "City": "Corona", "State": "CA", "Zip": "92879", "lat": "33.8699406", "lon": "-117.5408709" },
    { "FacilityID": 1029, "Name": "Willamette Valley Cancer Center - Eugene", "Logo": "", "Location": "520 Country Club Rd. Eugene, OR 97401", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "520 Country Club Rd.", "City": "Eugene", "State": "OR", "Zip": "97401", "lat": "44.0639658", "lon": "-123.0917808" },
    { "FacilityID": 1030, "Name": "Imperial Valley Cancer Center – El Centro, CA", "Logo": "", "Location": "1410 S La Brucherie Rd suite b El Centro, CA 92243", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "1410 S La Brucherie Rd suite b", "City": "El Centro", "State": "CA", "Zip": "92243", "lat": "32.7804706", "lon": "-115.5787939" },
    { "FacilityID": 1031, "Name": "Glendale Radiation Therapy Center – Glendale, CA", "Logo": "", "Location": "222 W Eulalia St #100 Glendale, CA 91210", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "222 W Eulalia St #100", "City": "Glendale", "State": "CA", "Zip": "91210", "lat": "34.1263324", "lon": "-118.2570935" },
    { "FacilityID": 1032, "Name": "Los Angeles Radiation Oncology Center – Los Angeles, CA", "Logo": "", "Location": "1338 S Hope St Los Angeles, CA 90015", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "1338 S Hope St", "City": "Los Angeles", "State": "CA", "Zip": "90015", "lat": "34.0380192", "lon": "-118.2662643" },
    { "FacilityID": 1033, "Name": "West Hills Radiation Therapy Center – West Hills, CA", "Logo": "", "Location": "7301 Medical Center Dr #100 West Hills, CA 91307", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "7301 Medical Center Dr #100", "City": "West Hills", "State": "CA", "Zip": "91307", "lat": "34.2028706", "lon": "-118.6298337" },
    { "FacilityID": 1034, "Name": "Redhawk Radiation Therapy Center – Temecula, CA", "Logo": "", "Location": "44274 George Cushman Ct Temecula, CA 92592", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "44274 George Cushman Ct", "City": "Temecula", "State": "CA", "Zip": "92592", "lat": "33.4832477", "lon": "-117.0884925" },
    { "FacilityID": 1035, "Name": "Riverside Radiation Therapy Center – Riverside, CA", "Logo": "", "Location": "6939 Palm Ct, Riverside Riverside, CA 92506", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "6939 Palm Ct, Riverside", "City": "Riverside", "State": "CA", "Zip": "92506", "lat": "33.946788", "lon": "-117.4010864" },
    { "FacilityID": 1036, "Name": "St. Bernardine Radiation Therapy Center – San Bernardino, CA", "Logo": "", "Location": "1800 Medical Center Dr San Bernardino, CA 92411", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "1800 Medical Center Dr", "City": "San Bernardino", "State": "CA", "Zip": "92411", "lat": "34.1313164", "lon": "-117.3229917" },
    { "FacilityID": 1037, "Name": "Wildomar Radiation Therapy Center – Wildomar, CA", "Logo": "", "Location": "36450 Inland Valley Dr Suite 101 Wildomar, CA 92595", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "36450 Inland Valley Dr Suite 101", "City": "Wildomar", "State": "CA", "Zip": "92595", "lat": "33.5914035", "lon": "-117.2363949" },
    { "FacilityID": 1038, "Name": "Center for Radiation Therapy of Beverly Hills – Beverly Hills, CA", "Logo": "", "Location": "9229 Wilshire Blvd Beverly Hills, CA 90210", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "9229 Wilshire Blvd", "City": "Beverly Hills", "State": "CA", "Zip": "90210", "lat": "34.0673078", "lon": "-118.3932612" },
    { "FacilityID": 1039, "Name": "Holy Cross Radiation Therapy Center – Mission Hills, CA", "Logo": "", "Location": "15031 Rinaldi St Mission Hills, CA 92103", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "15031 Rinaldi St", "City": "Mission Hills", "State": "CA", "Zip": "92103", "lat": "34.279782", "lon": "-118.4599806" },
    { "FacilityID": 1040, "Name": "Santa Clarita Radiation Therapy Center – Valencia, CA", "Logo": "", "Location": "25751 McBean Pkwy suite 110 Valencia, CA 91355", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "25751 McBean Pkwy suite 110", "City": "Valencia", "State": "CA", "Zip": "91355", "lat": "34.3996809", "lon": "-118.5520174" },
    { "FacilityID": 1041, "Name": "Sherman Oaks Radiation Therapy Center – Sherman Oaks, CA", "Logo": "", "Location": "5522 Sepulveda Blvd Sherman Oaks, CA 91411", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Western Region", "Address": "5522 Sepulveda Blvd", "City": "Sherman Oaks", "State": "CA", "Zip": "91411", "lat": "34.1711102", "lon": "-118.4654557" },
    { "FacilityID": 1042, "Name": "Arizona Oncology Associates, P.C. - Radiation Oncology - St. Mary's", "Logo": "", "Location": "1620 W.St.Mary's Rd Tucson, AZ 85745", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "1620 W. St. Mary's Rd", "City": "Tucson", "State": "AZ", "Zip": "85745", "lat": "32.2294099", "lon": "-111.0008198" },
    { "FacilityID": 1043, "Name": "Arizona Oncology Associates, P.C - Radiation Oncology - Carondelet", "Logo": "", "Location": "6567 E Carondelet Dr Tucson, AZ 85710", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "6567 E Carondelet Dr", "City": "Tucson", "State": "AZ", "Zip": "85710", "lat": "32.2269467", "lon": "-110.8533361" },
    { "FacilityID": 1044, "Name": "Arizona Oncology Associates, P.C. - Radiation Oncology - Craycroft", "Logo": "", "Location": "2625 N. Craycroft Rd. Tucson, AZ 85712", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "2625 N. Craycroft Rd.", "City": "Tucson", "State": "AZ", "Zip": "85712", "lat": "32.2547505", "lon": "-110.8758746" },
    { "FacilityID": 1045, "Name": "Arizona Oncology Associates, P.C. - Radiation Oncology - Green Valley", "Logo": "", "Location": "1315 S. La Canada Dr Green Valley, AZ 85614", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "1315 S. La Canada Dr", "City": "Green Valley", "State": "AZ", "Zip": "85614", "lat": "31.8510661", "lon": "-110.9989569" },
    { "FacilityID": 1046, "Name": "Rocky Mountain Cancer Centers -Colorado Springs ", "Logo": "", "Location": "2312 N. Nevada Suite#400 Colorado Springs, CO, CO 80907", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "2312 N. Nevada Suite#400", "City": "Colorado Springs, CO", "State": "CO", "Zip": "80907", "lat": "38.8659899", "lon": "-104.8205425" },
    { "FacilityID": 1047, "Name": "Rocky Mountain Cancer Centers - Aurora", "Logo": "", "Location": "1700 S. Potomac Aurora, CO 80012", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "1700 S. Potomac", "City": "Aurora", "State": "CO", "Zip": "80012", "lat": "39.6857942", "lon": "-104.8304135" },
    { "FacilityID": 1048, "Name": "Rocky Mountain Cancer Centers - Thornton", "Logo": "", "Location": "8820 Huron St. Thornton, CO 80260", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "8820 Huron St.", "City": "Thornton", "State": "CO", "Zip": "80260", "lat": "39.85690839999999", "lon": "-104.9958878" },
    { "FacilityID": 1049, "Name": "Rocky Mountain Cancer Centers - Boulder", "Logo": "", "Location": "4715 Arapahoe Avenue Boulder, CO 80303", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "4715 Arapahoe Avenue", "City": "Boulder", "State": "CO", "Zip": "80303", "lat": "40.0151267", "lon": "-105.2369451" },
    { "FacilityID": 1050, "Name": "Rocky Mountain Cancer Centers - Littleton", "Logo": "", "Location": "22 W. Dry Creek Cir. Littleton, CO 80120", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "22 W. Dry Creek Cir.", "City": "Littleton", "State": "CO", "Zip": "80120", "lat": "39.581401", "lon": "-104.9923274" },
    { "FacilityID": 1051, "Name": "Comprehensive Cancer Centers Of Nevada - Northwest", "Logo": "", "Location": "7445 Peak Avenue Las Vegas, NV 89128", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "7445 Peak Avenue", "City": "Las Vegas", "State": "NV", "Zip": "89128", "lat": "36.2092983", "lon": "-115.2566239" },
    { "FacilityID": 1052, "Name": "Comprehensive Cancer Centers Of Nevada - Southwest", "Logo": "", "Location": "9280 West Sunset Las Vegas, NV 89148", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "9280 West Sunset", "City": "Las Vegas", "State": "NV", "Zip": "89148", "lat": "36.071835", "lon": "-115.2947321" },
    { "FacilityID": 1053, "Name": "Comprehensive Cancer Centers Of Nevada - Siena", "Logo": "", "Location": "10001 S. Eastern  Ste 108 Henderson, NV 89052", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "10001 S. Eastern  Ste 108", "City": "Henderson", "State": "NV", "Zip": "89052", "lat": "36.0046668", "lon": "-115.1150065" },
    { "FacilityID": 1054, "Name": "Comprehensive Cancer Centers Of Nevada - Twain", "Logo": "", "Location": "3730 South Eastern Las Vegas, NV 89109", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "3730 South Eastern", "City": "Las Vegas", "State": "NV", "Zip": "89109", "lat": "36.1210521", "lon": "-115.1182286" },
    { "FacilityID": 1055, "Name": "Comprehensive Cancer Centers Of Nevada - Summerlin", "Logo": "", "Location": "655 N. Town Center Dr.  Las Vegas, NV 89144", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mountain Region", "Address": "655 N. Town Center Dr. ", "City": "Las Vegas", "State": "NV", "Zip": "89144", "lat": "36.1810228", "lon": "-115.3176503" },
    { "FacilityID": 1056, "Name": "Illinois Cancer Specialists - Niles", "Logo": "", "Location": "8915 W. Golf Rd. Niles, IL 60714", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Midwest Region", "Address": "8915 W. Golf Rd.", "City": "Niles", "State": "IL", "Zip": "60714", "lat": "42.0533673", "lon": "-87.84845279999999" },
    { "FacilityID": 1057, "Name": "Arch Cancer Care- St. Louis Urology ", "Logo": "", "Location": "12855 North Forty Dr. Saint Louis, MO 63141", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Midwest Region", "Address": "12855 North Forty Dr.", "City": "Saint Louis", "State": "MO", "Zip": "63141", "lat": "38.6403106", "lon": "-90.47187489999999" },
    { "FacilityID": 1058, "Name": "Missouri Cancer Associates - Broadway", "Logo": "", "Location": "1705 E Broadway Columbia, MO 65201", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Midwest Region", "Address": "1705 E Broadway", "City": "Columbia", "State": "MO", "Zip": "65201", "lat": "38.9504108", "lon": "-92.31315029999999" },
    { "FacilityID": 1059, "Name": "Missouri Cancer Associates - George Rea Cancer Treatment Center", "Logo": "", "Location": "603 W. Pierce Kirksville, MO 63501", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Midwest Region", "Address": "603 W. Pierce", "City": "Kirksville", "State": "MO", "Zip": "63501", "lat": "40.1920857", "lon": "-92.5889711" },
    { "FacilityID": 1060, "Name": "Arkansas Oncology Associates - Little Rock", "Logo": "", "Location": "1000 N University,  Suite 100 Little Rock, AR 72207", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Midwest Region", "Address": "1000 N University,  Suite 100", "City": "Little Rock", "State": "AR", "Zip": "72207", "lat": "34.7607213", "lon": "-92.3415017" },
    { "FacilityID": 1061, "Name": "Hope Center for Cancer Care", "Logo": "", "Location": "835 Southwestern Run Youngstown, OH 44514", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Midwest Region", "Address": "835 Southwestern Run", "City": "Youngstown", "State": "OH", "Zip": "44514", "lat": "40.9901594", "lon": "-80.6355351" },
    { "FacilityID": 1062, "Name": "Virginia Cancer Specialists – Radiation Center", "Logo": "", "Location": "10301 Democracy Lane Fairfax, VA 22030", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "10301 Democracy Lane", "City": "Fairfax", "State": "VA", "Zip": "22030", "lat": "38.84979800000001", "lon": "-77.3003569" },
    { "FacilityID": 1063, "Name": "CCOV- VOA - Lake Wright Cancer Center", "Logo": "", "Location": "5900 Lake Wright Drive Norfolk, VA 23502", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "5900 Lake Wright Drive", "City": "Norfolk", "State": "VA", "Zip": "23502", "lat": "36.8781703", "lon": "-76.20488979999999" },
    { "FacilityID": 1064, "Name": "CCOV-Sentara CarePlex Hospital", "Logo": "", "Location": "3000 Coliseum Drive Hampton, VA 23666", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "3000 Coliseum Drive", "City": "Hampton", "State": "VA", "Zip": "23666", "lat": "37.0569425", "lon": "-76.39044179999999" },
    { "FacilityID": 1065, "Name": "CCOV-Sentara Norfolk General Hospital", "Logo": "", "Location": "600 Gresham Drive Norfolk, VA 23507", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "600 Gresham Drive", "City": "Norfolk", "State": "VA", "Zip": "23507", "lat": "36.8623646", "lon": "-76.30344819999999" },
    { "FacilityID": 1066, "Name": "CCOV-Sentara Va.General Hospital", "Logo": "", "Location": "1060 First Colonial Road Virginia Beach, VA 23454", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "1060 First Colonial Road", "City": "Virginia Beach", "State": "VA", "Zip": "23454", "lat": "36.8647923", "lon": "-76.0264943" },
    { "FacilityID": 1067, "Name": "CCOV- VOA- Princess Anne", "Logo": "", "Location": "1950 Glen Mitchell Drive Virginia Beach, VA 23456", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "1950 Glen Mitchell Drive", "City": "Virginia Beach", "State": "VA", "Zip": "23456", "lat": "36.7757996", "lon": "-76.09687869999999" },
    { "FacilityID": 1068, "Name": "CCOV- Sentara Obici Hospital", "Logo": "", "Location": "2800 Godwin Blvd Suffolk, VA 23434", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "2800 Godwin Blvd", "City": "Suffolk", "State": "VA", "Zip": "23434", "lat": "36.7731922", "lon": "-76.58064" },
    { "FacilityID": 1069, "Name": "Cancer Centers Of North Carolina - Raleigh", "Logo": "", "Location": "4101 Macon Pond Road Raleigh, NC 27607", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "4101 Macon Pond Road", "City": "Raleigh", "State": "NC", "Zip": "27607", "lat": "35.81914", "lon": "-78.70781629999999" },
    { "FacilityID": 1070, "Name": "Cancer Centers Of North Carolina -Cary Radiation ", "Logo": "", "Location": "300 Ashville Ave , Suite 160 Cary, NC 27518", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Mid-Atlantic Region", "Address": "300 Ashville Ave , Suite 160", "City": "Cary", "State": "NC", "Zip": "27518", "lat": "35.7397859", "lon": "-78.7855223" },
    { "FacilityID": 1071, "Name": "New York Oncology Hematology - Latham", "Logo": "", "Location": "1003 Loudon Road Latham, NY 12110", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Northeast Region", "Address": "1003 Loudon Road", "City": "Latham", "State": "NY", "Zip": "12110", "lat": "42.7721506", "lon": "-73.7530159" },
    { "FacilityID": 1072, "Name": "New York Oncology Hematology - Rexford", "Logo": "", "Location": "896 Riverview Rd. Rexford, NY 12148", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Northeast Region", "Address": "896 Riverview Rd.", "City": "Rexford", "State": "NY", "Zip": "12148", "lat": "42.8552098", "lon": "-73.88594259999999" },
    { "FacilityID": 1073, "Name": "New York Oncology Hematology - Albany Cancer Center", "Logo": "", "Location": "400 Patroon Creek Blvd Albany, NY 12206", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Northeast Region", "Address": "400 Patroon Creek Blvd", "City": "Albany", "State": "NY", "Zip": "12206", "lat": "42.6837497", "lon": "-73.80312370000001" },
    { "FacilityID": 1075, "Name": "New York Oncology Hematology - Hudson", "Logo": "", "Location": "69 Prospect Road Hudson, NY 12534", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Northeast Region", "Address": "69 Prospect Road", "City": "Hudson", "State": "NY", "Zip": "12534", "lat": "42.245714", "lon": "-73.778401" },
    { "FacilityID": 1076, "Name": "Florida Cancer Affiliates  - New Port Richey", "Logo": "", "Location": "5500 Little Road New Port Richey, FL 34655", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Florida Region", "Address": "5500 Little Road", "City": "New Port Richey", "State": "FL", "Zip": "34655", "lat": "28.2390454", "lon": "-82.672851" },
    { "FacilityID": 1077, "Name": "Advanced Medical Specialties - Baptist Hospital Radiation", "Logo": "", "Location": "8900 N Kendall Drive Miami, FL 33176", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Florida Region", "Address": "8900 N Kendall Drive", "City": "Miami", "State": "FL", "Zip": "33176", "lat": "25.6831489", "lon": "-80.3404145" },
    { "FacilityID": 1078, "Name": "Advanced Medical Specialties - S Miami Hospital Radiation", "Logo": "", "Location": "6200 SW 73rd Street South Miami, FL 33143", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Florida Region", "Address": "6200 SW 73rd Street", "City": "South Miami", "State": "FL", "Zip": "33143", "lat": "25.7032786", "lon": "-80.2939055" },
    { "FacilityID": 1079, "Name": "Advanced Medical Specialties - Palmetto General Hospital Radiation", "Logo": "", "Location": "2001 W 68th Street Hialeah, FL 33016", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Florida Region", "Address": "2001 W 68th Street", "City": "Hialeah", "State": "FL", "Zip": "33016", "lat": "25.8857117", "lon": "-80.3264392" },
    { "FacilityID": 1080, "Name": "Oncology & Radiation Associates, PA  - Doral Radiation Center", "Logo": "", "Location": "8881 NW 18th Ter Miami, FL 33172", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Florida Region", "Address": "8881 NW 18th Ter", "City": "Miami", "State": "FL", "Zip": "33172", "lat": "25.7909969", "lon": "-80.3406755" },
    { "FacilityID": 1081, "Name": "Oncology & Radiation Associates, PA  - Doral DI  Center", "Logo": "", "Location": "8881 NW 18th Ter Miami, FL 33172", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Florida Region", "Address": "8881 NW 18th Ter", "City": "Miami", "State": "FL", "Zip": "33172", "lat": "25.7909969", "lon": "-80.3406755" },
    { "FacilityID": 1082, "Name": "Greenville Hospital System University Medical Center -Cancer Centers Of The Carolinas - Eastside (CCC POD)", "Logo": "", "Location": "65 International Dr. Greenville, SC 29615", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Eastern Region", "Address": "65 International Dr.", "City": "Greenville", "State": "SC", "Zip": "29615", "lat": "34.8473457", "lon": "-82.3198379" },
    { "FacilityID": 1083, "Name": "GHS University Medical Center -Cancer Centers Of The Carolinas - Seneca", "Logo": "", "Location": "131 Lila Doyle Dr. Seneca, SC 29672", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Eastern Region", "Address": "131 Lila Doyle Dr.", "City": "Seneca", "State": "SC", "Zip": "29672", "lat": "34.6934929", "lon": "-82.9853093" },
    { "FacilityID": 1084, "Name": "GHS University Medical Center -Cancer Centers Of The Carolinas - Andrews", "Logo": "", "Location": "200 Andrews St. Greenville, SC 29601", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Eastern Region", "Address": "200 Andrews St.", "City": "Greenville", "State": "SC", "Zip": "29601", "lat": "34.83840800000001", "lon": "-82.42254299999999" },
    { "FacilityID": 1085, "Name": "GHS University Medical Center -Cancer Centers Of the Carolinas-Greer", "Logo": "", "Location": "340 Medical Parkway Greer, SC 29650", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Eastern Region", "Address": "340 Medical Parkway", "City": "Greer", "State": "SC", "Zip": "29650", "lat": "34.9223924", "lon": "-82.2459621" },
    { "FacilityID": 1086, "Name": "GHS University Medical Center -Cancer Centers Of the Carolinas-Spartanburg", "Logo": "", "Location": "120 Dillon Drive Spartanburg, SC 29307", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Eastern Region", "Address": "120 Dillon Drive", "City": "Spartanburg", "State": "SC", "Zip": "29307", "lat": "34.98214", "lon": "-81.89626349999999" },
    { "FacilityID": 1087, "Name": "GHS University Medical Center -Cancer Centers Of The Carolinas - Faris", "Logo": "", "Location": "900 W. Faris Rd. Greenville, SC 29605", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Eastern Region", "Address": "900 W. Faris Rd.", "City": "Greenville", "State": "SC", "Zip": "29605", "lat": "34.817717", "lon": "-82.4111343" },
    { "FacilityID": 1088, "Name": "University Kansas Hospital Authority -University of Kansas Hospital Cancer Center", "Logo": "", "Location": "4881 NE Goodview Circle Lees Summit, MO 64064", "PatientsOnTreat": "10", "PatientsPreTx": "5", "Region": "Eastern Region", "Address": "4881 NE Goodview Circle", "City": "Lees Summit", "State": "MO", "Zip": "64064", "lat": "39.0007361", "lon": "-94.353703" }
]);
var storeStatusWorklist = fnCheckAndLoadJSONLocalStorage("storeStatusWorklist", [
    { ItemID: 1, statusid: 1, ItemText: "Patient given written or online educational materials" }
    , { ItemID: 2, statusid: 1, ItemText: "Insurance authorization process started" }
    , { ItemID: 3, statusid: 1, ItemText: "Patient notified of financial responsibility" }
    , { ItemID: 7, statusid: 2, ItemText: "Patient identified using at least two patient-specific characteristics before service provided" }
    , { ItemID: 8, statusid: 2, ItemText: "Informed consent for radiation treatment obtained" }
    , { ItemID: 9, statusid: 2, ItemText: "Pregnancy status verified for female patients of birth bearing age" }
    , { ItemID: 10, statusid: 2, ItemText: "Permanent marks place at the isocentric location " }
    , { ItemID: 11, statusid: 2, ItemText: "Setup Photos of desired treatment setup obtained" }
    , { ItemID: 12, statusid: 3, ItemText: "Patient identified using at least two patient-specific characteristics before service provided" }
    , { ItemID: 13, statusid: 3, ItemText: "Cancer stage verified" }
    , { ItemID: 14, statusid: 3, ItemText: "Prior radiation treatment verified and relayed to approriate personnel" }
    , { ItemID: 15, statusid: 3, ItemText: "Fused images consistent with physician directive" }
    , { ItemID: 16, statusid: 3, ItemText: "Fusion verified by medical physicist or radiation oncologist" }
    , { ItemID: 17, statusid: 3, ItemText: "Anatomic target PTV's drawn by physician are consistent with tumor classification" }
    , { ItemID: 18, statusid: 3, ItemText: "Anatomic laterality consistent with diagnostic images, pathology reports, and/or surgical notes" }
    , { ItemID: 19, statusid: 3, ItemText: "Independent peer review of structure volumes" }
    , { ItemID: 20, statusid: 4, ItemText: "Dose guidelines and contraints are reviewed against ProKnow scorecard" }
    , { ItemID: 21, statusid: 10, ItemText: "Dose guidelines and contraints are reviewed against ProKnow scorecard" }
    , { ItemID: 22, statusid: 10, ItemText: "Independent peer review of treatment plan" }
    , { ItemID: 23, statusid: 5, ItemText: "Work Item 2 for Tx Prep" }
    , { ItemID: 24,  statusid: 6, ItemText: "Work Item 1 for On Tx" }
    , { ItemID: 25, statusid: 6, ItemText: "Work Item 2 for On Tx" }
    , { ItemID: 26, statusid: 6, ItemText: "Work Item 3 for On Tx" }
    , { ItemID: 27,  statusid: 7, ItemText: "Work Item 1 for End" }
    , { ItemID: 28, statusid: 7, ItemText: "Work Item 2 for End" }
    , { ItemID: 29, statusid: 7, ItemText: "Work Item 3 for End" }
    , { ItemID: 30,  statusid: 8, ItemText: "Work Item 1 for Followup" }
    , { ItemID: 4, statusid: 8, ItemText: "Work Item 2 for Followup" }
    , { ItemID: 5, statusid: 8, ItemText: "Work Item 3 for Followup" }
    , { ItemID: 6, statusid: 8, ItemText: "Work Item 4 for Followup" }
    ]
);

var storeNetworkExpertList = fnCheckAndLoadJSONLocalStorage("storeNetworkExpertList", [
    { ExpertID: 1, ExpertName: 'Kamal Gogineni', Title: 'Network Executive', Email: 'kamal@ctsioncology.com', Phone: '415.123.4567', Photo: '/Content/img/ExpertPicture/Kamal.jpg', FacilityIDs: '' },
    { ExpertID: 2, ExpertName: 'Abhijit Joshi', Title: 'Director of Clinical Technology', Email: 'abhijit@ctsioncology.com', Phone: '415.312.4567', Photo: '/Content/img/ExpertPicture/Abhijit.jpg', FacilityIDs: '' },
    { ExpertID: 3, ExpertName: 'Dawn Henrich', Title: 'Chair Quality Assurance Committee', Email: 'dawn@ctsioncology.com', Phone: '415.213.4567', Photo: '/Content/img/ExpertPicture/Dawn.jpg', FacilityIDs: '' },
    { ExpertID: 4, ExpertName: 'Rebekah Hansen', Title: 'National Director of Medical Physics', Email: 'rebekah@ctsioncology.com', Phone: '415.132.4567', Photo: '/Content/img/ExpertPicture/Rebekah.jpg', FacilityIDs: '' },
    { ExpertID: 5, ExpertName: 'Dr. Joe Ressiman', Title: 'Chief Medical Officer', Email: 'joe@ctsioncology.com', Phone: '415.559.5548', Photo: '/Content/img/ExpertPicture/VarianLS-95.jpg', FacilityIDs: '' },
    { ExpertID: 6, ExpertName: 'Samatha Miller', Title: 'Regional Director', Email: 'samantha@ctsioncology.com', Phone: '589.147.2698', Photo: '/Content/img/ExpertPicture/Samantha.jpg', FacilityIDs: '1002,1001,1003' },
    { ExpertID: 7, ExpertName: 'Andrew Sonnets ', Title: 'Regional Director of Medical Physics', Email: 'andrew@ctsioncology.com', Phone: '478.114.2548', Photo: '/Content/img/ExpertPicture/Andrew.png', FacilityIDs: '1002,1001,1003' },
    { ExpertID: 8, ExpertName: 'Kathleen Dubay', Title: 'Clinic Manager', Email: 'kathleen@ctsioncology.com', Phone: '147.159.3214', Photo: '/Content/img/ExpertPicture/Kathleen.jpg', FacilityIDs: '1002' },
    { ExpertID: 9, ExpertName: 'Bruce Santoro', Title: 'Chief Medical Physicist', Email: 'bruce@ctsioncology.com', Phone: '456.854.1258', Photo: '/Content/img/ExpertPicture/Bruce.jpg', FacilityIDs: '1002' },
    { ExpertID: 10, ExpertName: 'Cheryl Barnes ', Title: 'Clinic Manager', Email: 'cheryl@ctsioncology.com', Phone: '486.117.1478', Photo: '/Content/img/ExpertPicture/Cheryl.jpg', FacilityIDs: '1001' },
    { ExpertID: 11, ExpertName: 'George Grundiel ', Title: 'Chief Medical Physicist', Email: 'george@ctsioncology.com', Phone: '114.589.6541', Photo: '/Content/img/ExpertPicture/George.jpg', FacilityIDs: '1001,1003' },
    { ExpertID: 12, ExpertName: 'Roshieh Hester ', Title: 'Clinic Manager', Email: 'roshieh@ctsioncology.com', Phone: '218.257.3369', Photo: '/Content/img/ExpertPicture/Roshieh.jpg', FacilityIDs: '1003' },
    //{ ExpertID: 13, ExpertName: 'Santoro', Title: 'Site Physicist', Email: 'santoro@ctsioncology.com', Phone: '456-854-1258', Photo: '/Content/img/ExpertPicture/Bruce Grant.jpg', FacilityIDs: '1002' }
]);

function fnSortJSON(data, key, direction) {
    return data.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        if (direction === 'asc') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (direction === 'desc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
}
$(document).ready(function () {
    if (document.getElementById("divPatientCountInStatus") != null) {
        Highcharts.setOptions({
            colors: ['#6CF', '#f7d4be', '#06C', '#036', '#000']
        });
        Highcharts.chart('divPatientCountInStatus', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: false,
                    alpha: 0
                },
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },
            title: {
                style: {
                    color: '#27698b',
                    font: 'bold 18px "Museo Sans", Verdana, sans-serif'
                },
                text: 'Active Patients'
            },
            subtitle: {
                text: 'Workflow stages status'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}({point.percentage:.1f}%)</b>'
            },
            plotOptions: {

                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> {point.y}'
                    },
                    showInLegend: false,
                }
            },
            series: [{
                name: 'Present Workflow Patients',
                data: storePatientsCountByStatus
            }]
        });

        Highcharts.chart('divPatientOnTreatCount', {
            chart: {
                type: 'solidgauge',
            },
            title: {
                text: 'On Treat Patients'
            },
            tooltip: {
                enabled: false
            },
            pane: {
                center: ['50%', '75%'],
                //size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                },
                min: 0,
                max: 100,
                
            },
            credits: {
                enabled: false
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: -40,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            },
            series: [{
                name: 'Patients',
                data: [70],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:12px;color:silver">On Treat Patients</span></div>'
                },
                tooltip: {
                    valueSuffix: 'patients'
                }
            }]
        });

        Highcharts.chart('divPatientConsultationCount', {
            chart: {
                type: 'solidgauge',
            },
            title: {
                text: 'Consultation Patients'
            },
            tooltip: {
                enabled: false
            },
            pane: {
                center: ['50%', '75%'],
                //size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                },
                min: 0,
                max: 100,

            },
            credits: {
                enabled: false
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: -40,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            },
            series: [{
                name: 'Patients',
                data: [11],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:12px;color:silver">Consultations</span></div>'
                },
                tooltip: {
                    valueSuffix: 'Consultations'
                }
            }]
        });
        //Highcharts.chart('divPatientMonthlyCount', {
        //    chart: {
        //        type: 'column'
        //    },
        //    title: {
        //        style: {
        //            color: '#27698b',
        //            font: 'bold 18px "Museo Sans", Verdana, sans-serif'
        //        },
        //        text: '2018 Patients Treatment'
        //    },
        //    subtitle: {
        //        text: 'Treated and New patients per month'
        //    },
        //    exporting: {
        //        enabled: true
        //    },
        //    credits: {
        //        enabled: false
        //    },
        //    xAxis: {
        //        dateTimeLabelFormats: {
        //            month: '%e. %b'
        //        },
        //        title: {
        //            text: 'Month'
        //        },
        //        categories: ['Jan-18', 'Feb-18', 'Mar-18', 'Apr-18']
        //    },
        //    yAxis: {
        //        title: {
        //            text: 'Patients'
        //        },
        //        min: 0,
        //        stackLabels: {
        //            enabled: true,
        //            style: {
        //                fontWeight: 'bold',
        //                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        //            }
        //        }
        //    },
        //    tooltip: {
        //        headerFormat: '<b>{point.x}</b><br/>',
        //        pointFormat: '{series.Month}: {point.y}<br/>Total: {point.stackTotal}'
        //    },

        //    plotOptions: {
        //        column: {
        //            stacking: 'normal',
        //            dataLabels: {
        //                enabled: true,
        //                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
        //            }
        //        }
        //    },

        //    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
        //    series: [{
        //        name: 'Re-visit',
        //        data: [20, 16, 25, 31]
        //    }, {
        //        name: 'New Patients',
        //        data: [15, 18, 24, 26]
        //    }
        //    ]
        //});
    }
    else if (document.getElementById("divPatientVolumeOverTime") != null) {
        Highcharts.setOptions({
            colors: ['#6CF', '#f7d4be', '#06C', '#036', '#000']
        });
        Highcharts.chart('divPatientVolumeOverTime', {
            chart: {
                type: 'line',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                style: {
                    color: '#27698b',
                    font: 'bold 18px "Museo Sans", Verdana, sans-serif'
                },
                text: 'Monthly Patients On Treat'
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                dateTimeLabelFormats: {
                    month: '%e. %b'
                },
                title: {
                    text: 'Month'
                },
                categories: ['Aug-17', 'Sep-17', 'Oct-17', 'Nov-17','Dec-17','Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'Jun-18', 'Jul-18']
            },
            yAxis: [
                {
                    title: {
                        text: 'Fractions'
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    min: 400,
                    stackLabels: {
                        enabled: true,
                        style: {
                            //fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    },
                    minRange:500
                },
                {
                    title: {
                        text: 'Patients'
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    min: 90,
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    },
                    opposite: true,
                    minRange:50
                }],
            tooltip: {
                headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },

            plotOptions: {
                line: {
                    //stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        //color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    },
                    enableMouseTracking: true
                }
            },

            colors: ['#6CF', '#f7d4be', '#06C', '#036', '#000'],
            series: [ {
                name: 'Fractions Delivered',
                data: [1210, 815, 795, 1150, 1192, 1304, 1005, 839, 803, 1084, 1059, 1306]
            },
                {
                    name: 'Patients On-Treat',
                    data: [129, 98, 95, 120, 122, 132, 110, 98, 95, 120, 122, 132],
                    yAxis: 1
                }
            ]
        });

        Highcharts.chart('divPatientVolumeByTxIntent', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: false,
                    alpha: 0
                },
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },
            title: {
                style: {
                    color: '#27698b',
                    font: 'bold 18px "Museo Sans",\ Verdana, sans-serif'
                },
                text: 'Treatment Intent & Location'
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}({point.percentage:.1f}%)</b>'
            },
            plotOptions: {

                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> {point.y}'
                    },
                    showInLegend: false,
                }
            },
            series: [{
                name: 'Intent',
                data: storePatientVolumeByTxIntent
            }],
            drilldown: { series: storePatientVolumeByTxIntentDrillDown}
        });

        Highcharts.chart('divPatientVolumeByStatus', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: false,
                    alpha: 0
                },
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },
            title: {
                style: {
                    color: '#27698b',
                    font: 'bold 18px "Museo Sans", Verdana, sans-serif'
                },
                text: 'Active Patients'
            },
            subtitle: {
                text: 'Workflow stages status'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}({point.percentage:.1f}%)</b>'
            },
            plotOptions: {

                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> {point.y}'
                    },
                    showInLegend: false,
                }
            },
            series: [{
                name: 'Present Workflow Patients',
                data: storePatientsCountByStatus
            }]
        });

        //Highcharts.chart('divPatientVolumeByTxSite', {
        //    chart: {
        //        type: 'pie',
        //        options3d: {
        //            enabled: false,
        //            alpha: 0
        //        },
        //        plotBackgroundColor: null,
        //        plotBorderWidth: null,
        //        plotShadow: false,
        //    },
        //    title: {
        //        style: {
        //            color: '#27698b',
        //            font: 'bold 18px "Museo Sans",\ Verdana, sans-serif'
        //        },
        //        text: 'Volume by Tx Site'
        //    },
        //    subtitle: {
        //        text: ''
        //    },
        //    credits: {
        //        enabled: false
        //    },
        //    exporting: {
        //        enabled: false
        //    },
        //    legend: {
        //        layout: 'vertical',
        //        align: 'center',
        //        verticalAlign: 'bottom'
        //    },
        //    tooltip: {
        //        pointFormat: '{series.name}: <b>{point.y}({point.percentage:.1f}%)</b>'
        //    },
        //    plotOptions: {

        //        pie: {
        //            dataLabels: {
        //                enabled: true,
        //                format: '<b>{point.name}</b> {point.y}'
        //            },
        //            showInLegend: false,
        //        }
        //    },
        //    series: [{
        //        name: 'Patients',
        //        data: storePatientVolumeByTxSite
        //    }]
        //});

        //Highcharts.chart('divPatientVolumeByTxTechnique', {
        //    chart: {
        //        type: 'pie',
        //        options3d: {
        //            enabled: false,
        //            alpha: 0
        //        },
        //        plotBackgroundColor: null,
        //        plotBorderWidth: null,
        //        plotShadow: false,
        //    },
        //    title: {
        //        style: {
        //            color: '#27698b',
        //            font: 'bold 18px "Museo Sans",\ Verdana, sans-serif'
        //        },
        //        text: 'Volume by Tx Technique'
        //    },
        //    subtitle: {
        //        text: ''
        //    },
        //    credits: {
        //        enabled: false
        //    },
        //    exporting: {
        //        enabled: false
        //    },
        //    legend: {
        //        layout: 'vertical',
        //        align: 'center',
        //        verticalAlign: 'bottom'
        //    },
        //    tooltip: {
        //        pointFormat: '{series.name}: <b>{point.y}({point.percentage:.1f}%)</b>'
        //    },
        //    plotOptions: {

        //        pie: {
        //            dataLabels: {
        //                enabled: true,
        //                format: '<b>{point.name}</b> {point.y}'
        //            },
        //            showInLegend: false,
        //        }
        //    },
        //    series: [{
        //        name: 'Patients',
        //        data: storePatientVolumeByTxTechnique
        //    }]
        //});

        Highcharts.chart('divPatientCombinationVolume', {
            title: {
                style: {
                    color: '#27698b',
                    font: 'bold 18px "Museo Sans", Verdana, sans-serif'
                },
                text: 'Treatment Intent & Location'
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                title: {
                    text: 'Techniques'
                },
                categories: ['3D', 'IMRT', 'SBRT', 'SRS', 'HDR']
            },
            yAxis: [{
                title: {
                    text: 'Patients'
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                min: 0,
                stackLabels: {
                    enabled: true,
                    style: {
                        //fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            }],
            tooltip: {
                headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },

            plotOptions: {
                column: {
                    //stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        //color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    },
                    enableMouseTracking: true
                }
            },

            colors: ['#6CF', '#f7d4be', '#06C', '#036', '#000'],
            series: [
                {
                    type: 'column',
                    name: 'Palliative',
                    data: [34, 23, 41, 33, 54]
                },
                {
                    type: 'column',
                    name: ' Curative',
                    data: [70, 57, 35, 63, 56]
                },
                {
                    type: 'column',
                    name: ' Control',
                    data: [12, 33, 15, 17, 6]
                },
                {
                    type: 'spline',
                    name: 'Total',
                    data: [116, 113, 91, 113, 116],
                    marker: {
                        lineWidth: 2,
                        lineColor: Highcharts.getOptions().colors[3],
                        fillColor: 'white'
                    }
                },
                {
                    type: 'pie',
                    name: 'Total by Intent',
                    data: [{
                        name: 'Palliative',
                        y: 114,
                        color: Highcharts.getOptions().colors[0] 
                    }, {
                        name: 'Curative',
                        y: 235,
                        color: Highcharts.getOptions().colors[1] 
                    }, {
                        name: 'Control',
                        y: 45,
                        color: Highcharts.getOptions().colors[2] 
                    }],
                    center: [35, 35],
                    size: 100,
                    showInLegend: false,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        });

    }

    else if (document.getElementById("divPatientVolumeOverTimeByFacility") != null) {
        Highcharts.setOptions({
            colors: ['#6CF', '#f7d4be', '#06C', '#036', '#000']
        });
        Highcharts.chart('divPatientVolumeOverTimeByFacility', {
            chart: {
                type: 'line',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                style: {
                    color: '#27698b',
                    font: 'bold 18px "Museo Sans", Verdana, sans-serif'
                },
                text: 'Monthly Patients On Treat'
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                dateTimeLabelFormats: {
                    month: '%e. %b'
                },
                title: {
                    text: 'Month'
                },
                categories: ['Aug-17', 'Sep-17', 'Oct-17', 'Nov-17', 'Dec-17', 'Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'Jun-18', 'Jul-18']
            },
            yAxis: [
                {
                    title: {
                        text: 'Fractions'
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    min: 200,
                    stackLabels: {
                        enabled: true,
                        style: {
                            //fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    },
                    minRange: 100
                },
                {
                    title: {
                        text: 'Patients'
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    min: 15,
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    },
                    opposite: true,
                    minRange: 50
                }],
            tooltip: {
                headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },

            plotOptions: {
                line: {
                    //stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        //color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    },
                    enableMouseTracking: true
                }
            },

            colors: ['#6CF', '#f7d4be', '#06C', '#036', '#000'],
            series: [{
                name: 'Fractions Delivered',
                data: [500,560,560,640,400,500,540,640,700,760,800,840]
            },
            {
                name: 'Patients On-Treat',
                data: [25,28,28,32,20,25,27,32,35,38,40,42],
                yAxis: 1
            }
            ]
        });

        Highcharts.chart('divPatientVolumeByTxIntentByFacility', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: false,
                    alpha: 0
                },
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },
            title: {
                style: {
                    color: '#27698b',
                    font: 'bold 18px "Museo Sans",\ Verdana, sans-serif'
                },
                text: 'Treatment Intent & Location'
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%)</b>'
            },
            plotOptions: {

                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> {point.y}%'
                    },
                    showInLegend: false,
                }
            },
            series: [{
                name: 'Intent',
                data: storePatientVolumeByTxIntentByFacility
            }],
            drilldown: { series: storePatientVolumeByTxIntentDrillDownByFacility }
        });



    }});