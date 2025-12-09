import { cn } from "@/lib/utils";

interface WaveIconProps {
  className?: string;
}

export function WaveIcon({ className }: WaveIconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M7 9C8.65685 9 10 10.3431 10 12V18C10 19.6569 8.65685 21 7 21H6C4.34315 21 3 19.6569 3 18V12C3 10.3431 4.34315 9 6 9H7Z"
        fill="currentColor"
      />
      <path
        d="M14 7L14.7443 2.16208C14.892 1.20206 14.3261 0.275384 13.4047 -0.0317801C12.5707 -0.309768 11.6531 -0.00854195 11.1461 0.70964L7.0982 6.44421C6.38363 7.45651 6 8.66522 6 9.9043V15.0428C6 17.8137 8.25329 20.0561 11.0241 20.0428L17.1884 20.0131C18.8269 20.0052 20.2949 19.9988 20.893 18.4734L23.3941 11.0952C24.1657 9.12735 22.7148 7 20.6012 7H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

