// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

function BlogPost (authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn
    this.printMetaData = function () {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`)
      }
};

const post = new BlogPost (
    'Stan Lee',
    'My First Post',
    'Dogs are super cute',
    '1-1-1986'
);

post.printMetaData();

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object
