<template>
	<input v-if="type == 'number'" type="number" name="" id="" :value="defaultvalue" />
	<input v-else-if="type == 'string'" type="text" name="" id="" :value="defaultvalue" />
</template>

<script>
	export default {
		name: 'MyInput',
		props: ['type', 'defaultvalue']
	}
</script>