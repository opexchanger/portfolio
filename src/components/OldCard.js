import Image from 'next/image';

export default function OldCard({
  title,
  cover,
  href,
  techs,
  overview,
  repo
}) {
  return (
    <div className={styles.card}>
      <header>
        <Image width='300px' height='200px' src={cover} objectFit='cover' />
      </header>
      <h2>{title}</h2>
      <a
        href={href}
        target='_blank'
        className={styles.card__link}
      >
      </a>
      <p>Tecnologias</p>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p>Overview</p>
      <ul>
        <p>
          {overview}
        </p>
      </ul>
      <p>
        Repo:{' '}
        <a
          className={styles.card__link}
          href={repo}
          target='_blank'
        >
          Github
        </a>
      </p>
    </div>
  )
}