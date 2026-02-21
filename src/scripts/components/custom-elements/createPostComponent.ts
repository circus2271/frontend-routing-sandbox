import EditorJS from '@editorjs/editorjs'


     const editor = new EditorJS({
  tools: {
  //  // ... your tools
  }
})
// var editor = new EditorJS({
//   holder : 'editorjs',
//   tools: {
//     text: {
//       class: Text,
//       inlineToolbar : true,
//       // other settings..
//     },
//     header: Header
//   },
//   defaultBlock : 'text',
// });

class CreatePostComponent extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();

    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.innerHTML = this.getMarkup()
        
    }

    getMarkup() {
        const markup = `
            // <div id="editorjs"></div>
        `

        return markup
    }
}

// secret component
customElements.define('create-post', CreatePostComponent);