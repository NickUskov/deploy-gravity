import React, { FC }from 'react';

interface CarProps {
    className?: string;
    carDirection: 'toLeft' | 'toRight';
}

const Car: FC<CarProps> = ({className, carDirection= 'toLeft'}) => {
    return carDirection === 'toLeft' ? (
        <svg
            width="13%"
            viewBox="0 0 291 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M5.7428 47.5135V87.4505H95.6129V5H36.1305L5.7428 47.5135Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M113.07 17.2387V87.4505H285.698V59.7523L243.026 17.2387H113.07Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M69.2768 124.811C69.2768 136.262 59.9541 145.577 48.4149 145.577C36.8756 145.577 27.553 136.262 27.553 124.811C27.553 113.36 36.8756 104.045 48.4149 104.045C59.9541 104.045 69.2768 113.36 69.2768 124.811Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M259.362 124.811C259.362 136.262 250.039 145.577 238.5 145.577C226.961 145.577 217.638 136.262 217.638 124.811C217.638 113.36 226.961 104.045 238.5 104.045C250.039 104.045 259.362 113.36 259.362 124.811Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M198.586 124.811C198.586 136.262 189.264 145.577 177.724 145.577C166.185 145.577 156.863 136.262 156.863 124.811C156.863 113.36 166.185 104.045 177.724 104.045C189.264 104.045 198.586 113.36 198.586 124.811Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M36.1305 108.063L24.4927 87.4504H237.853V106.131"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M177.724 106.131V87.4504"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M195.828 124.811H219.103"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M67.1648 124.811H158.328"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
        </svg>
    ) : (
        <svg
            width="13%"
            viewBox="0 0 291 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ transform: 'rotateY(180deg)' }}
        >
            <path
                d="M5.7428 47.5135V87.4505H95.6129V5H36.1305L5.7428 47.5135Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M113.07 17.2387V87.4505H285.698V59.7523L243.026 17.2387H113.07Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M69.2768 124.811C69.2768 136.262 59.9541 145.577 48.4149 145.577C36.8756 145.577 27.553 136.262 27.553 124.811C27.553 113.36 36.8756 104.045 48.4149 104.045C59.9541 104.045 69.2768 113.36 69.2768 124.811Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M259.362 124.811C259.362 136.262 250.039 145.577 238.5 145.577C226.961 145.577 217.638 136.262 217.638 124.811C217.638 113.36 226.961 104.045 238.5 104.045C250.039 104.045 259.362 113.36 259.362 124.811Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M198.586 124.811C198.586 136.262 189.264 145.577 177.724 145.577C166.185 145.577 156.863 136.262 156.863 124.811C156.863 113.36 166.185 104.045 177.724 104.045C189.264 104.045 198.586 113.36 198.586 124.811Z"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M36.1305 108.063L24.4927 87.4504H237.853V106.131"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M177.724 106.131V87.4504"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M195.828 124.811H219.103"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
            <path
                d="M67.1648 124.811H158.328"
                stroke="#F2F2F2"
                strokeWidth="10"
            />
        </svg>
    );
};

export default Car;