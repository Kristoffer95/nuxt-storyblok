<script setup>
import { ref, reactive } from 'vue';

const story = await useStoryblok('account', { version: 'draft' })

const submitForm = () => {
  console.log('submit form');
}

const loginForm = reactive({
  email: '',
  password: ''
})

</script>

<template>
  <div class="grid">
    <div class="image-section"
      :style="{'background-image' : `url(${story.content.login_image.filename})`}"
    >
    </div>
    <div class="form-section">
      <form @submit.prevent="submitForm">
        <h3>Login</h3>

        <div class="field">
          <label for="email">Email</label>
          <input type="email" v-model="loginForm.email">
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input type="password" v-model="loginForm.password">
        </div>

        <!-- <div class="button">
          <button></button>
        </div> -->
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  @apply grid-cols-1 lg:grid-cols-2;

  .image-section {
    @apply h-[40vh] lg:h-screen bg-no-repeat bg-cover bg-center;
  }
  
  .form-section {
    @apply h-[60vh] lg:h-screen p-5 flex items-center;
  
    form {
      @apply w-full lg:w-[500px] h-[300px] flex flex-col justify-center items-center py-3 mx-auto;

      h3 {
        @apply text-xl;
      }

      .field {
        @apply w-full flex flex-col my-2 
          transition-all duration-[350ms];
          /* focus-within:text-pistachio */

        label {
          @apply text-xs mb-2;
        }

        input {
          @apply border-b rounded-sm px-1 py-2 active:border-pistachio 
            focus:border-pistachio outline-0 transition-all duration-[350ms];
        }
      }
    }
  }
}

</style>