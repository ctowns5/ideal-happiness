import resume from "../assets/ChrisTownsendResume.pdf"

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
      <h2>Technical Skills</h2>
      <p>Technical Languages: 		Javascript
Applications:			HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, MySQL, 						MongoDB, Express, Handelbars.js, and ReactJS, git, heroku, 						MERN Stack
Operating Systems:		Windows, Linux, OSX, UNIX 
Virtualization:			VMWare, hyper-V</p>
    </div>
  );
}
