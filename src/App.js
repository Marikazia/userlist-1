
import React from 'react';
import './App.css';



// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((json) => {
				setUsers(json.data);
		}).catch();
	}, []);

  return (
		<>
			<div className='app'>
				<Users />
				{/* <Success /> */}
			</div>
		</>
  );
}

export default App;
