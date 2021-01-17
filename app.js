

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

  let panel_data = Object.entries(data.metadata[0]);

  console.log(panel_data);

  let panel_body = d3.select("#sample-metadata")
    .selectAll("div")
    .data(panel_data)
    .enter()
    .append("div").attr("class", "panel-content")
    .text(function (d) {
      return d;
    });


  let dropdown_id = data.samples[0].id;
  let top_otu_ids = [];
  let top_sample_values = [];
  let top_otu_labels = [];
  for (i = 0; i < 10; i++) {
    top_otu_ids.push("OTU " + data.samples[0].otu_ids[i].toString());
    top_sample_values.push(data.samples[0].sample_values[i]);
    top_otu_labels.push(data.samples[0].otu_labels[i]);
  };

  console.log(dropdown_id);
  console.log(top_otu_ids);
  console.log(top_sample_values);
  console.log(top_otu_labels);

  let plot_data = [{
    type: "bar",
    x: top_sample_values,
    y: top_otu_ids,
    text: top_otu_labels,
    orientation: 'h',
    transforms: [{
      type: 'sort',
      target: 'y',
      order: 'descending'
    }]
  }];

  Plotly.newPlot("bar", plot_data);

  var bubble1 = {
    x: data.samples[0].otu_ids,
    y: data.samples[0].sample_values,
    text: data.samples[0].otu_labels,
    mode: 'markers',
    marker: {
      color: data.samples[0].otu_ids,
      size: data.samples[0].sample_values
    }
  };

  var bubble_data = [bubble1];

  var bubble_layout = {
    showlegend: false,
    xaxis: {
      title: {
        text: 'OTU ID'
      }
    }
  };

  Plotly.newPlot('bubble', bubble_data, bubble_layout);


  d3.select("#selDataset").on("change", optionChanged);

  function optionChanged() {
    let dropdown_id = d3.select("#selDataset").node().value;
    console.log(dropdown_id);

  };
});