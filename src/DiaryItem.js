const DiaryItem = ({onDelete, id, author, content, create_date, emotion}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author">작성자: {author}, 감정점수: {emotion}</span><br/>
        <span className="date">날짜: {new Date(create_date).toLocaleString()}</span>
      </div>
      <p className="content">일기내용: {content}</p>
    <button onClick={() => {
      if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
        onDelete(id);
      }
    }}>
      삭제하기
    </button>
    </div>
  );
};

export default DiaryItem;