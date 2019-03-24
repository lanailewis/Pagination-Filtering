/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


 
// Shown below are global variables, to be used throughout this program.

const studentList = document.getElementsByTagName('li');
let currentPage = 1;
let numberPerPage = 10;
let numberOfPages = 1;


// this is a function that hides all the students in the list

function hideList() {
	for(i = 0; i < studentList.length; i++) {
		studentList[i].style.display = 'none';
	}
}

// this function displays 10 students per page from the list of 54

function showPage(list, page) {
	hideList();
	for(let i = 0; i < studentList.length; i++) {
		let min = currentPage * 10 - 10;
		let max = currentPage * 10 - 1;
		if(i >= min && i <= max) {
			studentList[i].style.display = 'block';
		}
	}
}
showPage(studentList, currentPage);

// this function adds the pagination links to the page

const appendPageLinks = (list) => {
	const itemsPerPage = Math.floor(studentList.length / 10) + 1;
	const newDiv = document.createElement('div');
	newDiv.className = 'pagination';
	const pageDiv = document.querySelector('.page');
	pageDiv.appendChild(newDiv);

	// the code below adds a ul to the “pagination” div to store the pagination links

	const newUl = document.createElement('ul');
	newDiv.appendChild(newUl);

	// the code below adds li and a tags with the page number text

	const li = document.createElement('li');
	const a = document.createElement('a');
	if(currentPage = i) {
		li.textContent = currentPage;
		newUl.appendChild(li);
		newUl.appendChild(a);
	}
/*
5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page
*/
		li.addEventListener("click", (e) => {
			
		});
}
/*
6. Loop over pagination links to remove active class from all links
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/
appendPageLinks();
