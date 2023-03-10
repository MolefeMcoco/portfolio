import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';
const firebaseConfig = {
	// ...
	// The value of `databaseURL` depends on the location of the database
	apiKey: 'AIzaSyAsrgCGyv2OtngKRQ6YGwuuBOsNKmKD0Yc',
	authDomain: 'portfolio-b5e8b.firebaseapp.com',
	projectId: 'portfolio-b5e8b',
	storageBucket: 'portfolio-b5e8b.appspot.com',
	messagingSenderId: '482834018219',
	appId: '1:482834018219:web:45d3f2fb2c47beb4fdacee',
	measurementId: 'G-C9P7TT29C1',
	databaseURL: 'https://portfolio-b5e8b-default-rtdb.firebaseio.com/'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
	const [ data, setData ] = useState();

	useEffect(() => {
		const dbRef = ref(getDatabase(app));
		get(child(dbRef, `website`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					setData(snapshot.val());
				} else {
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<DataContext.Provider
			value={{
				data
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
