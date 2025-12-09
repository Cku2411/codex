import { default as prisma } from "@/lib/prisma";

async function seedExerciseContent() {
  // Course 101: Introduction to Programming with Python
  // Chapter 1: Getting Started with Python
  await prisma.exercise.update({
    where: { slug: "install-python" },
    data: {
      exerciseContent: {
        create: {
          objective: "Set up a Python development environment.",
          description:
            "This exercise guides you through installing Python and verifying the installation.",
          instructions:
            "1. Download Python from the official website.\n2. Run the installer and ensure 'Add Python to PATH' is checked.\n3. Open a terminal and type 'python --version' to verify.",
          example:
            "After installation, running 'python --version' should output something like 'Python 3.12.0'.",
          task: "Install Python on your machine and run the version check command in the playground terminal.",
          evaluation:
            "Check if the output matches the expected Python version format.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "hello-world" },
    data: {
      exerciseContent: {
        create: {
          objective: "Write and run your first Python program.",
          description:
            "Learn to create a simple script that prints 'Hello, World!' to the console.",
          instructions:
            "1. Open a text editor.\n2. Write: print('Hello, World!')\n3. Save as hello.py.\n4. Run with 'python hello.py'.",
          example: "print('Hello, World!')",
          task: "Write the Hello World program in the code playground and execute it.",
          evaluation: "The output should be 'Hello, World!' without errors.",
        },
      },
    },
  });

  // Chapter 2: Python Data Types
  await prisma.exercise.update({
    where: { slug: "list-ops" },
    data: {
      exerciseContent: {
        create: {
          objective: "Perform basic operations on Python lists.",
          description: "Explore creating, accessing, and modifying lists.",
          instructions:
            "1. Create a list: my_list = [1, 2, 3]\n2. Append an item: my_list.append(4)\n3. Access index 0: print(my_list[0])\n4. Remove an item: my_list.remove(2)",
          example:
            "my_list = ['apple', 'banana']\nmy_list.append('cherry')\nprint(my_list)  # Output: ['apple', 'banana', 'cherry']",
          task: "Create a list of fruits, add two more, remove one, and print the final list.",
          evaluation:
            "Verify the list operations produce the correct modified list.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "dict-practice" },
    data: {
      exerciseContent: {
        create: {
          objective: "Work with Python dictionaries.",
          description: "Learn to create, access, and update key-value pairs.",
          instructions:
            "1. Create a dict: my_dict = {'key1': 'value1'}\n2. Access value: print(my_dict['key1'])\n3. Add key: my_dict['key2'] = 'value2'\n4. Delete key: del my_dict['key1']",
          example:
            "person = {'name': 'Alice', 'age': 30}\nprint(person['name'])  # Output: Alice",
          task: "Create a dictionary for a person with name, age, and city. Update the age and print the dictionary.",
          evaluation: "Check if the dictionary reflects the updates correctly.",
        },
      },
    },
  });

  // Course 102: Web Development Fundamentals
  // Chapter 1: HTML Basics
  await prisma.exercise.update({
    where: { slug: "homepage" },
    data: {
      exerciseContent: {
        create: {
          objective: "Build a basic homepage using HTML.",
          description:
            "Create a simple webpage structure with headings, paragraphs, and links.",
          instructions:
            "1. Use <html>, <head>, <body> tags.\n2. Add <h1> for title.\n3. Add <p> for content.\n4. Include a <a> link.",
          example:
            "<!DOCTYPE html>\n<html>\n<head>\n<title>My Page</title>\n</head>\n<body>\n<h1>Welcome</h1>\n<p>Hello world.</p>\n</body>\n</html>",
          task: "Build an HTML page with a heading, paragraph, and a link to an external site.",
          evaluation:
            "Validate the HTML structure and ensure it renders correctly in the playground.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "semantic-html" },
    data: {
      exerciseContent: {
        create: {
          objective: "Use semantic HTML elements.",
          description:
            "Improve accessibility and SEO with semantic tags like <header>, <nav>, <article>.",
          instructions:
            "1. Wrap navigation in <nav>.\n2. Use <header> for top section.\n3. Use <article> for main content.\n4. Add <footer>.",
          example:
            "<header><h1>Site Header</h1></header>\n<nav>Links</nav>\n<article>Content</article>\n<footer>Copyright</footer>",
          task: "Refactor a basic HTML page to use semantic elements.",
          evaluation:
            "Ensure semantic tags are used appropriately without syntax errors.",
        },
      },
    },
  });

  // Chapter 2: CSS Styling
  await prisma.exercise.update({
    where: { slug: "color-fonts" },
    data: {
      exerciseContent: {
        create: {
          objective: "Apply colors and fonts using CSS.",
          description:
            "Style text elements with color, font-family, and font-size.",
          instructions:
            "1. Link CSS: <link rel='stylesheet' href='styles.css'>\n2. In CSS: body { color: blue; font-family: Arial; }\n3. Style headings: h1 { font-size: 24px; }",
          example: "p { color: red; font-family: 'Times New Roman'; }",
          task: "Style an HTML page: set body background to lightgray, paragraphs to green text, and headings to bold sans-serif font.",
          evaluation:
            "Check if styles are applied correctly in the rendered view.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "flexbox" },
    data: {
      exerciseContent: {
        create: {
          objective: "Create layouts using Flexbox.",
          description: "Use display: flex to arrange items in rows or columns.",
          instructions:
            "1. Set container: .container { display: flex; justify-content: center; }\n2. Add items: <div class='item'>Item</div>\n3. Style items.",
          example: ".flex-container { display: flex; flex-direction: row; }",
          task: "Build a flexbox layout with three centered items in a row, each with different colors.",
          evaluation: "Verify the layout aligns items as specified.",
        },
      },
    },
  });

  // Chapter 3: JavaScript Basics
  await prisma.exercise.update({
    where: { slug: "vars-funcs" },
    data: {
      exerciseContent: {
        create: {
          objective: "Understand variables and functions in JavaScript.",
          description:
            "Declare variables and define functions to perform calculations.",
          instructions:
            "1. Declare: let x = 5;\n2. Function: function add(a, b) { return a + b; }\n3. Call: console.log(add(2, 3));",
          example:
            "const name = 'John';\nfunction greet() { console.log('Hello ' + name); }\ngreet();",
          task: "Write a function that takes two numbers, multiplies them, and logs the result using variables.",
          evaluation:
            "Ensure the function executes and outputs the correct result.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "dom-manipulation" },
    data: {
      exerciseContent: {
        create: {
          objective: "Manipulate the DOM with JavaScript.",
          description:
            "Select elements and change their content or styles dynamically.",
          instructions:
            "1. Select: document.getElementById('myId')\n2. Change text: element.innerHTML = 'New Text';\n3. Add event: element.addEventListener('click', function);",
          example:
            "let para = document.querySelector('p');\npara.textContent = 'Updated';",
          task: "Select a button and paragraph; on button click, change the paragraph text to 'Clicked!'.",
          evaluation: "Test if the DOM updates on interaction.",
        },
      },
    },
  });

  // Course 103: Data Structures & Algorithms
  // Chapter 1: Arrays and Linked Lists
  await prisma.exercise.update({
    where: { slug: "array-traversal" },
    data: {
      exerciseContent: {
        create: {
          objective: "Traverse and process arrays.",
          description:
            "Iterate over array elements and perform operations like summing values.",
          instructions:
            "1. Define array: let arr = [1, 2, 3];\n2. Loop: for(let i=0; i<arr.length; i++) { console.log(arr[i]); }\n3. Use forEach.",
          example: "let sum = 0;\narr.forEach(num => sum += num);",
          task: "Traverse an array of numbers, calculate the sum, and print each element.",
          evaluation: "Verify the sum and traversal output are correct.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "linked-list-insertion" },
    data: {
      exerciseContent: {
        create: {
          objective: "Implement insertion in a linked list.",
          description:
            "Create a linked list class and add nodes at specific positions.",
          instructions:
            "1. Define Node class.\n2. LinkedList class with head.\n3. Insert method: create new node, link appropriately.",
          example:
            "class Node { constructor(data) { this.data = data; this.next = null; } }",
          task: "Implement a LinkedList with insert at beginning, end, and position methods.",
          evaluation: "Test insertions by printing the list after operations.",
        },
      },
    },
  });

  // Chapter 2: Sorting Algorithms
  await prisma.exercise.update({
    where: { slug: "bubble-sort" },
    data: {
      exerciseContent: {
        create: {
          objective: "Implement bubble sort algorithm.",
          description:
            "Sort an array by repeatedly swapping adjacent elements if out of order.",
          instructions:
            "1. Nested loops: outer for passes, inner for comparisons.\n2. If arr[j] > arr[j+1], swap.\n3. Optimize with flag.",
          example:
            "function bubbleSort(arr) { for(let i=0; i<arr.length; i++) { for(let j=0; j<arr.length-i-1; j++) { if(arr[j] > arr[j+1]) { let temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; } } } return arr; }",
          task: "Write bubble sort function and sort [5,3,8,4,2].",
          evaluation: "Check if the array is sorted ascending.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "quick-sort" },
    data: {
      exerciseContent: {
        create: {
          objective: "Implement quick sort algorithm.",
          description: "Sort using divide-and-conquer with pivot partitioning.",
          instructions:
            "1. Choose pivot.\n2. Partition: elements < pivot left, > right.\n3. Recurse on subarrays.",
          example:
            "function quickSort(arr) { if(arr.length <= 1) return arr; let pivot = arr[arr.length-1]; let left = [], right = []; for(let i=0; i<arr.length-1; i++) { if(arr[i] < pivot) left.push(arr[i]); else right.push(arr[i]); } return [...quickSort(left), pivot, ...quickSort(right)]; }",
          task: "Implement quick sort and sort [10,7,8,9,1,5].",
          evaluation: "Verify the sorted output.",
        },
      },
    },
  });

  // Course 104: Full-Stack Development with Node.js & React
  // Chapter 1: Node.js Backend Setup
  await prisma.exercise.update({
    where: { slug: "rest-api" },
    data: {
      exerciseContent: {
        create: {
          objective: "Set up a basic REST API with Node.js.",
          description: "Use Express to create routes for GET, POST, etc.",
          instructions:
            "1. npm init, install express.\n2. const app = express();\n3. app.get('/', (req, res) => res.send('Hello'));\n4. app.listen(3000);",
          example: "app.post('/data', (req, res) => { /* handle post */ });",
          task: "Create a Node.js server with GET /users returning a JSON array.",
          evaluation: "Test endpoints with curl or browser.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "crud-operations" },
    data: {
      exerciseContent: {
        create: {
          objective: "Implement CRUD operations in Node.js.",
          description:
            "Create, Read, Update, Delete data using in-memory storage.",
          instructions:
            "1. Use array for data.\n2. GET /items, POST /items, PUT /items/:id, DELETE /items/:id.\n3. Handle req.body with express.json().",
          example:
            "let items = [];\napp.post('/items', (req, res) => { items.push(req.body); res.send(items); });",
          task: "Build CRUD API for a todo list.",
          evaluation: "Verify all operations work via requests.",
        },
      },
    },
  });

  // Chapter 2: React Components
  await prisma.exercise.update({
    where: { slug: "todo-list" },
    data: {
      exerciseContent: {
        create: {
          objective: "Build a Todo List app in React.",
          description: "Use state to manage a list of todos with add/remove.",
          instructions:
            "1. Use useState for todos array.\n2. Form to add new todo.\n3. Map todos to list items with delete button.",
          example:
            "const [todos, setTodos] = useState([]);\nfunction addTodo(newTodo) { setTodos([...todos, newTodo]); }",
          task: "Create a React component for a simple todo list with add and delete.",
          evaluation: "Test adding and removing items in the UI.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "props-state" },
    data: {
      exerciseContent: {
        create: {
          objective: "Use props and state in React components.",
          description: "Pass data via props and manage local state.",
          instructions:
            "1. Parent component with state.\n2. Pass prop to child.\n3. Child uses prop and own state.",
          example: "<Child name={parentState} /> // In Child: props.name",
          task: "Create a parent component that passes a counter value as prop to a child, where child increments its own state.",
          evaluation: "Ensure props and state update independently.",
        },
      },
    },
  });

  // Chapter 3: Integration
  await prisma.exercise.update({
    where: { slug: "api-calls" },
    data: {
      exerciseContent: {
        create: {
          objective: "Make API calls from React.",
          description: "Use fetch or axios to get/post data from backend.",
          instructions:
            "1. Import axios.\n2. useEffect(() => { axios.get('/api').then(res => setData(res.data)); }, []);\n3. Handle POST similarly.",
          example:
            "fetch('/users').then(res => res.json()).then(data => console.log(data));",
          task: "In a React app, fetch data from a Node.js API and display it in a list.",
          evaluation: "Check if data loads and renders correctly.",
        },
      },
    },
  });

  await prisma.exercise.update({
    where: { slug: "auth-flow" },
    data: {
      exerciseContent: {
        create: {
          objective: "Implement authentication flow.",
          description:
            "Handle login/signup with JWT or sessions in full-stack app.",
          instructions:
            "1. Backend: endpoint for login, generate token.\n2. Frontend: form to submit credentials, store token.\n3. Protect routes.",
          example:
            "app.post('/login', (req, res) => { /* verify, send JWT */ });",
          task: "Set up basic auth: login form in React, backend verification, protected API.",
          evaluation:
            "Test login, access protected route, and unauthorized cases.",
        },
      },
    },
  });
}

seedExerciseContent()
  .then(() => {
    console.log("Exercise content seeded successfully!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
