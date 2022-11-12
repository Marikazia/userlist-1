
import React from 'react';
import './index.css';
// import { Success } from './components/Success'
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setUsers] = React.useState([]);
	// const [invites, setInvites] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	const [searchValue, setSearchValue] = React.useState();

	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((json) => {
				setUsers(json.data);
		}).catch(err => {
			console.warn(err);
			alert('Error with getting user data');
		})
		.finally(() => setLoading(false));
		
	}, []);

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value); 
	}

  return (
		<>
			<div className='app'>
				<Users 
					onChangeSearchValue={onChangeSearchValue} 
					searchValue={searchValue} 
					items={users}  
					isLoading={isLoading}
				/>
				{/* <Success /> */}
			</div>
		</>
  );
}

export default App;
