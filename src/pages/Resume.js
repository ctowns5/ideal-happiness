const resume = 'http:localhost:3000/ChrisTownsendResume.pdf'

export default function Resume() {
  const downloadFileAtURL=(url)=>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div>
      <h1>Resume Page</h1>
      <button onClick={()=>{downloadFileAtURL(resume)}}>Download Chris Townsend's Resume</button>
    </div>
  );
}
