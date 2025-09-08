import Image from "next/image";

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  alt?: string;
}

export default function Card({
  className = "",
  href = "#",
  title,
  subtitle,
  imgSrc,
  alt = "Project Image",
}: CardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        group relative flex flex-col px-10 pt-10 rounded-md 
        bg-bg-hover hover:bg-bg transition-all duration-300 overflow-hidden
        ${className}
      `}
    >
      <svg
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 700 700"
        width="700"
        height="700"
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(-150, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="gggrain-gradient2"
          >
            <stop stopColor="#B0235F" stopOpacity="1" offset="-0%"></stop>
            <stop
              stopColor="rgba(255,255,255,0)"
              stopOpacity="0"
              offset="100%"
            ></stop>
          </linearGradient>
          <linearGradient
            gradientTransform="rotate(150, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="gggrain-gradient3"
          >
            <stop stop-color="#fa7268" stop-opacity="1"></stop>
            <stop
              stop-color="rgba(255,255,255,0)"
              stop-opacity="0"
              offset="100%"
            ></stop>
          </linearGradient>
          <filter
            id="gggrain-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.55"
              numOctaves="2"
              seed="2"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feColorMatrix
              type="saturate"
              values="0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="colormatrix"
            ></feColorMatrix>
            <feComponentTransfer
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="colormatrix"
              result="componentTransfer"
            >
              <feFuncR type="linear" slope="3"></feFuncR>
              <feFuncG type="linear" slope="3"></feFuncG>
              <feFuncB type="linear" slope="3"></feFuncB>
            </feComponentTransfer>
            <feColorMatrix
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="componentTransfer"
              result="colormatrix2"
              type="matrix"
              values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 19 -11"
            ></feColorMatrix>
          </filter>
        </defs>
        <g>
          <rect width="100%" height="100%" fill="#b0235f"></rect>
          <rect
            width="100%"
            height="100%"
            fill="url(#gggrain-gradient3)"
          ></rect>
          <rect
            width="100%"
            height="100%"
            fill="url(#gggrain-gradient2)"
          ></rect>
          <rect
            width="100%"
            height="100%"
            fill="transparent"
            filter="url(#gggrain-filter)"
            opacity="1"
            className="mix-blend-soft-light"
          ></rect>
        </g>
      </svg>

      <div className="relative z-10 flex justify-between mb-4">
        <div>
          <h4 className="text-primary text-xl font-semibold">{title}</h4>
          <p className="text-text-secondary text-xs mt-1">{subtitle}</p>
        </div>
        <div className="group-hover:border-transparent group-hover:bg-primary group-hover:text-black text-text-secondary flex items-center justify-center h-7 w-7 rounded-full border border-white border-opacity-100 p-1.5 text-xs leading-4 text-opacity-100 transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </a>
  );
}
