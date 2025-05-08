import Text from './Text';

const TEXTS = [
  {
    text: 'At GrowthX, we believe the future isn’t just building better tools—it’s treating services like software.',
  },
  {
    text: ' We structure knowledge work as living code: versioned, observed, and continuously improved through AI-driven workflows with expert refinement at the core.',
  },
  {
    text: '\n',
  },
  {
    text: '\n',
  },
  {
    text: 'Our services aren’t static deliverables—they are dynamic, scalable workflows that learn, adapt, and compound value over time.',
  },
  {
    text: ' We aren’t here to sell hours or software licenses.',
  },
  {
    text: ' We build engines for growth that operate like the best software platforms: fast, flexible, and relentlessly outcome-focused.',
  },
];

export default function Company() {
  return (
    <section className='px-[22px] py-20 lg:py-[120px] lg:pl-[240px] lg:pr-[178px]'>
      <p className='whitespace-pre-line text-[20px] lg:text-[32px] font-[500] font-clash-display lg:font-elza leading-[114%] lg:leading-[150%] text-center max-w-[1022px]'>
        {TEXTS.map(({ text }, index) => (
          <Text key={`line-${index.toString()}`}>{text}</Text>
        ))}
      </p>
    </section>
  );
}
