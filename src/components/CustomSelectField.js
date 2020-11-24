import React from 'react';
import { SelectField } from '@contentful/forma-36-react-components';

const CustomSelectField = (props) => {
    return (
        <SelectField
            onChange={e => window.localStorage.setItem('SelectField', e.target.value)}
        />
    )
};

export default CustomSelectField;
