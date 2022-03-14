<template>
    <LayoutSidebar>
      <template v-slot:sidebar>
        The sidebar
      </template>
      
      <div class="flex flex-wrap items-center justify-between margin-bottom-md">
          <h1 class="text-lg">Properties</h1>
          <!-- <RouterLink :to="{ name: 'propertyCreate' }" class="btn btn--primary btn--sm">New Property</RouterLink> -->
      </div>
        
        <div class="app-dashboard">
            <!-- <div class="app-dashboard-column--left">
                <AppNestedMenu 
                    :items="categoryStore.category.children" 
                    @selected="filter"
                />
            </div> -->
            
            <div class="app-dashboard-column--right">
              <ul class="item text-sm">
                  <!-- <li v-for="(item, index) in items" :key="index" class="item__wrapper flex padding-sm"> -->
                      <!-- Left -->
                      <!-- <router-link
                          :to="{ name: route, params: { id: item.id }}"
                          class="flex-grow margin-right-xs" 
                          style="text-decoration: none; color: inherit;"
                      >
                          <div class="padding-y-xxxs">
                              <h2 class="text-base">{{ item.title }}</h2>
                          </div>
                      </router-link> -->

                      <!-- Right -->
                      <div class="flex items-center margin-left-auto">
                          <!-- <button @click="replicate(item.id)" class="app-action-icon reset margin-right-sm" type="button" name="button">
                              <svg class="icon" viewBox="0 0 24 24">
                                  <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><polyline points="8,8 8,1 23,1 23,16 16,16 "></polyline><polyline points="14,23 16,23 16,21 "></polyline><polyline points="1,21 1,23 3,23 "></polyline><polyline points="3,8 1,8 1,10 "></polyline><line x1="10" y1="23" x2="7" y2="23"></line><polyline points="14,8 16,8 16,10 "></polyline><line x1="10" y1="8" x2="7" y2="8"></line><line x1="1" y1="17" x2="1" y2="14"></line><line x1="16" y1="17" x2="16" y2="14"></line></g>
                              </svg>
                          </button> -->

                          <!-- <button @click="destroy(item.id)" class="app-action-icon reset margin-right-sm" type="button" name="button">
                              <svg class="icon" viewBox="0 0 24 24">
                                  <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
                              </svg>
                          </button> -->
                          
                          <!-- Status -->
                          <!-- <div v-if="item.was_published && item.has_changes" class="status-dot status-dot--orange margin-left-sm" aria-hidden="true"></div> -->
                          <!-- <div v-else-if="item.was_published" class="status-dot status-dot--success margin-left-sm" aria-hidden="true"></div> -->
                          <!-- <div v-else class="status-dot margin-left-sm" aria-hidden="true"></div> -->
                      </div>
                  <!-- </li> -->
              </ul>
            </div>
        </div>
    </LayoutSidebar>
</template>

<script setup>
// import { usePropertyStore } from '@/domain/property/store/usePropertyStore'

// const propertyStore = usePropertyStore()
</script>
