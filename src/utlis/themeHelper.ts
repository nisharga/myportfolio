import { BreakpointType, ProjectType } from '@/app/(public)/(home)/types/theme';

import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';
import config from '../../tailwind.config';

const fullConfig = resolveConfig(config);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Returns the breakpoint's width
 * @param breakpoint - Configured breakpoints: xs sm md lg xl 2xl
 * @returns width - Width of the breakpoint
 */

export const getBreakpointsWidth = (breakpoint: BreakpointType) => {
    // @ts-ignore
    return +fullConfig?.theme?.screens[breakpoint].slice(0, -2);
};

/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = () => `id${Math.random().toString(16).slice(2)}`;

/**
 * Returns the projects by sorting them by year (descending)
 * @param {ProjectType[]} projects array of projects
 * @returns {ProjectType[]} array of sorted projects
 */

export const sortByYear = (projects: ProjectType[]) => {
    return projects.sort((a, b) => b.year - a.year);
};

/**
 * Modifies the given object by removing the given keys
 * @param object object from which keys need to be removed
 * @param keys array of keys which needs to be removed from the object
 */

export const removeKeys = <T>(object: T, keys: Array<keyof T>) => {
    keys.forEach((field) => delete object[field]);
};
