<template>
    <div>
        <div class="text-component">
            <p>Count is {{ store.count }}</p>
            <p>Count doubled is {{ store.doubleCount }}</p>
            <p>Count trippled is {{ store.trippleCount }}</p>
            <button @click="store.increment">Increment</button>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from '@/app/store/appStore'

const store = useAppStore()
</script>
