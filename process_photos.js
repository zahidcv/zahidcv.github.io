function process_photos() {
	// create a new XMLHttpRequest object
	var xhr = new XMLHttpRequest();

	// set up the request
	xhr.open('GET', 'get-users.php', true);

	// set the callback function
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			// parse the JSON response
			var users = JSON.parse(xhr.responseText);

			// create a new table row for each user
			var tableBody = document.getElementById('users-table-body');
			tableBody.innerHTML = '';

			for (var i = 0; i < users.length; i++) {
				var row = tableBody.insertRow(i);
				var idCell = row.insertCell(0);
				var nameCell = row.insertCell(1);
				var emailCell = row.insertCell(2);
				var ageCell = row.insertCell(3);

				idCell.innerHTML = users[i].id;
				nameCell.innerHTML = users[i].name;
				emailCell.innerHTML = users[i].email;
				ageCell.innerHTML = users[i].age;
			}
		}
	};

	// send the request
	xhr.send();
}
