# accident
I was performing a udemy assignment and accidentally created a ssr-component-based proto-framework

this is an "inspirational" repository, it is quite easy to reuse the FullHtml.js and the component.js.

FullHtml and component take unstructured objects as arguments. Everything is optional, though it makes sense to add content at some point (a-duh) and create document and component strings, respectively

FullHtml(body, head) and component(content, attributes) take either string or string[]. write the attributes as you would in any html tag ('readonly', 'color="red"' etc...)
component:selfClosing takes boolean, but you really only need to define it if you want to make a self-closing tag. For that matter, anything truthy will suffice.

component(type) defines the html tag of your component. "p" will render <p></p>, "input" will render <input /> (if you define the selfClosing property with a truthy value), and undefined (or any falsy value) will render <div></div>
