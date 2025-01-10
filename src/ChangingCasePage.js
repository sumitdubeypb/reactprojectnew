import React,{useState}from 'react';

  const ChangingCasePage = (props) => {
    const [text, setText] = useState("Enter text here");
  
    const upbuttonClick = () => {
    let newText = text.toUpperCase();
     setText(newText);
   }
   
   const downbuttonClick = () => {
    let newText = text.toLowerCase();
     setText(newText);
   }

  const handleonChange = (event) => {
   setText(event.target.value);
  }




  // setText("vhjvjhv");

  return (
    <>
      <div className="conainer-fluid mt-5">
        <div className="cntainer-fluid border bg-danger ">
          <b className="border ms-2 bg-warning">{props.pageName}</b>
      
        <div className="container-fluid mb-3 text-center">
            <label htmlFor="myBox" className="form-label"><u>{props.heading}</u></label>
            <textarea className="form-control" id="myBox"  value={text} onChange={handleonChange}  rows="15">{}</textarea>
        </div>
          <button className="text-dark  ms-4 mb-3 p-2  btn btn-outline-success" onClick={upbuttonClick}> ConvertToUPCase</button>
          <button className="bg-warning ms-4 mb-3 p-2 btn btn-outline-success" onClick={downbuttonClick}> ConvertLowerCase</button>
        </div>
       </div>
    </>
  )
}
export { ChangingCasePage};

