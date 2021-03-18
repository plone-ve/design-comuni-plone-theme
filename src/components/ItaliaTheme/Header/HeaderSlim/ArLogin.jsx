/* eslint-disable react-hooks/exhaustive-deps */
/**
 * ArLogin component.
 * @module components/ItaliaTheme/Header/HeaderSlim/ArLogin
 */

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import jwtDecode from 'jwt-decode';
import {
  Button,
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
} from 'design-react-kit/dist/design-react-kit';

import { getUser, logout, purgeMessages } from '@plone/volto/actions';

import { siteConfig } from '~/config';
import { Icon, UserLoggedMenu } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  arLogin: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
  arLogout: {
    id: 'arLogout',
    defaultMessage: 'Esci',
  },
});

const ArLogin = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const userId = useSelector((state) =>
    state.userSession.token ? jwtDecode(state.userSession.token).sub : null,
  );

  const userLogged = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId]);

  const doLogout = () => {
    dispatch(logout());
    dispatch(purgeMessages());
  };

  return siteConfig.properties.arLoginUrl ? (
    <>
      {!userId ? (
        <Button
          className="btn-icon"
          color="primary"
          to={siteConfig.properties.arLoginUrl}
          icon={false}
          size="full"
          tag={Link}
        >
          <span className="rounded-icon">
            <Icon color="primary" icon="it-user" padding={false} size="" />
          </span>
          <span className="d-none d-lg-block">
            {intl.formatMessage(messages.arLogin)}
          </span>
        </Button>
      ) : (
        <UncontrolledDropdown nav tag="div">
          <DropdownToggle
            aria-haspopup
            caret
            color="secondary"
            nav
            className="btn-icon"
          >
            <span class="rounded-icon">
              <Icon color="primary" icon="it-user" size="" />
            </span>
            <span class="d-none d-lg-block">
              {userLogged.fullname ? userLogged.fullname : userLogged.username}
            </span>
            <Icon color="" icon="it-expand" padding={false} size="" />
          </DropdownToggle>
          <DropdownMenu flip tag="div">
            <Row tag="div">
              <Col size="12" tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
                <LinkList tag="div">
                  <UserLoggedMenu />
                  <LinkListItem divider tag="a" />
                  <LinkListItem
                    to={siteConfig.properties.arLogoutUrl || '/'}
                    title={intl.formatMessage(messages.arLogout)}
                    tag={Link}
                    onClick={() => {
                      if (!siteConfig.properties.arLogoutUrl) {
                        doLogout();
                      }
                    }}
                    className="logout"
                  >
                    <Icon color="" icon="sign-out-alt" size="sm" left />
                    <span>{intl.formatMessage(messages.arLogout)}</span>
                  </LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
    </>
  ) : null;
};

export default ArLogin;
