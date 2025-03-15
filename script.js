// ページロード時のアニメーション効果
document.addEventListener('DOMContentLoaded', () => {
    // ヘッダー要素のフェードインアニメーション
    const header = document.querySelector('.main-header');
    header.style.opacity = '0';
    setTimeout(() => {
      header.style.transition = 'opacity 1s ease';
      header.style.opacity = '1';
    }, 300);
  
    // スクロールアニメーションの設定
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.feature-card, .store-card, .gallery-item, .section-title');
  
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animate');
        }
      });
    };
  
    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', animateOnScroll);
    // 初回実行
    animateOnScroll();
  
    // 言語切り替えボタンの制御
    const langButtons = document.querySelectorAll('.lang-btn');
  
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        // ここに実際の言語切り替え処理を追加
        console.log(`言語を${button.textContent}に切り替えました`);
      });
    });
  
    // マップピンのホバー効果
    const mapPins = document.querySelectorAll('.map-pin');
  
    mapPins.forEach(pin => {
      pin.addEventListener('mouseenter', () => {
        pin.style.transform = 'translate(-50%, -50%) scale(1.2)';
      });
  
      pin.addEventListener('mouseleave', () => {
        pin.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  
    // スムーススクロール
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // ヘッダーの高さを考慮
            behavior: 'smooth'
          });
        }
      });
    });
  
    // ストアカードのスライダー効果
    const storeSlider = document.querySelector('.store-slider');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    if (storeSlider) {
      storeSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        storeSlider.style.cursor = 'grabbing';
        startX = e.pageX - storeSlider.offsetLeft;
        scrollLeft = storeSlider.scrollLeft;
      });
  
      storeSlider.addEventListener('mouseleave', () => {
        isDown = false;
        storeSlider.style.cursor = 'grab';
      });
  
      storeSlider.addEventListener('mouseup', () => {
        isDown = false;
        storeSlider.style.cursor = 'grab';
      });
  
      storeSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - storeSlider.offsetLeft;
        const walk = (x - startX) * 2; // スクロール速度の調整
        storeSlider.scrollLeft = scrollLeft - walk;
      });
  
      // タッチデバイス対応
      storeSlider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - storeSlider.offsetLeft;
        scrollLeft = storeSlider.scrollLeft;
      });
  
      storeSlider.addEventListener('touchend', () => {
        isDown = false;
      });
  
      storeSlider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - storeSlider.offsetLeft;
        const walk = (x - startX) * 2;
        storeSlider.scrollLeft = scrollLeft - walk;
      });
    }
  });
  