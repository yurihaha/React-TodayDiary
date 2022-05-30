import React, { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

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

function App() {
  const [data, setData] = useState([]); //일기가 없는상태
  const dataId = useRef(0);

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

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((item) => item.id !== targetId);
    setData(newDiaryList);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onDelete={onDelete} diaryList={data}/>
    </div>
  );
}

export default App;
