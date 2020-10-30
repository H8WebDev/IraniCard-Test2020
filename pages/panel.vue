<template>
	<div>
		<b-navbar type="dark" variant="info" class="shadow-sm">
			<b-navbar-brand to="/panel">
				<img src="https://www.iranicard.ir/wp-content/uploads/2019/12/Logo.svg" style="height: 32px;" alt="Irani-Card">
			</b-navbar-brand>
			<b-navbar-nav class="ml-auto">
				<b-nav-item-dropdown right menu-class="w-100">
					<template #button-content>
						<b-icon icon="person-fill" class="mr-2"></b-icon>
						<span class="mr-2 d-none d-sm-inline-block">{{ $store.state.user.email }}</span>
					</template>
					<b-dropdown-item href="/logout"><b-icon icon="power" class="mr-2"></b-icon>Sign Out</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-navbar>
		<b-container fluid class="pt-5 mt-5">
			<b-row align-h="center">
				<b-col cols="auto"><b-table stacked :items="userInfo"></b-table></b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		middleware (context) {
			if(!context.store.state.user) context.redirect('/');
		},
		async asyncData (context)
		{
			let user_info = [{
				'User ID': context.store.state.user.uid,
				'Display Name': context.store.state.user.displayName,
				'Email Address': context.store.state.user.email,
				'Phone Number': context.store.state.user.phoneNumber,
			}];
			return {
				userInfo: user_info,
			};
		},
	}
</script>
