import { Link } from 'react-router-dom';

const style =
  'flex items-center justify-center text-center w-40 h-10 bg-blue-200 rounded-xl border-black border-2 active:bg-blue-300';

export default function NavigationBar(): JSX.Element {
  return (
    <div className="bg-green-100 h-full">
      <div className="flex justify-center py-2">
        Navigate to a different page by clicking any link below ~
      </div>
      <div className="flex items-center justify-center gap-x-4 pb-4">
        <Link to="/" className={style}>
          Home Page
        </Link>
        <Link to="/QuickSort" className={style}>
          Quick Sort
        </Link>
        <Link to="/SelectionSort" className={style}>
          Selection Sort
        </Link>
        <Link to="/BubbleSort" className={style}>
          Bubble Sort
        </Link>
        <Link to="/MergeSort" className={style}>
          Merge Sort
        </Link>
      </div>
    </div>
  );
}
