import * as React from "react";
import PropTypes from "prop-types";

export const Accordion = ({ title, children, isExpanded, onToggle }) => {
  console.log(`Accordion with ${title} is run.`);

  return (
    <div className="pt-6">
      <div className="text-lg">
        <button
          type="button"
          className="flex w-full items-center justify-between text-gray-400 focus:outline-none focus:ring focus:ring-offset-4"
          onClick={onToggle}
        >
          <span className="font-medium text-gray-900">{title}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={`h-6 w-6 transform ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {isExpanded && <div className="mt-2 pr-12">{children}</div>}
    </div>
  );
};

Accordion.propTypes = {
  /**
   * Text that will be always displayed, usually a summary
   * of the content.
   */
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
