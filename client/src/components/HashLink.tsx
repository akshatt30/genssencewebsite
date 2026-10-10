import type { ReactNode, MouseEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Link to a section of the home page. On the home page it is a plain
 * in-page anchor; elsewhere it routes to "/#id" and the home page scrolls there.
 */
export default function HashLink({ id, className, children, onClick, ...rest }: {
  id: string;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  'aria-label'?: string;
}) {
  const { pathname } = useLocation();
  if (pathname === '/') return <a href={'#' + id} className={className} onClick={onClick} {...rest}>{children}</a>;
  return <Link to={'/#' + id} className={className} onClick={onClick} {...rest}>{children}</Link>;
}
