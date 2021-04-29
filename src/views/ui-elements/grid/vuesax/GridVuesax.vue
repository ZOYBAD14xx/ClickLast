
<template>

    <div id="extra-component-chartist-demo">
        <div class="vx-row">
           <div class="vx-col w-full mb-base">
             <vx-card title="Column Chart" >
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.columnChart.chartOptions" :series="apexChatData.columnChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.columnChartCode }}
                    </template>
                </vx-card>
            </div>

            <!-- PIE CHART -->
            <div class="vx-col w-full mb-base">
                <vx-card title="Pie Chart" >
                    <vue-apex-charts type="pie" height="350" :options="apexChatData.pieChart.chartOptions" :series="apexChatData.pieChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.pieChartCode }}
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
