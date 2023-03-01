<template>
  <nav style="min-width: 190px;" class="sidenav sidenav--basic padding-y-sm">
      <ul class="sidenav__list margin-bottom-sm">
          <li class="sidenav__item">
              <router-link :to="{ name: 'pageDashboard' }" class="sidenav__link">
                  <svg class="icon sidenav__icon margin-right" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#212121" stroke-linejoin="round"><polyline points="17,2 7,12 17,22 " transform="translate(0, 0)"></polyline></g></svg>
                  <span class="sidenav__text text-sm">Back</span>
              </router-link>
          </li>
      </ul>
      
      <ul class="sidenav__list">        
          <li class="sidenav__item sidenav__item--expanded">
              <router-link :to="{ name: 'people' }" class="sidenav__link">
                  <span class="sidenav__text">People</span>
              </router-link>
          </li>
          
          <li class="sidenav__item sidenav__item--expanded">
              <router-link :to="{ name: 'organization' }" class="sidenav__link">
                  <span class="sidenav__text">Organization</span>
              </router-link>
          </li>
          
          <li class="sidenav__item sidenav__item--expanded">
              <router-link :to="{ name: 'property' }" class="sidenav__link">
                  <span class="sidenav__text">Property</span>
              </router-link>
          </li>
      </ul>
  </nav>
</template>

<script setup>
import { usePostStore } from '@/domain/posts/store/usePostStore'
const store = usePostStore()
</script>
