var savePercent = 20; // Hardcoded save percentage
var spendPercent = 60; // Hardcoded spend percentage
var investPercent = 20; // Hardcoded invest percentage

function calculate() {
  var totalAmount = parseFloat(document.getElementById('total-amount').value);

  var saveAmount = (totalAmount * savePercent) / 100;
  var spendAmount = (totalAmount * spendPercent) / 100;
  var investAmount = (totalAmount * investPercent) / 100;

  document.getElementById('save-amount').textContent = 'Save: $' + saveAmount.toFixed(2);
  document.getElementById('spend-amount').textContent = 'Spend: $' + spendAmount.toFixed(2);
  document.getElementById('invest-amount').textContent = 'Invest: $' + investAmount.toFixed(2);

  // Create the pie chart
  var ctx = document.getElementById('chart').getContext('2d');
  if (window.myChart) {
    // Update existing chart data
    window.myChart.data.datasets[0].data = [saveAmount, spendAmount, investAmount];
    window.myChart.update();
  } else {
    // Create new chart
    window.myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Save', 'Spend', 'Invest'],
        datasets: [{
          label: 'Amount',
          data: [saveAmount, spendAmount, investAmount],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
      },
      options: {
        legend: {
          position: 'right'
        }
      }
    });
  }

  // Toggle visibility of sections
  document.getElementById('input-form').style.display = 'none';
  document.getElementById('results').style.display = 'flex';
}

function goBack() {
  // Toggle visibility of sections
  document.getElementById('input-form').style.display = 'flex';
  document.getElementById('results').style.display = 'none';

  // Clear chart
  var chartContainer = document.getElementById('chart');
  chartContainer.innerHTML = '';

  // Clear input field
  document.getElementById('total-amount').value = '';
}