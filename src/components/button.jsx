import cn from "classnames";
import PropTypes from "prop-types";

export const Button = ({ type = "button", variant, render, ...props }) => {
  const className = cn(
    "inline-flex justify-center items-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",
    variant && classByVariant[variant],
    props.className
  );

  if (render) {
    return render({
      className,
      ...props,
    });
  }

  return <button type={type} {...props} className={className} />;
};

const classByVariant = {
  primary: "border-transparent text-white bg-pink-600 hover:bg-pink-700",
  outline: "border-pink-500 text-pink-500 bg-white hover:text-pink-700",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outline"]),
  render: PropTypes.func,
};
