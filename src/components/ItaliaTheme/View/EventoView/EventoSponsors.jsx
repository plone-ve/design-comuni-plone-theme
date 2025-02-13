import React from 'react';
import PropTypes from 'prop-types';

import { Sponsors } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const EventoSponsors = ({ content }) => (
  <Sponsors content={content} folder_name={'sponsor_evento'} />
);

EventoSponsors.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoSponsors;
