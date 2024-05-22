document.addEventListener ("DOMContentLoaded", function() {
    var ctx = document.getElementById("graficaPeso").getContext("2d");
    var graficaPeso = new Chart(ctx,{
        type: "line",
        data: {
            datasets: [{
                label: 'Peso',
                data: [
                    {x: 1, y: 80},
                    {x: 2, y: 75},
                    {x: 3, y: 72},
                    {x: 4, y: 70},
                    {x: 5, y: 68},
                    {x: 6, y: 64},
                    {x: 7, y: 61},
                    {x: 8, y: 60},
                    {x: 9, y: 59},
                    {x: 10, y: 59},
                    {x: 11, y: 58},
                    {x: 12, y: 56}
                ],
                backgroundColor: 'rgb(66, 134, 244)',
                borderColor: 'rgb(66, 134, 244)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        display:  false,
                    }
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    })
})
document.addEventListener ("DOMContentLoaded", function() {
    var ctx = document.getElementById("graficaCirculo1").getContext("2d");
    var graficaPeso = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ['Tomados', 'Faltantes'],
            datasets: [{
                label: 'Vasos',
                data: [70, 30],
                backgroundColor: [
                    'rgb(87, 183, 189)',
                    'rgb(248, 249, 255)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display:false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw;
                            return label;
                        }
                    }
                }
            }
        }
    });
})
document.addEventListener ("DOMContentLoaded", function() {
    var ctx = document.getElementById("graficaCirculo2").getContext("2d");
    var graficaPeso = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ['Realizados', 'Faltantes'],
            datasets: [{
                label: 'Entrenos',
                data: [1,0],
                backgroundColor: [
                    'rgb(121, 89, 212)',
                    'rgb(248, 249, 255)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display:false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw;
                            return label;
                        }
                    }
                }
            }
        }
    });
})
document.addEventListener ("DOMContentLoaded", function() {
    var ctx = document.getElementById("graficaCirculo3").getContext("2d");
    var graficaPeso = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ['Cargados', 'Faltantes'],
            datasets: [{
                label: 'Kilos',
                data: [125, 75],
                backgroundColor: [
                    'rgb(253, 93, 91)',
                    'rgb(248, 249, 255)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display:false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw;
                            return label;
                        }
                    }
                }
            }
        }
    });
})