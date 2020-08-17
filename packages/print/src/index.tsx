import {
  Document,
  Page,
  default as ReactPDF,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';
import { Text as InkText, render } from 'ink';
import React from 'react';
import { argv } from 'yargs';
import { readFileSync } from 'fs';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    flexDirection: 'row',
  },
  section: {
    flexGrow: 1,
    margin: 10,
    padding: 10,
  }
});

const MyDocument = ({ text }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{text}</Text>
      </View>
    </Page>
  </Document>
);

const CLI = () => {
  if (argv.file) {
    try {
      const filename = `${argv.file}`;
      const file = readFileSync(filename, 'utf-8').toString();

      ReactPDF.render(<MyDocument text={file} />, `${filename}.pdf`)
        .then(res => {
          console.log(res);
          return (
            <>
              <InkText>Writing the PDF file: {`${filename}.pdf`}</InkText>
            </>
          );
        })
        .catch(err => {
          console.log(err);
          return (
            <>
              <InkText>Error, you need to pass in a valid --file</InkText>
            </>
          );
        });
    }
    catch (err) {
      console.log(err);

      return (
        <>
          <InkText>Error, you need to pass in a valid --file</InkText>
        </>
      );
    }
  }

  return (
    <>
      <InkText>Error, you need to pass in a --file</InkText>
    </>
  );
};

render(<CLI />);
