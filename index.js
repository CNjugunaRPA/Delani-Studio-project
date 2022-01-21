 //alert("This is a test alert");

//  $(document).ready(function() {  //when document is ready...
//      $("#design").click(function(){  //on clicking the 'design'' class containing img
//         $('.design').toggleClass(display); //toggle the class and display the 'ID' design containing the paragraph/description
     
//         $("#development").click(function(){
//             $('.development').toggleClass();
        
//             $("#product").click(function(){
//                 $('.product').toggleClass();


//                 event.preventDefault(); //to prevent the default action of submitting to nowhere for the form
    
//             }
//         }        
//     });
// });




// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;


// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "25%";
    }
  }
// Three images side by side
function three() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "33%";
    }
  }




// PLAN:
// 1. Create a GitHub repository for Delani Studio project: https://github.com/CNjugunaRPA/Delani-Studio-project
// 2. Download all the resources provided in the assets folder
// 	a.) Save all images:  
// 	b.)Copy the What we do descriptions
// WELCOME TO DELANI STUDIO
// AMAZING PEOPLE ARE MAKING AMAZING DESIGNS IN A FUN ENVIRONMENT
// ABOUT US
// When you work with us, you are part of a team of committed collaborators. All aspects of our software development process are intergrated, interactive and agile.
// Our approach unifies design, development and product management to create exceptional products.
// We start each project by understanding your business goals, the user's need and the product requirements.
// Then we help translate hem into effective and elegant solutions.
// SERVICES
// Before we sign a contractt or write a line of code, our team will spend the necessary time needed to understand your product vision.
// The outcome of this scoping session is a proposal or high-level statement of work, based on your requirements, we can provide a complete offering or just the pieces you need.
// WHAT WE DO
// DESIGN
// Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing. Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.
// DEVELOPMENT
// All engineers are fluent in the latest enterprise, mobile and web development technologies. They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.
// PRODUCT MANAGEMENT
// Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.
// PORTFOLIO
// CONTACT US
// 3. Download/copy Google fonts. for fonts.
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
// CSS rules to specify families
// font-family: 'Montserrat', sans-serif;
// 4. Download pop sound 
// 5. Create html, css and js files
// 6. Publish on git
    //  }
