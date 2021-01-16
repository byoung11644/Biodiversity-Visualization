

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

d3.json("samples.json").then(function (data) {
  console.log(data);


  let sample_values = data.samples;
  let otu_ids = []
  for (i = 0; i < data.samples.length; i++) {
    otu_ids.push(data.samples[i].otu_ids);
  };
  // let otu_ids = unpack(data.samples, 1);
  let otu_labels = data.samples.otu_lables;
  let ids = data.names;

  console.log(otu_ids);
  console.log(ids);

  // sample_values.sort(function compareFunction(firstNum, secondNum) {
  //   return secondNum - firstNum;
  // });
  
  console.log(sample_values);

  // let trace1 = {
  //   x: otu_ids,
  //   y: sample_values,
  //   type: "bar"
  // };
  // let bar_data = [trace1];
  // let layout = {
  //   orientation: "h"
  // };

  // Plotly.newplot("bar", bar_data, layout)


});