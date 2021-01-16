

d3.json("samples.json").then(function (data) {
  console.log(data);


  d3.selectAll("#selDataset").on("change", updatePlotly);

  function updatePlotly() {
    let dropdownMenu = d3.select("#selDataset");
    let data_id = dropdownMenu.property("value");

    let otu_ids = [];
    let sample_values = [];
    for (i = 0; i < data.samples.length; i++) {
      if (data_id == data.samples[i].id) {
        let sliced_samples = data.samples[i].sample_values.slice(0, 10);
        let sliced_otu_ids = data.samples[i].otu_ids.slice(0, 10);
        otu_ids.push(sliced_otu_ids);
        sample_values.push(sliced_samples);

      };
    };

  };

  console.log(otu_ids);
  console.log(ids);

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