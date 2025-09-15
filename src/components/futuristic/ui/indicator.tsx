import clsx from "clsx";

export default function Indicator({
  hint = null,
  text = "default indicator",
}: {
  hint?: string | null;
  text?: string;
}) {
  return (
    <div className="absolute inset-0 p-2 sm:p-4 md:p-8 max-sm:min-h-8 w-full flex items-center justify-start gap-4">
      <div className="z-10 relative top-0 left-0 flex items-center h-3 w-6 max-sm:w-3">
        <div className="absolute top-0 left-0 w-3 aspect-square bg-line-color-soft "></div>
        <div className="max-sm:hidden absolute top-0.5 left-4 w-2 aspect-square  border border-line-color-soft"></div>
      </div>
      <div className="items-center h-fit line-clamp-1 font-bold text-lg">
        {" "}
        <span className={clsx("text-sm font-normal", !hint && "hidden")}>
          {hint}
        </span>{" "}
        {text}
      </div>
    </div>
  );
}
