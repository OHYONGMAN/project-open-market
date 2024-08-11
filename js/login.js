const url = 'https://openmarket.weniv.co.kr/';
const button = document.querySelector('#login-btn');
const buyerBtn = document.querySelector('.buyer-btn');
const sellerBtn = document.querySelector('.seller-btn');

sellerBtn.addEventListener('click', () => {
  sellerBtn.classList.toggle('white-btn');
  buyerBtn.classList.toggle('grey-btn');
});

buyerBtn.addEventListener('click', () => {
  sellerBtn.classList.remove('white-btn');
  buyerBtn.classList.remove('grey-btn');
});

async function post() {
  console.log(document.getElementById('formData'));
  const param = {
    username: document.getElementById('id').value,
    password: document.getElementById('password').value,
    login_type: document.getElementById('login_type').value,
  };
  const res = await fetch(`${url}accounts/login/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(param),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.token != null) localStorage.setItem('key', result.token);
      localStorage.setItem('type', result.user_type);
      history.back();
    });
}
