import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

// utility for conditionally joining and merge tailwind classes
function twc(...classList: classNames.ArgumentArray): string {
  return twMerge(classNames(...classList));
}

export { twc };
