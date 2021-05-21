import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './styles.scoped.css';

export default function Textfields(props){
  const {
    'class-name': classNameProps,
    error,
    disabled,
    helper,
    icon: Icon,
    'icon-position': iconPosition,
    input: inputRedux,
    title,
    variant,
    width
  } = props;

  const className = [
    classNameProps,
    styles['textfield-wrapper'],
    (error) ? styles['textfield-error'] : '',
    variant === 'textarea' && styles['textarea-wrapper'],
  ].join(' ');

  const classNameHelper = [styles['helper'], (error) ? styles['error'] : ''].join(' ');
  const classNameTitle = [styles['title'], (error) ? styles['error'] : ''].join(' ');
  const { clickimage, shadow, ...inputProps } = props;

  const style = {
    shadow, // for unused variable - dont delete it
    width,
  };
  const padding = iconPosition === 'left' ? '0px 0px 0px 34px' : '0px 34px 0px 0px';
  const Tag = variant;

  return (
    <React.Fragment>
      { title ? <Typography class-name={classNameTitle} tag="label" variant="caption">{title}</Typography> : ''}
      <div className={className} id={disabled ? 'disabled-field' : ''} style={style}>
        <Tag {...inputProps} {...inputRedux} className={[
          styles['textfield'],
          variant === 'textarea' && styles['textarea']
        ].join(' ')}
        style={{ padding: Icon ? padding : '' }} />
        {Icon ? <span onClick={clickimage}style={{ [iconPosition]: 10, position: 'absolute', display: 'flex', alignItems: 'center' }}>
          {typeof Icon === 'function' ? <Icon /> : Icon}
        </span> : ''}
        {helper ? <Typography class-name={classNameHelper} tag="label" variant="caption">
          {(error) ? error : helper}
        </Typography> : ''}
      </div>
    </React.Fragment>
  );
}

Textfields.defaultProps = {
  'class-name': undefined,
  'icon-position': 'right',
  clickimage: () => { },
  disabled: false,
  error: undefined,
  helper: undefined,
  icon: undefined,
  input: {},
  onChange: () => { },
  shadow: false,
  title: undefined,
  type: 'text',
  variant: 'input',
  width: 281,
};

Textfields.propTypes = {
  'class-name': PropTypes.string,
  clickimage: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string,PropTypes.bool,PropTypes.object]),
  helper: PropTypes.string,
  icon: PropTypes.string,
  'icon-position': PropTypes.string,
  input: PropTypes.object,
  onChange: PropTypes.func,
  shadow: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
