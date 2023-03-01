<template>
  <LayoutDefault>
    <div class="container max-width-xs">
      <form class="login-form" action="#" @submit.prevent="submit">
        <div class="text-component text-center margin-bottom-sm">
          <h1>Forgot your password?</h1>
        </div>
        
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="input-email">Email</label>
          <input 
            v-model="inputs.email" 
            required
            autofocus 
            placeholder="email@email.com"
            class="form-control width-100%" 
            type="email" 
            name="input-email" 
            id="input-email" 
          >
        </div>

        <div class="margin-bottom-sm">
          <button class="btn btn--primary btn--md width-100%">Send</button>
        </div>
        
      </form>
    </div>
  </LayoutDefault>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const router = getCurrentInstance().proxy.$router

const inputs = ref({
  email: '',
  password: ''
})

const error = ref(null)

const auth = getAuth();

const submit = () => {
  
}
</script>
