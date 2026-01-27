const ctx = document.getElementById('chart');
const code = document.getElementById('chart-code');

const datasetContainer = document.getElementById('dataset-container');

const Fruits = ['apple', 'orange', 'pear', 'grape', 'dragon fruit'];
const FruitData = [10, 14, 3, 8, 9];
const FruitAdjective = 'Votes for Most Delicious'
const FruitColor = '#45000';

// Initial Chart Data
const ChartData = {
  type: 'bar',
  data: {
    labels: Fruits,
    datasets: [{
      label: 'Fruit',
      data: FruitData,
      backgroundColor: FruitColor,
      borderColor: FruitColor,
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true
      },
      y2: {
        display: false
      }
    },
    plugins: {
      title: {
        display: false,
        align: 'center',
        position: 'top',
        text: '',
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center'
      },
      subtitle: {
        display: false,
        align: 'center',
        position: 'bottom',
        text: ''
      }
    }
  }
}

// Raw Data from Uploaded CSV
const RawDataArray = [];
const DataOptions = {
  headerRow: true,
  headerKeys: false,
  multiDatasets: false,
  labelColumn: true
}

// Create the Chart and the Code Block
let VisualChart = new Chart(ctx, ChartData);
code.value = JSON.stringify(ChartData, undefined, 2);

// Update the Chart Type
function changeChartType(event) {
  VisualChart.destroy();
  ChartData.type = event.target.value
  VisualChart = new Chart(ctx, ChartData);
  updateVariables();
}

// Dynamically Change/Update Any Option
function changeChartOption(event) {

  // Set the value to either the value of checked or generic value
  const isCheckbox = event.srcElement.type === 'checkbox';
  const value = isCheckbox
    ? event.target.checked
    : event.target.value;

  const option = event.target.dataset.variable;

  // AI Magic
  const path = [...option.split('.')]
  path.reduce((obj, key, i) => {
    const isLast = i === path.length - 1;
    const nextKey = path[i + 1];

    if (isLast) {
      obj[key] = value;
      return;
    }

    // If the current slot doesn't exist, create it
    if (obj[key] == null) {
      // If the next key is a number, we need an array
      obj[key] = typeof nextKey === 'number' ? [] : {};
    }

    return obj[key];
  }, ChartData);
  console.log(path);

  // Update the Chart and the Code Block
  VisualChart.update();
  updateVariables();
  code.value = JSON.stringify(ChartData, undefined, 2);
}

// Dynamically Change/Update Any Option
function changeDataOption(event) {

  console.log('Changing Data Options');
  // Set the value to either the value of checked or generic value
  const isCheckbox = event.srcElement.type === 'checkbox';
  const value = isCheckbox
    ? event.target.checked
    : event.target.value;

  const option = event.target.dataset.variable;

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
  updateVariables();
  code.value = JSON.stringify(ChartData, undefined, 2);
}

function readCsvFile(event) {
  delete ChartData.data;
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const content = event.target.result;
    const FirstArray = content.trim().split('\n');
    const SecondArray = []
    RawDataArray.splice(0, RawDataArray.length)
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
    updateVariables();
  };
  reader.readAsText(file);
}

// Manage Data from CSV
function manageCsvData() {
  try {
    // Import the Data Options & set the initial empty data object
    const { headerRow, labelColumn, multiDatasets, headerKeys } = DataOptions;
    const processedData = {
      labels: [],
      datasets: []
    }
    let tempLabels = [];

    // Manipulate the data based on the Data Options
    // Slice an EditedArray to manage the headerRow option
    const EditedArray = headerRow
      ? RawDataArray.slice(1)
      : RawDataArray;

    if (headerRow && !headerKeys) {
      const headers = RawDataArray[0].slice(1);
      processedData.labels = headers;
    }

    if (!multiDatasets) {
      if (headerRow) {
        processedData.datasets.push({ label: RawDataArray[0][1], data: [] });
      }
      else if (!headerKeys) {
        processedData.datasets.push({ data: [] });
      }
    }

    for (let i = 0; i < EditedArray.length; i++) {
      const datasetName = labelColumn
        ? EditedArray[i][0]
        : `Dataset ${i + 1}`;
      tempLabels.push(EditedArray[i][0]);

      // TODO FIX SLICE FOR LABEL COLUMNS
      const values = EditedArray[i].slice(1).map(Number);
      console.log('Values', values, 'Multi', multiDatasets);

      if (multiDatasets) {

        processedData.datasets.push({
          label: labelColumn ? '' : datasetName,
          data: values
        });
      }
      else if (headerKeys) {
        let values = {};
        for (let j = 1; j < EditedArray[i].length; j++) {
          values[RawDataArray[0][j]] = EditedArray[i][j];
          newLabel = EditedArray[i][0];
        }
        console.log(values, 'Values;');
        processedData.datasets[0].data.push(values);
      }
      else {
        processedData.datasets[0].data.push(values[0]);
      }
    }

    if (labelColumn && !headerKeys) {
      processedData.labels = tempLabels;
    }

    ChartData.data = processedData;
  }
  catch (error) {
    console.log('Failed CSV Data');
    console.log(error);
  }

  VisualChart.update();
  code.value = JSON.stringify(ChartData, undefined, 2);
}

