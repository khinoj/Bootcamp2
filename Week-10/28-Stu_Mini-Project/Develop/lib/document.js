// TODO: Import your Header, TaskList, and TaskListItem
class Component {
  render() {
    throw new Error (`Child class musy implement render() method.`)
  };
  renderInnerHTML() {
    // what
    var children = card.children;
    for (var i = 0; index < children.length; i++) {
      var childTask = children[i];
      
    }
  }
}

class Header extends Component {
  render() {
    return `<header class="header"><h1>Todo Today</h1><p>${DATE_HERE}</p></header>`
  };
}

function createDocument(title, tasks = []) {
  console.log(title);
  console.log(tasks);
  // TODO: Create a new Header
  let head = new Header ()
  console.log(head.render());
  // TODO: Create new TaskListItems from the provided tasks


  // TODO: Add TaskListItems to a new TaskList

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>YOUR TITLE HERE</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        YOUR HEADER
        YOUR TASKLIST
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
