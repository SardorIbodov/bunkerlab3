const addUser = (fullName, students) => {
	return [...students, {fullName, id: students.length + 1}]
}
export default addUser;