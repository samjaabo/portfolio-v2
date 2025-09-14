export function FuturisticCardLines() {
  return (
    <div className="z-0 absolute inset-0">
      <div className="z-0 absolute max-md:h-[calc(100%-16rem)] max-md:top-64 top-0 left-1/2 xl:left-2/5 -translate-x-1/2 h-full bg-gray/25 w-px md:hidden lg:block block">
        <span className="hidden">real center line 1</span>
      </div>
      <div className="z-0 absolute top-64 right-2/5 -translate-x-1/2 h-[calc(100%-16rem)] bg-gray/25 w-px hidden xl:block">
        <span className="hidden">real center line 2</span>
      </div>
      <div className="absolute top-64 left-[calc(25%-3rem)] xl:left-[calc(20%-3rem)] -translate-x-1/4 h-[calc(100%-16rem)] bg-gray/25 w-px block max-md:hidden">
        <span className="hidden">left center line</span>
      </div>
      <div className="absolute top-0 right-[calc(25%-3rem)] xl:right-[calc(20%-3rem)] -translate-x-1/4 h-full bg-gray/25 w-px block max-md:hidden">
        <span className="hidden">right center line</span>
      </div>
      <div className="absolute -top-4 left-0 h-[calc(100%+2rem)] bg-gray/25 w-px">
        <span className="hidden">left line</span>
      </div>
      <div className="absolute -top-4 right-0 h-[calc(100%+2rem)] bg-gray/25 w-px">
        <span className="hidden">right line</span>
      </div>
      <div className="absolute top-0 -left-4 h-px bg-gray/25 w-[calc(100%+2rem)]">
        <span className="hidden">top line</span>
      </div>
      <div className="absolute bottom-0 -left-4 h-px bg-gray/25 w-[calc(100%+2rem)]">
        <span className="hidden">bottom line</span>
      </div>
    </div>
  );
}
