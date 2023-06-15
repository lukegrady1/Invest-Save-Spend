var savePercent = 20; // Hardcoded save percentage
var spendPercent = 10; // Hardcoded spend percentage
var investPercent = 70; // Hardcoded invest percentage

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
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Invest', 'Save', 'Spend'],
      datasets: [{
        label: 'Amount',
        data: [investAmount, saveAmount, spendAmount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }]
    },
    options: {
      legend: {
        position: 'right'
      }
    }
  });

  document.getElementById('results').style.display = 'block';
}