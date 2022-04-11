<script>

function getDistinctValues(list, key){

  let allValues = _.map(list,function(row){ return row[key]; });
  return _.unique(allValues);

}

export default {
  props:{
    guideName: String,
    locations: Array
  },
  data: () => ({
    sourceData: [],
    isLoaded: false,
    guideName: guideName,
    populations:[],
    sources: [],
    types: [],
    indicators: [],
    years: [],
    selected: {
      populations:[],
      sources: [],
      types: [],
      indicators: [],
      years: [],
      locations: []
    },
  }),

  async created() {
    let url = `../data/quick-ref-${this.guideName}.json`;
    this.sourceData = await(await fetch(url)).json();

    this.populations = getDistinctValues(this.sourceData,"Population");
    this.sources = getDistinctValues(this.sourceData,"Source");
    this.types = getDistinctValues(this.sourceData,"Type");
    this.indicators = getDistinctValues(this.sourceData,"Indicator");
    this.years = getDistinctValues(this.sourceData,"Year(s)");

    this.isLoaded = true;
  },

  watch: {
    // re-fetch whenever currentBranch changes
    // currentBranch: 'fetchData'
  },

  methods: {
    truncate(v) {
      const newline = v.indexOf("\n");
      return newline > 0 ? v.slice(0, newline) : v;
    },
    formatDate(v) {
      return v.replace(/T|Z/g, " ");
    },
  },
};
</script>

<template>
  <div class="container">
    HELLO
    <div class="vstack gap-3">
      <div
        class="btn-toolbar mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="Filters">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <button type="button" class="btn btn-outline-secondary">1</button>
          <button type="button" class="btn btn-outline-secondary">2</button>
          <button type="button" class="btn btn-outline-secondary">3</button>
          <button type="button" class="btn btn-outline-secondary">4</button>
        </div>
        <div class="input-group">
          <div class="input-group-text" id="btnGroupAddon">@</div>
          <input
            type="text"
            class="form-control"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </div>
      </div>
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>
