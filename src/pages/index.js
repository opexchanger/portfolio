import Head from 'next/head';
import { useState } from 'react';
import { Grid } from '@mantine/core';

import ProjectsCard from '../components/ProjectsCard';
import ProjectsGrid from '../components/ProjectsGrid';
import styles from '../styles/Home.module.scss';
import projects from '../data/projects';
import Modal from '../components/Modal';

export default function Home() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, data: null });

  return (
    <>
      <Head>
        <title>Portfolio | Flávio Neto</title>
        <meta name='description' content='Simple portfolio to showcase some of my web development projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Flávio Neto</h1>
        <p className={styles.description}>
          These are some of the projects I've been involved in:
        </p>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <ProjectsGrid>
            {projects.map((project) => (
              <Grid.Col sm={6} lg={4} key={project.title} >
                <ProjectsCard
                  title={project.title}
                  cover={project.cover}
                  href={project.link}
                  techs={project.techs}
                  overview={project.overview}
                  repo={project.repo}
                  onButtonClick={() => {
                    setModalConfig({ isOpen: true, data: project })
                  }}
                />
              </Grid.Col>
            ))}
          </ProjectsGrid>
          {modalConfig.isOpen &&
            <Modal data={modalConfig.data} onClose={() => {
              setModalConfig({ isOpen: false, data: null })
            }} />
          }
        </div>
      </main>
    </>
  );
}
