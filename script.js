// COUNTDOWN TIMER
const countdownEl = document.getElementById("countdown");
const launchDate = new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).getTime(); // 45 days from now

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance <= 0) {
    countdownEl.textContent = "LSC is now live!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.textContent = `Launch in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


// ADD TO METAMASK FUNCTION
async function addToMetamask() {
  try {
    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: '0xa834fdd76CCe9a219218c56A7607dF5a7af9Eac9', // Your real contract address
          symbol: 'LSC',
          decimals: 18,
          image: 'https://cdn.shopify.com/s/files/1/0906/7544/6137/files/DarkPurpleAndGoldModernGoldLoanLogo_2.png?v=1754149410'
        }
      }
    });
  } catch (error) {
    console.error('MetaMask add failed:', error);
  }
}

// CONNECT WALLET FUNCTION
function connectWallet() {
  alert("🔗 Wallet connect coming soon.");
}

// LANGUAGE SWITCHER (stub for now)
function switchLanguage(lang) {
  alert(`🌐 Language switched to: ${lang} (coming soon)`);
}

