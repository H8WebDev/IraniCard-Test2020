<template>
	<b-container fluid class="bg-info">
		<b-row class="min-vh-100" align-v="start" align-h="center">
			<b-col cols="auto" style="margin-top: 5%; margin-bottom: 5%; width: 320px;">
				<div class="text-center mb-4">
					<img style="width: 90%;" src="/images/logo.svg" />
				</div>
				<b-card class="shadow" no-body>
					<b-card-header>
						<b-nav card-header tabs justified>
							<b-nav-item to="/">Login</b-nav-item>
							<b-nav-item to="/signup" active>Signup</b-nav-item>
						</b-nav>
					</b-card-header>
					<b-card-body>
						<b-form @submit.prevent="signup">
							<b-form-group label="Email:" label-for="email">
								<b-form-input id="email" v-model.trim="form.email" type="email" name="email" required></b-form-input>
							</b-form-group>
							<b-form-group label="Password:" label-for="password">
								<b-form-input id="password" v-model.trim="form.passwd" type="password" name="password" required></b-form-input>
							</b-form-group>
							<b-form-group label="Re-type Password:" label-for="password-repeat">
								<b-form-input id="password-repeat" v-model.trim="form.passwd_rep" type="password" name="password_repeat" required></b-form-input>
							</b-form-group>
							<b-button type="submit" block variant="primary" class="mt-5">Signup</b-button>
						</b-form>
					</b-card-body>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		middleware (context) {
			if(context.store.state.user) context.redirect('/panel');
		},
		data () {
			return {
				form: {
					email: '',
					passwd: '',
					passwd_rep: '',
				},
			};
		},
		methods: {
			showError (msg)
			{
				this.$bvToast.toast(msg, { noCloseButton: true, toaster: 'b-toaster-top-center', solid: true, variant: 'danger' });
			},

			async signup (e)
			{
				if(this.form.email == ''){ this.showError("Email was left empty."); return false; }
				if(this.form.passwd == ''){ this.showError("Password was left empty."); return false; }
				if(this.form.passwd_rep == ''){ this.showError("Password repeat was left empty."); return false; }
				if(this.form.passwd != this.form.passwd_rep){ this.showError("Password and it's repeat are not same."); return false; }

				let result = await this.$store.dispatch('signup', this.form);
				if(result.ok){ location.reload(); }
				else{ this.showError(result.message); return false; }
			},
		}
	}
</script>
