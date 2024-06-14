// สร้างฟังก์ชันสำหรับเริ่มเอฟเฟกต์การพิมพ์ข้อความใหม่
function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      // เมื่อวนลูปข้อความเสร็จสิ้น, เปลี่ยนไปยังลิงค์อื่น
      window.location.href = 'https://lifnat.github.io/correct1/'; // แทนที่ 'http://example.com' ด้วย URL ที่คุณต้องการ
      return;
    }
    // ถ้าข้อความยังมี, เริ่มพิมพ์ข้อความ
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function(){
        // เมื่อพิมพ์ข้อความเสร็จ, เริ่มข้อความถัดไป
        StartTextAnimation(i + 1);
      });
    }
  }document.addEventListener('DOMContentLoaded', (event) => {
    // สุ่มเครื่องหมายและกำหนดโอกาสเกิด
    const symbols = ['✔️', '✖️'];
    const symbol = Math.random() < 0.2 ? symbols[0] : symbols[1];
  
    // สร้างและแสดงเครื่องหมาย
    const symbolElement = document.createElement('div');
    symbolElement.innerHTML = symbol;
    document.body.appendChild(symbolElement);
  
    // แสดงข้อความหลังจากเครื่องหมาย
    const messageElement = document.createElement('div');
    messageElement.innerHTML = 'ข้อความของคุณที่นี่';
    document.body.appendChild(messageElement);
  
    // ตั้งค่าสไตล์สำหรับเครื่องหมายและข้อความ
    symbolElement.style.fontSize = '48px';
    symbolElement.style.textAlign = 'center';
    messageElement.style.textAlign = 'center';
  });
  
  