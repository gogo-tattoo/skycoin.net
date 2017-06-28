import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import join from 'join-path';

const getURL = (match, url) =>
  (url.includes('://') ? url : join(match.params.locale, url));

const Link = ({ to, href, match, children, ...props }) => {
  if (to) {
    return <RouterLink to={getURL(match, to)} {...props}>{children}</RouterLink>;
  }

  if (href) {
    return <a href={getURL(match, href)} {...props}>{children}</a>;
  }

  return <a {...props}>{children}</a>
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      locale: PropTypes.string,
    }),
  }).isRequired,
  children: PropTypes.element.isRequired,
};

Link.defaultProps = {
  to: undefined,
  href: undefined,
};

export default withRouter(Link);
