<script setup>
import { ref } from 'vue';
import cart from '~/assets/icons/cart.svg?raw'

const story = await useStoryblok('home', { version: 'draft' })

const testFolderStories = ref('')

const storyapi = useStoryblokApi();
const { data } = await storyapi.get("cdn/stories", { version: "draft" });

testFolderStories.value = data.stories
  .filter(
    story => story.full_slug
      .split('/')
      .includes('test-folder')
  )

onMounted(() => {
  useStoryblokBridge(story.value.id, (story) => (state.story = story));
});

</script>

<template>
  <div>
    <span class="font-accent">Test Only</span>
    <div v-html="cart"></div>
    <!-- <img src="cart" alt=""> -->
    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg> -->
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>