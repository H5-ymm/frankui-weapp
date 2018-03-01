var chart = require('chart.js');
var lineChart = null;
Component({
    properties: {
        canvasData: {
            type: Object,
            value: {},
            observer: "onItemsChange"
        },
    },

    data: {},

    detached: function () {
      lineChart = null;
      this.setData({
        canvasData: null,
      });
    },

    methods: {
        onItemsChange() {
            this.setData({
                canvasData: this.data.canvasData
            });
            if (lineChart == null || lineChart == undefined) {
                lineChart = new chart(this.data.canvasData, this);
            } else {
                lineChart.updateData(this.data.canvasData);
            }
        }
    }

});