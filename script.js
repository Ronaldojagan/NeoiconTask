function generateQR() {
      const text = document.getElementById('text').value;
      const canvas = document.getElementById('qrcode');
      QRCode.toCanvas(canvas, text, function (error) {
        if(error) {
          console.error(error);
        }
        else{
            alert('QR Code generated!');
        }
      });
      return
}