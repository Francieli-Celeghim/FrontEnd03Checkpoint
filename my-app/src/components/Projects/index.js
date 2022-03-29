import "./styles.css";

const data = [
  {
    id: "1",
    name: "Ver projetos",
    link: "https://github.com/Francieli-Celeghim",
    image:
      "https://www.cupcom.com.br/wp-content/uploads/2020/04/site-css-sbg-1-1024x576.jpg",
  },
  {
    id: "2",
    name: "Ver projetos",
    link: "https://github.com/Francieli-Celeghim",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PgzsV7W5GiwTqcJRXzR2H93OAjVDHT9Wzg&usqp=CAU",
  },
  {
    id: "3",
    name: "Ver projetos",
    link: "https://github.com/Francieli-Celeghim",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90nASVnfzuS9UnJTS_k8q2A8RC9hyWEAphg&usqp=CAU",
  },
  
];

export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} width={350} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
