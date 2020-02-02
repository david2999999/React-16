const Header = (props) => <h1>{props.title}</h1>;

// In React, the UI is expressed with pure functions. In the following sample, Header is a
// pure function that can be used to create heading—one elements just like in the previous
// example. However, this function on its own does not cause side effects because it
// does not mutate the DOM. This function will create a heading-one element, and it is
// up to some other part of the application to use that element to change the DOM