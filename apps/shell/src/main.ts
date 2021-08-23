import('./bootstrap')
	.catch(err => console.error(err));
	
	import Amplify, { Auth } from 'aws-amplify';
	import awsconfig from './aws-exports';
	const updatedAwsConfig = {
		...awsconfig,
		oauth: {
			...awsconfig.oauth,
			domain: "https://poc-nx-ionic-module-federation-hosted-ui-auth.auth.eu-west-1.amazoncognito.com",
			redirectSignIn: "https://master.d275v0hfacbx1p.amplifyapp.com/",
			redirectSignOut: "https://master.d275v0hfacbx1p.amplifyapp.com/"
		}
	}
	Amplify.configure(updatedAwsConfig);