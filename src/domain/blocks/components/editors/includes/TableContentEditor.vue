<template>
  <div class="table-content-editor">
    <h4 class="margin-bottom-sm">Table Editor</h4>
    
    <div class="flex flex-row items-center gap-xs margin-bottom-lg">
      <button @click="addColumn()" class="btn btn--sm btn--subtle">
        Add Column
        <svg class="icon margin-left-xxs" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="5" y1="7" x2="5" y2="17"></line> <rect x="1" y="3" width="22" height="18"></rect></g></svg>
      </button>
      
      <button @click="addRow()" class="btn btn--sm btn--subtle">
        Add Row
        <svg class="icon margin-left-xxs" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><rect x="1" y="3" width="22" height="18"></rect> <line x1="19" y1="7" x2="5" y2="7"></line></g></svg>
      </button>
      
      <button @click="editing = !editing" class="btn btn--sm btn--primary">
        {{ editing ? 'Done' : 'Edit' }}
        <svg class="icon margin-left-xxs" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line data-cap="butt" x1="14.328" y1="4.672" x2="19.328" y2="9.672"></line> <path d="M8,21,2,22l1-6L16.414,2.586a2,2,0,0,1,2.828,0l2.172,2.172a2,2,0,0,1,0,2.828Z"></path></g></svg>
      </button>
    </div>
    
    <table class="table table--loaded table--expanded position-relative z-index-1 width-100% text-unit-em text-sm">
      <thead class="table__header">
        <!-- <Draggable
          tag="tr"
          :list="block.data.columns"
          :group="{name: 'columns'}"
          :animation="200"
          class="table__row"
        > -->
          <th
            v-for="(column, index) in block.data.columns" 
            :key="index"
            class="table__cell text-left position-relative"
            scope="col"
          >
            <template v-if="editing">
              <input v-model="column.content" placeholder="New Column" class="form-control width-100%">
            </template>
            <template v-else>
              {{ column.content ? column.content : '' }}
            </template>
            
            <div @click="deleteColumn(index)" class="table__action table__action--columns">
              <svg class="icon" viewBox="0 0 32 32"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="23" y1="16" x2="9" y2="16"></line></g></svg>
            </div>
          </th>
        <!-- </Draggable> -->
      </thead>
      
      <Draggable
        tag="tbody"
        :list="block.data.rows"
        :group="{name: 'rows'}"
        :animation="200"
        class="table__body"
      >
        <tr v-for="(row, index) in block.data.rows" :key="index" class="table__row position-relative">
          <td v-for="(cell, index) in row" :key="cell.key" class="table__cell" role="cell">
            <template v-if="editing">
              <input v-model="cell.content" placeholder="New Cell" class="form-control width-100%">
            </template>
            <template v-else>
              {{ cell.content ? cell.content : '' }}
            </template>
          </td>
          
          <div @click="deleteRow(index)" class="table__action table__action--rows">
            <svg class="icon" viewBox="0 0 32 32"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="23" y1="16" x2="9" y2="16"></line></g></svg>
          </div>
        </tr>
      </Draggable>
    </table>
  </div>
</template>

<script setup>
import Draggable from 'vuedraggable'

const editing = ref(false)

// const newCell = () => {
//   let key = '_' + Math.random().toString(36).substr(2, 9)
// 
//   return {
//     content: '', 
//     key: key,
//   }
// }

function Cell() {
  return {
    content: '',
    key: Math.random().toString(36).substr(2, 9),
  }
}

// function Cell() {
//   this.key = '_' + Math.random().toString(36).substr(2, 9)
//   this.content = ''
// }

const addColumn = () => {
  props.block.data.columns.push(new Cell)
   
  props.block.data.rows.forEach((row) => {
    row.push(new Cell)
  });
}

const deleteColumn = (index) => {
  props.block.data.columns.splice(index, 1)
  
  props.block.data.rows.forEach((row) => {
    row.splice(index, 1)
  });
}

const addRow = () => {
  let row = []
  
  props.block.data.columns.forEach(() => {
    row.push(new Cell)
  });

  props.block.data.rows.push(row)
}

const deleteRow = (index) => {
  props.block.data.rows.splice(index, 1)
}

const props = defineProps({ 
    block: { type: Object, required: true } 
})
</script>

<style lang="scss">
.table-content-editor {
  .table__action {
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 28px;
    height: 28px;
    cursor: pointer;
    background-color: var(--color-white);
    border: 1px solid var(--color-contrast-lower);
    border-radius: 50em;
    
    &:hover {
      background-color: var(--color-bg-dark);
    }
  }

  .table__action--rows {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: -100%; 
  }

  .table__action--columns {
    position: absolute;
    margin: auto;
    top: -100%;
    bottom: 0;
    left: 0;
    right: 0
  }

  // Table
  .table__row {
    &:nth-child(odd) {
      background-color: var(--color-white) !important;
    }
  }

  .table__cell {
    border: 1px solid var(--color-contrast-lower) !important;
  }  
}
</style>
