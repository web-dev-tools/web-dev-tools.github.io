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
  labelColumn: true
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
    const FirstArray = content.trim().split('\n');
    const SecondArray = []

    for (const row of FirstArray) {
      const values = row.split(',');

      const convertedValues = values.map(value => {
        const num = Number(value);
        return Number.isNaN(num)
          ? value
          : num;
      });
      RawDataArray.push(convertedValues);
    };

    manageCsvData();
  };
  reader.readAsText(file);
}

// Manage Data from CSV
function manageCsvData() {
  try {
    const { headerRow, labelColumn, multiDatasets } = DataOptions;
    const processedData = {
      labels: [],
      datasets: []
    }
    let tempLabels = [];

    const EditedArray = headerRow
      ? RawDataArray.slice(1)
      : RawDataArray;

    if (headerRow) {
      const headers = RawDataArray[0].slice(1);
      processedData.labels = headers;
    }

    if (!multiDatasets) {
      processedData.datasets.push({ data: [] });
    }

    for (let i = 0; i < EditedArray.length; i++) {
      const datasetName = labelColumn
        ? EditedArray[i][0]
        : `Dataset ${i + 1}`;
      tempLabels.push(EditedArray[i][0]);
      const values = EditedArray[i].slice(1).map(Number);
      console.log('Values', values, 'Multi', multiDatasets);

      if (multiDatasets) {

        processedData.datasets.push({
          label: labelColumn ? '' : datasetName,
          data: values
        });
      }
      else {
        processedData.datasets[0].data.push(values[0]);
      }


      // console.log(datasetName);
    }
    if (labelColumn) {
      processedData.labels = tempLabels;
    }

    // }

    // if (headerRow && labelColumn) {
    //   const headers = RawDataArray[0].slice(1);
    //   processedData.labels = headers;

    //   for (let i = 1; i < RawDataArray.length; i++) {
    //     const datasetName = RawDataArray[i][0];
    //     const values = RawDataArray[i].slice(1).map(Number);

    //     processedData.datasets.push({
    //       label: datasetName,
    //       data: values
    //     });

    //   }
    // }
    // else if (headerRow && !labelColumn) {
    //   const datasets = [];

    //   for (let i = 1; i < RawDataArray.length; i++) {
    //     const values = RawDataArray[i].slice().map(Number);

    //     datasets.push({
    //       label: `Dataset ${i + 1}`,
    //       data: values
    //     });
    //   }

    //   processedData.datasets = datasets;
    //   console.log(processedData);

    // }
    // else if (!headerRow && labelColumn) {
    //   for (let i = 0; i < RawDataArray.length; i++) {
    //     const values = RawDataArray[i].slice(1).map(Number);

    //     processedData.datasets.push({
    //       label: RawDataArray[i][0],
    //       data: values
    //     });
    //   }
    // }
    // else if (!headerRow && !labelColumn) {
    //   const values = RawDataArray[0].slice().map(Number);

    //   processedData.datasets.push({
    //     label: 'Single Dataset',
    //     data: values
    //   })
    // }

    ChartData.data = processedData;
    console.log(ChartData.data);
    console.log(ChartData);
  }
  catch (error) {
    console.log('Failed CSV Data');
    console.log(error);
  }
  // const EditedArray = headerRow
  //   ? RawDataArray.slice(1, -1)
  //   : RawDataArray;

  // const headers = RawDataArray[0];
  // const DataArray = [];
  // const LabelArray = [];

  // console.log(EditedArray, RawDataArray);

  // if (!multiDatasets) {
  //   ChartData.data.labels = null;
  //   ChartData.data.datasets.slice(0, -1);
  //   ChartData.data.datasets = [{ data: RawDataArray }];
  //   VisualChart.update();
  //   code.innerText = JSON.stringify(ChartData, null, 2);
  //   return;
  // }
  // for (const row of EditedArray) {
  //   LabelArray.push(row[0]);
  //   DataArray.push(row[1]);
  // }
  // if (headerRow && labelColumn) {
  //   const newData = [{ label: RawDataArray[0][1], data: DataArray }];
  //   ChartData.data.labels = LabelArray;
  //   ChartData.data.datasets = newData;
  // }
  // if (headerRow && !labelColumn) {
  //   const newData = [{ label: RawDataArray[0][1], data: DataArray }];
  //   ChartData.data.labels = LabelArray;
  //   ChartData.data.datasets = newData;
  // }
  // if (!headerRow && labelColumn) {
  //   const newData = [{ data: DataArray }]
  //   ChartData.data.datasets = newData;
  //   ChartData.data.labels = LabelArray
  // }

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