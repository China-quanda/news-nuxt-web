<script setup lang="ts">
const router = useRouter()
useHead({ title:'内容管理 - 创作中心'})
onMounted(()=>{ router.replace('/creator/content/article') })
</script>
