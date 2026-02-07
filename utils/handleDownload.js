import { track } from '@vercel/analytics';

function HandleDownload() {
  track('cv_download', {
    filename: 'Diego_Arndt_Resume.pdf',
    url: '/Diego_Arndt_Resume.pdf',
  });
  const downloadLink = document.createElement('a');
  downloadLink.href = '/Diego_Arndt_Resume.pdf';
  downloadLink.download = 'Diego_Arndt_Resume.pdf';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export default HandleDownload;
