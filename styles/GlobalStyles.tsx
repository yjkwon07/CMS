import { Global, css } from '@emotion/react';
import { colorStyle } from 'dcs-uikit';

const customStyles = css([colorStyle]);

const GlobalStyles = () => <Global styles={customStyles} />;

export default GlobalStyles;
