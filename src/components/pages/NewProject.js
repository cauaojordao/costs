import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm.js'

function NewProject() {
  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para adicionar os serviços.</p>
      <ProjectForm btnText="Criar Projeto"/>
    </div>
  );
}

export default NewProject;
