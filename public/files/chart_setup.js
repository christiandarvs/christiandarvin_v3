document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("langChart");

  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Python", "C++", "Bash", "Go"],
        datasets: [
          {
            data: [10, 9, 4, 1],
            backgroundColor: ["#4C72B0", "#DD8452", "#55A868", "#C44E52"],
            borderRadius: 4,
            barThickness: 12,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            display: false,
            grid: { display: false },
            max: 10,
          },
          y: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              font: {
                family: "system-ui, -apple-system, sans-serif",
                size: 13,
              },
              color: "#4b5563",
            },
          },
        },
      },
    });
  }
});
