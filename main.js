document.addEventListener('DOMContentLoaded', function () {
    function handleFile(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            generateDashboard(jsonData);
        };

        reader.readAsArrayBuffer(file);
    }

    const fileInput = document.getElementById('file-input');
    fileInput.addEventListener('change', handleFile);

    function generateDashboard(data) {
        const dashboardContainer = document.getElementById('dashboard-container');
    
        // Extract labels (categories) from the first column
        const labels = data.slice(1).map(row => row[0]);
    
        // Extract datasets from the subsequent columns
        const datasets = [];
        for (let i = 1; i < data[0].length; i++) {
            const dataset = {
                label: `Dataset ${i}`,
                data: data.slice(1).map(row => row[i]),
                backgroundColor: getRandomColor(),
                barThickness: 10,  // Adjust this value for space between bars
            };
            datasets.push(dataset);
        }
    
        // Create a grouped bar chart with increased spacing
        const chartContainer = document.createElement('canvas');
        chartContainer.width = 600;
        chartContainer.height = 3400;
        dashboardContainer.appendChild(chartContainer);
    
        const ctx = chartContainer.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets,
            },
            options: {
                indexAxis: 'y',  // Set indexAxis to 'y' to switch to horizontal bar chart
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            fontSize: 10,  // Set the font size for x-axis labels
                        },
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            fontSize: 10,  // Set the font size for y-axis labels
                        },
                    },
                },
            },
        });
    }
    
    
    

    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
