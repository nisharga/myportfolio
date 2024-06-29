import {
    LucideProps,
    Moon,
    SunMedium,
    Headset,
    Link,
    MoveRight,
    Quote,
    CircleCheck
} from 'lucide-react';

export const Icons = {
    Moon,
    SunMedium,
    Headset,
    Link,
    MoveRight,
    Quote,
    CircleCheck,
    EmptyBox: (props: LucideProps) => (
        <svg
            {...props}
            viewBox='0 0 1024 1024'
            width='17'
            height='20'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M743.68 176.61952h-448l-220.16 240.52736v345.6c0 56.54528 45.85472 102.4 102.4 102.4h683.52c56.54528 0 102.4-45.85472 102.4-102.4v-345.6l-220.16-240.52736z m-416.43008 71.68h384.8704l176.52736 192.8704h-193.87392c0 0.28672 0.04096 0.57344 0.04096 0.84992 0 94.57664-76.94336 171.52-171.52 171.52-94.5664 0-171.52-76.94336-171.52-171.52 0-0.27648 0.04096-0.5632 0.0512-0.84992h-201.12384l176.54784-192.8704z m534.19008 545.16736h-683.52c-16.93696 0-30.72-13.78304-30.72-30.72v-249.89696h143.4112c30.33088 99.75808 123.02336 172.36992 232.69376 172.36992 109.68064 0 202.36288-72.61184 232.69376-172.36992h136.17152v249.89696a30.7712 30.7712 0 0 1-30.73024 30.72z'
                fill='inherite'
            />
        </svg>
    ),
    PaginationArrow: (props: LucideProps) => (
        <svg
            {...props}
            width='15'
            height='24'
            viewBox='0 0 15 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M13.7381 11.144C14.2045 11.6104 14.2045 12.3896 13.7381 12.8572L2.97715 23.6457C2.50479 24.1181 1.73876 24.1181 1.2676 23.6457C0.795242 23.1734 0.795242 22.4061 1.2676 21.9338L11.1737 12.0001L1.2664 2.06751C0.794046 1.59396 0.794046 0.82792 1.2664 0.354368C1.73876 -0.117989 2.50479 -0.117989 2.97595 0.354368L13.7381 11.144Z'
                fill='#565656'
            />
        </svg>
    ),
    Github: (props: LucideProps) => (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-github'
        >
            <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
            <path d='M9 18c-4.51 2-5-2-7-2' />
        </svg>
    ),
    Check: (props: LucideProps) => (
        <svg
            {...props}
            stroke='inherite'
            fill='inherite'
            strokeWidth='2'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
        >
            <polyline points='20 6 9 17 4 12'></polyline>
        </svg>
    )
};
