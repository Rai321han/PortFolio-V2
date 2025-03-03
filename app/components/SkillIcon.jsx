export default function SkillIcon({ children }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="skillpath border-2 border-foreground bg-gradient-to-r from-[#0d2432] from-0% via-[#278CC9] via-10% to-[#0d2432] to-100% px-5">
        {children}
      </div>
      {/* <div className="flex items-center justify-center h-full w-[15px] left-0 top-0 z-10 absolute">
        <svg
          width="132"
          height="346"
          viewBox="0 0 132 346"
          fill="none"
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.5 0.5H39.5H112H131.314L117.657 14.1569L16 115.814V230.686L117.657 332.343L131.314 346H112H39.5H31.5V338V291.314L47.5 307.314V330H92.6863L65.5931 302.907L65.6569 302.843L13.6569 250.843L13.5931 250.907L2.34315 239.657L0 237.314V234V112.5V109.186L2.34315 106.843L24.3431 84.8431L24.6569 85.1569L76.6569 33.1569L76.3431 32.8431L92.6863 16.5H47.5V39.6863L31.5 55.6863V8.5V0.5Z"
            fill="#0d2432"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center h-[100%] w-[15px] right-0 top-0 z-10 absolute">
        <svg
          width="132"
          height="346"
          viewBox="0 0 132 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.686556 0.5L20.0003 0.500002L92.5003 0.500008L100.5 0.500009V8.50001V55.6866L84.5003 39.6866V16.5L39.314 16.5L60.657 37.843L60.3431 38.1569L112.343 90.1569L112.657 89.843L129.657 106.843L132 109.186V112.5L132 234V237.314L129.657 239.657L116.407 252.907L116.343 252.843L64.3434 304.843L64.4071 304.907L39.3139 330H84.5002V307.314L100.5 291.314V338V346H92.5002H20.0002H0.686523L14.3434 332.343L116 230.686L116 115.814L14.3434 14.1569L0.686556 0.5Z"
            fill="#0d2432"
          />
        </svg>
      </div> */}
      {/* <div className="lineClipUp flex items-center justify-center w-[90%] h-[3px] top-0 -translate-y-1/2 z-9 absolute bg-foreground "></div>
      <div className=" lineClipDown flex items-center justify-center w-[90%] h-[3px] bottom-0 translate-y-1/2 z-9 absolute bg-foregroun"></div> */}
    </div>
  );
}
