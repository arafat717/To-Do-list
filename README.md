
## Getting Started

Follow these steps to run the To-Do-list application on your local machine:

1. **Clone the repository:**


    git clone https://github.com/your-username/todo-list-app.git
    cd To-Do-list


2. **Install dependencies:**

   
    npm install
  

3. **Run the application:**

   
    npm start
 

    The application will be available at [http://localhost:3000](http://localhost:3000).

## Features

- Add new tasks to the to-do list.
- Mark tasks as completed.
- Remove tasks from the list.

## Styling with Tailwind CSS

Tailwind CSS is used for styling in this project. The styles are directly applied within the React components. The Tailwind CSS configuration file (`tailwind.config.js`) is included in the project.

## Project Components

### 1. App.js

The main component that holds the state for the To-Do list and renders the `AddTodo` and `TodoList` components.

### 2. TodoList.js

A functional component that renders the list of To-Do items using the `TodoItem` component.

### 3. TodoItem.js

A functional component representing a single To-Do item with the ability to toggle completion and remove the item.

### 4. AddTodo.js

A functional component that allows the user to add new To-Do items to the list.

## Customizing and Extending

Feel free to customize and extend the application based on your needs. You can add more features, improve styling, or integrate additional functionality.


