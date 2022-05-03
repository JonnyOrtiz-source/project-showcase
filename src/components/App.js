import Header from './Header';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import projects from '../data/ProjectData';

function App() {
   return (
      <div>
         <Header />
         <ProjectForm />
         <ProjectList projects={projects} />
      </div>
   );
}

export default App;
