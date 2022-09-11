<script setup>

const router = useRouter()
const route = useRoute()

const story = await useStoryblok(route.params.slug, { version: 'draft' })
  .catch((e) => {
    router.push('/')
  })

</script>

<template>
  <div>
    <!-- this is slug -->
    <!-- <h1>{{ route.params.slug }}</h1> -->
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>