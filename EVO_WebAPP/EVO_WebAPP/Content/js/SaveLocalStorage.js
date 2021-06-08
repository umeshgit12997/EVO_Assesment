function fnSaveJSONToLocalStorage(keyName, jsonObject) {
    localStorage.setItem(keyName, JSON.stringify(jsonObject));
}
function fnGetJSONFromLocalStorage(keyName) {
    var returnObject = null;
    if (localStorage.getItem(keyName) != null) returnObject = JSON.parse(localStorage.getItem(keyName));
    return returnObject;
    //localStorage.setItem(keyName, JSON.stringify(jsonObject));
}

function fnCheckAndLoadJSONLocalStorage(keyName, jsonObject) {
    if (localStorage.getItem(keyName) == null) localStorage.setItem(keyName, JSON.stringify(jsonObject));
    else { jsonObject = JSON.parse(localStorage.getItem(keyName)); }
    return jsonObject;
}


function fnGetFormattedDateYMD(value) {
    if (value != null && value != "") {
        var obDate = new Date(value);
        var month = ("0" + (obDate.getMonth() + 1)).slice(-2);
        var day = ("0" + obDate.getDate()).slice(-2);
        var year = obDate.getFullYear();
        return year + "-" + month + "-" + day;
    }
    else { return "";}
}


function fnGetSingleElementArray(dataArr, elementName) {
    var returnVals = [];
    for (var i = 0; i < dataArr.length; i++) {
        returnVals.push(dataArr[i][elementName]);
    }
    //console.log(returnVals);
    return returnVals;
}

function fnGetSingleElementDrilldownArray(dataArr, elementTitleName, elementValueName) {
    var returnVals = [];
    for (var i = 0; i < dataArr.length; i++) {
        var objectArr = { "name": dataArr[i][elementTitleName], "y": dataArr[i][elementValueName], "drilldown": dataArr[i][elementTitleName] + "_" + elementValueName };
        if (elementTitleName == "Manufacturer") {
            if (dataArr[i][elementTitleName] != "Varian") {
                objectArr["drilldown"] = null;
            }
        }
        returnVals.push(objectArr);
    }
    //console.log(returnVals);
    return returnVals;
}
