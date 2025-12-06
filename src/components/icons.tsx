import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export function Bitcoin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.5 3.5C7.8 3.5 4 7.3 4 12s3.8 8.5 8.5 8.5S21 16.7 21 12s-3.8-8.5-8.5-8.5Z" />
      <path d="M9.5 8h5.8c.9 0 1.7.8 1.7 1.7V9c0 .9-.8 1.7-1.7 1.7H9.5" />
      <path d="M9.5 13h5.8c.9 0 1.7.8 1.7 1.7v.5c0 .9-.8 1.7-1.7 1.7H9.5" />
      <path d="M12.5 3.5V21" />
      <path d="M15.5 8v8" />
      <path d="M9.5 8v8" />
    </svg>
  );
}

export function Waves(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 6.8l5.4 6.4L12 6.8l4.6 6.4L22 6.8" />
      <path d="M2 12.8l5.4 6.4L12 12.8l4.6 6.4L22 12.8" />
    </svg>
  );
}


export function Xrp(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M5.1 6.3l3.3 3.3-3.3 3.3" />
            <path d="M12.3 6.3 9 9.6l3.3 3.3" />
            <path d="M18.9 6.3 15.6 9.6l3.3 3.3" />
            <path d="m5 18 3.3-3.3 3.4 3.4" />
            <path d="m12 18 3.3-3.3 3.4 3.4" />
        </svg>
    );
}
