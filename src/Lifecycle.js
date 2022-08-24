import React, { useEffect, useState } from 'react';

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount");
    return () => {
      //unmount 시점에 실행됨
      console.log('unmount');
    }
  }, []);
  return <div>unmount testing component</div>
}

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>on/off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
}

export default Lifecycle;