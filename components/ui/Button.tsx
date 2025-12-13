'use client';

import React from 'react';
import LoadingSpinnerPrimary from '../icons/loading-spinner-primary.svg';
import LoadingSpinnerSecondary from '../icons/loading-spinner-secondary.svg';
import LoadingSpinnerTertiary from '../icons/loading-spinner-tertiary.svg';
import LoadingSpinnerLinkColor from '../icons/loading-spinner-link-color.svg';
import LoadingSpinnerLinkGray from '../icons/loading-spinner-link-gray.svg';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link-color' | 'link-gray';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}

const loadingSpinnerMap: Record<ButtonVariant, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  primary: LoadingSpinnerPrimary,
  secondary: LoadingSpinnerSecondary,
  tertiary: LoadingSpinnerTertiary,
  'link-color': LoadingSpinnerLinkColor,
  'link-gray': LoadingSpinnerLinkGray,
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-size-${size}`;
  const loadingClass = isLoading ? 'btn-loading' : '';
  const LoadingSpinner = loadingSpinnerMap[variant];

  const iconSize = size === 'sm' || size === 'md' ? 18 : 20;

  return (
    <button
      className={`${variantClass} ${sizeClass} ${loadingClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <LoadingSpinner width={iconSize} height={iconSize} className="btn-loading-spinner" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          {LeftIcon && <LeftIcon width={iconSize} height={iconSize} />}
          {children}
          {RightIcon && <RightIcon width={iconSize} height={iconSize} />}
        </>
      )}
    </button>
  );
}