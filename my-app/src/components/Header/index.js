import "./styles.css";


export default function Header() {
  // function scrollToProjects() {
  //   document.getElementById("projects").scrollIntoView();
  // }

  // function scrollToAbout() {
  //   document.getElementById("about").scrollIntoView();
  // }

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>

      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("about")}>
          Sobre
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>
          Projetos
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("social")}>
          Social
        </li>
      </ul>
    </header>
  );
}