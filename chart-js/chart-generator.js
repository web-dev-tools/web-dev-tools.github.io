// const { faker } = window;

const ctx = document.getElementById('chart');
const code = document.getElementById('chart-code');

const Fruits = ['apple', 'orange', 'pear', 'grape', 'dragon fruit'];
const FruitData = [10, 14, 3, 8, 9];
const FruitAdjective = 'Votes for Most Delicious'
const FruitColor = '#45000';

// Initial Chart Data
const ChartData = {
  type: 'line',
  data: {
    labels: Fruits,
    datasets: [{
      label: 'Ad',
      data: FruitData,
      backgroundColor: FruitColor,
      borderColor: FruitColor,
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: false,
        align: 'center',
        text: '',
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center'
      }
    }
  }
}

// Raw Data from Uploaded CSV
const RawDataArray = [];
const DataOptions = {
  headerRow: true,
  multiDatasets: false,
  labelColumn: false
}

// Create the Chart and the Code Block
let VisualChart = new Chart(ctx, ChartData);
code.innerText = JSON.stringify(ChartData, null, 2);

// Update the Chart Type
function changeChartType(event) {
  VisualChart.destroy();
  ChartData.type = event.target.value
  VisualChart = new Chart(ctx, ChartData);
}

// Dynamically Change/Update Any Option
function changeChartOption(event) {

  // Set the value to either the value of checked or generic value
  const isCheckbox = event.srcElement.type === 'checkbox';
  const value = isCheckbox
    ? event.target.checked
    : event.target.value;

  const option = event.target.id;

  const path = [...option.split('.')]
  path.reduce((obj, key, i) => {
    if (i === path.length - 1) {
      obj[key] = value;
    } else {
      obj[key] ??= {};
      return obj[key];
    }
  }, ChartData);

  // Update the Chart and the Code Block
  VisualChart.update();
  code.innerText = JSON.stringify(ChartData, null, 2);
}
// Dynamically Change/Update Any Option
function changeDataOption(event) {

  console.log('Changing Data Options');
  // Set the value to either the value of checked or generic value
  const isCheckbox = event.srcElement.type === 'checkbox';
  const value = isCheckbox
    ? event.target.checked
    : event.target.value;

  const option = event.target.id;

  const path = [...option.split('.')]
  path.reduce((obj, key, i) => {
    if (i === path.length - 1) {
      obj[key] = value;
    } else {
      obj[key] ??= {};
      return obj[key];
    }
  }, DataOptions);

  // Update the Chart and the Code Block
  if (RawDataArray.length !== 0) {
    manageCsvData();
    return;
  }
  VisualChart.update();
  code.innerText = JSON.stringify(ChartData, null, 2);
}

function readCsvFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const content = event.target.result;
    const FirstArray = content.split('\n');

    for (const row of FirstArray) {
      RawDataArray.push(row.split(','));
    };

    manageCsvData();
  };
  reader.readAsText(file);
}

// Manage Data from CSV
function manageCsvData() {
  const { headerRow, labelColumn, multiDatasets } = DataOptions;
  const EditedArray = headerRow
    ? RawDataArray.slice(1, -1)
    : RawDataArray;

  const headers = RawDataArray[0];
  const DataArray = [];
  const LabelArray = [];
  for (const row of EditedArray) {
    LabelArray.push(row[0]);
    DataArray.push(row[1]);
  }
  if (headerRow && labelColumn) {
    const newData = [{ label: RawDataArray[0][1], data: DataArray }];
    ChartData.data.labels = LabelArray;
    ChartData.data.datasets = newData;
  }
  if (headerRow && !labelColumn) {
    const newData = [{ label: RawDataArray[0][1], data: DataArray }];
    ChartData.data.labels = LabelArray;
    ChartData.data.datasets = newData;
  }
  if (!headerRow && labelColumn) {
    const newData = [{ data: DataArray }]
    ChartData.data.datasets = newData;
    ChartData.data.labels = LabelArray
  }

  VisualChart.update();
  code.innerText = JSON.stringify(ChartData, null, 2);
}

// Dynamically Add New DataSet
function insertDataSet() {
  console.log('Insert Dataset')
  const newDatasetDetails = document.createElement('details');
  const newDatasetSummary = document.createElement('summary');
  newDatasetSummary.innerText = 'New Dataset!'
  newDatasetDetails.appendChild(newDatasetSummary);

  const lastDataset = document.querySelector('#chart-dataset-1');
  lastDataset.insertAdjacentElement('afterend', newDatasetDetails);
}

// Bind Event Handlers
const chartFileUpload = document.getElementById('chart-csv-upload').addEventListener('change', (event) => readCsvFile(event));
const chartTypeChanger = document.getElementById('select-change-chart-type').addEventListener('change', (event) => changeChartType(event));
const chartInputAddDataset = document.getElementById('button-insert-dataset').addEventListener('click', () => insertDataSet());
const chartInputs = document.querySelectorAll('.form-select, .form-input, input.form-switch');
for (const element of chartInputs) {
  element.addEventListener('change', (event) => changeChartOption(event));
}
const dataInputs = document.querySelectorAll('.data-options');
for (const element of dataInputs) {
  element.addEventListener('change', (event) => changeDataOption(event));
}