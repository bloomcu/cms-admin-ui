<template>
  <LayoutDefault>
    <div class="container max-width-xs">
      <div v-if="isRegistering" class="flex justify-center items-center" style="height: 80vh;">
        <div class="text-component text-center margin-bottom-sm">
          <AppLoader/>
          <h3>One moment, please</h3>
          <p>{{ registrationStatus }}</p>
        </div>
      </div>
      
      <form v-else class="login-form" action="#" @submit.prevent="submit">
        <div class="text-component text-center margin-bottom-sm">
          <h1>Register</h1>
        </div>
        
        <div class="margin-bottom-xs">
          <label class="form-label margin-bottom-xxxs" for="input-name">Name</label>
          <input 
            v-model="inputs.name" 
            required
            autofocus 
            placeholder="First Last"
            class="form-control width-100%" 
            type="text" 
            name="input-name" 
            id="input-name" 
          >
        </div>
        
        <div class="margin-bottom-xs">
          <label class="form-label margin-bottom-xxxs" for="input-email">Email</label>
          <input 
            v-model="inputs.email" 
            required
            placeholder="email@email.com"
            class="form-control width-100%" 
            type="email" 
            name="input-email" 
            id="input-email" 
          >
        </div>
        
        <div class="margin-bottom-xs">
          <label class="form-label margin-bottom-xxxs" for="input-name">Organization Name</label>
          <input 
            v-model="inputs.organization" 
            required
            autofocus 
            placeholder="BloomCU"
            class="form-control width-100%" 
            type="text" 
            name="input-organization" 
            id="input-organization" 
          >
        </div>

        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="input-password">Password</label> 
          <input 
            v-model="inputs.password"
            required
            class="form-control width-100%" 
            type="password" 
            name="input-password" 
            id="input-password"
          >
        </div>
        
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="input-password_confirmation">Confirm Password</label> 
          <input 
            v-model="inputs.password_confirmation"
            required
            class="form-control width-100%" 
            type="password" 
            name="input-password_confirmation" 
            id="input-password_confirmation"
          >
        </div>

        <div class="margin-bottom-sm">
          <button class="btn btn--primary btn--md width-100%">Register</button>
        </div>

        <div class="text-center">
          <p class="text-sm">
            Already have an account? 
            <RouterLink :to="{ name: 'login' }">Log in</RouterLink>
          </p>
        </div>
        
        <!-- <p class="text-center margin-y-sm">or</p>

        <div class="grid gap-xs">
          <div class="col-6@xs">
            <a class="btn btn--subtle width-100%">
              <svg class="icon margin-right-xxxs" viewBox="0 0 48 48"><g class="nc-icon-wrapper"><path d="M24,11a12.932,12.932,0,0,1,8.346,3.047l6.54-6.228A21.973,21.973,0,0,0,4.293,14.236l7.373,5.683A13.016,13.016,0,0,1,24,11Z" fill="#d94f3d"></path> <path d="M11,24a12.942,12.942,0,0,1,.666-4.081L4.293,14.236a21.935,21.935,0,0,0,0,19.528l7.373-5.683A12.942,12.942,0,0,1,11,24Z" fill="#f2c042"></path> <path d="M45.1,20h-21v9H36a10.727,10.727,0,0,1-4.555,6.162l7.316,5.64C43.436,36.606,46.183,29.783,45.1,20Z" fill="#5085ed"></path> <path d="M31.442,35.162A13.98,13.98,0,0,1,24,37a13.016,13.016,0,0,1-12.334-8.919L4.293,33.764A22.023,22.023,0,0,0,24,46a21.865,21.865,0,0,0,14.758-5.2Z" fill="#57a75c"></path></g></svg>
              <span>Register with Google</span>
            </a>
          </div>
          
          <div class="col-6@xs">
            <a class="btn btn--subtle width-100%">
              <svg class="icon margin-right-xxxs" viewBox="0 0 48 48"><g class="nc-icon-wrapper"><rect x="3" y="3" fill="#E86C60" width="20" height="20"></rect> <rect x="25" y="3" fill="#72C472" width="20" height="20"></rect> <rect x="3" y="25" fill="#43A6DD" width="20" height="20"></rect> <rect x="25" y="25" fill="#EFD358" width="20" height="20"></rect></g></svg>
              <span>Register with Microsoft</span>
            </a>
          </div>
        </div> -->
        
      </form>
    </div>
  </LayoutDefault>
</template>

<script setup>
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

const router = getCurrentInstance().proxy.$router

const authStore = useAuthStore()

const error = ref(null)

const inputs = ref({
  name: 'Ryan Harmon',
  email: 'ryan@bloomcu.com',
  organization: 'BloomCU',
  password: 'password',
  password_confirmation: 'password'
})

const isRegistering = ref(false)
const registrationStatus = ref('1 of 3: Creating your profile')

const submit = async () => {
  // authStore.register(inputs.value)
  
  isRegistering.value = true
  setTimeout(() => { registrationStatus.value = '2 of 3: Creating your organization' }, 2000)
  setTimeout(() => { registrationStatus.value = '3 of 3: Creating your first property' }, 4000)
  setTimeout(() => { window.location.replace('/pages') }, 6000)
}
</script>
