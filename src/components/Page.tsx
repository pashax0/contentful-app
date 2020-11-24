import React, {useEffect} from 'react';
import { Paragraph } from '@contentful/forma-36-react-components';
import { PageExtensionSDK } from 'contentful-ui-extensions-sdk';

interface PageProps {
  sdk: PageExtensionSDK;
}

const Page = (props: PageProps) => {
  console.log('Page');
  useEffect(() => {
    props.sdk.space.getEntries().then(data => {
      console.log('data', data.items);
    })
  })
  return <Paragraph>Hello Page Component</Paragraph>;
};

export default Page;
