((win)=>{

  win.SVL.Components.addIndicatorTable = async function(app, baseUrl){

    var template = await win.SVL.loadTemplate(baseUrl,"vue/templates/indicator-table.html");

    app.component('indicatortable',{
      props: {
        locations: Array,
        indicators: Array,
      },
      data() {
        return {
          otherFields: ["Population","Source","Type","Indicator","Year(s)"]
        }
      },
      computed: {
      },
      methods: {
        setLocations(locations){
          this.locations=locations;
        },
        setIndicators(indicators){
          this.indicators=indicators;
        }
      },
      template: template
    });

  }

})(window);