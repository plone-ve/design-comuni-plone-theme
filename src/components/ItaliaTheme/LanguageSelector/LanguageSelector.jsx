/**
 * LanguageSelector component.
 * @module components/ItaliaTheme/LanguageSelector/LanguageSelector
 */

import React from 'react';
import PropTypes from 'prop-types';
import { find, map } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import langmap from 'langmap';
import { settings } from '~/config';
import { Helmet, changeLanguage, flattenToAppURL } from '@plone/volto/helpers';

// import { BITIcon, it_expand } from '@italia/components/ItaliaTheme/Icons';
import {
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  Icon,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
} from 'design-react-kit/dist/design-react-kit';

let locales = {};

if (settings) {
  settings.supportedLanguages.forEach((lang) => {
    import('~/../locales/' + lang + '.json').then((locale) => {
      locales = { ...locales, [lang]: locale.default };
    });
  });
}

/**
 * LanguageSelector component class.
 * @class LanguageSelector
 * @extends Component
 */
const LanguageSelector = (props) => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.intl.locale);
  const translations = useSelector(
    (state) => state.content.data?.['@components']?.translations?.items,
  );

  return settings.isMultilingual ? (
    <UncontrolledDropdown nav tag="div">
      <DropdownToggle aria-haspopup caret color="secondary" nav>
        ITA
        <Icon color="" icon="it-expand" padding={false} size="" />
      </DropdownToggle>
      <DropdownMenu flip tag="div">
        <Row tag="div">
          <Col size="12" tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
            <LinkList tag="div">
              {map(settings.supportedLanguages, (lang) => {
                const translation = find(translations, { language: lang });
                return (
                  <LinkListItem
                    className={cx({ selected: lang === currentLang })}
                    to={
                      translation
                        ? flattenToAppURL(translation['@id'])
                        : `/${lang}`
                    }
                    title={langmap[lang].nativeName}
                    onClick={() => {
                      props.onClickAction();
                      dispatch(changeLanguage(lang, locales));
                    }}
                    key={`language-selector-${lang}`}
                    tag={Link}
                  >
                    <span>{langmap[lang].nativeName}</span>
                  </LinkListItem>
                );
              })}
            </LinkList>
          </Col>
        </Row>
      </DropdownMenu>
    </UncontrolledDropdown>
  ) : (
    <Helmet>
      <html lang={settings.defaultLanguage} />
    </Helmet>
  );
};

LanguageSelector.propTypes = {
  onClickAction: PropTypes.func,
};

LanguageSelector.defaultProps = {
  onClickAction: () => {},
};

export default LanguageSelector;
