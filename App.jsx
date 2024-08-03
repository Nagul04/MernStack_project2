import React from 'react';
import Navbar from './Navbar';
import Stories from './Stories';
import InfiniteScrollComponent from './InfiniteScrollComponent';
import test0 from './test0.json';
import test1 from './test1.json';
import test2 from './test2.json';
import test3 from './test3.json';
import test4 from './test4.json';
import test5 from './test5.json';
import test6 from './test6.json';
import test7 from './test7.json';
import test8 from './test8.json';
import test9 from './test9.json'; 
import test10 from './test10.json';  
import test12 from './test12.json';  
import './App.css';
import Post from './Post';

const App = () => {
  const specificItem7 = test12.data.find(item => item.id === "sMYBIZFdHMI9eM");
  const specificItem0 = test0.data.find(item => item.id === "Mes6PiN6BLAtHM");
  const specificItem1 = test1.data.find(item => item.id === "isNAggf0I3HvxM");
  const specificItem2 = test3.data.find(item => item.id === "h2_kgVWyaj9dYM");
  const specificItem3 = test4.data.find(item => item.id === "r4G2LcgkcAOgiM");
  const specificItem4 = test5.data.find(item => item.id === "wGRVsbHiiIetsM");
  const specificItem5 = test6.data.find(item => item.id === "Z5tZZWK8LQlwSM");
  const specificItem6 = test7.data.find(item => item.id === "2Gad0LKrA4P1nM");

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Stories />
        <div className="api-posts">
          {specificItem1 && (
            <Post
              key={specificItem1.id}
              post={{
                id: specificItem1.id,
                url: specificItem1.url,
                title: specificItem1.title,
                likes: specificItem1.likes,
                comments: specificItem1.comments,
              }}
            />
          )}
          {specificItem2 && (
            <Post
              key={specificItem2.id}
              post={{
                id: specificItem2.id,
                url: specificItem2.url,
                title: specificItem2.title,
                likes: specificItem2.likes,
                comments: specificItem2.comments,
              }}
            />
          )}
          {specificItem0 && (
            <Post
              key={specificItem0.id}
              post={{
                id: specificItem0.id,
                url: specificItem0.url,
                title: specificItem0.title,
                likes: specificItem0.likes,
                comments: specificItem0.comments,
              }}
            />
          )}
           {specificItem7 && (
            <Post
              key={specificItem7.id}
              post={{
                id: specificItem7.id,
                url: specificItem7.url,
                title: specificItem7.title,
                likes: specificItem7.likes,
                comments: specificItem7.comments,
              }}
            />
          )}
            {specificItem3 && (
            <Post
              key={specificItem3.id}
              post={{
                id: specificItem3.id,
                url: specificItem3.url,
                title: specificItem3.title,
                likes: specificItem3.likes,
                comments: specificItem3.comments,
              }}
            />
          )}
          {specificItem4 && (
            <Post
              key={specificItem4.id}
              post={{
                id: specificItem4.id,
                url: specificItem4.url,
                title: specificItem4.title,
                likes: specificItem4.likes,
                comments: specificItem4.comments,
              }}
            />
          )}
          {specificItem5 && (
            <Post
              key={specificItem5.id}
              post={{
                id: specificItem5.id,
                url: specificItem5.url,
                title: specificItem5.title,
                likes: specificItem5.likes,
                comments: specificItem5.comments,
              }}
            />
          )}
          {specificItem6 && (
            <Post
              key={specificItem6.id}
              post={{
                id: specificItem6.id,
                url: specificItem6.url,
                title: specificItem6.title,
                likes: specificItem6.likes,
                comments: specificItem6.comments,
              }}
            />
          )}

          {test10.data.map((item, key) => (
          <Post
            key={key}
            post={{
              id: item.id,
              url: item.url,
              title: item.title,
              likes: item.likes,
              comments: item.comments,
            }}
          />
          ))}
          {test8.data.map((item, key) => (
            <Post
              key={key}
              post={{
                id: item.id,
                url: item.url,
                title: item.title,
                likes: item.likes,
                comments: item.comments,
              }}
            />
          ))}

          {test9.data.map((item, key) => (
            <Post
              key={key}
              post={{
                id: item.id,
                url: item.url,
                title: item.title,
                likes: item.likes,
                comments: item.comments,
              }}
            />
          ))}
        </div>
        <InfiniteScrollComponent />
      </div>
    </div>
  );
};

export default App;
