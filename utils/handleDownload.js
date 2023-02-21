function HandleDownload() {
  const downloadLink = document.createElement('a');
  downloadLink.href = '/Diego_Arndt_Resume.pdf';
  downloadLink.download = 'Diego_Arndt_Resume.pdf';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export default HandleDownload;
