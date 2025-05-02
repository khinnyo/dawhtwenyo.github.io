// script.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. ဓာတ်ပုံကိုနှိပ်ပါက မှတ်ချက်ပြခြင်း
    const profileImage = document.querySelector('.profile img');
    profileImage.addEventListener('click', function() {
        alert('မင်္ဂလာပါ! ဆရာလေး Dawponnya ပါ။ ဆပ်ပြာရည်ပြုလုပ်နည်းများကို မျှဝေပေးနေပါတယ်။');
    });

    // 2. ဆပ်ပြာပြုလုပ်နည်း အဆင့်များကို အလှည့်ကျပြခြင်း
    const steps = document.querySelectorAll('ol li');
    steps.forEach((step, index) => {
        step.style.opacity = '0.7';
        step.style.transition = 'all 0.3s ease';
        
        step.addEventListener('mouseover', function() {
            this.style.opacity = '1';
            this.style.fontWeight = 'bold';
            this.style.transform = 'scale(1.02)';
        });
        
        step.addEventListener('mouseout', function() {
            this.style.opacity = '0.7';
            this.style.fontWeight = 'normal';
            this.style.transform = 'scale(1)';
        });
    });

    // 3. ဓာတုညီမျှခြင်းကို နှိပ်ပါက ရှင်းလင်းချက်ပြခြင်း
    const formulaBox = document.querySelector('.formula');
    formulaBox.addEventListener('click', function() {
        const explanation = document.createElement('div');
        explanation.innerHTML = `
            <p>ဤည
