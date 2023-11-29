

function validateForm(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var address = document.getElementById('address').value;
	var age = document.getElementById('age').value;

	return true;
}

function DataRefresher() {
	var dataList;
	if(localStorage.getItem("datalist") == null){
		dataList = [];
	}
	else{
		dataList = JSON.parse(localStorage.getItem("datalist"))
	}
	let html = "";

	dataList.map((data,index) =>{
		html +="<tr>";
		html +="<td>" + data.name + "</td>";
		html +="<td>" + data.email + "</td>";
		html +="<td>" + data.address + "</td>";
		html +="<td>" + data.age + "</td>";
		html +='<td><button class="btn btn-warning me-2" type="button" onclick="updateData('+ index +')">Edit</button>';
		html +='<button class="btn btn-danger" type="button" onclick="deleteData('+ index +')">Delete </button></td>';
		html +="<tr>";
	})
	document.getElementById('tbody').innerHTML = html;
}

document.onload = DataRefresher();

function AddData() {
	if(validateForm() == true){
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var address = document.getElementById('address').value;
		var age = document.getElementById('age').value;

	var dataList;
	if(localStorage.getItem("datalist") == null){
		dataList = [];
	}
	else{
			dataList = JSON.parse(localStorage.getItem("datalist"))
	}

	dataList.push({
			name : name,
			email : email,
			address : address,
			age : age
	})
	localStorage.setItem("datalist", JSON.stringify(dataList));
	DataRefresher();
		document.getElementById('name').value = "";
		document.getElementById('email').value = "";
		document.getElementById('address').value = "";
		document.getElementById('age').value ="";
	}
}

function deleteData(index){
	var dataList;
	if(localStorage.getItem("datalist") == null){
		dataList = [];
	}
	else{
		dataList = JSON.parse(localStorage.getItem("datalist"))
	}
	dataList.splice(index, 1);
	localStorage.setItem("datalist", JSON.stringify(dataList));
	DataRefresher();
}

function updateData(index){
	document.getElementById('Update').style.display = "block";
	document.getElementById('Cancel').style.display = "block";
	document.getElementById('Submit').style.display = "none";

	var dataList;
	if(localStorage.getItem("datalist") == null){
		dataList = [];
	}
	else{
		dataList = JSON.parse(localStorage.getItem("datalist"))
	}

	document.getElementById('name').value = dataList[index].name;
	document.getElementById('email').value = dataList[index].email;
	document.getElementById('address').value = dataList[index].address;
	document.getElementById('age').value = dataList[index].age;

	document.querySelector("#Update").onclick = function() {
		if(validateForm() == true){
			dataList[index].name = document.getElementById('name').value;
			dataList[index].email = document.getElementById('email').value;
			dataList[index].address = document.getElementById('address').value;
			dataList[index].age = document.getElementById('age').value;
2
			localStorage.setItem("datalist", JSON.stringify(dataList));
			DataRefresher();
			document.getElementById('name').value = "";
			document.getElementById('email').value = "";
			document.getElementById('address').value = "";
			document.getElementById('age').value ="";
			document.getElementById('Update').style.display = "none";
			document.getElementById('Cancel').style.display = "none";
			document.getElementById('Submit').style.display = "block";
		}
	}
		document.querySelector("#Cancel").onclick = function() {
		if(validateForm() == true){
			DataRefresher();
			document.getElementById('name').value = "";
			document.getElementById('email').value = "";
			document.getElementById('address').value = "";
			document.getElementById('age').value ="";
			document.getElementById('Update').style.display = "none";
			document.getElementById('Cancel').style.display = "none";
			document.getElementById('Submit').style.display = "block";
		}
	}
}
