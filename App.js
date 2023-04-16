// nested react structure
const parent=React.createElement("div",{id: "parent"},
[React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"i am h1 tag"),
React.createElement("h2",{},"i am h2 tag")]),React.createElement("div",
{id:"child2"},
[React.createElement("h1",{},"i am h1 tag"),
React.createElement("h2",{},"i am h2 tag")]
)]
);
console.log(parent)//object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)



// ReactElemnet(Object)=render(coverts this to html tag )
{/* <div id="parent">
    <div id="child">
        <h1>iam h1 tag</h1>
        <h2>iam h2 tag</h2>
        <div/>
    <div/> */}









// const head= React.createElement("h1",{id: "heading"},"hello world from React");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(head); 