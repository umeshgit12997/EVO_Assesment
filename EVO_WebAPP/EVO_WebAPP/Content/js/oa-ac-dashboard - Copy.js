// Create the chart
Highcharts.chart('container', {
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
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }

    },
    legend: {
        enabled: false
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
            name: "Surveys",
            colorByPoint: true,
            data: [
                {
                    name: "Health PC Alaska",
                    y: 60,
                    drilldown: "Health PC Alaska"
                },
                {
                    name: "Health PC New York",
                    y: 30,
                    drilldown: "Health PC New York"
                },
                {
                    name: "Health PC Chicago",
                    y: 42,
                    drilldown: "Health PC Chicago"
                },
                {
                    name: "Health PC Brooklyn",
                    y: 70,
                    drilldown: "Health PC Brooklyn"
                },
               
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "Health PC Alaska",
                id: "Health PC Alaska",
                data: [
                    [
                        "Brachytherapy ",
                        30
                    ],
                    [
                        "External Beam",
                        5
                    ],
                    [
                        "GammaKnife",
                        15
                    ],
                    [
                        "CyberKnife",
                        3
                    ] 
                    
                ]
            },
            {
                name: "Health PC New York",
                id: "Health PC New York",
                data: [
                    [
                        "Brachytherapy ",
                        12
                    ],
                    [
                        "External Beam",
                        3
                    ],
                    [
                        "GammaKnife",
                        7
                    ],
                    [
                        "CyberKnife",
                        3
                    ] 
                    
                ]
            },
            {
                name: "Health PC Chicago",
                id: "Health PC Chicago",
                data: [
                    [
                        "Brachytherapy ",
                        12
                    ],
                    [
                        "External Beam",
                        7
                    ],
                    [
                        "GammaKnife",
                        7
                    ],
                    [
                        "CyberKnife",
                        4
                    ] 
                    
                ]
            },
            {
                name: "Health PC Brooklyn",
                id: "Health PC Brooklyn",
                data: [
                    [
                        "Brachytherapy ",
                        5
                    ],
                    [
                        "External Beam",
                        5
                    ],
                    [
                        "GammaKnife",
                        15
                    ],
                    [
                        "CyberKnife",
                        20
                    ] 
                    
                ]
            },
           
           
        ]
    }
});