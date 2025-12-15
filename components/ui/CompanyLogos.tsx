'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CompanyLogos() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Initial check
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        // Observer for class changes on html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'class'
                ) {
                    checkTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center justify-center">
                <Image
                    src="/images/company-logos.svg"
                    alt="Company logos"
                    width={1216}
                    height={54}
                    className="max-w-full h-auto"
                />
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center w-full">
                {isDark ? (
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-300">
                        {[
                            { viewBox: "14 0 178 54", width: 178, alt: "Company Logo 1" },
                            { viewBox: "215 0 123 54", width: 123, alt: "Company Logo 2" },
                            { viewBox: "380 0 186 54", width: 186, alt: "Universum Logo" },
                            { viewBox: "591 0 128 54", width: 128, alt: "Company Logo 4" },
                            { viewBox: "740 0 256 54", width: 256, alt: "PointClickCare Logo" },
                            { viewBox: "1018 0 184 54", width: 184, alt: "Company Logo 6" },
                        ].map((logo, index) => (
                            <div key={index} className="relative h-8 md:h-10 w-auto flex items-center justify-center">
                                <img
                                    src={`/images/company-logos.svg#svgView(viewBox(${logo.viewBox}))`}
                                    alt={logo.alt}
                                    className="h-full w-auto object-contain"
                                    style={{ maxWidth: 'none' }}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-300">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="relative h-8 md:h-10 w-auto flex items-center justify-center">
                                <Image
                                    src={`/images/company-logos/light/logo-${num}.png`}
                                    alt={`Company Logo ${num}`}
                                    width={120}
                                    height={40}
                                    className="object-contain h-full w-auto"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
