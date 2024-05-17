import './App.css';
import './assets/css/table-custom.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { useState } from 'react';

const DataUserArray = [
	{
		id: 1,
		name: 'Mark',
		email: 'test1@ca.ca',
		password: '123456',
		phone: '0123456789',
		dob: '2001-22-04',
		address: 'Ha Noi',
	},
	{
		id: 2,
		name: 'Leo',
		email: 'test2@ca.ca',
		password: '123456',
		phone: '0123456789',
		dob: '2001-22-05',
		address: 'Ho Chi Minh',
	},
	{
		id: 3,
		name: 'Dan',
		email: 'test3@ca.ca',
		password: '123456',
		phone: '0123456789',
		dob: '2001-22-06',
		address: 'Ha Noi',
	},
	{
		id: 4,
		name: 'Havard',
		email: 'test3@ca.ca',
		password: '123456',
		phone: '0123456789',
		dob: '2001-22-06',
		address: 'Ho Chi Minh',
	},
];
// CRUD => R, D
// Làm btvn viết nốt function cho C U
// Creat: .push() -> tạo ra một form bằng component của react bootstrap (modal, button, form) -> form add modal
// Update: splice(index, 0, {})
// sử dụng destructoring để xử lí

function App() {
	const [userData, setDataUser] = useState(DataUserArray);
	function calculateAge(dob) {
		const parts = dob.split('-');
		const birthday = new Date(parts[0], parts[1] - 1, parts[2]); // parts[1] - 1 vì tháng trong JavaScript bắt đầu từ 0
		const ageDate = new Date(Date.now() - birthday.getTime());
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	const handleDelelteUser = (index) => {
		// splice để delete hoặc là thay thế giá trị element = một element. splice nhận vào 3 đối số
		// đối số 1: index của phần tử trong array
		// đối số 2: số lượng phần tử muốn xóa
		// đối số 3: thay thế giá trị vào index đó
		let cloneUserData = [...userData];
		cloneUserData.splice(index, 1);
		setDataUser(cloneUserData);
	};

	function findOldestUser(users) {
		let oldestUser = null;
		let maxAge = -1;

		users.forEach((user) => {
			const age = calculateAge(user.dob);
			if (age > maxAge) {
				maxAge = age;
				oldestUser = user;
			}
		});

		return oldestUser;
	}

	const oldestUser = findOldestUser(DataUserArray);
	const peopleLiveInHaNoi = userData
		.filter((item) => item.address === 'Ha Noi')
		.map((item) => item.name)
		.join(', ');
	const peopleLiveInHCM = userData
		.filter((item) => item.address === 'Ho Chi Minh')
		.map((item) => item.name)
		.join(', ');
	const RowTable = userData.map((item, index) => {
		return (
			<tr key={index}>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td style={{ color: 'red' }}>{item.email}</td>
				<td>{item.password}</td>
				<td>{item.phone}</td>
				<td>{item.dob}</td>
				<td>{item.address}</td>
				<td>
					<td>
						<Button
							variant="warning"
							style={{ marginRight: '4px' }}
						>
							<BsFillPencilFill />
						</Button>
						<Button
							variant="danger"
							onClick={() => {
								handleDelelteUser(index);
							}}
						>
							<BsFillTrashFill />
						</Button>
					</td>
				</td>
			</tr>
		);
	});

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					flexDirection: 'column',
				}}
			>
				{userData.length ? (
					<Table
						striped
						bordered
						hover
						style={{
							border: '3px solid green',
							width: '80%',
							height: '40%',
						}}
					>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Password</th>
								<th>Phone</th>
								<th>DOB</th>
								<th>Address</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>{RowTable}</tbody>
					</Table>
				) : (
					<h3>Không có user nào tại đây</h3>
				)}
				<ul>
					<li>
						<h4>Người lớn tuổi nhất: {oldestUser?.name}</h4>
					</li>
					<li>
						<h4>Người sống ở Hà Nội: {peopleLiveInHaNoi}</h4>
					</li>
					<li>
						<h4>Người sống ở HCM: {peopleLiveInHCM}</h4>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
