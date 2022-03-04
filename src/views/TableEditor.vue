<template>
  <LayoutDefault>
  <div>
    <div class="flex flex-row items-center justify-between margin-bottom-sm">
      <div class="flex flex-row flex-center gap-xs">
        <button @click="editing = !editing" class="btn btn--sm btn--primary">
          {{ editing ? 'Done' : 'Edit' }}
          <svg class="icon margin-left-xxs" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line data-cap="butt" x1="14.328" y1="4.672" x2="19.328" y2="9.672"></line> <path d="M8,21,2,22l1-6L16.414,2.586a2,2,0,0,1,2.828,0l2.172,2.172a2,2,0,0,1,0,2.828Z"></path></g></svg>
        </button>
        
        <button @click="save()" class="btn btn--sm btn--primary">
          Save
        </button>
      </div>
      
      <div class="flex flex-row flex-center gap-xs">
        <button @click="addColumn()" class="btn btn--sm btn--subtle">
          Add Column
          <svg class="icon margin-left-xxs" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="5" y1="7" x2="5" y2="17"></line> <rect x="1" y="3" width="22" height="18"></rect></g></svg>
        </button>
        
        <button @click="addRow()" class="btn btn--sm btn--subtle">
          Add Row
          <svg class="icon margin-left-xxs" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><rect x="1" y="3" width="22" height="18"></rect> <line x1="19" y1="7" x2="5" y2="7"></line></g></svg>
        </button>
      </div>
    </div>
    
    <table class="table table--loaded table--expanded position-relative z-index-1 width-100% text-unit-em text-sm">
      <thead class="table__header">
        <Draggable
          tag="tr"
          :list="columns"
          :group="{name: 'columns'}"
          :animation="200"
          class="table__row"
        >
          <th
            v-for="(column, index) in columns" 
            :key="index"
            class="table__cell text-left"
            scope="col"
          >
            <template v-if="editing">
              <input v-model="column.content" placeholder="New Column" class="form-control width-100%">
            </template>
            <template v-else>
              {{ column.content ? column.content : 'New Column' }}
            </template>
            
            <button @click="deleteColumn(index)">Delete</button>
          </th>
        </Draggable>
      </thead>
      
      <Draggable
        tag="tbody"
        :list="rows"
        :group="{name: 'rows'}"
        :animation="200"
        class="table__body"
      >
        <tr v-for="(row, index) in rows" :key="index" class="table__row">
          <td v-for="(cell, index) in row" :key="index" class="table__cell" role="cell">
            <template v-if="editing">
              <input v-model="cell.content" placeholder="New Cell" class="form-control width-100%">
            </template>
            <template v-else>
              {{ cell.content ? cell.content : 'New Cell' }}
            </template>
          </td>
          
          <span @click="deleteRow(index)" class="cursor-pointer">
            <svg class="icon" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="16" y1="8" x2="8" y2="16"></line> <line x1="16" y1="16" x2="8" y2="8"></line> <circle cx="12" cy="12" r="11"></circle></g></svg>
          </span>
        </tr>
      </Draggable>
    </table>
  </div>
  </LayoutDefault>
</template>

<script setup>
import Draggable from 'vuedraggable'

const editing = ref(false)

let newCell = { content: '' }

const addColumn = () => { 
  props.columns.push(newCell)
   
  props.rows.forEach((row) => {
    row.push(newCell)
  });
}

const deleteColumn = (index) => {
  props.columns.splice(index, 1)
  
  props.rows.forEach((row) => {
    row.splice(index, 1)
  });
}

const addRow = () => {
  let row = []
  
  props.columns.forEach(() => {
    row.push(newCell)
  });

  props.rows.push(row)
}

const deleteRow = (index) => {
  props.rows.splice(index, 1)
}

const save = (props) => {
    emit('saved', props)
}

const emit = defineEmits(['saved'])

const props = defineProps({ 
  columns: {
    type: Array,
    default: () => ([
      { content: 'Product' },
      { content: 'Term' },
      { content: 'APR' },
    ])
  },
  
  rows: {
    type: Array,
    default: () => ([
      [
        { content: 'New Car' },
        { content: '60 Months' },
        { content: '2.74%' },
      ],
      [
        { content: 'Used Car (1-3 years old)' },
        { content: '60 Months' },
        { content: '3.74%' },
      ],
      [
        { content: 'Used Car (4-5 years old)' },
        { content: '48 Months' },
        { content: '4.74%' },
      ],
      [
        { content: 'Used Car (6-7 years old)' },
        { content: '36 Months' },
        { content: '5.74%' },
      ],
    ])
  }
})
</script>
