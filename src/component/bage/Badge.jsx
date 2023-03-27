import './Badge.css'
import React from "react";
import classNames from 'classnames';
const Badge = ({ hex, onClick, className }) => (
    <i className={classNames('badge', className)} onClick={onClick} style={{ background: hex }}></i>
)
export default Badge;