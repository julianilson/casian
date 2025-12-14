import React from 'react';

export default function BackgroundPattern({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 1440 870"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin slice"
        >
            <g id="Background pattern">
                <g id="Lines">
                    <g id="Vertical">
                        <line x1="48.5" x2="48.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="144.5" x2="144.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="240.5" x2="240.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="336.5" x2="336.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="432.5" x2="432.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="528.5" x2="528.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="624.5" x2="624.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="720.5" x2="720.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="816.5" x2="816.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="912.5" x2="912.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="1008.5" x2="1008.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="1104.5" x2="1104.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="1200.5" x2="1200.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="1296.5" x2="1296.5" y2="1440" stroke="var(--color-border-secondary)" />
                        <line x1="1392.5" x2="1392.5" y2="1440" stroke="var(--color-border-secondary)" />
                    </g>
                    <g id="Horizontal">
                        {/* Added top line to start at the top of the screen */}
                        <line x1="-240" y1="0" x2="1680" y2="0" stroke="var(--color-border-secondary)" />

                        <line x1="-240" y1="95.5" x2="1680" y2="95.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="191.5" x2="1680" y2="191.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="287.5" x2="1680" y2="287.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="383.5" x2="1680" y2="383.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="479.5" x2="1680" y2="479.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="575.5" x2="1680" y2="575.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="671.5" x2="1680" y2="671.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="767.5" x2="1680" y2="767.5" stroke="var(--color-border-secondary)" />
                        <line x1="-240" y1="863.5" x2="1680" y2="863.5" stroke="var(--color-border-secondary)" />
                    </g>
                </g>
            </g>
        </svg>
    );
}
