import './App.css';
import './assets/css/table-custom.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

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

const defaultUserInformation = {
	id: '',
	name: '',
	email: '',
	password: '',
	phone: '',
	dob: '',
	address: '',
};

function ModalAddCustom({ show, handleClose, setDataUser, userData }) {
	const [userInformation, setUserInformation] = useState(
		defaultUserInformation,
	);
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Create new user</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Label>Id</Form.Label>
				<Form.Control
					value={userInformation.id}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							id: e.target.value,
						});
					}}
				/>
				<Form.Label>Name</Form.Label>
				<Form.Control
					value={userInformation.name}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							name: e.target.value,
						});
					}}
				/>
				<Form.Label>Email</Form.Label>
				<Form.Control
					value={userInformation.email}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							email: e.target.value,
						});
					}}
				/>
				<Form.Label>Password</Form.Label>
				<Form.Control
					value={userInformation.password}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							password: e.target.value,
						});
					}}
				/>
				<Form.Label>Phone</Form.Label>
				<Form.Control
					value={userInformation.phone}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							phone: e.target.value,
						});
					}}
				/>
				<Form.Label>DOB</Form.Label>
				<Form.Control
					value={userInformation.dob}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							dob: e.target.value,
						});
					}}
				/>
				<Form.Label>Address</Form.Label>
				<Form.Control
					value={userInformation.address}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							address: e.target.value,
						});
					}}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						setDataUser([...userData, userInformation]);
						setUserInformation(defaultUserInformation);
						handleClose();
					}}
				>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

function ModalEditCustom({
	show,
	handleClose,
	setDataUser,
	userData,
	userInformation,
	setUserInformation,
	index
}) {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Update user</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Label>Id</Form.Label>
				<Form.Control
					value={userInformation.id}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							id: e.target.value,
						});
					}}
				/>
				<Form.Label>Name</Form.Label>
				<Form.Control
					value={userInformation.name}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							name: e.target.value,
						});
					}}
				/>
				<Form.Label>Email</Form.Label>
				<Form.Control
					value={userInformation.email}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							email: e.target.value,
						});
					}}
				/>
				<Form.Label>Password</Form.Label>
				<Form.Control
					value={userInformation.password}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							password: e.target.value,
						});
					}}
				/>
				<Form.Label>Phone</Form.Label>
				<Form.Control
					value={userInformation.phone}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							phone: e.target.value,
						});
					}}
				/>
				<Form.Label>DOB</Form.Label>
				<Form.Control
					value={userInformation.dob}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							dob: e.target.value,
						});
					}}
				/>
				<Form.Label>Address</Form.Label>
				<Form.Control
					value={userInformation.address}
					onChange={(e) => {
						setUserInformation({
							...userInformation,
							address: e.target.value,
						});
					}}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						let cloneUserData = [...userData, userInformation];
						cloneUserData.splice(index, 1);
						setDataUser(cloneUserData);
						handleClose()
						setUserInformation(defaultUserInformation)
					}}
				>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

function App() {
	const [userData, setDataUser] = useState(DataUserArray);
	const [show, setShow] = useState(false);
	const [userSelected, setUserSelected] = useState(null)
	const [userInformation, setUserInformation] = useState(
		defaultUserInformation,
	);

	const handleClose = () => setShow(false);
	function calculateAge(dob) {
		const parts = dob.split('-');
		const birthday = new Date(parts[0], parts[1] - 1, parts[2]); // parts[1] - 1 vì tháng trong JavaScript bắt đầu từ 0
		const ageDate = new Date(Date.now() - birthday.getTime());
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	const handleUpdateUser = (index, data) => {
		let cloneUserData = [...userData, data];
		cloneUserData.splice(index, 1);
		setDataUser(cloneUserData);
	};

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
							onClick={() => {
								setShow(true);
								setUserInformation(item);
								setUserSelected(index)
							}}
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
				{/* <ModalAddCustom
					show={show}
					handleClose={handleClose}
					setDataUser={setDataUser}
					userData={userData}
				/> */}
				<ModalEditCustom
					show={show}
					handleClose={handleClose}
					setDataUser={setDataUser}
					userData={userData}
					userInformation={userInformation}
					setUserInformation={setUserInformation}
					index={userSelected}
				/>
				<Button onClick={() => setShow(true)}>Add New User</Button>
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
