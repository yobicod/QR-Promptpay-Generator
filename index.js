import generatePayload from 'promptpay-qr';
import qrcode from 'qrcode';
import fs from 'fs';

const mobileNumber = '065xxxxxxx'; // replace with your number
const ID = '110xxxxxxxxxx'; // replace with your id
const amount = 1000;
const generateQrPayload = generatePayload(mobileNumber, { amount });
console.log('🚀 ~ file: index.js:10 ~ generateQrPayload:', generateQrPayload);

// convert to svg
const config = { type: 'svg', color: { dark: '#000', light: 'fff' } };
qrcode.toString(generateQrPayload, config, (err, svg) => {
  if (err) return console.log('Error while convert to svg');
  fs.writeFileSync('./qr.svg', svg);
  console.log(svg);
});
