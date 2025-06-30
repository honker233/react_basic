//项目的根组件

// App -> index.js -> public/index.html (root)
function App() {
  //基础写法
  // const handleClick=()=>{
  //   console.log('button被点击了'); 
  // }

  //事件参数e
  //  const handleClick=(e)=>{
  //   console.log('button被点击了',e); 
  // }

  //传递自定义参数
  //  const handleClick=(name)=>{
  //   console.log('button被点击了',name); 
  // }

  //既要传递自定义参数，还要传递事件对象e
   const handleClick=(name,e)=>{
    console.log('button被点击了',name,e); 
  }
  return (
    <div className="App">
    <button onClick={(e)=>handleClick('jack',e)}>click me</button>
    </div>
  );
}

export default App;
