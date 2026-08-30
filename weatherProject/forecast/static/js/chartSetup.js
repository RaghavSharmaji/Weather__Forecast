document.addEventListener("DOMContentLoaded", function () {

    // Get forecast times
    const labels = Array.from(
        document.querySelectorAll(".forecast-time")
    ).map(element => element.textContent.trim());

    // Get forecast temperatures
    const temperatures = Array.from(
        document.querySelectorAll(".forecast-temperatureValue")
    ).map(element => parseFloat(element.textContent.trim()));

    const ctx = document.getElementById("chart");

    new Chart(ctx, {
        type: "line",

        data: {
            labels: labels,

            datasets: [{
                label: "Celsius Degrees",
                data: temperatures,

                borderColor: "#ff7900",
                backgroundColor: "#ff7900",

                borderWidth: 2,

                pointRadius: 4,
                pointHoverRadius: 6,
                pointHitRadius: 10,

                tension: 0.4
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            interaction: {
                mode: "nearest",
                intersect: true
            },

            plugins: {

                legend: {
                    display: false
                },

                tooltip: {
                    enabled: true,

                    callbacks: {
                        title: function (tooltipItems) {
                            return tooltipItems[0].label;
                        },

                        label: function (context) {
                            return "Celsius Degrees: " +
                                   context.parsed.y + "°";
                        }
                    }
                }
            },

            scales: {
                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
});