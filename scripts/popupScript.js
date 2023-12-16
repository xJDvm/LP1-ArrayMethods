document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openPopupBtn').addEventListener('click', function() {
      document.getElementById('popup').classList.add('show');
    });
  
    document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('popup').classList.remove('show');
    });
  });
  