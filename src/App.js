import React, {useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {
  const [news, setNews]=useState([])
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e9bb8158a3df4a36a18c4e0cf474429e")
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles);
    })
  },[])
    return (
       <>
       <div className="container my-5">
        <div className="row text-center">
          {
            news.map((val)=>{
              return (
                <div className="col my-3 m-auto">
          <div className="card h-[28rem] border-none w-[25rem]">
          <img src={val.urlToImage} className="card-img-top object-fill h-48 w-96" alt="..."/>
          <div className="card-body">
          <h5 className="card-title font-bold">{val.title}</h5>
          <p className="card-text">{val.description}</p>
          <a href={val.url} className="text-red-800">Read More......</a>
  </div>
</div>
          </div>
              )
            })
          }
        </div>
       </div>
       </>
    );
}

export default App;