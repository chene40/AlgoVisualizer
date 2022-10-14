import data10 from './SortingAlgos/SampleData/10.json';
// import BubbleSort from './SortingAlgos/Algorithms/BubbleSort';
// import InsertionSort from './SortingAlgos/Algorithms/InsertionSort';
// import SelectionSort from './SortingAlgos/Algorithms/SelectionSort';
// import MergeSort from './SortingAlgos/Algorithms/MergeSort';

import { Routes, Route } from 'react-router-dom';

import NavigationBar from './pages/NavigationBar';

function App(): JSX.Element {
  console.log(data10[0]);

  return (
    <div className="bg-blue-200 h-full">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/QuickSort" element={<div>Quick Sort Page~</div>} />
        <Route path="/SelectionSort" element={<div>Selection Sort Page~</div>} />
        <Route path="/BubbleSort" element={<div>Bubble Sort Page~</div>} />
        <Route path="/MergeSort" element={<div>Merge Sort Page~</div>} />
      </Routes>
    </div>
  );
}

export default App;
