(function () {
    // 柱状图
    var myChart = echarts.init(document.getElementById('chart1'));
    option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top: '10px',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                // 刻度设置
                axisLabel: {
                    fontSize: 10,
                    color: 'rgba(255,255,255, 0.6)'
                },
                // x轴样式不显示
                axisLine: {
                    show: false,
                    // color: 'rgba(255,255,255, 0.1)',
                    // 想要什么样是自己设置
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    fontSize: 10,
                    color: 'rgba(255,255,255, 0.6)'
                },
                axisLine: {
                    lineStyle: { // 这个是设置刻度样式
                        color: 'rgba(255,255,255, 0.1)',
                        width: 2
                    }
                },
                // 分隔线的样式 就是row的线
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255, 0.1)',
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',// 柱形的宽度
                data: [200, 300, 300, 900, 1500, 1200, 600],
                //改柱形为圆角
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

(function () {
    // 柱状图
    var myChart = echarts.init(document.getElementById('chart2'));
    const colors = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6']
    option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '22%',
            bottom: '10%',
            top: '10%',
            // containLabel: true
        },
        xAxis: [
            {
                show: false,
            }
        ],
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['JS', 'HTML', 'CSS', 'VUE', 'React'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: 10,
                    color: 'rgba(255,255,255, 1)'
                },
                // 不显示Y轴的线
                axisLine: {
                    show: false
                },
            },
            {
                data: [702, 350, 610, 793, 664],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: 10,
                    color: 'rgba(255,255,255, 1)'
                },
                // 不显示Y轴的线
                axisLine: {
                    show: false
                },
            }
        ],
        series: [
            {
                name: "条",
                type: 'bar',
                barCatrgoryGap: 50,
                yAxisIndex: 0,
                barWidth: 11,// 柱形的宽度
                data: [70, 34, 60, 78, 69],
                //改柱形为圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        var m = colors.length;
                        return colors[params.dataIndex % m];
                    }

                },
                // 柱子中文字
                label: {
                    show: true,
                    position: 'inside',
                    // {c}会自动解析数据
                    formatter: "{c}%",
                    fontSize: 8
                },
            },
            {
                name: "框",
                type: 'bar',
                barCatrgoryGap: 50,
                barWidth: 13,// 柱形的宽度
                data: [100, 100, 100, 100, 100],
                //改柱形为圆角
                yAxisIndex: 1,
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 2,
                    barBorderRadius: 20
                }
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
(function () {
    // 柱状图
    var myChart = echarts.init(document.getElementById('chart3'));
    let month = [];
    for (let i = 0; i < 12; i++) {
        month.push(`${i}月`)
    }
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#4c9bfd',
            },
            data: ['新增粉丝', '新增游客'],
            right: '10%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: month,
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd',
                fontSize: 10
            },
            axisLine: {
                show: false
            },
            boundaryGap: false //去除间隔线
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd',
                fontSize: 10
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 20, 120],
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgb(102, 51, 153)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgb(175, 81, 187)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                name: '新增游客',
                type: 'line',
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
                lineStyle: {
                    color: {
                        // type: 'radial',
                        // x: 0.5,
                        // y: 0.5,
                        // r: 0.5,
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgb(86, 119, 230)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgb(86, 184, 230)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
(function () {
    // 柱状图
    var myChart = echarts.init(document.getElementById('chart4'));
    let month = [];
    for (let i = 0; i < 30; i++) {
        month.push(i)
    }
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: '0%',
            textStyle: {
                color: 'rgba(255,255,244, 0.5)',
                fontSize: 10
            }
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        // 配置整个图表的位置
        grid: {
            left: '10',
            right: '10',
            top: '30',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: month,
                axisLabel: {
                    textStyle: {
                        color: 'rgba(233,233,233, 0.5)',
                        fontSize: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(233,233,233, 0.5)',
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: 'rgba(233,233,233, 0.5)',
                        fontSize: 10
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(233,233,233, 0.5)',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(233,233,233, 0.1)',
                    }
                }
            }
        ],
        series: [
            {
                name: '播放量',
                type: 'line',
                smooth: true, //曲线圆滑
                areaStyle: {},
                data: [34, 40, 34, 40, 34, 60, 34, 40, 69, 40, 34, 40, 34, 50, 34, 40, 34, 40, 34, 40, 34, 40, 34, 40, 34, 40, 44, 50, 60, 40],
                lineStyle: {
                    color: '#0184d5',
                    width: 2,
                },
                // 填充区域的样式
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(1,132,213,0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(1,132,213,0.1)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,0,0,0.1)'
                },
                symbol: 'circle', // 设置拐点为小圆点
                symbolSize: 3, //设置拐点的大小
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#0184d5',
                    borderColor: 'rgba(211, 220, 107,0.1)',
                    borderWidth: 10
                },
                // 开始时候不显示拐点，鼠标移入再显示
                showSymbol: false
            },
            {
                name: '转发量',
                type: 'line',
                smooth: true, //曲线圆滑
                data: [182, 60, 250, 180, 40, 30, 10, 182, 250, 180, 40, 30, 250, 180, 90, 234, 130, 182, 191, 234, 40, 30, 91, 234, 130, 182, 191, 23, 91, 234],
                lineStyle: {
                    color: '#00d887',
                    width: 2,
                },
                // 填充区域的样式
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(0,216,135,0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0,216,135,0.1)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,0,0,0.1)'
                },
                symbol: 'circle', // 设置拐点为小圆点
                symbolSize: 3, //设置拐点的大小
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#00d887',
                    borderColor: 'rgba(211, 220, 107,0.1)',
                    borderWidth: 10
                },
                // 开始时候不显示拐点，鼠标移入再显示
                showSymbol: false
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
(function () {
    var myChart = echarts.init(document.getElementById('chart5'));

    option = {
        color: ['#065aab', '#065eab', '#0682ab', '#0696ab', '#06a0ab'],
        tooltip: {
            trigger: 'item', // aixs,下面的formatter不会出现效果
            formatter: '{a} <br/>{b}: {c} ({d}%)'// d是百分比
        },
        legend: {
            bottom: '0',
            itemWidth: 5,
            itemHeight: 5,
            orient: 'horizontal',
            data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'], // b
            textStyle: {
                color: 'rgba(255,255,255, 0,5)',
                fontSize: 8
            }
        },
        series: [
            {
                name: '访问来源', // a
                type: 'pie',
                // 设置饼图在容器中的位置
                center: ['50%', '50%'],
                // 内圆半径，外圆半径，百分比是相对于容器的宽度来说
                // radius,[0, 100%]，就完全是填充的饼状图了
                radius: ['45%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false, // 不显示标签文案
                    position: 'center' // 文案的位置,把position去掉，文案就在周围了
                },
                emphasis: {
                    label: { // 圈中的文字
                        show: true,
                        fontSize: 12,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false //不显示连接线，=> 就是文案和饼图的连接线
                },
                data: [
                    { value: 1, name: '0岁以下' },
                    { value: 4, name: '20-29岁' },
                    { value: 2, name: '30-39岁' }, // 2是c
                    { value: 2, name: '40-49岁' }, // 2是c
                    { value: 1, name: '50岁以上' }, // 2是c
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
(function () {
    var myChart = echarts.init(document.getElementById('chart6'));
    option = {
        color: [
            '#006cff',
            '#60cda0',
            '#ed8884',
            '#ff9f7f',
            '#0096ff',
            '#32c5e9',
            '#1d9dff',
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom: '0%',
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 8,
                color: '#fff'
            }

        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '49%'],
                roseType: 'raduis', //半径模式
                data: [
                    { value: 10, name: '云南' },
                    { value: 5, name: '北京' },
                    { value: 15, name: '陈情' },
                    { value: 25, name: 'CV' },
                    { value: 20, name: '殇云' },
                    { value: 30, name: '美图' },
                    { value: 40, name: '策勒' }
                ],
                label: {
                    fontSize: 8
                },
                labelLine: {
                    // 连接线的长度
                    length: 8
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
}
)();
