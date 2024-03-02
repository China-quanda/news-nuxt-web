const { start, done } = useNProgress()
export default defineNuxtPlugin(async (NuxtApp) => {
  let progressBar = ref(false)
  NuxtApp.hook('app:mounted', () => {
    if(!progressBar.value){
      progressBar.value = true
      start()
    }
  })
  NuxtApp.hook('page:start', () => {
    start()
  })
  NuxtApp.hook('page:finish', () => {
    done()
  })
  NuxtApp.hook('vue:error', () => {

  })
})
