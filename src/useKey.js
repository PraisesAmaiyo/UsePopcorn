import { useEffect } from 'react';
// import { useRef } from 'react';

export function useKey(key, action, setQuery) {
  //   const inputEl = useRef(null);
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener('keydown', callback);

      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [action, key]
  );
}
