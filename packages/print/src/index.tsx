import {
  Document,
  Font,
  Page,
  default as ReactPDF,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';
import { Text as InkText, render } from 'ink';
import React, { useEffect, useState } from 'react';
import { argv } from 'yargs';
import mdx from '@mdx-js/mdx';
import { readFileSync } from 'fs';

Font.register({
  family: 'CharisSIL',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'https://www.neonlaw.com/fonts/charis/CharisSIL-R.ttf'
});
Font.register({
  family: 'CharisSIL',
  fontStyle: 'italic',
  fontWeight: 400,
  src: 'https://www.neonlaw.com/fonts/charis/CharisSIL-I.ttf'
});
Font.register({
  family: 'CharisSIL',
  fontStyle: 'normal',
  fontWeight: 700,
  src: 'https://www.neonlaw.com/fonts/charis/CharisSIL-B.ttf'
});
Font.register({
  family: 'CharisSIL',
  fontStyle: 'italic',
  fontWeight: 700,
  src: 'https://www.neonlaw.com/fonts/charis/CharisSIL-BI.ttf'
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    flexDirection: 'row',
    fontFamily: 'CharisSIL',
  },
  section: {
    flexGrow: 1,
    margin: 10,
    padding: 10,
  },
  text: {
    fontFamily: 'CharisSIL'
  }
});

const MyDocument = ({ text }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>
          rar
        </Text>
        <Text style={styles.text}>
          {mdx.sync(text)}
        </Text>
      </View>
    </Page>
  </Document>
);

const CLI = () => {
  const [pdfFile, saved] = useState(false);

  useEffect(() => {
    savePdf();
  });

  const filename = `${argv.file}`;
  const file = readFileSync(filename, 'utf-8').toString();

  const savePdf = async () => {
    if (!argv.file) { return; }
    await ReactPDF.render(<MyDocument text={file} />, `${filename}.pdf`)
      .then(() => saved(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <InkText>
        PDF file at {`${filename}.pdf`} is saved: {pdfFile ? 'true' : 'false'}
      </InkText>
    </>
  );

};

render(<CLI />);
