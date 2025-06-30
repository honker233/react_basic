//项目的根组件

// App -> index.js -> public/index.html (root)
const list = [
  { id: 1, name: "jack" },
  { id: 2, name: "rose" },
  { id: 3, name: "tom" },
];

const isLogin = false;

//既要传递自定义参数，还要传递事件对象e
const handleClick = (name, e) => {
  console.log("button被点击了", name, e);
};

const articleType = 2;

function getArticleTem (type){
  if(articleType===0){
    return <div>我是无图文章</div>;
  }else if(type===1){
    return <div>我是单图模式</div>;
  }else{
    return <div>我是三图模式</div>;
  }
}

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
  
  return (
    <div className="App">

      {getArticleTem(articleType)}
      {/* key用来提升性能 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {isLogin && <span>this is span</span>}
      {/* 三目运算符 */}
      {isLogin ? <span>this is span</span> : <span>loading...</span>}

      <button onClick={(e) => handleClick("jack", e)}>click me</button>
    </div>
  );
}

export default App;
