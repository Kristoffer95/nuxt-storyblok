<script setup>
// import { ref } from 'vue';

import cart from '~/assets/icons/cart.svg?raw'


const settings = await useStoryblok('global-settings', { version: 'draft' })

const navigation = computed(() => {
  return settings.value.content.header_navigation.filter(nav => nav.name.toLowerCase() !== 'home')
})

</script>


<template>
  <div class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-inner_left">
          <nuxt-link to="/" >
            <div class="logo"></div>
          </nuxt-link>
          <div class="navigation">
            <ul>
              <li v-for="({ link, name }, index) in navigation" :key="index">
                <nuxt-link :to="link.cached_url">
                  {{ name }}
                </nuxt-link>
              </li>
            </ul>
            <!--  -->
          </div>
        </div>

        <div class="header-inner_right">
          <input type="text" class="search" placeholder="Search">
          
          <nuxt-link to="/account">Login</nuxt-link>

          <div v-html="cart" />
        </div>
      </div>
      
      <!-- <h1>This is header</h1> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply border py-3 flex items-center;

  &-inner {
    @apply flex justify-between;
    
    &_left {
      @apply flex gap-x-5;
      .logo {
        @apply border w-[50px] h-[50px] rounded-full;
      }
      .navigation {
        @apply flex items-center;
        
        ul {
          @apply flex gap-x-5;

          li a {
            @apply uppercase;
          }
        }
      }
    }

    &_right {
      @apply flex items-center;

      .search {
        @apply border w-[200px] py-2 px-5 rounded-full border-grey border-opacity-50
          outline-0 text-[12px];
      }

      a {
        @apply mx-8 uppercase;
      }
    }
  }
}
</style>