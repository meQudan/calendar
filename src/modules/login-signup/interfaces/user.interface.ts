import firebase from 'firebase/compat';

export interface IUser extends firebase.User {}

export interface IUserProfileChanges {
	displayName?: string,
	
}
