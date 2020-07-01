import { defineMessages, useIntl } from 'react-intl';

import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Icon } from 'design-react-kit/dist/design-react-kit';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const messages = defineMessages({
  events: {
    id: 'events',
    defaultMessage: 'Appuntamenti',
  },
  title: {
    id: 'event_title',
    defaultMessage: 'Eventi',
  },
});

/**
 * Evento view component class.
 * @function Evento
 * @params {object} Evento: object.
 * @returns {string} Markup of the component.
 */
const Evento = ({ event, show_image }) => {
  const intl = useIntl();
  console.log(event);
  return event ? (
    <div className="card card-teaser card-flex rounded shadow">
      <div className="card-body p-4">
        <h5 className="card-title card-title-icon">
          <Icon icon={'it-calendar'}></Icon>
          <span className="text-uppercase">
            {intl.formatMessage(messages.title)}
          </span>
        </h5>
        <div className="card-text">
          <p className="text-uppercase">
            {event.luogo_evento && event.luogo_evento[0]?.title}
          </p>

          <div className="pt-4 pb-3">
            <Link to={flattenToAppURL(event['@id'])} title={event.title}>
              <h6 className="font-weight-semibold">{event.title}</h6>
            </Link>
          </div>
        </div>
      </div>
      {show_image && event.image && (
        <div className="card-image card-image-rounded">
          <div className="card-date text-center rounded shadow">
            {moment(event.start).format('DD MMM')}
          </div>
          <img
            src={flattenToAppURL(event.image.scales.gallery.download)}
            alt="Immagine"
            className="event-center-cropped"
          ></img>
        </div>
      )}
    </div>
  ) : null;
};

/**
 * Events view component class.
 * @function Events
 * @params {object} content: Eventi object.
 * @returns {string} Markup of the component.
 */
const Events = ({ content, title, show_image, folder_name }) => {
  const intl = useIntl();
  const path =
    content.parent['@type'] === 'Event'
      ? content.parent['@id']
      : content['@id'];
  const isChild = content.parent['@type'] === 'Event';
  const url = flattenToAppURL(path);
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isChild) {
      dispatch(
        searchContent(
          url,
          {
            portal_type: 'Event',
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            fullobjects: true,
          },
          folder_name,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folder_name));
    };
  }, [dispatch, content, url, folder_name, isChild]);
  let events = isChild
    ? searchResults?.[folder_name]?.items || []
    : content?.items?.filter((el) => el['@type'] === 'Event') || [];
  if (isChild) {
    events = [...events].filter((el) => !content['@id'].includes(el['@id']));
    events.push(content.parent);
  }

  console.log(show_image);
  return (
    <>
      {events.length > 0 ? (
        <article id="events" className="it-page-section anchor-offset mt-5">
          {title ? (
            <h4>{title}</h4>
          ) : (
            <h4>{intl.formatMessage(messages.events)}</h4>
          )}
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {events.map((item, i) => (
              <Evento key={item['@id']} event={item} show_image={show_image} />
            ))}
          </div>
        </article>
      ) : null}
    </>
  );
};
export default Events;

Events.propTypes = {
  content: PropTypes.object,
  show_image: PropTypes.bool,
  title: PropTypes.string,
};

Evento.propTypes = {
  event: PropTypes.object,
  show_image: PropTypes.bool,
};
