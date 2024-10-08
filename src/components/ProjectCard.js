import Icon from "./Icon";
import LinkButton from "./LinkButton";

export default function ProjectCard({ projectsDatas }) {
  return (
    <>
      {projectsDatas.map((project) => (
        <article
          key={project.id}
          className="object-neon-glow flex max-w-xl flex-col border-4 border-double border-red bg-white p-4 text-black"
        >
          <header>
            <video
              className="lg:h-[370px]"
              width="540"
              height="370"
              controls
              preload="metadata"
            >
              <source
                src={`/videos/video-preview-project-${project.id}.webm`}
                type="video/webm"
              />
              <source
                src={`/videos/video-preview-project-${project.id}.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="mt-4 lg:h-16">{project.name}</h3>
          </header>
          <p className="py-2 font-firaCode lg:h-48">{project.description}</p>
          <h4 className="py-2 font-firaCode">
            Principais tecnologias utilizada:
          </h4>
          <ul className="flex flex-wrap gap-2 text-white">
            {project.technologies.map((technologyName, index) => (
              <li className="flex items-center gap-2 bg-blue p-2" key={index}>
                <Icon iconName={technologyName} />
                {technologyName}
              </li>
            ))}
          </ul>
          <footer className="mb-4 mt-8 flex flex-col justify-end gap-6 lg:grow">
            <div className="font-firaCode">
              <p>
                Visualize-o funcionando clicando no botão abaixo
                &quot;Preview&quot;
              </p>
              <p>
                Acesse o código e mais informações clique no botão abaixo
                &quot;GitHub&quot;
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <LinkButton textLink="Preview" urlLink={project.previewUrl} />
              <LinkButton textLink="GitHub" urlLink={project.githubUrl} />
            </div>
          </footer>
        </article>
      ))}
    </>
  );
}
