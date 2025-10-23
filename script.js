// 模拟数据：虚拟号码和短信
const mockNumbers = [
    {
        id: 1,
        phone: '+86 138 0000 0001',
        status: '可用',
        smses: [
            { from: '12306', content: '您的验证码是 123456，有效期 5 分钟。', time: '2025-10-23 10:00' },
            { from: 'WeChat', content: '微信验证码：789012', time: '2025-10-23 09:45' }
        ]
    },
    {
        id: 2,
        phone: '+86 138 0000 0002',
        status: '忙碌',
        smses: [
            { from: 'Taobao', content: '淘宝订单验证码：456789', time: '2025-10-23 11:15' }
        ]
    },
    {
        id: 3,
        phone: '+86 138 0000 0003',
        status: '可用',
        smses: []
    }
];

// 渲染号码网格
function renderNumbers() {
    const grid = document.getElementById('numbersGrid');
    grid.innerHTML = mockNumbers.map(number => `
        <div class="number-card">
            <div class="number-phone">${number.phone}</div>
            <div class="number-status">状态: ${number.status}</div>
            <div class="sms-list">
                ${number.smses.map(sms => `
                    <div class="sms-item">
                        <strong>来自: ${sms.from}</strong> - ${sms.time}<br>
                        ${sms.content}
                    </div>
                `).join('')}
            </div>
            ${number.smses.length > 0 ? `<button onclick="openModal(${number.id})">查看详情</button>` : ''}
        </div>
    `).join('');
}

// 打开模态框
function openModal(id) {
    const number = mockNumbers.find(n => n.id === id);
    document.getElementById('modalTitle').textContent = `号码: ${number.phone}`;
    document.getElementById('modalBody').innerHTML = number.smses.map(sms => `
        <div class="sms-item">
            <strong>${sms.from}</strong> - ${sms.time}<br>
            ${sms.content}
        </div>
    `).join('');
    document.getElementById('smsModal').style.display = 'flex';
}

// 关闭模态框
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.getElementById('smsModal').style.display = 'none';
        });
    }

    // 窗口点击关闭模态
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('smsModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 初始化渲染
    renderNumbers();
});