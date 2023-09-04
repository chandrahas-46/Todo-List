var inputBox = document.querySelector("#input-content-box");
var listItems = document.querySelector("#list-items");
var addTaskButton = document.querySelector("#add");
const countItemSpan = document.querySelector("#count-item");
// console.log("count: ",countItemSpan);
// var checkedItem = document.querySelector("#type2");

// ############################################### develop <li> tag of HTML code to add task into listItems ################################################
// ******************* Update count item **************************
// ******************* Task list is persestent ********************

function addItem(){
	if(inputBox.value == ''){
		alert("Please write Task item!!");
	}
	else{
		var li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listItems.appendChild(li);
		// console.log(listItems);

		var span = document.createElement("span");
		span.innerHTML = "\u00d7";
  		// span.className = "close";
  		li.appendChild(span);
	}
	inputBox.value = "";
	countItem();
	saveData();
}

// ################################################# Checked/Remove Task Items ##############################################################
function handleClick(event){
	// console.log(event);
	if(event.target.tagName == "LI"){
		event.target.classList.toggle("checked");
		saveData();
	}
	else if(event.target.tagName == "SPAN"){
		event.target.parentElement.remove();
		countItem();
		saveData();		
	}
}


// ################################################# Count Task Items ##############################################################
function countItem(){
	var countTasks = document.querySelectorAll("#list-items li").length;
	// console.log(countTasks);
	countItemSpan.innerHTML = countTasks;
	// console.log("c1: ", countItemSpan.innerHTML);
}
// countItem();

// #################################### add listItems data and countItemSpan data in localstorage #####################################
function saveData(){
	localStorage.setItem("data", listItems.innerHTML);
	localStorage.setItem("data2", countItemSpan.innerHTML);
}

// ####################################### get local storage data of listItems and countItemSpan #######################################
function showData(){
	listItems.innerHTML = localStorage.getItem("data");
	countItemSpan.innerHTML = localStorage.getItem("data2");
	// console.log("c2: ", countItemSpan.innerHTML);
}


// ######################################################## Start TODO App #############################################################
function initializeApp(){
	// fetchTodo();
	addTaskButton.addEventListener("click", addItem);
	listItems.addEventListener("click", handleClick);
	showData();
}

initializeApp();

