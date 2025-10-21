import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
   if (!project) return null;

   return (
      <div className="project-modal-overlay" onClick={onClose}>
         <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={onClose}>
               <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="project-modal-body">
               <div className="project-modal-info-section">
                  <div className='project-modal-logo-container'>
                     <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="project-modal-logo"
                     />
                     <h2 className='project-modal-title'>{project.title}</h2>
                  </div>
                  
                  <div className="project-modal-description">
                     <p>{project.description}</p>
                  </div>
                  
                  <div className="project-modal-tags">
                     <h3>Technologies Used</h3>
                     <div className="project-modal-tags-container">
                        {project.languageTags && project.languageTags.map((tag, index) => (
                           <article key={index} className="project-modal-tag" style={{ '--icon-clr': tag.color }}>
                              {tag.icon}
                              <p>{tag.name}</p>
                           </article>
                        ))}
                     </div>
                  </div>

                  <div className="project-modal-links">
                     <div className="project-modal-links-container">
                        {project.webLink && (
                           <a
                              href={project.webLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-modal-link-button"
                           >
                              <ion-icon name="globe-outline"></ion-icon>
                              Live Demo
                           </a>
                        )}
                        {project.gitHubLink && (
                           <a
                              href={project.gitHubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-modal-link-button github"
                           >
                              <ion-icon name="logo-github"></ion-icon>
                              GitHub
                           </a>
                        )}
                     </div>
                  </div>
               </div>
               
               <div className="project-modal-image-container">
                  <img
                     src={project.model}
                     alt={`${project.title} preview`}
                     className="project-modal-image"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectModal;