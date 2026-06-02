const ctx = document.getElementById('chart');
const code = document.getElementById('chart-code');

const datasetContainer = document.getElementById('dataset-container');

const Fruits = ['apple', 'orange', 'pear', 'grape', 'dragon fruit'];
const FruitData = [10, 14, 3, 8, 9];
const FruitAdjective = 'Votes for Most Delicious'
const FruitColor = '#880000';

// Initial Chart Data
const ChartData = {
  type: 'bar',
  data: {
    labels: Fruits,
    datasets: [{
      label: 'Fruit',
      data: FruitData,
      borderWidth: 2
    }]
  },
  defaults: {
    font: {
      size: 20
    }
  },
  options: {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        ticks: {
          font: {
            family: 'Open Sans',
            size: 12,
            weight: 'normal'
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: 'Open Sans',
            size: 12,
            weight: 'normal'
          }
        }
      },
      y2: {
        display: false,
        ticks: {
          font: {
            family: 'Open Sans',
            size: 12,
            weight: 'normal'
          }
        }
      },
      r: {
        display: false,
        ticks: {
          font: {
            family: 'Open Sans',
            size: 12,
            weight: 'normal'
          }
        }
      }
    },
    plugins: {
      title: {
        display: false,
        align: 'center',
        position: 'top',
        text: '',
        font: {
          // family: 'Oxygen',
          family: "Oxygen",
          size: 24
        }
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: {
          font: {
            // family: 'Oxygen',
            family: "Oxygen",
            size: 16
          }
        }
      },
      subtitle: {
        display: false,
        align: 'center',
        position: 'bottom',
        text: '',
        font: {
          // family: 'Oxygen',
          family: "Oxygen",
          size: 16
        }
      },
      tooltip: {
        titleFont: {
          family: 'Open Sans',
          size: 14,
          weight: '600'
        },
        bodyFont: {
          family: 'Open Sans',
          size: 14
        }
      }
    }
  }
}

// Raw Data from Uploaded CSV
const RawDataArray = [];
const DataOptions = {
  headerRow: false,
  headerKeys: false,
  multiDatasets: false,
  labelColumn: false,
  datasetLabelColumns: false,
  datasetLabelRows: false
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

// Read the Uploaded CSV File
// Convert the File Into an Array
function readCsvFile(event) {
  delete ChartData.data;
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const content = event.target.result;
    const FirstArray = content.trim().split((/\r?\n/));
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

    setInitialVariables();
    manageCsvData();
    updateVariables();
  };
  reader.readAsText(file);
}

// Read and Set the Data Settings
function setInitialVariables() {
  if (typeof RawDataArray[1][0] !== 'number') {
    DataOptions.labelColumn = true;
  }
  else {
    ChartData.options.scales.x.type = 'linear';
  }
  // if (typeof RawDataArray[0][1] !== 'number') {
  //   DataOptions.headerRow = true;
  // }
  // if (RawDataArray[0].length >= 3) {
  //   DataOptions.multiDatasets = true;
  // }
}

// TODO: RENAME
// Convert the Raw Data Into Bubble Chart Compatible Data
function createBubbleChartData() {
  console.log('Create Bubble Chart Function');

  const processedData = {
    labels: [],
    datasets: []
  }

  const EditedArray = RawDataArray.slice(1)

  try {
  for (let i = 0; i < EditedArray.length; i++) {
    let values = {};
    for (let j = 1; j < EditedArray[i].length; j++) {
      values[RawDataArray[0][j]] = EditedArray[i][j];
    }
    processedData.datasets.push({ data: [] });
    processedData.datasets[i].data.push(values);
    processedData.datasets[i].label = EditedArray[i][0]
    console.log(processedData);
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

function useFirstRowAsKeys() {
  console.log('Use First Row As Keys');

  const processedData = {
    labels: [],
    datasets: []
  }

  const EditedArray = RawDataArray.slice(1)

  try {
    for (let i = 0; i < EditedArray.length; i++) {
      let values = {};
      for (let j = 1; j < EditedArray[i].length; j++) {
        values[RawDataArray[0][j]] = EditedArray[i][j];
      }
      processedData.datasets.push({ data: [] });
      processedData.datasets[i].data.push(values);
      processedData.datasets[i].label = EditedArray[i][0]
      console.log(processedData);
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

// 
function useFirstRowAsDatasets() {
  console.log('Use First Row As Datasets');

  const processedData = {
    labels: [],
    datasets: [],
  }

  const EditedArray = RawDataArray.slice(1);

  for (let j = 1; j < EditedArray[0].length; j++) {
    processedData.datasets.push({ data: [] });
  }

  try {
    for (let i = 0; i < EditedArray.length; i++) {
      processedData.labels.push(EditedArray[i][0]);
      for (let j = 1; j < EditedArray[i].length; j++) {
        const datasetIndex = j - 1;
        processedData.datasets[datasetIndex].data.push(EditedArray[i][j]);
      }
    }

    ChartData.data = processedData;
  }
  catch (error) {
    console.log('Failed to Update CSV Data');
    console.log(error);   
  }

  VisualChart.update();
  code.value = JSON.stringify(ChartData, undefined, 2);
}

function useFirstColumnAsLabels() {
  console.log('Use First Column As Datasets');

  const processedData = {
    labels: [],
    datasets: [],
  }

  const EditedArray = RawDataArray.slice(1);
  console.log(EditedArray);

  for (let j = 1; j < EditedArray[0].length; j++) {
    processedData.datasets.push({ data: [], label: RawDataArray[0][j] });
  }

  try {
    for (let i = 0; i < EditedArray.length; i++) {
      processedData.labels.push(EditedArray[i][0]);
      console.log('i:', i);
      for (let j = 1; j < EditedArray[i].length; j++) {
        const datasetIndex = j - 1;
        processedData.datasets[datasetIndex].data.push(EditedArray[i][j]);
        // processedData.datasets[datasetIndex].label = EditedArray[i][0];
      }
      console.log(processedData);
    }

    ChartData.data = processedData;
  }
  catch (error) {
    console.log('Failed to Update CSV Data');
    console.log(error);   
  }

  VisualChart.update();
  code.value = JSON.stringify(ChartData, undefined, 2);
}

function useFirstRowAsLabels() {
  console.log('Use First Column As Datasets');

  const processedData = {
    labels: [],
    datasets: [],
  }

  const EditedArray = RawDataArray.slice(1);
  console.log(EditedArray);

  for (let j = 1; j < EditedArray[0].length; j++) {
    processedData.labels.push(RawDataArray[0][j]);
  }

  try {
    for (let i = 0; i < EditedArray.length; i++) {
      processedData.datasets.push({ data: [] });
      processedData.datasets[i].label = EditedArray[i][0];
      console.log('i:', i);
      for (let j = 1; j < EditedArray[i].length; j++) {
        const datasetIndex = j - 1;
        processedData.datasets[i].data.push(EditedArray[i][j]);
      }
      console.log(processedData);
    }

    ChartData.data = processedData;
  }
  catch (error) {
    console.log('Failed to Update CSV Data');
    console.log(error);   
  }

  VisualChart.update();
  code.value = JSON.stringify(ChartData, undefined, 2);
}

// Manage Data from CSV
function manageCsvData() {
  try {
    // Import the Data Options & set the initial empty data object
    const { headerRow, labelColumn, multiDatasets, headerKeys, datasetLabelColumns, datasetLabelRows } = DataOptions;
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

    if (headerKeys) {
      useFirstRowAsKeys();
      return;
    }
    if (multiDatasets) {
      useFirstRowAsDatasets();
      return;
    }
    if (datasetLabelColumns) {
      useFirstColumnAsLabels();
      return;
    }
    if (datasetLabelRows) {
      useFirstRowAsLabels();
      return;
    }
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
        console.log("Bubble Chart")
        let values = {};
        for (let j = 1; j < EditedArray[i].length; j++) {
          values[RawDataArray[0][j]] = EditedArray[i][j];
          newLabel = EditedArray[i][0];
          console.log(RawDataArray[0][j])
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

    const dataInputWrap = document.createElement('span');
    const dataInput = document.createElement('input');
    const dataInputText = document.createElement('p');

    const labelInputWrap = document.createElement('span');
    const labelInput = document.createElement('input');
    const labelInputText = document.createElement('p');

    const colorInputWrap = document.createElement('span');
    const backgroundColorInput = document.createElement('input');
    const backgroundColorInputText = document.createElement('p');
    const borderColorInput = document.createElement('input');
    const borderColorInputText = document.createElement('p');
    const borderWidthInput = document.createElement('input');

    // Set and Allow Alpha in the Color Pickers
    backgroundColorInput.setAttribute('alpha', '');
    borderColorInput.setAttribute('alpha', '');

    dataInput.value = dataset.data.toString();
    labelInput.value = dataset.label ?
      dataset.label.toString() :
      'Undefined';
    backgroundColorInput.value = dataset.backgroundColor.toString();
    console.log(dataset.backgroundColor.toString());
    borderColorInput.value = dataset.borderColor.toString();
    borderWidthInput.value = dataset.borderWidth
      ? dataset.borderWidth.toString()
      : '2';

    containerDiv.classList = 'chart-dataset';
    dataInput.type = 'text';
    labelInput.type = 'text';
    backgroundColorInput.type = 'color';
    borderColorInput.type = 'color';
    borderWidthInput.type = 'number';

    dataInputText.innerText = 'Dataset';
    labelInputText.innerText = 'Dataset Label';
    backgroundColorInputText.innerText = 'Dataset Color';
    borderColorInputText.innerText = 'Dataset Border Color';

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

    // Add Input Wraps to the Container
    containerDiv.appendChild(labelInputWrap);
    containerDiv.appendChild(dataInputWrap);
    containerDiv.appendChild(colorInputWrap);

    labelInputWrap.appendChild(labelInputText);
    labelInputWrap.appendChild(labelInput);
    
    dataInputWrap.appendChild(dataInputText);
    dataInputWrap.appendChild(dataInput);
    
    colorInputWrap.appendChild(backgroundColorInputText);
    colorInputWrap.appendChild(backgroundColorInput);
    colorInputWrap.appendChild(borderColorInputText);
    colorInputWrap.appendChild(borderColorInput);
    colorInputWrap.appendChild(borderWidthInput);


    datasetContainer.insertAdjacentElement('beforeend', containerDiv);

    console.log(dataset);
  }
  // const newDatasetDetails = document.createElement('details');
  // const newDatasetSummary = document.createElement('summary');
  // newDatasetSummary.value = 'New Dataset!'
  // newDatasetDetails.appendChild(newDatasetSummary);

}

// Update all elements to reflect the Chart Options
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

function updateDataOptions() {
  const dataInputs = document.querySelectorAll('.data-options');
  for (let i = 0; i < dataInputs.length; i++) {
    const option = dataInputs[i].dataset.variable;

    if (option in DataOptions) {
      dataInputs[i].checked = DataOptions[option];
      console.log(DataOptions[option], option, dataInputs[i])
    }
  }

  updateDataOptions();
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