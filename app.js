

d3.json("samples.json").then(function (data) {
  console.log(data);

  let selector = d3.select("#selDataset")
    .selectAll("option")
    .data(data.names)
    .enter()
    .append("option")
    .text(function (d) {
      return d;
    });


  let dropdown_id = data.samples[0].id;
  let otu_ids = [];
  let sample_values = [];
  let otu_labels = [];
  for (i = 0; i < 11; i++) {
    otu_ids.push("OTU " + data.samples[0].otu_ids[i].toString());
    sample_values.push(data.samples[0].sample_values[i]);
    otu_labels.push(data.samples[0].otu_labels[i]);
  };

  console.log(dropdown_id);
  console.log(otu_ids);
  console.log(sample_values);
  console.log(otu_labels);

  let plot_data = [{
    type: "bar",
    x: sample_values,
    y: otu_ids,
    text: otu_labels,
    orientation: 'h',
    transforms: [{
      type: 'sort',
      target: 'y',
      order: 'descending'
    }]
  }];

  Plotly.newPlot("bar", plot_data);


  d3.select("#selDataset").on("change", optionChanged);

  function optionChanged() {
    let dropdown_id = d3.select("#selDataset").node().value;
    // let dropdown_id = dropdown.value;
    // update("onchange", this.value);
    console.log(dropdown_id);

    // for (i = 0; i < data.samples.length; i++) {
    //   if (dropdown_id == data.samples[i].id) {
    //     let sliced_samples = data.samples[i].sample_values.slice(0, 10);
    //     let sliced_otu_ids = data.samples[i].otu_ids.slice(0, 10);
    //     otu_ids.push(sliced_otu_ids);
    //     sample_values.push(sliced_samples);



    //     console.log(otu_ids);
    //     console.log(sample_values);




  };
});