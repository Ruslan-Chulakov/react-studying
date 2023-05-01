// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
// import Counter from './components/Counter/Counter'
// import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "div",
//   {
//     a: "info in props",
//     b: "some property",
//     children: "Hello world!!!",
//     // children: ['hello world', 'hello friends']
//   }
//   /////////////////////// добавляя данные после закрытых фигурных скобок
//   /////////////////////// они будут автоматически добавлятся внутрь объекта настроек
//   /////////////////////// с ключем children (дети нашего элемента, то что в итоге будет в него вложено)
//   /////////////////////// если ребенок один, будет автоматически создан ключ и значение
//   /////////////////////// если детей несклько, в ключе чилдрен будет лежать массив значений, детей.
//   /////////////////////// Поэтому можно сразу в объекте настроек создавать ключ children и добавлять в него данные

//   /////////////////////// children это то что будет размещаться между открывающим и закрывающим тегом,
//   /////////////////////// остальное же будет распознаваться и размещаться в качестве атрибутов
//   //   'Hello world',
//   //   'Hello friends',
//   // 'all we need is love'
// );
// console.log(element);

// ReactDOM.render(element, document.querySelector("#root"));

// Если в children разместить несколько элементов Н: ['hello world', ' ', 'hello friends']
// они будут отслежитваться реактом как отдельные элементы, хотя по факту будут являться одной строкой
// для создания элементов внутри элемента можно действовать следующим образом

// const span1 = React.createElement("span", { children: "Hello" });
// const span2 = React.createElement("span", { children: "WORLD!!!" });
// const newElement = React.createElement("div", {
//   children: [span1, " ", span2],
// });

// ReactDOM.render(newElement, document.querySelector('#root'));
// // ReactDOM.createRoot((newElement, document.querySelector("#root")));

// const newSpan1 = <span>Hello</span>;
// const newSpan2 = <span>(JSX)</span>;
// const jsxElement = <div>{newSpan1}, i am java script syntax extension - {newSpan2}</div>
// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.querySelector('#root'))


// ReactDOM.createRoot(document.getElementById('root')).render(<Counter step={5} />)

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)














//=======================from box=======================//
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
