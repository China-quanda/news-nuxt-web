<script setup lang="ts">
const router = useRouter()
useHead({ title:'数据报表 - 创作中心'})
onMounted(()=>{ router.replace('/creator/data/article') })
</script>
