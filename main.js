(() => {
  // التحكم في التنقل بين الأقسام
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');
      
      if(btn.dataset.target === 'sec-writing' && typeof window.resizeWritingBoard === 'function') {
        window.resizeWritingBoard();
      }
    });
  });

  window.addEventListener("resize", () => {
    if(typeof window.resizeWritingBoard === 'function') {
      window.resizeWritingBoard();
    }
  });
})();
