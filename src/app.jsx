import { render } from 'preact';
import enter_zip_code from './enter_zip_code.jsx'; // corrected import

import './index.css';

render(<EnterZipCode />, document.getElementById('app')); // rendering EnterZipCode component

// import { useState } from 'preact/hooks';
// import preactLogo from './assets/preact.svg';
// import viteLogo from '/vite.svg';
// import './app.css';

// export function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} class="logo" alt="Vite logo" />
//         </a>
//         <a href="https://preactjs.com" target="_blank">
//           <img src={preactLogo} class="logo preact" alt="Preact logo" />
//         </a>
//       </div>
//       <h1>Vite + Preact</h1>
//       <div class="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/app.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p class="read-the-docs">
//         Click on the Vite and Preact logos to learn more
//       </p>
//     </>
//   );
// }
