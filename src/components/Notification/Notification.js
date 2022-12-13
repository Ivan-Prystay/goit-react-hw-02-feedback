import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({ title }) => {
  return <Message>{title}</Message>;
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
