

    var USONFacilityLocation = [{ "state": "TX", "LocationName": "Texas Oncology Mesquite", Address: "4700 N. Galloway Mesquite, TX 75150", lat: 32.7786622, lon: -96.6265984, FacilityID:1001 },
        { "state": "TX", "LocationName": "TXO Willowbrook", Address: "Willowbrook, TX", lat: 29.967863, lon: -95.5561447, FacilityID:1002 },
        {"state": "TX","LocationName": "TXO El Paso East", Address:"El Paso, TX", lat: 31.8127225, lon: -106.2759027, FacilityID:1003},
        {"state": "NY","LocationName": "Amsterdam Cancer Center", Address:"1700 Riverfront Center Amsterdam, NY 12010", lat: 42.9371239, lon: -74.192891, FacilityID:1004},
    ];
    var data = [{ "hc-a2": "TX", locations: 21, ucName: "TEXAS", drilldown: "us-tx" }, { "hc-a2": "NY", locations: 5, ucName: "NEW YORK", drilldown: "us-ny" },
    { "hc-a2": "CO", locations: 5, ucName: "COLORADO", drilldown: "us-co" },
    { "hc-a2": "CA", locations: 13, ucName: "CALIFORNIA", drilldown: "us-ca" },
    { "hc-a2": "WA", locations: 1, ucName: "WASHINGTON", drilldown: "us-wa" },
    { "hc-a2": "OR", locations: 2, ucName: "OREGON", drilldown: "us-or" },
    { "hc-a2": "AZ", locations: 4, ucName: "ARIZONA", drilldown: "us-az" },
    { "hc-a2": "NV", locations: 5, ucName: "NEVADA", drilldown: "us-nv" },
    { "hc-a2": "MO", locations: 4, ucName: "MISSOURI", drilldown: "us-mo" },
    { "hc-a2": "AR", locations: 1, ucName: "ARKANSAS", drilldown: "us-ar" },
    { "hc-a2": "OH", locations: 1, ucName: "OHIO", drilldown: "us-oh" },
    { "hc-a2": "NC", locations: 2, ucName: "NORTH CAROLINA", drilldown: "us-nc" },
    { "hc-a2": "VA", locations: 7, ucName: "VIRGINIA", drilldown: "us-va" },
    { "hc-a2": "FL", locations: 6, ucName: "FLORIDA", drilldown: "us-fl" },
    { "hc-a2": "SC", locations: 6, ucName: "SOUTH CAROLINA", drilldown: "us-sc" },
    { "hc-a2": "IL", locations: 1, ucName: "ILLINOIS", drilldown: "us-il" }],
    mapData = Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small']);

//var separators = Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),

// Some responsiveness
//small = $('#divUSSiteLocationMap2').width() < 400;


// Process mapData
$.each(mapData, function () {
var path = this.path,
    copy = {
        path: path
    };

// This point has a square legend to the right
if (path[1] === 9727) {

    // Identify the box
    Highcharts.seriesTypes.map.prototype.getBox.call({}, [copy]);

    // Place the center of the data label in the center of the point legend box
    this.middleX = ((path[1] + path[4]) / 2 - copy._minX) / (copy._maxX - copy._minX); // eslint-disable-line no-underscore-dangle
    this.middleY = ((path[2] + path[7]) / 2 - copy._minY) / (copy._maxY - copy._minY); // eslint-disable-line no-underscore-dangle

}
// Tag it for joining
this.ucName = this.name.toUpperCase();
    });
// Set drilldown pointers
$.each(data, function (i) {
this['hc-key'] = this['hc-a2'];
//this.drilldown = this['hc-a2'];
this.value = i; // Non-random bogus data
    });
    var InstanceID = "2";
