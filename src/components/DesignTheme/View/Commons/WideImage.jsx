import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';

/**
 * WidgeImage view component class.
 * @function WidgeImage
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const WidgeImage = params => {
  return (
    <div className="row row-full-width my-3">
      <figure className="figure">
        {params.image && (
          <img
            src={flattenToAppURL(params.image.download)}
            className="full-width"
            alt={params.caption || params.title}
            title={params.caption || params.title}
          />
        )}
        {params.caption && (
          <figcaption className="figure-caption text-center pt-3">
            {params.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};
export default WidgeImage;
