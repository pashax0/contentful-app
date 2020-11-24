import React, {useEffect, useState} from 'react';
import { Paragraph, TextField, Typography } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';

// const getFieldByParameter = (props) => {
//     const fieldName = props.sdk.field.id;
//     const controls = props.sdk.editor.editorInterface.controls;
//     const fieldControls = controls.filter(control => control.field.apiName === fieldName);
//     const helpText = fieldControls[0].settings?.helpText;
//     // const forType = JSON.parse(helpText);
//     return helpText;
// };

interface FieldProps {
    sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
    const fieldId = props.sdk.field.id;
    const links = {
        One: [
            "forType1"
        ],
        Two: [
            "forType2"
        ],
        Three: [
            "forType2",
            "forType3"
        ]
    };
  console.log('Field: ', props);
    // console.log('Controls: ', getFieldByParameter(props));
  const [isShowing, changeShowing] = useState(true);
  useEffect(() => {
    props.sdk.entry.fields.type.onValueChanged(value => {
      // localStorage.setItem('testType', value);
      console.log('type change', value);
      // @ts-ignore
        changeShowing(links[value]?.some(link => link === fieldId) ?? true);
    })
  })
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return (
      <div className="custom-text-field">
          {isShowing
            ? <TextField
                  // required
                  // labelText="type"
                  // onChange={e => window.localStorage.setItem('one', e.target.value)}
              />
              : <Typography>You can't use this field</Typography>
          }
      </div>
  )
};

export default Field;

