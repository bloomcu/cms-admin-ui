<template>
  <LayoutDefault>
    <div class="flex flex-wrap items-center justify-between margin-bottom-md">
        <h1 class="text-lg">Select a Blueprint</h1>
        <RouterLink :to="{ name: 'pageDashboard' }" class="btn btn--primary btn--sm">Cancel</RouterLink>
    </div>
    
    <div class="app-dashboard">
        <div class="app-dashboard-column--left">
            <AppNestedMenu 
                :items="categoryStore.category.children" 
                @selected="filter"
            />
        </div>
        
        <div class="app-dashboard-column--right">
          <div class="grid gap-md">
            <AppCard
              v-for="(blueprint, index) in blueprints"
              :key="index"
              :title="blueprint.title"
              @onPreview="modalOpen = true"
              @onSelect="replicate(blueprint.id)"
              class="col-4@md"
            />
        </div>
        </div>
    </div>
  </LayoutDefault>
</template>

<script setup>
// import { usePostStore } from '@/domain/posts/store/usePostStore'
import { useCategoryStore } from '@/domain/categories/store/useCategoryStore'

// const store = usePostStore()
const categoryStore = useCategoryStore()

const replicate = (id) => {
  console.log('Replicating...')
  // usePostStore.replicate(id)
}

const modalOpen = ref(false)

const filter = () => {
    // TODO: Hit post api again passing filter params
    console.log('Filtering...')
}

const blueprints = [
  {
    id: 1,
    title: 'Blank Page'
  },
  {
    id: 2,
    title: 'Homepage'
  },
  {
    id: 3,
    title: 'Checking Account'
  },
  {
    id: 4,
    title: 'Savings Account'
  },
  {
    id: 5,
    title: 'Service Page'
  },
  {
    id: 6,
    title: 'Auto Loan'
  },
  {
    id: 7,
    title: 'Home Loan'
  },
  {
    id: 8,
    title: 'Personal Loan'
  },
  {
    id: 9,
    title: 'Business Loan'
  },
  {
    id: 10,
    title: 'Home Loan'
  },
  {
    id: 11,
    title: 'Credit Card'
  },
  {
    id: 12,
    title: 'Debit Card'
  },
  {
    id: 13,
    title: 'Online Banking'
  },
  {
    id: 14,
    title: 'Mobile Banking'
  },
  {
    id: 15,
    title: 'About Us'
  },
]

onMounted(() => {
    // store.indexBlueprints()
    categoryStore.show(1)
})
</script>
