function RenderNoDataAvailable(chart, curretChartData) {
    if (curretChartData.Series.some(function (element, index) {
        // check whether element passes condition
        // if passed return true, if fails return false
        if (element.data.length > 0)
            return false;
        else
            return true;
    })) {
        chart.renderer.text('No Data Available', 410, 200)
            .css({                
                color: 'red',
                fontSize: '22px',
                fontWeight: "bold"
            })
            .add();
    }
}

function GetInnerHTMLForCharts(diseaseSiteName, highchartID) {
    return '<div class="col-6 col-md-6">' +
        '<div class="card main-chart-card box-emposed bg-1">' +
        '<div class="card-body">' +
        '<div class="card-title">' +
        '' +
        '<div id="' + highchartID + '"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
}

function LoadFractionProviderData(postUrl, selectedFileId, rowContainerId, diseaseSites, modalities) {
    $.ajax({
        type: "POST",
        async: true,
        url: postUrl,
        data: {
            fileId: selectedFileId,
            diseaseSites: diseaseSites,
            modalities: modalities
        },
        datatype: 'html',
        success: function (data) {
            $("#loader1").show();           

            for (var i = 0; i < data.chartDataList.length; i++) {

                var currentRrowId = 'rowId-' + i;
                $('#' + rowContainerId).append($("<div class='row mt-4' id=" + currentRrowId + ">"));

                var highchartId = 'chart-' + i;
                CreateChart(data.chartDataList[i], currentRrowId, data.chartDataList[i].DiseaseSite, highchartId)

                i++;

                if (i >= data.chartDataList.length)
                    break;

                var highchartId = 'chart-' + i;

                let curretChartData = data.chartDataList[i];
                CreateChart(curretChartData, currentRrowId, data.chartDataList[i].DiseaseSite, highchartId)
            }           
        },
        error: function (err) {
            toastr.error(err.statusText);
            $("#loader1").hide();
        }
    });
}// end function

