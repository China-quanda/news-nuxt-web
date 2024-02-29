<template>
  <h1 class="ml-50px">Index page</h1>
  <nuxt-link to="/my">to my pages</nuxt-link>
  
  <nuxt-link to="/creator">to creator pages</nuxt-link>

  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="zh">zh</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>


<div>
  <!-- <div>{{ counter.name }}</div> -->
  <!-- <div>{{ counter.times }}</div> -->
  <button @click="change">改变pinia中的数据</button>
</div>

<div>pos: {{ x }}, {{ y }}</div>
<div class="i-material-symbols-light:10mp w-1em h-1em text-back" style="color: black;"></div>

<Icon name="uiw:apple" color="black"  size="30"/>
<Icon name="10k" color="black"  size="20"/>
<Icon name="material-symbols:action-key-outline" color="black"  size="10"/>
<Icon name="🚀" />


</template>

<script setup>
const { locale } = useI18n()
const { x, y } = useMouse()
import { userCouter } from '~/store/counter'
const counter = userCouter()

const change = ()=>{
  counter.increment()
  console.log(counter.times)
  console.log(counter.name)
}

onMounted(()=>{
  console.log('onMounted')
})
</script>