<template>
  <div>
    my
    <AppHeader></AppHeader>
  </div>
</template>
<script setup lang="ts">
  useHead({
    title:'Hello',
    meta:[
      { name: 'description', content: 'My amazing site.' },
      { name: 'keywords', content: 'keywords' }
    ]
  })

  const res = await useFetch('http://test.api.czkcfw.com')
  console.log('res',res)

</script>
