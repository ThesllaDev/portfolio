import technologyIconCode from "@/data/technologyIconCode";
import Icon from "./Icon";
import LinkButton from "./LinkButton";

export default function ProjectCard({ projectsDatas }) {
	return (
		<>
			{projectsDatas.map((project) => (
				<article
					key={project.id}
					className="object-neon-glow flex flex-col max-w-xl p-4 border-2 border-solid border-red bg-white text-black"
				>
					<header>
						<video
							className="lg:h-[370px]"
							width="540"
							height="370"
							controls>
							<source
								src={`/videos/video-preview-project-${project.id}.mp4`}
								type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<h3 className="mt-4 lg:h-16">{project.name}</h3>
					</header>
					<p className="font-sans py-2 lg:h-36">{project.description}</p>
					<h4 className="font-sans py-2">
						Principais tecnologias utilizada:
					</h4>
					<ul className="flex flex-wrap gap-2 text-white">
						{project.technologies.map((technologyName, index) => (
							<li className="flex gap-2 items-center bg-blue p-2" key={index}>
								<Icon iconCode={technologyIconCode[technologyName]} />
								{technologyName}
							</li>
						))}
					</ul>
					<footer className="mb-4 mt-8 flex flex-col justify-end gap-6 lg:grow">
						<div>
							<p className="font-sans">
								Visualize-o funcionando clicando no botão abaixo "Preview"
							</p>
							<p className="font-sans">
								Acesse o código e mais informações clique no botão abaixo "GitHub"
							</p>
						</div>
						<div className="flex justify-center gap-4">
							<LinkButton
								textLink="Preview"
								urlLink={project.previewUrl}
							/>
							<LinkButton
								textLink="GitHub"
								urlLink={project.githubUrl}
							/>
						</div>
					</footer>
				</article>
			))}
		</>
	);
}
