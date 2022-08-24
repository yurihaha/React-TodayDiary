import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
// import Lifecycle from './Lifecycle';

// const dummyList = [
//   {
//     id: 1,
//     author: '하유리1',
//     content: '안녕 내 일기다.',
//     emotion: 1,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: '하유리2',
//     content: '안녕 내 일기다.',
//     emotion: 2,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: '하유리3',
//     content: '안녕 내 일기다.',
//     emotion: 3,
//     create_date: new Date().getTime(),
//   },
// ];
//https://jsonplaceholder.typicode.com/comments


function App() {
  const [data, setData] = useState([]); //일기가 없는상태
  const dataId = useRef(0);
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());
    console.log(res);
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, [])

  //새로운 일기 추가
  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((item) => item.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((item) => item.id === targetId ? { ...item, content: newContent } : item)
    );
  };
  return (
    <div className="App">
      {/* <Lifecycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
