function calculate() {
  var totalAmount = parseFloat(document.getElementById('total-amount-input').value);
  var investPercent = parseFloat(document.getElementById('invest-input').value);
  var savePercent = parseFloat(document.getElementById('saving-input').value);
  var spendPercent = parseFloat(document.getElementById('spending-input').value);

  var investAmount = (totalAmount * investPercent) / 100;
  var saveAmount = (totalAmount * savePercent) / 100;
  var spendAmount = (totalAmount * spendPercent) / 100;

  document.getElementById('invest-amount').textContent = 'Invest: $' + investAmount.toFixed(2);
  document.getElementById('save-amount').textContent = 'Save: $' + saveAmount.toFixed(2);
  document.getElementById('spend-amount').textContent = 'Spend: $' + spendAmount.toFixed(2);

  // Create the pie chart
  var ctx = document.getElementById('chart').getContext('2d');
  if (window.myChart) {
    // Update existing chart data
    window.myChart.data.datasets[0].data = [investAmount, saveAmount, spendAmount];
    window.myChart.update();
  } else {
    // Create new chart
    window.myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Invest', 'Save', 'Spend'],
        datasets: [{
          label: 'Amount',
          data: [investAmount, saveAmount, spendAmount],
          backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB'],
        }]
      },
      options: {
        legend: {
          position: 'right'
        }
      }
    });
  }

// I'm going to make this donut chart a thing that will take inputs for different investments, Roth IRA,
//Traditional IRA, or just basic

function generateInvestmentChart() {
  var selectedInvestments = [];
  var checkboxes = document.querySelectorAll('.investment-input input[type="checkbox"]:checked');

  checkboxes.forEach(function(checkbox) {
    selectedInvestments.push(checkbox.value);
  });

  var investmentAmount = parseFloat(document.getElementById('investment-amount').value);

  // Create the donut chart
  var ctx = document.getElementById('chart').getContext('2d');
  if (window.myChart) {
    // Update existing chart data
    selectedInvestments.forEach(function(investment) {
      window.myChart.data.labels.push(investment);
      window.myChart.data.datasets[0].data.push(investmentAmount);
    });
    window.myChart.update();
  } else {
    // Create new chart
    var data = {
      labels: selectedInvestments,
      datasets: [{
        label: 'Amount',
        data: Array(selectedInvestments.length).fill(investmentAmount),
        backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB', '#FF9F40'],
      }]
    };

    window.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        legend: {
          position: 'right'
        }
      }
    });
  }

  // Clear input field
  document.getElementById('investment-amount').value = '';
}

  // Toggle visibility of sections
  document.getElementById('input-form').style.display = 'none';
  document.getElementById('results').style.display = 'flex';
}

function goBack() {
  // Toggle visibility of sections
  document.getElementById('input-form').style.display = 'flex';
  document.getElementById('results').style.display = 'none';

  // Clear charts
  if (window.myChart) {
    window.myChart.destroy();
    window.myChart = null;
  }
  if (window.myDonutChart) {
    window.myDonutChart.destroy();
    window.myDonutChart = null;
  }

  // Clear input fields
  document.getElementById('total-amount-input').value = '';
  document.getElementById('invest-input').value = '';
  document.getElementById('saving-input').value = '';
  document.getElementById('spending-input').value = '';
}