/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


 
// Shown below are global variables, to be used throughout this program.

const studentList = document.getElementsByTagName('li');
let currentPage = 1;


// this is a function that hides all the students in the list

function hideList() {
	for(i = 0; i < studentList.length; i++) {
		studentList[i].style.display = 'none';
	}
}

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


const appendPageLinks = ( list ) => {

const itemsPerPage = Math.floor(studentList.length / 10) + 1;

const newDiv = document.createElement('div');
newDiv.className = 'pagination';
const pageDiv = document.getElementsByClassName('page');
pageDiv.appendChild(newDiv);

/*
3. Add a ul to the “pagination” div to store the pagination links
*/
const newUL = document.createElement('ul');
newDiv.appendChild(newUl);

/*
4. for every page, add li and a tags with the page number text
*/
const li = document.createElement('li');
const a = document.createElement('a');



/*
5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page
6. Loop over pagination links to remove active class from all links
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/
}
appendPageLinks();
