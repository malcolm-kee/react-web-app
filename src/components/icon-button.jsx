import cn from "classnames";

export const IconButton = (props) => (
  <button
    type="button"
    {...props}
    className={cn(
      "p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out",
      props.className
    )}
  />
);
