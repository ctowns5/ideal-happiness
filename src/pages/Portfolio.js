import hottakes from "../assets/hottakes.jpg"
import flashdash from "../assets/project1.png"
import jate from "../assets/jate.jpg"
import josdept from "../assets/josdept.jpg"
import note from "../assets/startpage.jpg"





export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Here are some projects I have worked on
      </p>
      <section className="card1">
          <header>Hot Takes</header>
          <img className="p1img" src={hottakes}alt="project 2" />
          <p>Hot Takes is an interactive movie-review site for the hot takes of real movie goers, not critics!</p>
          <p>check it out at the links below</p>
          <p><a href="https://github.com/OutlawDisco/Hot-Takes">GitHub repository</a></p>
          <p><a href="https://hot-takes-reviews-b29812e3e846.herokuapp.com/">Link to actual project</a></p>
        </section>
      <section className="card1">
          <header>flashDash</header>
          <img className="p1img" src={flashdash}alt="project 1" />
          <p>flashDash is a dashboard site with weather, news, local notes and random dog pictures</p>
          <p>check it out at the links below</p>
          <p><a href="https://github.com/ctowns5/flashDash">GitHub repository</a></p>
          <p><a href="https://ctowns5.github.io/flashDash/">Link to actual project</a></p>
      </section>
      <section className="card1">
          <header>JATE(Just Another Text Editor)PWA</header>
          <img className="p1img" src={jate}alt="JATE" />
          <p>This is a PWA text editor/note taker that can be installed by clicking the install button.</p>
          <p>check it out at the links below</p>
          <p><a href="https://github.com/ctowns5/potential-octo-fiesta">GitHub repository</a></p>
          <p><a href="https://gentle-ridge-00170-bbb1bef3974d.herokuapp.com/">Link to actual project</a></p>
          </section>
      <section className="card1">
          <header>E-commerce backend</header>
          <h2>There is no image because there is no front end to show on this project.</h2>
          <p> This project is a backend / server for an e-commerce website.</p>
          <p>check it out at the links below</p>
          <p><a href="https://github.com/ctowns5/studious-meme">GitHub repository</a></p>
          </section>
      <section className="card1">
          <header>A command line employee database using Node.js, Inquirer, and MySQL2</header>
          <img className="p1img" src={josdept}alt="CLI employee database" />
          <p>This project is an employee managment system that is command line based. It uses node.js, mysql and inquirer.</p>
          <p>check it out at the links below</p>
          <p><a href="https://github.com/ctowns5/jubilant-octo-spork">GitHub repository</a></p>
          </section>
      <section className="card1">
          <header>Note Taker</header>
          <img className="p1img" src={note}alt="project 2" />
          <p>This application uses an Express.js back end and will save and retrieve note data from a JSON file. It allows users to write and save notes.</p>
          <p>check it out at the links below</p>
          <p><a href="https://github.com/ctowns5/super-enigma">GitHub repository</a></p>
          <p><a href="https://super-enigma-b9079ea54c86.herokuapp.com/">Link to actual project</a></p>
      </section>
              
    </div>
  );
}
