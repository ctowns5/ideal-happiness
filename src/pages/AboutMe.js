import me from "../assets/me-sm.jpg"
export default function Home() {
  return (
    <div>
      <h1>Chris Townsend</h1>
      <section className="card1">
          <img className="p2img" src={me} alt="Chris Townsend"/>
          <p>
      My name is Chris Townsend, I have many years of experience in the
          conferencing / unified communications industry as a field service
          engineer and a solutions consultant. I recently completed a coding
          bootcamp at the University of Denver and am now seeking employment as
          a junior developer.
      </p>
        </section>
      
      
    </div>
  );
}
