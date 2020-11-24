import React, {useEffect, useState} from 'react';
import { Paragraph, Checkbox } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from 'contentful-ui-extensions-sdk';

const Sidebar = (props) => {
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

  const fields = [];
  for (const key in props.sdk.entry.fields) {
    fields.push(key);
  }
  console.log('fields', fields);

  const storage = new Map();

  useEffect(() => {
    for (const key in props.sdk.entry.fields) {
      // storage.push({[key]: props.sdk.entry.fields[key].getValue()})
      storage.set(key, props.sdk.entry.fields[key].getValue());
    }
    console.log(storage);
  }, []);

  const [showAllFields, toggleFields] = useState(false);

  const clearField = (id) => {
    const field = props.sdk.entry.fields[id];
    field && field.removeValue();
    field && field.onValueChanged(() => {
      console.log(`!ATTENTION! Field ${id} is not used for this type`);
    });
    // field.setValue(`${ATTENTION_MESSAGE} ${oldValue}`);
    // field.removeValue();
    // props.sdk.entry.fields[id].setValue('You can\'t use this field');
    // props.sdk.entry.fields[id].onValueChanged(() => {
    //   blockField(id);
    //   console.log(`${id} is blocked`);
    // });
  }

  const seedFields = (fieldNames) => {
    fieldNames.forEach(fieldName => {
      props.sdk.entry.fields[fieldName].setValue(storage.get(fieldName));
    })
  }

  // useEffect(() => {
  //   const one = window.localStorage.getItem('one');
  //   console.log('One', one);
  //   changeSidebarText(one);
  // }, []);
  useEffect(() => {
    props.sdk.entry.fields.type.onValueChanged(value => {
      let usedFields = fields.filter(field => field !== 'type')
      if (value) {
        clearField(value.toLowerCase());
        console.log('value', value);
        usedFields = usedFields.filter(field => field !== value.toLowerCase());
      }

      console.log('usedFields', usedFields);
      seedFields(usedFields);
    })
    // props.sdk.entry.fields.type.onValueChanged(value => {
    //   const selector = `[data-field-api-name=${value.toLowerCase()}]`;
      // const frames = window.parent.frames;
      // frames[0].document.body.style.background = "red";
    //   const elem = document.querySelector(selector);
    //   // elem.style.display = 'none';
    //   const types = props.sdk.fields;
    //   // types.then(res => console.log(res));
    //
    //   // elem && elem.style.display = 'none';
    // })
  }, [])
  return (
      <>
        <Paragraph>Show all fields</Paragraph>
        <Checkbox checked={showAllFields} onChange={() => toggleFields(!showAllFields)} />
      </>
  );
};

export default Sidebar;
