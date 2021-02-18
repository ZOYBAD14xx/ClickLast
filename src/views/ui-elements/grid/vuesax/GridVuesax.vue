
<template>

    <div id="extra-component-chartist-demo">
        <div class="vx-row">
           <div class="vx-col w-full mb-base">
                <vx-card title="Mixed Chart" >
                    <vue-apex-charts type="line" height="350" :options="apexChatData.mixedChart.chartOptions" :series="apexChatData.mixedChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.mixedChartCode }}
                    </template>
                </vx-card>
            </div>

            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Line Chart" >
                    <vue-apex-charts type="line" height="350" :options="apexChatData.lineChartSimple.chartOptions" :series="apexChatData.lineChartSimple.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.lineChartSimpleCode }}
                    </template>
                </vx-card>
            </div>

            <!-- PIE CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Pie Chart" >
                    <vue-apex-charts type="pie" height="350" :options="apexChatData.pieChart.chartOptions" :series="apexChatData.pieChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.pieChartCode }}
                    </template>
                </vx-card>
            </div>
            <!-- COLUMN CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Column Chart" >
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.columnChart.chartOptions" :series="apexChatData.columnChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.columnChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- Bar CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Bar Chart" >
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.barChart.chartOptions" :series="apexChatData.barChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.barChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- MIXED CHART -->


            <!-- CANDLESTICK CHART -->
            <div class="vx-col w-full mb-base">
                <vx-card title="Candlestick Chart" >
                    <vue-apex-charts type="candlestick" height="350" :options="apexChatData.candlestickChart.chartOptions" :series="apexChatData.candlestickChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.candlestickChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- BUBBLE CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="3D Bubble Chart" >
                    <vue-apex-charts type="bubble" height="350" :options="apexChatData.bubbleChart.chartOptions" :series="apexChatData.bubbleChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.bubbleChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- SCATTER CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Scatter Chart" >
                    <vue-apex-charts type="scatter" height="350" :options="apexChatData.scatterChart.chartOptions" :series="apexChatData.scatterChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.scatterChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- HEAT MAP CHART -->
            <div class="vx-col w-full mb-base">
                <vx-card title="Heat Map Chart" >
                    <vue-apex-charts type="heatmap" height="350" :options="apexChatData.heatMapChart.chartOptions" :series="apexChatData.heatMapChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.heatMapChartCode }}
                    </template>
                </vx-card>
            </div>



            <!-- DONUT CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Donut Chart" >
                    <vue-apex-charts type="donut" height="350" :options="apexChatData.donutChart.chartOptions" :series="apexChatData.donutChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.donutChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- RADIAL BAR CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Radial Bar Chart" >
                    <vue-apex-charts type="radialBar" height="350" :options="apexChatData.radialBarChart.chartOptions" :series="apexChatData.radialBarChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.radialBarChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- RADAR CHART -->
            <div class="vx-col md:w-1/2 w-full">
                <vx-card title="Radar Chart" >
                    <vue-apex-charts type="radar" height="350" :options="apexChatData.radarChart.chartOptions" :series="apexChatData.radarChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.radarChartCode }}
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData.js'

export default {
  data () {
    return {
      apexChatData
    }
  },
  components: {
    VueApexCharts
  }
}
</script>
