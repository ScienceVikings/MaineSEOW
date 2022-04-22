((win)=>{

  win.SVL.Components.addMultiSelectDropdown = async function(app, baseUrl){

    var template = await win.SVL.loadTemplate(baseUrl,"vue/templates/multi-select-dropdown.html");

    app.component('multiselectdropdown',{
      props: {
        label: String,
        id: String,
        filterValue: String,
        displayKey: String,
        valueKey: String,
        values: Array,
        defaultAll: Boolean
      },
      data() {
        return {
          selectedValues: []
        }
      },
      computed: {
        filteredValues() {
          const filterValue = this.filterValue || "";
          var values = this.values.filter(val => val[this.displayKey].toString().includes(filterValue));
          return values;
        }
      },
      methods: {
        selectedItem(event){
          this.$emit('valuesChanged',this.selectedValues);
        },
        selectAllItems(event){
          this.selectedValues = event.target.checked ? this.values.map(x=>x.value) : [];
          this.selectedItem(event);
        }
      },
      created(){
        if(this.defaultAll){
          this.selectAllItems({target:{checked:true}});
        }
      },
      template: template
    });

  }

})(window);