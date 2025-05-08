import Brain from '@/components/icons/Brain';
import Eye from '@/components/icons/Eye';
import Heart from '@/components/icons/Heart';
import Lightning from '@/components/icons/Lightning';
import Medal from '@/components/icons/Medal';
import Star from '@/components/icons/Star';
import Trophy from '@/components/icons/Trophy';
import { cn } from '@/lib/shadcn/utils';
import Card from './Card';

const CARDS = [
  {
    icon: <Eye />,
    title: 'Communicate with Clarity',
    subTitle: 'Say it simply. We explain complex ideas clearly and directly.',
    items: ['Clear writing and speaking builds trust and alignment.', 'We tackle issues head-on and avoid jargon.'],
    itemsAccent: 'marker:text-ui-blue',
    containerStyles: 'bg-ui-white',
  },
  {
    icon: <Star />,
    title: 'Relentless Excellence',
    subTitle: 'Good isn’t enough. We hold high standards in everything we do.',
    items: ['We take pride in quality and constant improvement.', 'Feedback is essential to raising the bar.'],
    itemsAccent: 'marker:text-ui-black',
    containerStyles: 'bg-ui-peach',
  },
  {
    icon: <Brain />,
    title: 'Never Stop Learning',
    subTitle: 'Always stay curious. We push ourselves to grow and adapt.',
    items: [
      'We ask questions, challenge assumptions, and seek out new skills.',
      'Curiosity keeps us sharp and future-ready.',
    ],
    itemsAccent: 'marker:text-ui-black',
    containerStyles: 'bg-ui-green-light',
  },
  {
    icon: <Lightning />,
    title: 'Move Fast, Stay Steady',
    subTitle: 'Speed with judgment. We act quickly without breaking things.',
    items: ['We take smart risks and adjust fast when needed.', 'We balance urgency with stability and scale.'],
    itemsAccent: 'marker:text-ui-white',
    containerStyles: 'bg-ui-blue text-ui-white',
  },
  {
    icon: <Heart />,
    title: 'Lead with Empathy',
    subTitle: 'Kindness wins. We treat others with respect and humility.',
    items: ['We lift each other up and act with care.', 'Awareness of our impact makes us stronger as a team.'],
    itemsAccent: 'marker:text-ui-black',
    containerStyles: 'bg-ui-white',
  },
  {
    icon: <Trophy />,
    title: 'Own the Outcome',
    subTitle: 'Be accountable. We don’t wait for permission—we take action',
    items: ['Each of us is responsible for results.', 'We solve problems and take initiative.'],
    itemsAccent: 'marker:text-ui-black',
    containerStyles: 'bg-ui-peach',
  },
  {
    icon: <Medal />,
    title: 'Master the Process First',
    subTitle: 'Fix the process. We don’t throw tech at bad workflows.',
    items: [
      'We start with first principles and get the basics right.',
      'Automation comes after the process works well.',
    ],
    itemsAccent: 'marker:text-ui-black',
    containerStyles: 'bg-ui-green-light',
  },
];

export default function Cards() {
  return (
    <div className='flex flex-col gap-6 mt-10 lg:mt-0 max-w-[1440px] mx-auto'>
      {CARDS.map(({ icon, title, subTitle, items, itemsAccent, containerStyles }, index) => (
        <Card key={`card-${index.toString()}`} className={cn([containerStyles, 'p-6 lg:sticky lg:top-[120px]'])}>
          {icon}
          <h4 className='font-clash-display font-[500] text-[20px] leading-[114%] mt-4'>{title}</h4>
          <p className='font-elza font-[400] text-[16px] leading-[150%] mt-3'>{subTitle}</p>
          <ul className={cn([itemsAccent, 'list-disc pl-4 mt-2'])}>
            {items.map((item, itemIndex) => (
              <li key={`item-${itemIndex.toString()}`} className='font-elza font-[400] text-[16px] leading-[150%]'>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