// Dynamically Add New DataSet
function insertDataSet() {
  console.log('Insert Dataset')

  datasetContainer.innerHTML = '';
  console.log(datasetContainer);

  for (const [index, dataset] of ChartData.data.datasets.entries()) {
    const containerDiv = document.createElement('div');
    const dataInput = document.createElement('input');
    const labelInput = document.createElement('input');
    const backgroundColorInput = document.createElement('input');
    const borderColorInput = document.createElement('input');
    const borderWidthInput = document.createElement('input');

    dataInput.value = dataset.data.toString();
    labelInput.value = dataset.label.toString();
    backgroundColorInput.value = dataset.backgroundColor.toString();
    borderColorInput.value = dataset.borderColor.toString();
    borderWidthInput.value = dataset.borderWidth
      ? dataset.borderWidth.toString()
      : '#000';

    containerDiv.classList = 'chart-dataset';
    dataInput.type = 'text';
    labelInput.type = 'text';
    backgroundColorInput.type = 'color';
    borderColorInput.type = 'color';
    borderWidthInput.type = 'number';

    dataInput.dataset.variable = `data.datasets.${index}.data`;
    dataInput.addEventListener('input', (event) => changeChartOption(event));

    labelInput.dataset.variable = `data.datasets.${index}.label`;
    labelInput.addEventListener('input', (event) => changeChartOption(event));

    backgroundColorInput.dataset.variable = `data.datasets.${index}.backgroundColor`;
    backgroundColorInput.addEventListener('input', (event) => changeChartOption(event));

    borderColorInput.dataset.variable = `data.datasets.${index}.borderColor`;
    borderColorInput.addEventListener('input', (event) => changeChartOption(event));

    borderWidthInput.dataset.variable = `data.datasets.${index}.borderWidth`;
    borderWidthInput.addEventListener('input', (event) => changeChartOption(event));


    containerDiv.appendChild(labelInput);
    containerDiv.appendChild(dataInput);
    containerDiv.appendChild(backgroundColorInput);
    containerDiv.appendChild(borderColorInput);
    containerDiv.appendChild(borderWidthInput);


    datasetContainer.insertAdjacentElement('beforeend', containerDiv);

    console.log(dataset);
  }
  // const newDatasetDetails = document.createElement('details');
  // const newDatasetSummary = document.createElement('summary');
  // newDatasetSummary.value = 'New Dataset!'
  // newDatasetDetails.appendChild(newDatasetSummary);

}

function updateVariables() {
  const chartInputs = document.querySelectorAll('.form-select, .form-input, input.form-switch');
  for (const element of chartInputs) {
    const isCheckbox = element.type === 'checkbox';
    const isRadio = element.type === 'radio';

    const option = element.dataset.variable;
    // console.log(option);

    // AI Magic
    const path = [...option.split('.')]
    path.reduce((obj, key, i) => {
      const isLast = i === path.length - 1;
      const nextKey = path[i + 1];

      if (isLast) {
        // obj[key] = value;
        if (isCheckbox) {
          element.checked = obj[key];
        }
        else if (isRadio && element.value == obj[key]) {
          element.checked = true;
        }
        else if (isRadio && element.value !== obj[key]) {
          element.checked = false;
        }
        else {
          element.value = obj[key];
        }
        return;
      }

      // If the current slot doesn't exist, create it
      if (obj[key] == null) {
        // If the next key is a number, we need an array
        obj[key] = typeof nextKey === 'number' ? [] : {};
      }

      return obj[key];
    }, ChartData);

    // console.log(element);
  }
}

function updateCode() {
  try {
    const UpdatedData = JSON.parse(code.value);
    ChartData.data = UpdatedData.data;
    ChartData.options = UpdatedData.options;

    VisualChart.update();
    updateVariables();
  }
  catch (error) {
    code.value = JSON.stringify(ChartData, undefined, 2);
    console.log(error);
  }
  console.log('Debounce!');
}

// Debounce Update 
function debounce(callback, delay) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback();
    }, delay)
  }
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

code.addEventListener('change', debounce(updateCode, 500));