// Initiate the chart
    Highcharts.mapChart('divUSSiteLocationMap'+InstanceID, {

        chart: {
            //map: 'countries/us/us-all',
            mapdata: data,
            events: {
                drilldown: function (e) {
                
                    if (!e.seriesOptions) {
                        var chart = this,
                            mapKey = 'countries/us/' + e.point.drilldown + '-all',
                            // Handle error, the timeout is cleared on success
                            fail = setTimeout(function () {
                                if (!Highcharts.maps[mapKey]) {
                                    chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);
                                
                                    fail = setTimeout(function () {
                                        chart.hideLoading();
                                    }, 1000);
                                }
                            }, 3000);
                        var stateDrilldown = e.point.drilldown;
                        // Show the spinner
                        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner
                    
                        // Load the drilldown map
                        $.getScript('https://code.highcharts.com/mapdata/' + mapKey + '.js', function () {
                        
                            var drillMapData = Highcharts.maps[mapKey],
                                drillMyData = Highcharts.geojson(Highcharts.maps[mapKey]);
                        
                            // Set a non-random bogus value
                            $.each(drillMyData, function (i) {
                                this['hc-key'] = this.properties['hc-key'];
                                this.value = i;
                            });
                        
                            // Hide loading and add series
                            chart.hideLoading();
                            clearTimeout(fail);
                            chart.addSeriesAsDrilldown(e.point, {
                                name: e.point.name,
                                data: drillMyData,
                                mapData: drillMapData,
                                joinBy: 'hc-key',
                                dataLabels: {
                                    enabled: false,
                                    format: '{point.name}',
                                    pointFormat: '<b>{point.name}</b>'
                                }
                            });
                            tempSeries = chart.addSeries({
                                id: 'points',
                                type: 'mappoint',
                                name: 'Store Data',
                                color: "red",//Highcharts.getOptions().colors[8],
                                marker: {
                                    "symbol": fnDecideMapMarker(1),
                                    //symbol: 'square',
                                    fillColor: "#A0F",
                                    lineColor: "A0F0",
                                    radius: 5
                                },
                                    tooltip: {enabled:true,headerFormat: '',
                                    pointFormat: '<b>{point.Name}</b>'
                                },
                                data: storeMyFacilityList.filter(function (n) { return n.State == stateDrilldown.replace("us-", "").toUpperCase() && n.FacilityID != "1001" && n.FacilityID != "1002" && n.FacilityID != "1003";})
                            });
                            tempSeries2 = chart.addSeries({
                                id: 'points',
                                type: 'mappoint',
                                name: 'Store Data',
                                color: "red",//Highcharts.getOptions().colors[8],
                                marker: {
                                    "symbol": fnDecideMapMarker(2),
                                },
                                    tooltip: {enabled:true,headerFormat: '',
                                    pointFormat: '<b>{point.Name}</b>'
                                },
                                data: storeMyFacilityList.filter(function (n) { return n.State == stateDrilldown.replace("us-", "").toUpperCase() && (n.FacilityID == "1001" || n.FacilityID == "1002" || n.FacilityID == "1003"); })
                            });
                        });
                    }
                
                
                    this.setTitle(null, { text:  " " });
                },
                drillup: function () {
                    tempSeries.remove(false);
                    tempSeries2.remove(false);
                    //this.setTitle(null, { text: 'USA' });
                    this.setTitle(null, { text:  " " });
                    fnUpdateNetworkExpertListForSelectedFacility("");
                }
            },
            ignoreHiddenSeries: false,
          
            //height: 600,
            //margin: 0
        },
         credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            }
        },
        colorAxis: {
            minColor: '#4DA6FF',
            maxColor: '#4DA6FF',
            labels: {
                format: '{value}%'
            }
        },

        title: {
            
            text: ' '
        },
        subtitle: {
            text: " "
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        //colorAxis: {
        //    enabled: false,
        //    min: 0,
        //    minColor: '#E6E7E8',
        //    maxColor: '#005645'
        //},
        mapNavigation: {
            enabled: true,
            enableButtons: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        tooltip: {
            enabled: true,
            headerFormat: '',
            //pointFormat: '<b>{point.name}</b> <br/>Total Facilities: {point.locations}'
            formatter: function () {
                if (this.point.Name && this.point.Name != "") {
                    return '<b>' + this.point.Name + '</b> <br/> Region: <b>'+this.point.Region+'</b>';
                }
                else {
                    return '<b>' + this.point.name + '</b> ' + (!isNaN(this.point.locations) ? '<br/>Total Facilities: ' + this.point.locations : "");
                }
            }
        },
        plotOptions: {
            map: {
                color: "#265CFF",
                states: {
                    hover: {
                        color: '#265CFF'
                    }
                }
            },
            series:{
                point:{
                    events:{
                        click: function () {
                            if (this.Name && this.Name != "") {
                                //alert("This will filter network contacts for selected facility: " + this.LocationName);
                                fnUpdateNetworkExpertListForSelectedFacility(this.FacilityID);
                            }
                            
                        }
                    }
                }
            }
        },
        series: [{
            // Use the gb-all map with no data as a basemap
            name: 'USA',
            mapData: mapData,
            data: data,
            joinBy: 'ucName',
            borderColor: '#f7f7f7',
            nullColor: '#6B7C8C',
            showInLegend: false,
            dataLabels: {
                enabled: true,
                //format: '{point.properties.postal-code}'
                formatter: function () {
                    return this.point.properties['hc-a2'];
                },
            }
        },
            {
            name: 'Separators',
            type: 'mapline',
            nullColor: '#707070',
            showInLegend: false,
            enableMouseTracking: false,
            data: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small'], 'mapline')
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: '#FFFFFF',
                textDecoration: 'none',
                textOutline: '1px #000000'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        }
    });


function fnDecideMapMarker(a) {
    if (a == 2) {
        return "url(/Content/images/MapMarkerRed.svg)";
    }
    else {
        return "url(/Content/images/MapMarker.svg)";
    }
}
function fnUpdateNetworkExpertListForSelectedFacility(facilityID) {
    if (document.getElementById("divNetworkContacts") ) {
        fnLoadNetworkExperts(facilityID);
    }
}

    function fnUpdateNetworkExpertListForSelectedFacility(facilityID) {
        if (document.getElementById("divNetworkContacts") ) {
            fnLoadNetworkExperts(facilityID);
        }
    }
    function fnLoadNetworkExperts(facilityID) {
        var divNetworkContacts = document.getElementById("divNetworkContacts");
        var tmpList = storeNetworkExpertList;
        //if (facilityID != null && facilityID != "")
        if (facilityID == null) facilityID = "";
        tmpList = tmpList.filter(function (n) { var arrFacilityIDs = n.FacilityIDs.split(","); return (arrFacilityIDs.includes(facilityID.toString())); });
        divNetworkContacts.innerHTML = "";
        for (iCount = 0; iCount < tmpList.length; iCount++) {
            var tmpCard = document.createElement("div");
            tmpCard.className = "contactrow col-md-12";
            tmpCard.id = "divExpertContactRow_" + tmpList[iCount].ExpertID;
          
            tmpCard.innerHTML = '<li class="list-item">'
                +'<div class="d-inline align-items-center">'
                +'<span class="w-40 circle  align-items-center img-contact"> '
                +'<img class="rounded-circle img-circle-contact" src="' + tmpList[iCount].Photo + '"></span>'
                +'</div><div class="list-body">'
                    +' <div>'+ tmpList[iCount].Title + '</div>'
                    +'<small class="_500 text-ellipsis ">' + tmpList[iCount].ExpertName + '</small>'
                    +'<p class="text-muted text-ellipsis mb-0"><i class="fas fa-phone-alt "></i> ' + tmpList[iCount].Phone + '</p>'
                    +'<p class="text-muted text-ellipsis  mb-0"><i class="fas fa-envelope "></i> <a href="mailto:' + tmpList[iCount].Email + '">' + tmpList[iCount].Email + '</a>'
                    +'</p>'
                +'</div>'
            +'</li>';
            divNetworkContacts.appendChild(tmpCard);
        }
    }
    fnLoadNetworkExperts();