// @flow

import { useState } from 'react';

import { AccordionItem } from '../components/AccordionItem.tsx';

type AccordionItemProps = {
  title: string;
  content: string;
};

const accordionItems: AccordionItemProps[] = [
  {
    title: 'What is your return policy?',
    content:
      'You can return items within 30 days of purchase. Ensure that products are unused and in original packaging. See our full return policy for more details.',
  },
  {
    title: 'How can I track my order?',
    content:
      "Once your order is shipped, you will receive an email with tracking information. Use the link in the email to check your order's status at any time.",
  },
  {
    title: 'Do you offer customer support?',
    content:
      'Yes, our customer support is available 24/7. Contact us via email, chat, or phone, and we’ll be happy to assist you with any inquiries.',
  },
];

export const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<number>();

  const onHandleAccordion = (index: number) => {
    if (activeAccordion === index) {
      return setActiveAccordion(undefined);
    }
    setActiveAccordion(index);
  };

  return (
    <div className="p-4 max-w-md my-32 mx-auto rounded-md shadow-2xl space-y-2">
      {accordionItems.map(({ title, content }, index) => (
        <AccordionItem
          title={title}
          description={content}
          key={index}
          active={activeAccordion === index}
          handleOnClick={() => onHandleAccordion(index)}
        />
      ))}
    </div>
  );
};
