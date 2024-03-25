import { getDb, putDb } from './database';  // <= Import methods to save and get data from the indexedDB database in './database.js'
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

   if (typeof CodeMirror === 'undefined') {              // <= Check if CodeMirror is loaded.
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    r.
    getDb().then((data) => {        // <= When the editor is ready, set the value to whatever is stored in indexeddb.
        console.info('Loaded data from IndexedDB, injecting into editor');     
        this.editor.setValue(data || localData || header);                      // <= Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    });

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    this.editor.on('blur', () => {                      // <= Save the content of the editor when the editor itself is loses focus.
      console.log('The editor has lost focus.');
      putDb(localStorage.getItem('content'));
    });
  }
}
