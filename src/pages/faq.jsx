import * as React from "react";
import { Accordion } from "../components/accordion";

export const Faq = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(undefined);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 divide-y divide-gray-200">
      <Accordion
        title="What's the best thing about Switzerland?"
        isExpanded={expandedIndex === 0}
        onToggle={() => {
          if (expandedIndex === 0) {
            setExpandedIndex(undefined);
          } else {
            setExpandedIndex(0);
          }
        }}
      >
        <p className="text-base text-gray-500">
          I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </p>
      </Accordion>
      <Accordion
        title="How can I get refund?"
        isExpanded={expandedIndex === 1}
        onToggle={() => {
          if (expandedIndex === 1) {
            setExpandedIndex(undefined);
          } else {
            setExpandedIndex(1);
          }
        }}
      >
        <p className="text-base text-gray-500">
          We do not give refund, so try at your risk.
        </p>
        <p className="text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facere hic sed nemo porro error libero corrupti voluptas assumenda
          nesciunt fugiat rem, aut, rerum quaerat eum accusamus adipisci. Culpa,
          modi amet est nobis odio eveniet! Quisquam ipsum alias molestiae
          ipsam.
        </p>
      </Accordion>
      <Accordion
        title="Can I become a millionaire by learning JavaScript?"
        isExpanded={expandedIndex === 2}
        onToggle={() => {
          if (expandedIndex === 2) {
            setExpandedIndex(undefined);
          } else {
            setExpandedIndex(2);
          }
        }}
      >
        <p className="text-base text-gray-500">
          The only thing that can surely make you a millionaire is by having one
          as your parents. Everything else can't ensure that.
        </p>
      </Accordion>
    </div>
  );
};
