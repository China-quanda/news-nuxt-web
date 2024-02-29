<script setup lang="ts">
const router = useRouter()
useHead({ title:'创作设置 - 创作中心'})
onMounted(()=>{ router.replace('/creator/setting/creator') })
</script>
