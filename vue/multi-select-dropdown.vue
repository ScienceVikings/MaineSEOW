<script>
export default {
  props: {
    name: String,
    id: String,
    values: Array,
  },
  data() {
    return {
      sortKey: '',
      sortOrders: this.columns.reduce((o, key) => ((o[key] = 1), o), {})
    }
  },
  computed: {
    filteredData() {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let data = this.data
      if (filterKey) {
        data = data.filter((row) => {
          return Object.keys(row).some((key) => {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  methods: {
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="{{ id }}" data-bs-toggle="dropdown" aria-expanded="false">
            {{ name }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="{{ id }}">
            <li :v-for="value in values">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="{{ id }}-{{ value }}">
                    <label class="form-check-label" for="{{ id }}-{{ value }}">{{ value }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>