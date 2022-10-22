
import React from 'react';
import './App.css';



// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setUsers] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

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

  return (
		<>
			<div className='app'>
				<Users items={users}  isLoading={isLoading}/>
				{/* <Success /> */}
			</div>
		</>
  );
}

export default App;
