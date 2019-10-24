# accident
I was performing a udemy assignment and accidentally created a ssr-component-based framework

this is an "inspirational" repository, it is quite easy to reuse the FullHtml.js and the component.js.

component.js creates components. since it always outputs string, components can be given component[] as content args.
Type is mandatory (2.nd arg), self-closing and args are optional, though if you make self-closing components,
content makes no sense (just put "" in its place, it will be ignored anyways). args is a rest argument, 
just write whatever you would for the component attributes.

fullHtml takes a ...content array as its argument and just adds everything to the body
