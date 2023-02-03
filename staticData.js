
async function getAllTodos() {
	let data = [
		  { todo_id: 1, todo_name: 'Call Patrick' },
		  { todo_id: 2, todo_name: 'Tell him hes wrong' },
		  { todo_id: 3, todo_name: 'Wait, sorry' },
		  { todo_id: 4, todo_name: 'Tell him Im wrong' }
		]
	;
	return data;
}


module.exports = {getAllTodos}
