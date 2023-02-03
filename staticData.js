
async function getAllTodos() {
	let data = [
		  { todo_id: 1, todo_name: 'buy milk' },
		  { todo_id: 2, todo_name: 'and cheese' },
		  { todo_id: 3, todo_name: 'truck in for service' },
		  { todo_id: 4, todo_name: 'get a hair cut' },
		{ todo_id: 5, todo_name: 'Call Patrick' },
		{ todo_id: 6, todo_name: 'Tell him hes wrong' },
		{ todo_id: 7, todo_name: 'oh no tell him Im wrong' }
		]
	;
	return data;
}


module.exports = {getAllTodos}
