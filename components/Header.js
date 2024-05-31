// components/Header.js
import { changeStateNav } from '../utils/nav.js'; // Adjust the path accordingly

export default function Header({ _title }) {
  return (
    <header>
        <button 
          id="btn-nav"
          className='btn-nav'
          onClick={() => changeStateNav()}
        ></button>
        <h1>{_title}</h1>
    </header>
  );
}
