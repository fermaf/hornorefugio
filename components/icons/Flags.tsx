import React from 'react';

export const ChileFlag: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 640 480" className={className} xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#d52b1e" d="M0 240h640v240H0z" />
        <path fill="#0039a6" d="M0 0h240v240H0z" />
        <path fill="#fff" d="M120 170l-35.3-24.7 42.7-1.3-25.3-35.3 1.3 43.7-41.3-14.7 36.7 23.3-36.7 23.3 41.3-14.7-1.3 43.7 25.3-35.3-42.7-1.3z" />
        <path fill="#fff" d="M120 158.5l-10.5-32.4 27.5 20-34 0 27.5-20z" transform="translate(0 15)" />
    </svg>
);

export const USFlag: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 640 480" className={className} xmlns="http://www.w3.org/2000/svg">
        <g fillRule="evenodd">
            <path fill="#bd3d44" d="M0 0h640v480H0" />
            <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
            <path fill="#192f5d" d="M0 0h296v259H0" />
            <g fill="#fff">
                <g id="s18">
                    <g id="s9">
                        <g id="s5">
                            <g id="s4">
                                <path id="s" d="M247 90l5 15.2h16l-13 9 5 15.3-13-8.8-13 8.8 5-15.3-13-9h16z" />
                                <use xlinkHref="#s" y="42" />
                                <use xlinkHref="#s" y="84" />
                                <use xlinkHref="#s" y="126" />
                            </g>
                            <use xlinkHref="#s" y="168" />
                        </g>
                        <use xlinkHref="#s4" x="247" y="210" />
                    </g>
                    <use xlinkHref="#s9" x="247" y="420" />
                </g>
                <use xlinkHref="#s18" x="-247" />
                <use xlinkHref="#s9" transform="translate(-247 21)" />
            </g>
        </g>
        {/* Simplified fallback for stars if complex paths fail, but standard SVG should work. 
        Let's use a simpler star pattern manually to be safe and avoid xlinkHref issues in React */}
        <rect width="640" height="480" fill="#bd3d44" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
        <rect width="296" height="259" fill="#192f5d" />
        <g fill="#fff">
            {/* Row 1 */}
            <circle cx="30" cy="25" r="9" /> <circle cx="89" cy="25" r="9" /> <circle cx="148" cy="25" r="9" /> <circle cx="207" cy="25" r="9" /> <circle cx="266" cy="25" r="9" />
            {/* Row 2 */}
            <circle cx="59.5" cy="51" r="9" /> <circle cx="118.5" cy="51" r="9" /> <circle cx="177.5" cy="51" r="9" /> <circle cx="236.5" cy="51" r="9" />
            {/* Row 3 */}
            <circle cx="30" cy="77" r="9" /> <circle cx="89" cy="77" r="9" /> <circle cx="148" cy="77" r="9" /> <circle cx="207" cy="77" r="9" /> <circle cx="266" cy="77" r="9" />
            {/* Row 4 */}
            <circle cx="59.5" cy="103" r="9" /> <circle cx="118.5" cy="103" r="9" /> <circle cx="177.5" cy="103" r="9" /> <circle cx="236.5" cy="103" r="9" />
            {/* Row 5 */}
            <circle cx="30" cy="129" r="9" /> <circle cx="89" cy="129" r="9" /> <circle cx="148" cy="129" r="9" /> <circle cx="207" cy="129" r="9" /> <circle cx="266" cy="129" r="9" />
            {/* Row 6 */}
            <circle cx="59.5" cy="155" r="9" /> <circle cx="118.5" cy="155" r="9" /> <circle cx="177.5" cy="155" r="9" /> <circle cx="236.5" cy="155" r="9" />
            {/* Row 7 */}
            <circle cx="30" cy="181" r="9" /> <circle cx="89" cy="181" r="9" /> <circle cx="148" cy="181" r="9" /> <circle cx="207" cy="181" r="9" /> <circle cx="266" cy="181" r="9" />
            {/* Row 8 */}
            <circle cx="59.5" cy="207" r="9" /> <circle cx="118.5" cy="207" r="9" /> <circle cx="177.5" cy="207" r="9" /> <circle cx="236.5" cy="207" r="9" />
            {/* Row 9 */}
            <circle cx="30" cy="233" r="9" /> <circle cx="89" cy="233" r="9" /> <circle cx="148" cy="233" r="9" /> <circle cx="207" cy="233" r="9" /> <circle cx="266" cy="233" r="9" />
        </g>
    </svg>
);
