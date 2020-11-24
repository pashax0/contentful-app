import React from 'react';
import { Paragraph, TextField, Button } from '@contentful/forma-36-react-components';
import { EditorExtensionSDK } from 'contentful-ui-extensions-sdk';

interface EditorProps {
  sdk: EditorExtensionSDK;
}

const Entry = (props: EditorProps) => {
  console.log('Entry', props);
  return (
      <>
        <Paragraph>Hello Entry Editor Component</Paragraph>
        <TextField labelText="Links for fields"/>
        <Button>Update</Button>
      </>
  );
};

export default Entry;
