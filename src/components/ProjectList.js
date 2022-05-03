import ProjectListItem from './ProjectListItem';

function ProjectList({ projects }) {
   const projectElement = projects.map((project) => {
      return (
         <ProjectListItem
            key={project.id}
            about={project.about}
            name={project.name}
            phase={project.phase}
            link={project.link}
            image={project.image}
         />
      );
   });
   return (
      <section>
         <h2>Projects</h2>
         <div className="filter">
            <button>All</button>
            <button>Phase 5</button>
            <button>Phase 4</button>
            <button>Phase 3</button>
            <button>Phase 2</button>
            <button>Phase 1</button>
         </div>
         <input type="text" placeholder="Search..." />
         <ul className="cards">{projectElement}</ul>
      </section>
   );
}

export default ProjectList;
