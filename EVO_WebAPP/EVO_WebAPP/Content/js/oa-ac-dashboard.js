// Create the chart
Highcharts.chart('chart33', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Total percent market share'
        }
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }

    },
    legend: {
        enabled: true
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> of total<br/>'
    },

    series: [
        {
            name: "Treatment Techniques",
            colorByPoint: true,
            data: [
                {
                    name: "Brachytherapy ",
                    y: 60,
                    drilldown: "Brachytherapy"
                },
                {
                    name: "External Beam",
                    y: 30,
                    drilldown: "External Beam"
                },
                {
                    name: "GammaKnife",
                    y: 42,
                    drilldown: "GammaKnife"
                },
                {
                    name: "CyberKnife",
                    y: 70,
                    drilldown: "CyberKnife"
                },
               
            ]
        }
    ],
    drilldown: {
        series: [
            {
                type: "pie",
                name: "Brachytherapy",
                id: "Brachytherapy",
                data: [
                    {
                        name: 'Health PC Chicago',
                        y:30,
                        //drilldown:  'Health PC Chicago'
                    },
                    {
                        name: 'Health PC Brooklyn',
                        y:30,
                        //drilldown:  'Health PC Brooklyn'
                    },
                    {
                        name: 'Health PC Alaska',
                        y:30,
                        //drilldown:  'Health PC Alaska'
                    },
                    {
                        name: 'Health PC New York',
                        y:30,
                        //drilldown:  'Health PC New York'
                    },

                    
                ]
            }
            
           
           
        ]
    }
});

///////Commented by Nivethitha
//Highcharts.chart('singlechart1', {
           
//    title: {
//        text: '3 Year Trending Network Reviews'
//    },
    
//    subtitle: {
//        text: 'Completed Reviews by Month'
//    },

//    yAxis: {
//        title: {
//            text: 'Fractions'
//        }
//    },

//    xAxis: {
        
//        title: {
//            text: 'Month'
//        },
//        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//    },
//    plotOptions: {
//        series: {
//            //pointStart: Date.UTC(2019, 0, 1),
//            //pointIntervalUnit: 'month',
//            pointStart: 2016
//        },
//        line: {
//            dataLabels: {
//                enabled: true
//            },
//            enableMouseTracking: true
//        },
//        series: {
           
//        }
//    },
   
 
//    legend: {
//        enabled: true
//    },
  

//    series: [{
//        name: '2017',
//        data: [29, 71, 106, 129, 144, 176, 135,29, 71, 106, 129,176, 135, 148,]
//    }, {name: '2018',
//        data: [144, 176, 135, 148, 216, 194, 95,29,148, 216, 194, 144, 176, 135]
//    },
//    {
//        name: '2019',
//        data: [25,256,242,120,195,201,144, 176, 135, 148, 216, 148, 216,]
//    }
//],

//    responsive: {
//        rules: [{
//            condition: {
//                maxWidth: 500
//            },
            
//        }]
//    }

//}); 
//Highcharts.chart('singlechart3', {
//    chart: {
//        type: 'pie'
//    },
//    title: {
//        text: '2019 My Reviews'
        
        
//    },
    
//    subtitle: {
//        text: 'Click the slices to view available resources'
//    },

//    tooltip: {
//        headerFormat: '',
//        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b> Clinics : <b>{point.y}</b> <br/>' 
        
//    },
//    series: [{
//        minPointSize: 10,
//        innerSize: '70%',
//        zMin: 0,
//        name: 'Clinic',
//        data: [{
//            name: 'Facility Pending',
//            y: 503,
            
            
//        }, {
//            name: 'Facility in Review',
//            y: 123,
            
//        },
//        {
//            name: 'My Open Reviews',
//            y: 123,
            
//        }
//    ]
//    }]
            

