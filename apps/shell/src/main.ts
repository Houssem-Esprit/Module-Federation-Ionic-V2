import('./bootstrap')
	.catch(err => console.error(err));
	
	import Amplify, { Auth } from 'aws-amplify';
	import awsconfig from './aws-exports';
	Amplify.configure(awsconfig);