# react-project-draft

## How to run

```
cd tea
npm install
vite (or npm run dev)
```

## Current task

Individual product pages:

- Add routing to individual product pages
  - Read [react router deep-dive](https://reactrouter.com/docs/en/v6/getting-started/concepts) to figure out nested routing, i.e product list page -> individual product pages where each individual product page is a dynamically generated route
  - Figure out how to pass props in route config
  - Rewrite data fetching logic at `main.jsx` level
- Make individual product pages

## Next task

Nicer product display

- Edit `products.JSON` and `/images` folder to choose display image

## Design inpsiration

[🔗 Bitterleaf teas](https://www.bitterleafteas.com/shop)  
[🔗 Three bears tea](https://www.threebearstea.com/collections/teapots)

## Notes

[👥 Dan Abramov's answers about async inside `useEffect()`](https://github.com/facebook/react/issues/14326)  
[📝 React beta docs: props in child component](https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component)  
[👥 Filter list SE answer](https://stackoverflow.com/a/69270078)  
[🔗 React router tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)  
[🔗 React router deep-dive](https://reactrouter.com/docs/en/v6/getting-started/concepts)

- [🔗 Rendering section](https://reactrouter.com/docs/en/v6/getting-started/concepts#rendering)

[📝 Replace white space inside string](https://flaviocopes.com/how-to-replace-whitespace-javascript/)

## Requirements

General requirements

    Initializing Repository, Readme.md
    Create wireframe in something like draw.io to get a concept of what the group wants to create
    use props
    use state
    demonstrate reusable components
    user-friendly (is this easy to use for the user? Hint: you have classmates who are excellent testers for your project.)
    written from scratch (i.e. do not repurpose other people’s code)
    mobile-friendly (i.e. you want to eventually pull this app up on your phone to show a potential recruiter or someone in the tech community if you are out at an event.)
    responsiveness
    Unique and readable design - Be Creative!
    Understand the project enough to be able to present it

E-Commerce:

    must have at least 5 different products
    each product should have a different title, description, and price
    the ability to click on a product to view details only for that one product
