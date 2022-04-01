import styles from "./svg-book.module.scss";
import classnames from "classnames/bind";
import mirrorBG from "./../../../assets/images/cc.png";
import { useEffect } from "react";

const cx = classnames.bind(styles);
const IMAGE_MIRROR_ID = "cc-id";

export const SVGBook = () => {
  useEffect(() => {
    const scrollRotate = () => {
      let image = document.getElementById(IMAGE_MIRROR_ID)!;
      image.style.transformOrigin = "center";
      image.style.transformBox = "fill-box";
      image.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
      //   image.style.transform = `scale(${
      //     1 + (window.pageYOffset % 1000) / 500
      //   }, ${1 + (window.pageYOffset % 1000) / 500})`;
    };
    window.addEventListener("scroll", scrollRotate);
    return () => window.removeEventListener("scroll", scrollRotate);
  }, []);
  return (
    <svg
      className={cx("svg-book")}
      width="100%"
      version="1.1"
      viewBox="0 0 164.35 216.6"
    >
      <defs>
        <linearGradient id="linearGradient3855">
          <stop offset="0" />
          <stop stop-opacity="0" offset="1" />
        </linearGradient>
        <linearGradient id="linearGradient3811">
          <stop stop-opacity=".20188" offset="0" />
          <stop stop-opacity="0" offset="1" />
        </linearGradient>
        <filter
          id="filter3849"
          x="-1.2704"
          y="-.024462"
          width="3.5408"
          height="1.0489"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur stdDeviation="4.7073725" />
        </filter>
        <linearGradient
          id="linearGradient3111"
          x1="-19.541"
          x2="623.68"
          y1="461.22"
          y2="458.46"
          gradientTransform="matrix(.070881 0 0 .46228 -453.17 120.38)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3855"
        />
        <linearGradient
          id="linearGradient3115"
          x1="-19.541"
          x2="623.68"
          y1="461.22"
          y2="458.46"
          gradientTransform="matrix(.070881 0 0 .46228 254.8 120.38)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3855"
        />
        <linearGradient
          id="linearGradient914"
          x1="286.41"
          x2="624.71"
          y1="230.86"
          y2="230.48"
          gradientTransform="matrix(.46228 0 0 .46228 124.63 120.38)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3811"
        />
      </defs>
      <g transform="translate(-265.9,-222.25)">
        <g transform="translate(.44299 -.87567)">
          <g fill-rule="evenodd" strokeWidth=".46228">
            <rect
              x="267.89"
              y="223.13"
              width="153.29"
              height="213.63"
              ry="0"
              fill="#ccc"
            />
            <rect
              x="278.37"
              y="231.47"
              width="151.23"
              height="208.2"
              ry="0"
              fill="#803300"
            />
            <path
              d="m382.71 223.2 38.464 0.0485c0.35487 5.9435 5.9653 7.1224 8.6331 8.2212l-47.097-0.2506z"
              fill="#ccc"
            />
          </g>
          <g fill="none" stroke="url(#linearGradient914)">
            <path d="m269.89 223.94h150.29" strokeWidth=".41407px" />
            <path d="m270.82 224.93h148.79" strokeWidth=".412px" />
            <path d="m271.74 225.92h146.85" strokeWidth=".40931px" />
            <path d="m273.59 226.9h145.59" strokeWidth=".40755px" />
            <path d="m274.77 227.89h145.3" strokeWidth=".40714px" />
            <path d="m276.62 228.88h144.67" strokeWidth=".40626px" />
            <path d="m277.54 229.86h145.59" strokeWidth=".40755px" />
            <path d="m278.47 230.85h147.29" strokeWidth=".40992px" />
          </g>
          <g fill-rule="evenodd">
            <g strokeWidth=".46228">
              <rect
                x="278.37"
                y="231.47"
                width="23.187"
                height="208.2"
                ry="0"
                fill="url(#linearGradient3115)"
              />
              <path
                d="m267.87 223.24s6.4155 6.33 11.087 8.2383l-0.0407 208.25c-4.725 0.0309-8.554-1.1276-11.051-2.0303z"
                fill="#1a1a1a"
              />
              <rect
                transform="scale(-1,1)"
                x="-429.6"
                y="231.47"
                width="23.187"
                height="208.2"
                ry="0"
                fill="url(#linearGradient3111)"
              />
            </g>
            <path
              transform="matrix(.46228 0 0 .44426 124.63 128.07)"
              d="m315.94 228.1s4.7235 3.6741 8.3915 6.7688c0.13842 151.98 0.36297-173.28 0.50139 455.08-3.2001-0.32118-5.6736-1.2124-8.2076-1.7222z"
              fill="#fff"
              filter="url(#filter3849)"
              opacity=".1"
            />
          </g>
        </g>
      </g>
      <text
        x="87.100296"
        y="92.498848"
        font-family="sans-serif"
        font-size="4.0922px"
        stroke-width=".30691"
        text-anchor="middle"
      >
        <tspan x="87.100296" y="92.498848">
          We are a collision of artists who stroke the beat inadvertetly{" "}
        </tspan>
        <tspan x="87.100296" y="100.06936">
          and contracted a rare melody.
        </tspan>
        <tspan x="87.100296" y="107.63988">
          Enjoy ! denouce and debounce !
        </tspan>
        <tspan x="87.100296" y="115.21039">
          Certainly balls allways roll down from top to bottom.
        </tspan>
        <tspan x="87.100296" y="122.78091">
          The trust is one thing and the others are rather's layers king.
        </tspan>
        <tspan x="87.100296" y="130.35141">
          In any kind of logic you'll find piece of peaces and facilities.
        </tspan>
        <tspan x="87.100296" y="137.92194">
          What we haveis precious.
        </tspan>
        <tspan x="87.100296" y="145.49245">
          {" "}
          We have, we'll always have what it takes to find them all.
        </tspan>
        <tspan x="87.100296" y="153.06296">
          Feel them and live it once for all.
        </tspan>
      </text>
      <image
        id={IMAGE_MIRROR_ID}
        x="58.967"
        y="18.964"
        width="58.392"
        height="58.392"
        preserveAspectRatio="none"
        xlinkHref={mirrorBG}
      />
    </svg>
  );
};
