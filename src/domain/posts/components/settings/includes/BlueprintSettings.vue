<template>
    <div>
        <!-- Section -->
        <!-- <div class="margin-bottom-sm text-component">
            <h4>Bluprint Settings</h4>
            <p class="text-sm">Configure blueprint settings. <a href="#">Learn More</a></p>
        </div> -->

        <!-- Framework -->
        <!-- <div class="form-group margin-bottom-sm">
            <label class="form-label margin-bottom-xxs">Framework</label>
            <div class="select">
                <select v-model="store.post.framework" name="status" id="status" class="select_input form-control width-100%">
                    <option value="AIDA" key="AIDA" :selected="store.post.framework === 'AIDA'">AIDA</option>
                    <option value="Bridge" key="Bridge" :selected="store.post.framework === 'Bridge'">Bridge</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
        </div> -->

        <!-- Use Case -->
        <!-- <div class="form-group margin-bottom-lg">
            <label class="form-label margin-bottom-xxs">Use Case</label>
            <div class="select">
                <select v-model="store.post.use_case" name="status" id="status" class="select_input form-control width-100%">
                    <option value="Checking Account" key="Checking Account" :selected="store.post.use_case === 'Checking Account'">Checking Account</option>
                    <option value="Savings Account" key="Savings Account" :selected="store.post.use_case === 'Savings Account'">Savings Account</option>
                    <option value="Auto Loan" key="Auto Loan" :selected="store.post.use_case === 'Auto Loan'">Auto Loan</option>
                </select>
                <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
        </div> -->

        <!-- Section -->
        <div class="margin-bottom-md text-component">
            <h4>Create Blueprint</h4>
            <p class="text-sm">Create a new blueprint based on this page. <a href="#">Learn More</a></p>
        </div>
        
        <button v-if="!store.post.is_blueprint" class="btn btn--subtle">
            Create New Blueprint from Page
        </button>
    </div>
</template>

<script setup>
import { postStore } from '@/domain/posts/store/postStore'

const store = postStore()
</script>
