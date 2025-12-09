import { default as prisma } from "@/lib/prisma";

async function main() {
  // Lấy danh sách tất cả các Exercise ID
  const exercises = await prisma.exercise.findMany({
    select: {
      id: true,
      slug: true,
    },
  });

  const contents = exercises
    .map((exercise) => {
      switch (exercise.slug) {
        // --- Course 101: Introduction to Programming with Python ---
        case "install-python":
          return {
            exerciseId: exercise.id,
            objective: "Biết cách cài đặt môi trường Python cơ bản.",
            description:
              "Trước khi bắt đầu code Python, bạn cần cài đặt trình thông dịch Python và một IDE/Code Editor (như VS Code).",
            instructions:
              "1. Tải Python từ trang chủ (phiên bản 3.x).\n2. Cài đặt, nhớ chọn 'Add Python to PATH'.\n3. Mở Terminal/Command Prompt và chạy lệnh: `python --version` để kiểm tra.",
            task: "Viết comment `# Cài đặt thành công` trong playground để xác nhận hoàn thành (bài này mang tính hướng dẫn, không chạy code)",
            example: null,
            evaluation: null,
          };
        case "hello-world":
          return {
            exerciseId: exercise.id,
            objective:
              "Viết chương trình 'Hello, World!' đầu tiên bằng Python.",
            description:
              "Đây là bài tập kinh điển giúp bạn làm quen với cú pháp cơ bản của Python, cụ thể là hàm `print()`.",
            instructions: "Sử dụng hàm `print()` để in ra chuỗi yêu cầu.",
            task: "In chuỗi **'Hello, CodeLearner!'** ra màn hình console.",
            example: 'print("Hello, World!")',
            evaluation:
              "Chương trình phải in ra chính xác chuỗi 'Hello, CodeLearner!'.",
          };
        case "list-ops":
          return {
            exerciseId: exercise.id,
            objective:
              "Thực hiện các thao tác cơ bản với kiểu dữ liệu List (danh sách) trong Python.",
            description:
              "List là một trong những cấu trúc dữ liệu quan trọng nhất, cho phép lưu trữ nhiều giá trị có thứ tự.",
            instructions:
              "1. Khởi tạo một list chứa các số từ 1 đến 5.\n2. Thêm số 6 vào cuối list.\n3. Xóa phần tử đầu tiên của list.\n4. In list sau khi chỉnh sửa ra màn hình.",
            task: "Viết code thực hiện các bước trên. List cuối cùng phải là: `[2, 3, 4, 5, 6]`.",
            example: "my_list = [10, 20]\nmy_list.append(30)\nprint(my_list)",
            evaluation: "Kiểm tra giá trị và độ dài của list cuối cùng.",
          };
        case "dict-practice":
          return {
            exerciseId: exercise.id,
            objective:
              "Thực hiện các thao tác cơ bản với kiểu dữ liệu Dictionary (từ điển) trong Python.",
            description:
              "Dictionary lưu trữ dữ liệu dưới dạng cặp Key-Value, rất hữu ích để mô tả các đối tượng thực tế.",
            instructions:
              "1. Tạo một dictionary tên `student` với key là 'name' (giá trị là tên của bạn) và 'age' (giá trị là tuổi của bạn).\n2. Cập nhật giá trị 'age' thành tuổi + 1.\n3. Thêm một key-value mới là 'city' với giá trị là 'Hanoi'.\n4. In dictionary sau khi chỉnh sửa.",
            task: "Viết code thực hiện các bước trên.",
            example: 'person = {"key": "value"}\nperson["key"] = "new_value"',
            evaluation:
              "Kiểm tra dictionary có đủ 3 cặp key-value ('name', 'age', 'city') với giá trị đã cập nhật.",
          };

        // --- Course 102: Web Development Fundamentals ---
        case "homepage":
          return {
            exerciseId: exercise.id,
            objective:
              "Xây dựng cấu trúc HTML cơ bản cho một trang chủ đơn giản.",
            description:
              "Sử dụng các thẻ HTML cơ bản như `<h1>`, `<p>`, `<a>` để tạo nội dung cho trang web.",
            instructions:
              "1. Tạo cấu trúc HTML cơ bản (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).\n2. Trong `<body>`, thêm một tiêu đề cấp 1 (`<h1>`) và một đoạn văn bản (`<p>`).\n3. Thêm một liên kết (`<a>`) dẫn đến Google.",
            task: "Hiển thị Tiêu đề, Đoạn văn và Liên kết trên màn hình.",
            example: "<h1>Tiêu đề</h1>\n<p>Đoạn văn</p>",
            evaluation:
              "Đảm bảo trang hiển thị 1 thẻ h1, 1 thẻ p, và 1 thẻ a hợp lệ.",
          };
        case "semantic-html":
          return {
            exerciseId: exercise.id,
            objective:
              "Sử dụng các thẻ HTML ngữ nghĩa (Semantic HTML) để cải thiện cấu trúc tài liệu.",
            description:
              "Thẻ ngữ nghĩa (như `<header>`, `<nav>`, `<main>`, `<footer>`) giúp các công cụ tìm kiếm và trình đọc màn hình hiểu rõ hơn về vai trò của các phần tử.",
            instructions:
              "Thay thế các thẻ `<div>` không ngữ nghĩa bằng các thẻ sau:\n1. Thanh điều hướng: `<nav>`\n2. Phần nội dung chính: `<main>`\n3. Phần cuối trang: `<footer>`",
            task: "Tạo cấu trúc trang web với `<header>`, `<nav>`, `<main>`, `<footer>`.",
            example: '<div id="header"> -> <header>',
            evaluation:
              "Kiểm tra xem các thẻ `nav`, `main`, `footer` có được sử dụng đúng cách.",
          };
        case "color-fonts":
          return {
            exerciseId: exercise.id,
            objective:
              "Áp dụng các thuộc tính CSS để định kiểu màu sắc và font chữ.",
            description:
              "Màu sắc và font chữ là yếu tố cơ bản để tạo nên vẻ ngoài hấp dẫn cho trang web.",
            instructions:
              "1. Thiết lập màu nền của `<body>` thành màu xanh nhạt (ví dụ: `#f0f8ff`).\n2. Thiết lập font chữ của toàn bộ trang thành 'Arial', sans-serif.\n3. Đặt màu chữ của tiêu đề `<h1>` thành màu đỏ.",
            task: "Viết CSS để áp dụng các kiểu trên.",
            example: "body { background-color: blue; }",
            evaluation:
              "Kiểm tra các thuộc tính `background-color`, `font-family`, và `color` đã được áp dụng.",
          };
        case "flexbox":
          return {
            exerciseId: exercise.id,
            objective:
              "Sử dụng Flexbox để tạo bố cục (layout) linh hoạt một chiều.",
            description:
              "Flexbox là công cụ mạnh mẽ để căn chỉnh và phân phối không gian giữa các phần tử trong một container.",
            instructions:
              "1. Tạo một `div` cha có class là `container` và 3 `div` con có class là `box`.\n2. Áp dụng CSS để biến `container` thành Flex container.\n3. Căn giữa 3 `box` con theo cả chiều ngang và chiều dọc trong `container`.",
            task: "Viết CSS để sử dụng `display: flex`, `justify-content: center` và `align-items: center`.",
            example: ".container { display: flex; }",
            evaluation:
              "Kiểm tra 3 box có được căn giữa hoàn toàn trong container.",
          };
        case "vars-funcs":
          return {
            exerciseId: exercise.id,
            objective:
              "Sử dụng biến (Variables) và hàm (Functions) cơ bản trong JavaScript.",
            description:
              "Biến dùng để lưu trữ dữ liệu, Hàm dùng để đóng gói và tái sử dụng logic code.",
            instructions:
              "1. Khai báo một biến `userName` và gán tên của bạn vào đó.\n2. Viết một hàm tên là `greet` nhận vào một tham số `name` và trả về chuỗi 'Hello, ' + name + '!'.\n3. Gọi hàm `greet` với biến `userName` và in kết quả ra console.",
            task: "Viết code JavaScript thực hiện các bước trên.",
            example: "function add(a, b) { return a + b; }",
            evaluation:
              "Kiểm tra console output phải là 'Hello, [Tên của bạn]!'.",
          };
        case "dom-manipulation":
          return {
            exerciseId: exercise.id,
            objective:
              "Thực hiện thao tác cơ bản trên DOM (Document Object Model) bằng JavaScript.",
            description:
              "DOM Manipulation cho phép JavaScript thay đổi nội dung, cấu trúc và kiểu dáng của trang web.",
            instructions:
              "1. Trong HTML, tạo một `<button>` với id là `btn-change` và một `<p>` với id là `text-area` (chứa nội dung 'Hello').\n2. Trong JS, thêm sự kiện 'click' vào button.\n3. Khi button được click, thay đổi nội dung của `<p>` thành 'Clicked!'.",
            task: "Viết code để khi người dùng click button, nội dung `p` thay đổi.",
            example: 'document.getElementById("id").innerHTML = "New Text";',
            evaluation:
              "Kiểm tra nội dung của `p` thay đổi sau khi click button.",
          };

        // --- Course 103: Data Structures & Algorithms ---
        case "array-traversal":
          return {
            exerciseId: exercise.id,
            objective:
              "Duyệt qua các phần tử của một mảng (Array) và thực hiện tính toán.",
            description:
              "Mảng là cấu trúc dữ liệu cơ bản, việc duyệt mảng là thao tác thiết yếu.",
            instructions:
              "1. Khai báo một mảng số nguyên: `[10, 20, 30, 40, 50]`.\n2. Sử dụng vòng lặp (for, while, hoặc for...of) để duyệt qua tất cả các phần tử.\n3. Tính tổng của tất cả các phần tử trong mảng.",
            task: "Viết hàm hoặc đoạn code trả về tổng của mảng. Kết quả phải là **150**.",
            example: "let sum = 0; for (let num of arr) { sum += num; }",
            evaluation: "Kiểm tra giá trị tổng trả về có bằng 150.",
          };
        case "linked-list-insertion":
          return {
            exerciseId: exercise.id,
            objective:
              "Hiểu và thực hiện thao tác thêm một nút (node) vào danh sách liên kết (Linked List).",
            description:
              "Danh sách liên kết khác với mảng, việc thêm/xóa phần tử thường chỉ cần thay đổi con trỏ (pointer).",
            instructions:
              "Yêu cầu: Viết một class `Node` và class `LinkedList` (chỉ cần chứa thuộc tính `head`).\nThực hiện:\n1. Viết phương thức `insertAtBeginning(data)` để thêm một node mới vào đầu danh sách.\n2. Thêm các giá trị 5, 10, 15 theo thứ tự (15 sẽ là head).",
            task: "Viết code để danh sách liên kết có thứ tự là 15 -> 10 -> 5.",
            example: null,
            evaluation:
              "Kiểm tra node `head` có giá trị là 15, và `head.next.next` có giá trị là 5.",
          };
        case "bubble-sort":
          return {
            exerciseId: exercise.id,
            objective:
              "Áp dụng thuật toán Bubble Sort để sắp xếp mảng tăng dần.",
            description:
              "Bubble Sort là thuật toán sắp xếp đơn giản, hoạt động bằng cách liên tục so sánh và hoán đổi các cặp phần tử liền kề nếu chúng không đúng thứ tự.",
            instructions:
              "1. Cho mảng đầu vào: `[5, 1, 4, 2, 8]`.\n2. Triển khai thuật toán Bubble Sort.\n3. Trả về mảng đã được sắp xếp.",
            task: "Sắp xếp mảng trên. Kết quả phải là `[1, 2, 4, 5, 8]`.",
            example: null,
            evaluation: "Kiểm tra mảng đầu ra đã được sắp xếp tăng dần.",
          };
        case "quick-sort":
          return {
            exerciseId: exercise.id,
            objective:
              "Triển khai thuật toán Quick Sort, một thuật toán sắp xếp hiệu quả (Divide and Conquer).",
            description:
              "Quick Sort chọn một phần tử làm trục (pivot) và phân chia mảng thành hai mảng con, sau đó đệ quy sắp xếp các mảng con.",
            instructions:
              "1. Cho mảng đầu vào: `[7, 2, 1, 6, 8, 5, 3, 4]`.\n2. Triển khai thuật toán Quick Sort sử dụng phần tử cuối cùng làm pivot.",
            task: "Sắp xếp mảng trên. Kết quả phải là `[1, 2, 3, 4, 5, 6, 7, 8]`.",
            example: null,
            evaluation: "Kiểm tra mảng đầu ra đã được sắp xếp tăng dần.",
          };

        // --- Course 104: Full-Stack Development with Node.js & React ---
        case "rest-api":
          return {
            exerciseId: exercise.id,
            objective:
              "Xây dựng các route cơ bản cho một RESTful API bằng Node.js (ví dụ: Express).",
            description:
              "REST (Representational State Transfer) là một tập hợp các nguyên tắc kiến trúc được sử dụng để xây dựng các dịch vụ web.",
            instructions:
              "Giả sử bạn đang dùng Express:\n1. Khởi tạo một project Node.js và cài Express.\n2. Tạo một route GET tại `/api/users`.\n3. Route này phải trả về một JSON Array đơn giản chứa thông tin người dùng: `[{ id: 1, name: 'Alice' }]`.",
            task: "Viết code Express để tạo route GET `/api/users` trả về dữ liệu JSON mẫu.",
            example:
              'app.get("/api/data", (req, res) => res.json({ message: "Hello" }));',
            evaluation:
              "Kiểm tra endpoint `/api/users` trả về mã HTTP 200 và dữ liệu JSON chính xác.",
          };
        case "crud-operations":
          return {
            exerciseId: exercise.id,
            objective:
              "Thực hiện các thao tác CRUD (Create, Read, Update, Delete) cơ bản lên dữ liệu.",
            description:
              "CRUD đại diện cho các hàm cơ bản mà một ứng dụng cơ sở dữ liệu phải có.",
            instructions:
              "Giả sử bạn đang làm việc với một mảng `posts` trong bộ nhớ:\n1. Thêm một route POST `/api/posts` để thêm bài viết mới vào mảng.\n2. Thêm một route DELETE `/api/posts/:id` để xóa bài viết theo ID.",
            task: "Triển khai hai route trên. Sau khi POST một bài viết và DELETE bài viết đó, kiểm tra mảng `posts`.",
            example: null,
            evaluation:
              "Kiểm tra chức năng POST (tăng số lượng post) và DELETE (giảm số lượng post) hoạt động đúng.",
          };
        case "todo-list":
          return {
            exerciseId: exercise.id,
            objective:
              "Xây dựng một Component quản lý danh sách việc cần làm (Todo List) cơ bản trong React.",
            description:
              "Đây là bài tập kinh điển giúp hiểu về việc quản lý State trong React Functional Component.",
            instructions:
              "1. Tạo một React Functional Component.\n2. Sử dụng `useState` để lưu trữ danh sách các `todos` (là một mảng các chuỗi/object).\n3. Hiển thị danh sách này bằng cách dùng `map()`.",
            task: "Hoàn thành component hiển thị ít nhất 2 mục trong danh sách Todo List.",
            example:
              'const [todos, setTodos] = useState(["Buy milk", "Walk dog"]);',
            evaluation:
              "Kiểm tra component có hiển thị danh sách các mục (list items) dựa trên state.",
          };
        case "props-state":
          return {
            exerciseId: exercise.id,
            objective:
              "Thực hành truyền dữ liệu giữa các component bằng Props và quản lý State cục bộ.",
            description:
              "Props dùng để truyền dữ liệu từ cha xuống con, State dùng để quản lý dữ liệu thay đổi trong component.",
            instructions:
              "1. Tạo Component `Child` nhận một `prop` là `message`.\n2. Trong Component `Parent`:\n   a. Dùng `useState` để tạo `state` cho `message` (ví dụ: 'Initial Message').\n   b. Render `Child` Component và truyền `message` state qua prop.\n3. Thêm một button trong `Parent` để thay đổi `message` state.",
            task: "Khi click button, nội dung hiển thị trong `Child` phải thay đổi.",
            example: "<Child message={stateValue} />",
            evaluation:
              "Kiểm tra `Child` component hiển thị nội dung được truyền qua `prop` và thay đổi khi state của `Parent` thay đổi.",
          };
        case "api-calls":
          return {
            exerciseId: exercise.id,
            objective: "Thực hiện gọi API (fetch data) trong React Component.",
            description:
              "Sử dụng `useEffect` và `fetch` (hoặc `axios`) để lấy dữ liệu từ một API bên ngoài khi component được render.",
            instructions:
              "1. Sử dụng `useEffect` để chạy logic lấy dữ liệu sau khi component mount.\n2. Gọi API `https://jsonplaceholder.typicode.com/todos/1`.\n3. Lưu kết quả vào state và hiển thị thuộc tính `title` ra màn hình.",
            task: "Hiển thị tiêu đề của todo có ID là 1 ra màn hình sau khi fetch.",
            example:
              'useEffect(() => { fetch("...").then(res => res.json()).then(data => setState(data)) }, []);',
            evaluation:
              "Kiểm tra component có hiển thị tiêu đề 'delectus aut autem'.",
          };
        case "auth-flow":
          return {
            exerciseId: exercise.id,
            objective:
              "Hiểu và mô phỏng luồng xác thực (Authentication Flow) đơn giản (Login/Logout).",
            description:
              "Luồng xác thực cơ bản bao gồm đăng nhập (lưu token) và đăng xuất (xóa token).",
            instructions:
              "1. Sử dụng `useState` để quản lý trạng thái `isLoggedIn` (boolean).\n2. Tạo 2 hàm: `handleLogin` (set `isLoggedIn` thành `true`) và `handleLogout` (set `isLoggedIn` thành `false`).\n3. Hiển thị 'Welcome User!' và nút 'Logout' nếu đã đăng nhập, hoặc 'Please Login' và nút 'Login' nếu chưa đăng nhập.",
            task: "Viết component mô phỏng luồng này. Nhấn Login sẽ chuyển sang trạng thái đã đăng nhập và ngược lại.",
            example: "{isLoggedIn ? <LogoutButton /> : <LoginButton />}",
            evaluation:
              "Kiểm tra UI chuyển đổi đúng giữa trạng thái đăng nhập và đăng xuất khi click button.",
          };

        default:
          // Trường hợp không tìm thấy slug, nên không thể tạo content
          console.warn(`No content found for slug: ${exercise.slug}`);
          return null;
      }
    })
    .filter((content) => content !== null);

  // Xóa dữ liệu cũ (nếu có) và thêm dữ liệu mới
  try {
    // Để đảm bảo không trùng lặp (nếu bạn chạy lại seed)
    await prisma.exerciseContent.deleteMany({});

    await prisma.exerciseContent.createMany({
      data: contents,
      skipDuplicates: true,
    });
    console.log(`Successfully seeded ${contents.length} exercise contents.`);
  } catch (e) {
    console.error("Error seeding exercise content:", e);
    process.exit(1);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