//});// Build the chart
//// Instantiate the map  
//Highcharts.chart('singlechart4', {
//    chart: {
//        type: 'bar'
//    },
//    title: {
//        text: 'Manufacture Update'
//    },
    
//    subtitle: {
//        text: 'Health PC Organization'
//    },

//    yAxis: {
//        title: {
//            text: ''
//        },
        
//    },

//    xAxis: {
//        categories: ['Accuracy', 'Elekta ', 'GE Healthcare','Phillipe', 'Siemens', 'Sun Nuclear', 'Toshiba','Varien'],
//        title: {
//            text: 'Machines'
//        },
//        //type : 'category',
        
//    },
//    plotOptions: {
//        series: {
//            stacking: 'normal',
//            dataLabels: {
//            enabled: false
//        }
//        }
//    },
   
 
//    legend: {
//        enabled: true
//    },
  

//    series: [
//    {
//        name: 'Uptime',
//        data: [144, 176, 135,34,65,25,25,55]
    
//    },
//    {
//        name: 'Downtime',
//        data: [29, 71,88,76,54,25,25,55]
//    }, 


//],

//    responsive: {
//        rules: [{
//            condition: {
//                maxWidth: 500
//            },
            
//        }]
//    }

//});  

///////Created by Nivethitha
// Create the chart
Highcharts.chart('NetworkReview', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b> <b> {point.y}</b> <br/>'

    },
    series: [{
        minPointSize: 10,
        innerSize: '40%',
        zMin: 0,
        name: 'Network Review',
        data: [{
            name: 'ACR',
            y: 406,
            drilldown: "ACR"

        }, {
                name: 'ASTRO',
                y: 167,
                drilldown: "ASTRO"

            }, {
                name: 'ACRO',
                y:383,
                drilldown: "ACRO"

            }, {
                name: 'JCAHO',
            y: 122,

        }]
    }],
    drilldown: {


        series: [

            {
                name: "ACR",
                minPointSize: 10,
                innerSize: '40%',
                zMin: 0,
                id: "ACR",
                type: 'pie',
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{point.name} </b> <b> {point.y}</b> <br/>'

                },

                data: [
                    [
                        "Health PC Alaska",
                        102
                    ],
                    [
                        "Health PC New York",
                        120
                    ],
                    [
                        "Health PC Brooklyn",
                        84
                    ],
                    [
                        "Health PC Chicago",
                        100
                    ]
                ]
            },
            {
                name: "ASTRO",
                minPointSize: 10,
                innerSize: '40%',
                zMin: 0,
                id: "ASTRO",
                type: 'pie',
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{point.name} </b> <b> {point.y}</b> <br/>'

                },

                data: [
                   
                    [
                    "ACR",
                    42
                    ],
                    [
                        "ASTRO",
                        85
                    ],
                    [
                        "ACRO",
                        18
                    ],
                    [
                        "Other",
                        22
                    ]
                ]
            },
            {
                name: "ACRO",
                minPointSize: 10,
                innerSize: '40%',
                zMin: 0,
                id: "ACRO",
                type: 'pie',
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{point.name} </b> <b> {point.y}</b> <br/>'

                },

                data: [
                    [
                        "ACR",
                        94
                    ],
                    [
                        "ASTRO",
                        95
                    ],
                    [
                        "ACRO",
                        90
                    ],
                    [
                        "Other",
                        103
                    ]
                ]
            }]
    }


});// Build the chart

