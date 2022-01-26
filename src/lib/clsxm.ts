import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines tailwind classes in a safe way alongside supporting
 * conditionals.
 * @param classes The classes to be added to the element
 * @returns The className string
 */
export default function clsxm(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}