import React, { useEffect } from 'react';
import './App.css';
import '../public/plugin.css';

function App() {
  useEffect(() => {
    localStorage.removeItem('entityToken');
    const script = document.createElement('script');
    script.src = '/plugin.js';
    script.onload = () => {
      window.setToken('f4cf1287-5d66-41b7-9e24-672b524ca2f4');
      console.log('Script loaded');
    };

    const formDiv = document.getElementById('plugin');
    if (formDiv) {
      formDiv.appendChild(script);
    } else {
      console.error("Element with id 'form' not found");
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className="container">
        <main>
          <article>
            <h2>Article Title</h2>
            <p>Lorem and ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>

          <article>
            <h2>Another Article Title</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
        </main>

        <aside>
          <div id='plugin'></div>
        </aside>
      </div>
    </>
  );
}

export default App;
