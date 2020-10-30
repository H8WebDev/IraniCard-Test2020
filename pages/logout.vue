<template>
</template>

<script>
	export default {
		async middleware (context)
		{
			await context.store.dispatch('logout');
			context.redirect('/');
		},
	}
</script>
