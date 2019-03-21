/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/* 
  Shown below are global variables, to be used throughout this program.
*/

const studentList = document.getElementsByTagName('li');
let currentPage = 1;


// this is a function that hides all the students in the list

for(i = 0; i < studentList.length; i++) {
	studentList[i].style.display = 'none';
}



function showPage(currentPage) {
	for(let i = 0; i < studentList.length; i += 1) {
		const min = currentPage * 10 - 10;
		const max = currentPage * 10 - 1;
		if(i > min && i < max) {
			// change display of selected students to default
			studentList[i].style.display = '';
		}
	}
	
	
}
showPage();


/* 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
*/





// Remember to delete the comments that came with this file, and replace them with your own code comments.