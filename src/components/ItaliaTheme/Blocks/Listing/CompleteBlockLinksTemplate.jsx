import React from 'react';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const CompleteBlockLinksTemplate = ({
  items,
  title,
  isEditMode,
  linkMore,
  show_block_bg,
}) => {
  const intl = useIntl();

  return (
    <div
      className={cx('complete-block-links-template', {
        'public-ui': isEditMode,
      })}
    >
      <Container className="px-4 px-md-0">
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}
        <Row className="items">
          {items.map((item, index) => (
            <Col md="6" lg="3" key={item['@id']} className="col-item">
              <Card
                color=""
                className="card-bg rounded"
                noWrapper={false}
                tag="div"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    item['remoteUrl'] && item['remoteUrl'] !== ''
                      ? flattenToAppURL(item['remoteUrl'])
                      : flattenToAppURL(item['@id'])
                  }
                >
                  <div className="d-flex">
                    {item.image && (
                      <div className="image-container">
                        <img
                          alt={item.title}
                          src={flattenToAppURL(
                            item.image.scales.preview.download,
                          )}
                          title={item.title}
                        />
                      </div>
                    )}
                    <div>
                      <CardBody>
                        <CardTitle tag="h5" className="text-secondary">
                          {item.title}
                        </CardTitle>
                        <CardText tag="p" className="text-secondary">
                          {item.description}
                        </CardText>
                      </CardBody>
                    </div>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
        {linkMore?.href && (
          <div className="link-button text-center my-4">
            <UniversalLink
              href={flattenToAppURL(linkMore.href)}
              className="btn btn-tertiary"
            >
              {linkMore.title || intl.formatMessage(messages.view_all)}
            </UniversalLink>
          </div>
        )}
      </Container>
    </div>
  );
};

CompleteBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CompleteBlockLinksTemplate;
