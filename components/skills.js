const Skills = ({ translation }) => {
  const skillGroups = [
    {
      title: 'Core',
      items: ['Angular', 'TypeScript', 'RxJS'],
    },
    {
      title: 'Frontend',
      items: ['HTML & CSS (SCSS)', 'Tailwind', 'Accessibility (a11y)'],
    },
    {
      title: 'Testing',
      items: ['Unit testing', 'Integration testing', 'E2E testing'],
    },
    {
      title: 'Product & Collaboration',
      items: [
        'Requirement analysis',
        'Client-facing communication',
        'Feature scoping & validation',
        'UX collaboration',
      ],
    },
    {
      title: 'Backend & Infra (working knowledge)',
      items: [
        'REST APIs (consumption & integration)',
        'AWS (Cloud Practitioner certified)',
        'CI/CD (usage & troubleshooting)',
        'Docker (daily usage)',
      ],
    },
    {
      title: 'Tooling & Workflow',
      items: [
        'Git & GitHub',
        'Jira & Confluence',
        'VS Code',
        'Draw.io',
        'AI-assisted development (human-validated)',
      ],
    },
  ];

  return (
    <div className='mx-auto flex h-full w-full max-w-screen-md flex-col justify-center px-10 lg:max-w-screen-lg lg:px-20 xl:max-w-screen-xl'>
      <div className='text-gray-500 dark:text-gray-300'>
        <h2 className='mt-10 block text-2xl font-normal text-gray-600 dark:text-gray-300 lg:mt-12 lg:text-3xl'>
          {translation.hardSkills}
        </h2>
      </div>

      <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8'>
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className='rounded-lg border border-gray-200 bg-white/60 p-5 text-left shadow-sm dark:border-gray-800 dark:bg-black/30'
          >
            <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500'>
              {group.title}
            </p>
            <ul className='mt-3 space-y-2 text-base text-gray-600 dark:text-gray-200 lg:text-lg'>
              {group.items.map((item) => (
                <li key={item} className='leading-snug'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
