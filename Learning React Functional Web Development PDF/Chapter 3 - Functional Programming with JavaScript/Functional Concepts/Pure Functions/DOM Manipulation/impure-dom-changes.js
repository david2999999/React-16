function Header(text) {
    let h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.appendChild(h1);
}

Header("Header() caused side effects");

// The Header function creates a heading—one element with specific text and adds it to
// the DOM. This function is impure. It does not return a function or a value, and it
// causes side effects: a changed DOM.