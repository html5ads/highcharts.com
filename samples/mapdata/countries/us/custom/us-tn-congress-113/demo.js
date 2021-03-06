$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "us-tn-02",
            "value": 0
        },
        {
            "hc-key": "us-tn-05",
            "value": 1
        },
        {
            "hc-key": "us-tn-04",
            "value": 2
        },
        {
            "hc-key": "us-tn-07",
            "value": 3
        },
        {
            "hc-key": "us-tn-03",
            "value": 4
        },
        {
            "hc-key": "us-tn-08",
            "value": 5
        },
        {
            "hc-key": "us-tn-01",
            "value": 6
        },
        {
            "hc-key": "us-tn-09",
            "value": 7
        },
        {
            "hc-key": "us-tn-06",
            "value": 8
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/custom/us-tn-congress-113.js">Tennessee congressional districts</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/custom/us-tn-congress-113'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
