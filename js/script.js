/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


 
// Shown below are global variables, to be used throughout this program.

const studentList = document.getElementsByClassName('student-item cf');
let studentsPerPage = 10;
let currentPage = 1;

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
		let min = page * 10 - 10;
		let max = page * 10 - 1;
		if(i >= min && i <= max) {
			studentList[i].style.display = 'block';
		}
	}
}
showPage(studentList, currentPage);

// the function below adds the pagination links to the page

const appendPageLinks = (list) => {
	const itemsPerPage = Math.floor(studentList.length / 10) + 1;
	let pageCount = Math.ceil(studentList.length / studentsPerPage);
	const newDiv = document.createElement('div');
	newDiv.className = 'pagination';
	const pageDiv = document.querySelector('.page');
	pageDiv.appendChild(newDiv);

	// the code below adds a ul to the “pagination” div to store the pagination links

	const pagerUl = document.createElement('ul');
	newDiv.appendChild(pagerUl);

	/* 
	the code below adds 'li' and 'a' tags with the page number text to the bottom of the page, removes the 	'active' class from all links, then adds it back in when a link is clicked
	the code below also filters the student list to display 10 at a time
	*/
	
	for(let i = 0; i < pageCount; i++) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = '#';
		a.textContent = i + 1;
		pagerUl.appendChild(li);
		li.appendChild(a);
		a.addEventListener("click", (e) => {
			const links = document.querySelectorAll('a');
			showPage(studentList, i + 1);
			for(let i = 0; i < links.length; i++) {
				links[i].classList.remove('active');
			} 
			e.target.className = 'active';
		});
	}
};
appendPageLinks(studentList);