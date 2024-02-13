
const MyCompent = (props) => {
  // props : 속성을 부모컴포넌트 -> 자식 컴포넌트로 넘겨줌
  // 비구조화 할당
  const {name, age} = props;

  return(
    <>
      <div>
        <h3>
          내 이름은 {name}인데요?<br />
          나이는 만으로 {age}살 먹었는디^^
        </h3>
        <h3>
          {/* 내 이름은 {props.name}인데요?<br />
          나이는 만으로 {props.age}살 먹었는디^^ */}
        </h3>
      </div>
    </>
  );
}

// 컴포넌트를 사용할 때에는 외부에 내보내기가 필수
export default MyCompent;