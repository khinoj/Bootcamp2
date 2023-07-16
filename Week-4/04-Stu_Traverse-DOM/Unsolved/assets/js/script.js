// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');



// Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';

// .children .children to taget grand children and so fourth still uses array [] to target speific child/gc. 

for (i = 0; index < articlesDiv.length; i++) {
    const element = array[index];
    
}