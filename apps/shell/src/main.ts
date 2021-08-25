import('./bootstrap')
	.catch(err => console.error(err));
	
	import Amplify, { Auth } from 'aws-amplify';
	import awsconfig from './aws-exports';
	const updatedAwsConfig = {
		...awsconfig,
		oauth: {
			...awsconfig.oauth,
			domain: "https://poc-nx-ionic-module-federation-hosted-ui-auth.auth.eu-west-1.amazoncognito.com/login?client_id=35lnq2f23895ihrnnj6kof4058&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile+serverlessbackend.com/transfers.read&redirect_uri=https://master.d275v0hfacbx1p.amplifyapp.com/",
			redirectSignIn: "https://master.d275v0hfacbx1p.amplifyapp.com/",
			redirectSignOut: "https://master.d275v0hfacbx1p.amplifyapp.com/"
		}
	}
	Amplify.configure(updatedAwsConfig);