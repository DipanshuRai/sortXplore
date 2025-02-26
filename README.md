<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Sorting Visualizer</h1>
  <p>
    Sorting Visualizer is an interactive, fully responsive web application that demonstrates the working of various sorting algorithms.
    It features dynamic animations and performance insights, making it an ideal tool for learning and understanding sorting algorithms.
  </p>

  <h2>🔗 Open the Project</h2>
  <p>
    <a href="https://sorting-visualizer-5.vercel.app" target="_blank">Click here to open the Sorting Visualizer</a>
  </p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Supports five sorting algorithms:
      <ul>
        <li>Selection Sort</li>
        <li>Bubble Sort</li>
        <li>Insertion Sort</li>
        <li>Quick Sort</li>
        <li>Merge Sort</li>
      </ul>
    </li>
    <li>Adjustable array size (10 to 150 elements).</li>
    <li>Control sorting speed with 10 levels.</li>
    <li>Visual representation of sorting in real-time.</li>
    <li>Displays performance metrics:
      <ul>
        <li>Time complexity (Best, Average, Worst).</li>
        <li>Space complexity.</li>
        <li>Stability, In-Place Sorting, Number of Comparisons, and Swaps.</li>
      </ul>
    </li>
    <li>Responsive design for desktops, tablets, and mobile devices.</li>
  </ul>

  <h2>🛠️ Technologies Used</h2>
  <ul>
    <li>React.js for UI and interactivity.</li>
    <li>CSS for styling and responsive design.</li>
    <li>FontAwesome for icons.</li>
  </ul>

  <h2>📚 How to Use</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/DipanshuRai/sorting-visualizer.git
cd sorting-visualizer</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server:
      <pre><code>npm start</code></pre>
    </li>
    <li>Open the application in your browser.</li>
  </ol>

  <h2>📈 Supported Algorithms and Their Complexities</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Algorithm</th>
        <th>Time Complexity (Best)</th>
        <th>Time Complexity (Average)</th>
        <th>Time Complexity (Worst)</th>
        <th>Space Complexity</th>
        <th>Stable?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Selection Sort</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(1)</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Bubble Sort</td>
        <td>O(n)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(1)</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Insertion Sort</td>
        <td>O(n)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(1)</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Quick Sort</td>
        <td>O(n log n)</td>
        <td>O(n log n)</td>
        <td>O(n<sup>2</sup>)</td>
        <td>O(log n)</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Merge Sort</td>
        <td>O(n log n)</td>
        <td>O(n log n)</td>
        <td>O(n log n)</td>
        <td>O(n)</td>
        <td>Yes</td>
      </tr>
    </tbody>
  </table>

  <h2>🎨 Future Improvements</h2>
  <ul>
    <li>Add more sorting algorithms (e.g., Heap Sort, Radix Sort).</li>
    <li>Add sound effects during sorting operations.</li>
    <li>Include a dark mode toggle.</li>
    <li>Allow users to input custom arrays.</li>
  </ul>

  <h2>📧 Contact</h2>
  <p>If you have any questions or suggestions, please reach out at <a href="mailto:dipanshurai933@gmail.com">dipanshurai933@gmail.com</a>.</p>
</body>
</html>
