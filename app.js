

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


    d3.select("#selDataset").on("change", optionChanged);

    function optionChanged() {
      let dropdown_id = d3.select("#selDataset").node();
      // let dropdown_id = dropdown.value;
      // update("onchange", this.value);
    };
    console.log(dropdown_id);

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
    console.log(otu_ids);
    console.log(ids);

    console.log(sample_values);

  });

  let trace1 = {
    x: otu_ids,
    y: sample_values,
    type: "bar",
    orientation: "h"
  };
  let bar_data = [trace1];
  let layout = {

  };

  Plotly.newplot("bar", bar_data, layout);