Highcharts.chart('ReviewStatusChart', {

    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 5,
            beta: 0
        }
    },

    title: {
        text: ' '
    },

    xAxis: {
        categories: ['Aaron (Physician)', 'Katelyn (Physician)', 'Edwin (Physicist)', 'Gerardo (Physicist)', 'Julie (Physician)', 'Livia (Physicist)', 'Benton (Physicist)', 'Jeffery (Physician)', 'Rivka (Physician)', 'Hattie (Physicist)']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Reviews'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name +' '+ this.y + '<br/>' 
                //+'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
    },
    
    series: [{
        name: 'In Progress',
        data: [5, 3, 4, 7, 1, 3, 4, 7,2]
    }, {
        name: 'Scheduled',
            data: [3, 4, 4, 2, 3, 4, 4, 2,7]
    }, {
        name: 'Completed',
            data: [2, 5, 6, 2, 2, 5, 6, 2,3]
    }, {
        name: 'Pending',
            data: [3, 1, 2, 5, 3, 1, 2, 5,4]
        }, {
            name: 'Approved',
            data: [3, 3, 4, 1, 3, 3, 4, 1, 2]
        }]
});

Highcharts.chart('ComplaintvsNonComplaint', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ' '
    },
    subtitle: {
        //text: 'Click the slices to view major and minor recommendations'
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b> <b> {point.y}</b> <br/>'

    },
    series: [{
        minPointSize: 10,
        innerSize: '40%',
        zMin: 0,
        name: 'Non-Compliant',
        data: [{
            name: 'Compliant',
            y: 406,
            //drilldown: "Complaint"

        }, {
                name: 'Non-Compliant',
            y: 167,
                drilldown: "Non-Compliant"

        }]
    }],
    drilldown: {


        series: [

            {
                name: "Non-Compliant",
                minPointSize: 10,
                innerSize: '40%',
                zMin: 0,
                id: "Non-Compliant",
                type: 'pie',
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>Total no of  {point.name}</b>  <b> {point.y}</b> <br/>'

                },

                data: [
                    [
                        "Major Recommendations",
                        62
                    ],
                    [
                        "Minor Recommendations",
                        95
                    ]
                ]
            }]
    }


});

Highcharts.chart('NoofReviewers', {

    title: {
        text: ' '
    },

    //subtitle: {
    //    text: 'Source: thesolarfoundation.com'
    //},

    yAxis: {
        title: {
            text: 'Number of Reviewers'
        }
    },

    xAxis: {
        //accessibility: {
        //    rangeDescription: 'Range: 2010 to 2017'
        //}
        categories: ['<b>Health PC Alaska</b>', '<b>Health PC New York</b>', '<b>Health PC Brooklyn</b>', '<b>Health PC Chicago</b>'],
        title: {
            text: 'Clinic'
        },
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            //label: {
            //    connectorAllowed: false
            //},
            //pointStart: 2010
        }
    },
    tooltip: {
        pointFormat: '{series.name} <b> {point.y}</b>'
    },

    series: [{
        name: 'Physicist',
        data: [82, 67, 57, 69]
    }, {
        name: 'Physician',
        data: [24, 06, 74, 98]
    }, {
        name: 'Other',
        data: [17, 72, 16, 71]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
Highcharts.chart('PatientChartReviewed', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: ' '
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name} <b> {point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Number of Patient Charts Reviewed',
        data: [
            ['Health PC Alaska', 45.0],
            ['Health PC New York', 16.8],
            {
                name: 'Health PC Brooklyn',
                y: 22.8,
                sliced: true,
                selected: true
            },
            ['Health PC Chicago', 16.2],
        ]
    }]
});
Highcharts.chart('TotalNoofReviews', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            '<b>Health PC Alaska</b>',
            '<b>Health PC New York</b>',
            '<b>Health PC Brooklyn</b>',
            '<b>Health PC Chicago</b>',
          
        ], title: {
            text: 'Clinic'
        },
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: 'Number of Reviews'
        }
    },
    //tooltip: {
    //    shared: true,
    //    valueSuffix: ' Reviews'
    //},


    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span>  {series.name} <b> {point.y}</b>', valueSuffix: ' Reviews'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Patient Survey',
        data: [4, 5, 7, 2]
    }, {
        name: 'Program Survey',
        data: [3, 4, 3, 4]
        }, {
            name: 'Program and Patient Survey',
            data: [2, 3, 4, 6]
        }]
});