// Shared data state
const sharedData = {
    cart: [] // { id, name, price, qty, img, option }
};

// Available products for search
// Available products for search
const productsData = [
    // 🎮 닌텐도 기기 (Nintendo Consoles)
    { id: 41, name: '닌텐도 스위치 Lite', price: 249800, img: '닌텐도 기기 image/닌텐도 스위치 Lite.png', category: '닌텐도', tags: ['휴대용', '라이트', '다양한컬러'] },
    { id: 42, name: '닌텐도 스위치 (일반 모델)', price: 360000, img: '닌텐도 기기 image/닌텐도 스위치 (일반 모델).webp', category: '닌텐도', tags: ['표준형', '네온', '거치형'] },
    { id: 40, name: '닌텐도 스위치 OLED', price: 415000, img: '닌텐도 기기 image/닌텐도 스위치 oled.png', category: '닌텐도', tags: ['신형', 'OLED', '화이트'] },
    { id: 43, name: '닌텐도 스위치 2', price: 550000, img: '닌텐도 기기 image/닌텐도 스위치 2.jpg', category: '닌텐도', tags: ['차세대기', '신제품', '강력한성능'] },

    // ⚔️ 젤다의 전설 시리즈 (Zelda Series)
    { id: 1, name: '젤다의 전설 티어스 오브 더 킹덤', price: 74800, img: '닌텐도 칩 Image/티어스 오브더킹덤.jpg', category: '스위치 칩', tags: ['젤다', '어드벤처', '오픈월드'] },
    { id: 2, name: '젤다의 전설 브레스 오브 더 와일드', price: 74800, img: '닌텐도 칩 Image/브레스 오브 더 와일드.jpg', category: '스위치 칩', tags: ['젤다', '명작', '오픈월드'] },
    { id: 3, name: '젤다의 전설 스카이워드 소드', price: 64800, img: '닌텐도 칩 Image/스카이워드 소드.png', category: '스위치 칩', tags: ['젤다', '기원', '리마스터'] },
    { id: 4, name: '젤다의 전설 꿈꾸는 섬', price: 64800, img: '닌텐도 칩 Image/꿈꾸는 섬.png', category: '스위치 칩', tags: ['젤다', '퍼즐', '귀여운'] },
    { id: 5, name: '젤다무쌍 대재앙의 시대', price: 64800, img: '닌텐도 칩 Image/대재앙의 시대.png', category: '스위치 칩', tags: ['젤다', '무쌍', '액션'] },

    // 🍄 마리오 시리즈 (Mario Series)
    { id: 6, name: '마리오 카트 8 디럭스', price: 64800, img: '닌텐도 칩 Image/마리오 카트 8 디럭스.jpg', category: '스위치 칩', tags: ['마리오', '레이싱', '접객용'] },
    { id: 7, name: '슈퍼 마리오 오디세이', price: 64800, img: '닌텐도 칩 Image/슈퍼 마리오 오디세이.jpg', category: '스위치 칩', tags: ['마리오', '어드벤처', '명작'] },
    { id: 8, name: '슈퍼 마리오 브라더스 원더', price: 64800, img: '닌텐도 칩 Image/슈퍼마리오브라더스 원더.jpg', category: '스위치 칩', tags: ['마리오', '플랫포머', '액션'] },
    { id: 9, name: '슈퍼 마리오 3D 월드 + 퓨리 월드', price: 64800, img: '닌텐도 칩 Image/슈퍼 마리오 3d 월드.webp', category: '스위치 칩', tags: ['마리오', '플랫포머', '고양이'] },
    { id: 10, name: '페이퍼 마리오 1000년의 문', price: 64800, img: '닌텐도 칩 Image/페이퍼 마리오 1000년의 문.jpg', category: '스위치 칩', tags: ['마리오', 'RPG', '명작'] },
    { id: 11, name: '마리오 파티 슈퍼스타즈', price: 64800, img: '닌텐도 칩 Image/마리오 파티 슈퍼스타즈.jpg', category: '스위치 칩', tags: ['마리오', '파티', '접객용'] },
    { id: 12, name: '슈퍼 마리오 메이커 2', price: 64800, img: '닌텐도 칩 Image/슈퍼 마리오 메이커 2.webp', category: '스위치 칩', tags: ['마리오', '샌드박스', '구축'] },
    { id: 13, name: '슈퍼 마리오 RPG', price: 64800, img: '닌텐도 칩 Image/슈퍼 마리오 RPG.jpg', category: '스위치 칩', tags: ['마리오', 'RPG', '리메이크'] },

    // ⭐ 별의 커비 시리즈 (Kirby Series)
    { id: 14, name: '별의 커비 디스커버리', price: 64800, img: '닌텐도 칩 Image/별의 커비 디스커버리.jpg', category: '스위치 칩', tags: ['커비', '액션', '힐링', '3D'] },
    { id: 15, name: '별의 커비 스타 얼라이즈', price: 64800, img: '닌텐도 칩 Image/별의 커비 스타 얼라이즈.jpg', category: '스위치 칩', tags: ['커비', '액션', '멀티'] },
    { id: 16, name: '별의 커비 Wii 디럭스', price: 64800, img: '닌텐도 칩 Image/별의 커비 WIL 디럭스.jpg', category: '스위치 칩', tags: ['커비', '리메이크', '액션'] },

    // 🦔 소닉 시리즈 (Sonic Series)
    { id: 17, name: '소닉 프론티어', price: 49800, img: '닌텐도 칩 Image/소닉 프론티어.jpg', category: '스위치 칩', tags: ['소닉', '액션', '스피드', '오픈존'] },
    { id: 18, name: '소닉 매니아', price: 22000, img: '닌텐도 칩 Image/소닉 매니아.jpg', category: '스위치 칩', tags: ['소닉', '레트로', '2D'] },
    { id: 19, name: '소닉 슈퍼스타즈', price: 54800, img: '닌텐도 칩 Image/소닉 슈퍼스타즈.jpg', category: '스위치 칩', tags: ['소닉', '액션', '멀티'] },
    { id: 20, name: '소닉 오리진스 플러스', price: 44800, img: '닌텐도 칩 Image/소닉 오리진스 플러스.jpg', category: '스위치 칩', tags: ['소닉', '클래식', '합본'] },

    // 🍃 동물의 숲 및 기타 (Animal Crossing & Others)
    { id: 21, name: '모여봐요 동물의 숲', price: 64800, img: '닌텐도 칩 Image/모여봐요 동물의 숲.jpg', category: '스위치 칩', tags: ['동숲', '힐링', '시뮬레이션'] },
    { id: 22, name: '동물의 숲 해피 홈 파라다이스', price: 25000, img: '닌텐도 칩 Image/동물의 숲 해피 홈 파라다이스.jpg', category: '스위치 칩', tags: ['동숲', '인테리어', 'DLC'] },

    // 🔥 닌텐도 베스트셀러 (Nintendo Best)
    { id: 23, name: '포켓몬스터 스칼렛·바이올렛', price: 64800, img: '닌텐도 칩 Image/포켓몬스터 스칼렛- 바이올렛.jpg', category: '스위치 칩', tags: ['포켓몬', 'RPG', '오픈월드'] },
    { id: 24, name: '슈퍼 스매시브라더스 얼티밋', price: 74800, img: '닌텐도 칩 Image/슈퍼 스매시브라더스 얼티밋.webp', category: '스위치 칩', tags: ['대난투', '액션', '격투'] },
    { id: 25, name: '스플래툰 3', price: 64800, img: '닌텐도 칩 Image/스플래툰 3.png', category: '스위치 칩', tags: ['액션', '슈팅', '멀티'] },
    { id: 26, name: '포켓몬 레전드 아르세우스', price: 64800, img: '닌텐도 칩 Image/포켓몬 레전드 아르세우스.jpg', category: '스위치 칩', tags: ['포켓몬', 'RPG', '액션'] },
    { id: 27, name: '링 피트 어드벤처', price: 84800, img: '닌텐도 칩 Image/링 피트 어드벤쳐.jpg', category: '스위치 칩', tags: ['운동', '홈트', '피트니스'] },
    { id: 28, name: '닌텐도 스위치 스포츠', price: 54800, img: '닌텐도 칩 Image/닌텐도 스위치 스포츠.jpg', category: '스위치 칩', tags: ['스포츠', '접객용'] },
    { id: 29, name: '마인크래프트 스위치 에디션', price: 37900, img: '닌텐도 칩 Image/마인크래프트 스위치 에디션.webp', category: '스위치 칩', tags: ['샌드박스', '서바이벌'] },
    { id: 30, name: '파이어 엠블렘 풍화설월', price: 64800, img: '닌텐도 칩 Image/파이어 엠블렘 풍화설월.webp', category: '스위치 칩', tags: ['RPG', '전략'] },

    // 💼 장비 (Equipment) - Updated with 21 local images & subCategories
    { id: 50, name: 'Nintendo Switch Joy-Con (조이콘)', price: 79800, img: '닌텐도 장비 image/Nintendo Switch Joy-Con (조이콘).jpg', category: '장비', subCategory: '컨트롤러', tags: ['컨트롤러', '조이콘', '순정'] },
    { id: 51, name: 'Nintendo Switch Pro 컨트롤러', price: 77800, img: '닌텐도 장비 image/Nintendo Switch Pro 컨트롤러.jpg', category: '장비', subCategory: '컨트롤러', tags: ['컨트롤러', '프로콘', '순정'] },
    { id: 52, name: '특수 컨트롤러 (게임큐브/기타)', price: 64800, img: '닌텐도 장비 image/특수 컨트롤러.jpg', category: '장비', subCategory: '컨트롤러', tags: ['컨트롤러', '클래식', '격투'] },
    { id: 53, name: '액정 보호 필름', price: 9900, img: '닌텐도 장비 image/액정 보호 필름.jpg', category: '장비', subCategory: '필름/강화유리', tags: ['액세서리', '보호필름'] },
    { id: 69, name: '강화유리', price: 12900, img: '닌텐도 장비 image/강화유리.jpg', category: '장비', subCategory: '필름/강화유리', tags: ['액세서리', '강화유리'] },
    { id: 54, name: '휴대용 케이스', price: 24800, img: '닌텐도 장비 image/휴대용 케이스.jpg', category: '장비', subCategory: '케이스', tags: ['케이스', '휴대용', '파우치'] },
    { id: 55, name: '보호 케이스 (TPU/크리스탈)', price: 15000, img: '닌텐도 장비 image/보호 케이스 (TPU크리스탈).png', category: '장비', subCategory: '케이스', tags: ['케이스', '보호', '투명'] },
    { id: 66, name: '캐릭터 디자인 케이스', price: 22000, img: '닌텐도 장비 image/캐릭터 디자인 케이스.jpg', category: '장비', subCategory: '케이스', tags: ['케이스', '디자인', '캐릭터'] },
    { id: 67, name: '마그네틱 하드 케이스', price: 35000, img: '닌텐도 장비 image/마그네틱 하드 케이스.jpg', category: '장비', subCategory: '케이스', tags: ['케이스', '하드커버', '마그네틱'] },
    { id: 68, name: '호리(HORI) 게임 카드 케이스', price: 15000, img: '닌텐도 장비 image/호리(HORI) 게임 카드 케이스.jpg', category: '장비', subCategory: '보관함/거치대', tags: ['보관', '카드케이스', '호리'] },
    { id: 64, name: '독 거치형 보관함', price: 18000, img: '닌텐도 장비 image/독 거치형 보관함.jpg', category: '장비', subCategory: '보관함/거치대', tags: ['보관', '정리', '독'] },
    { id: 65, name: '타워형 거치대', price: 25000, img: '닌텐도 장비 image/타워형 거치대.avif', category: '장비', subCategory: '보관함/거치대', tags: ['거치대', '정리', '타워'] },
    { id: 58, name: '조이스틱 커버 (스틱 캡)', price: 5500, img: '닌텐도 장비 image/조이스틱 커버 (스틱 캡).webp', category: '장비', subCategory: '스틱 캡', tags: ['액세서리', '스틱캡', '그립'] },
    { id: 56, name: 'MicroSD 카드', price: 35000, img: '닌텐도 장비 image/MicroSD 카드.avif', category: '장비', subCategory: '기타 장비', tags: ['저장공간', 'SD카드', '확장'] },
    { id: 57, name: '충전용 주변기기', price: 29800, img: '닌텐도 장비 image/충전용 주변기기.webp', category: '장비', subCategory: '기타 장비', tags: ['충전기', '거치대', '전원'] },
    { id: 70, name: '충전 스탠드', price: 19800, img: '닌텐도 장비 image/충전 스탠드.avif', category: '장비', subCategory: '기타 장비', tags: ['충전기', '스탠드'] },
    { id: 59, name: '유선 LAN 어댑터', price: 29800, img: '닌텐도 장비 image/유선 LAN 어댑터.jpg', category: '장비', subCategory: '기타 장비', tags: ['연결', '네트워크', '유선'] },
    { id: 60, name: 'HDMI 캡처보드', price: 159000, img: '닌텐도 장비 image/HDMI 캡처보드.jpg', category: '장비', subCategory: '기타 장비', tags: ['녹화', '스트리밍', '방송'] },
    { id: 61, name: 'HDMI 케이블', price: 12000, img: '닌텐도 장비 image/HDMI 케이블.jpg', category: '장비', subCategory: '기타 장비', tags: ['케이블', 'HDMI', '영상'] },
    { id: 62, name: 'USB 케이블', price: 8000, img: '닌텐도 장비 image/USB 케이블.jpg', category: '장비', subCategory: '기타 장비', tags: ['케이블', 'USB', '충전'] },
    { id: 63, name: '닌텐도 스위치 독 (Dock)', price: 99800, img: '닌텐도 장비 image/닌텐도 스위치 독 (Dock).webp', category: '장비', subCategory: '기타 장비', tags: ['순정', '거치대', 'TV연결'] }
];

// Utility functions
const formatPrice = (price) => `₩${price.toLocaleString()}`;

// Cart Logic
function initCart() {
    const savedCart = localStorage.getItem('nshop_cart');
    if (savedCart) {
        sharedData.cart = JSON.parse(savedCart);
    } else {
        sharedData.cart = [];
        saveCart();
    }
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('nshop_cart', JSON.stringify(sharedData.cart));
}

function updateCartCount() {
    const counters = document.querySelectorAll('.cart-count');
    const totalQty = sharedData.cart.reduce((sum, item) => sum + item.qty, 0);

    counters.forEach(counter => {
        counter.textContent = totalQty;
        // Animation
        counter.parentElement.style.transform = 'scale(1.1)';
        counter.parentElement.style.transition = 'transform 0.2s';
        setTimeout(() => {
            counter.parentElement.style.transform = '';
        }, 200);
    });
}

function showPhoneLoginModal() {
    // Remove existing modal if any
    const existing = document.getElementById('phone-login-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'phone-login-overlay';
    overlay.innerHTML = `
        <div class="phone-frame">
            <div class="phone-notch"></div>
            <div class="phone-screen">
                <div class="phone-header">
                    <span class="phone-logo"><span style="color:var(--n-red)">N</span>-SHOP</span>
                </div>
                <h3 class="phone-title">로그인이 필요합니다 🔒</h3>
                <p class="phone-desc">장바구니를 이용하려면<br>먼저 로그인해 주세요.</p>
                <form class="phone-form" id="phone-login-form">
                    <input type="text" id="phone-login-id" placeholder="아이디" required>
                    <input type="password" id="phone-login-pw" placeholder="비밀번호" required>
                    <label style="display:flex;align-items:center;gap:8px;font-size:0.85rem;font-weight:600;color:#555;margin-top:2px;cursor:pointer">
                        <input type="checkbox" id="phone-auto-login" style="width:16px;height:16px;accent-color:var(--n-red)"> 자동 로그인
                    </label>
                    <button type="submit" class="phone-login-btn">로그인</button>
                </form>
                <div style="margin-top:18px;border-top:2px dashed rgba(0,0,0,0.08);padding-top:15px;text-align:center">
                    <span style="font-size:0.8rem;color:#999;font-weight:700">간편 로그인</span>
                    <div style="display:flex;justify-content:center;gap:15px;margin-top:12px">
                        <div class="social-btn" title="카카오 로그인" style="width:45px;height:45px;border-width:2px;box-shadow:3px 3px 0 var(--n-dark)">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" alt="Kakao" style="width:22px">
                        </div>
                        <div class="social-btn" title="네이버 로그인" style="width:45px;height:45px;border-width:2px;box-shadow:3px 3px 0 var(--n-dark)">
                            <img src="간편 로그인 image/naver.svg" alt="Naver" style="width:32px">
                        </div>
                        <div class="social-btn" title="구글 로그인" style="width:45px;height:45px;border-width:2px;box-shadow:3px 3px 0 var(--n-dark)">
                            <img src="간편 로그인 image/google.png" alt="Google" style="width:24px;border-radius:50%">
                        </div>
                    </div>
                </div>
                <div class="phone-links">
                    <a href="signup.html">회원가입</a>
                    <a href="find-account.html">계정 찾기</a>
                </div>
            </div>
            <div class="phone-home-bar"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    // Login form logic
    document.getElementById('phone-login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const id = document.getElementById('phone-login-id').value.trim();
        const pw = document.getElementById('phone-login-pw').value;
        const autoLogin = document.getElementById('phone-auto-login').checked;
        const users = JSON.parse(localStorage.getItem('nshop_users') || '[]');
        const user = users.find(u => u.id === id && u.pw === pw);
        if (user) {
            localStorage.setItem('nshop_logged_in', JSON.stringify({ id: user.id, name: user.name }));
            if (autoLogin) {
                localStorage.setItem('nshop_auto_login', JSON.stringify({ id, pw }));
            }
            overlay.remove();
            showToast(`✅ <b>${user.name}</b>님, 환영합니다!`);
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.\n회원이 아니시라면 회원가입을 해주세요.');
        }
    });
}

function addToCart(productId) {
    // Auth guard — show phone login if not logged in
    if (!localStorage.getItem('nshop_logged_in')) {
        showPhoneLoginModal();
        return;
    }

    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = sharedData.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        sharedData.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1,
            img: product.img,
            option: '단일 상품'
        });
    }
    saveCart();
    updateCartCount();
    showToast(`🛒 <b>${product.name}</b>이(가)<br>장바구니에 담겼습니다! (+2 XP 획득)`, 'toast-xp');
}


function removeFromCart(productId) {
    sharedData.cart = sharedData.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
}

function updateCartQty(productId, delta) {
    const item = sharedData.cart.find(item => item.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
        }
    }
}

// UI Helpers
const toastContainer = document.getElementById('toast-container');
function showToast(message, className = '') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast' + (className ? ' ' + className : '');
    toast.innerHTML = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// -----------------------------------------------------------------------------
// EVENT LISTENERS & PAGE SPECIFIC LOGIC
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    initCart();

    // 0. Render Nintendo Consoles
    const nintendoGrid = document.getElementById('nintendo-grid');
    if (nintendoGrid) {
        const renderNintendo = () => {
            const consoles = productsData.filter(p => p.category === '닌텐도');
            nintendoGrid.innerHTML = consoles.map(p => `
                <div class="product-card">
                    <div class="img-wrapper">
                        <img src="${p.img}" alt="${p.name}">
                    </div>
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <p class="desc">${p.tags.slice(0, 2).map(t => '#' + t).join(' ')}</p>
                        <div class="price">${formatPrice(p.price)}</div>
                        <button class="add-to-cart console-add-btn" data-id="${p.id}">장바구니 담기</button>
                    </div>
                </div>
            `).join('');

            nintendoGrid.querySelectorAll('.console-add-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    addToCart(id);
                });
            });
        };
        renderNintendo();
    }

    // 1. Render Games on Main Page
    const mainGamesGrid = document.getElementById('main-games-grid');
    if (mainGamesGrid) {
        let showAllGames = false;
        const moreGamesBtn = document.getElementById('more-games-btn');
        const gamesCollapseContainer = document.getElementById('games-collapse-container');

        const renderMainGames = () => {
            const games = productsData.filter(p => p.category === '스위치 칩');
            const displayGames = showAllGames ? games : games.slice(0, 8);

            mainGamesGrid.innerHTML = displayGames.map(p => `
                <div class="product-card">
                    <div class="img-wrapper game-box">
                        <img src="${p.img}" alt="${p.name}">
                    </div>
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <p class="desc">${p.tags.slice(0, 2).map(t => '#' + t).join(' ')}</p>
                        <div class="price">${formatPrice(p.price)}</div>
                        <button class="add-to-cart main-add-btn" data-id="${p.id}">장바구니 담기</button>
                    </div>
                </div>
            `).join('');

            // Bind add to cart for dynamic items
            mainGamesGrid.querySelectorAll('.main-add-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    addToCart(id);
                });
            });

            if (moreGamesBtn) {
                if (showAllGames) {
                    moreGamesBtn.innerHTML = '접기 <span class="more-icon">-</span>';
                    if (gamesCollapseContainer) gamesCollapseContainer.style.display = 'flex';
                } else {
                    moreGamesBtn.innerHTML = '더보기 <span class="more-icon">+</span>';
                    if (gamesCollapseContainer) gamesCollapseContainer.style.display = 'none';
                }
            }
        };

        const toggleGames = (e) => {
            if (e) e.preventDefault();
            showAllGames = !showAllGames;
            renderMainGames();
            if (!showAllGames) {
                // Scroll back to the section top when folding
                const section = document.getElementById('games');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (moreGamesBtn) moreGamesBtn.addEventListener('click', toggleGames);
        if (gamesCollapseContainer) {
            const bottomCollapseBtn = gamesCollapseContainer.querySelector('.collapse-btn');
            if (bottomCollapseBtn) bottomCollapseBtn.addEventListener('click', toggleGames);
        }

        renderMainGames();
    }

    // 2. Render Equipment (Filterable)
    const equipmentGrid = document.getElementById('equipment-grid');
    const equipmentTabsContainer = document.getElementById('equipment-tabs');

    if (equipmentGrid && equipmentTabsContainer) {
        let activeSubCategory = '전체'; // Default
        const subCategories = ['전체', '컨트롤러', '필름/강화유리', '케이스', '보관함/거치대', '스틱 캡', '기타 장비'];

        const renderEquipmentTabs = () => {
            equipmentTabsContainer.innerHTML = subCategories.map(sub => `
                <button class="eq-tab-btn ${activeSubCategory === sub ? 'active' : ''}" data-sub="${sub}">
                    ${sub}
                </button>
            `).join('');

            equipmentTabsContainer.querySelectorAll('.eq-tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    activeSubCategory = e.target.dataset.sub;
                    renderEquipmentTabs();
                    renderEquipment();
                });
            });
        };

        const renderEquipment = () => {
            const eqItems = productsData.filter(p => {
                const isEquipment = p.category === '장비';
                if (activeSubCategory === '전체') return isEquipment;
                return isEquipment && p.subCategory === activeSubCategory;
            });

            equipmentGrid.innerHTML = eqItems.map(p => `
                <div class="product-card">
                    <div class="img-wrapper">
                        <img src="${p.img}" alt="${p.name}">
                    </div>
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <p class="desc">${p.tags.slice(0, 2).map(t => '#' + t).join(' ')}</p>
                        <div class="price">${formatPrice(p.price)}</div>
                        <button class="add-to-cart eq-add-btn" data-id="${p.id}">장바구니 담기</button>
                    </div>
                </div>
            `).join('');

            // Bind add to cart
            equipmentGrid.querySelectorAll('.eq-add-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    addToCart(id);
                });
            });
        };

        renderEquipmentTabs();
        renderEquipment();
    }

    // 3. GLOBAL: Setup "Add to Cart" buttons on static product cards (if any left)
    const staticAddBtns = document.querySelectorAll('.add-to-cart:not(.main-add-btn):not(.search-add-btn):not(.console-add-btn):not(.eq-add-btn)');
    staticAddBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                const name = card.querySelector('h3').textContent;
                const product = productsData.find(p => p.name === name);
                if (product) {
                    addToCart(product.id);
                }
            }
        });
    });

    // 2. SEARCH PAGE LOGIC (Enhanced with Persistent History)
    const searchInput = document.querySelector('.search-input');
    const searchSubmit = document.querySelector('.search-submit');
    const searchTags = document.querySelectorAll('.search-tag:not(.recent)');
    const searchSection = document.querySelector('.search-section');
    const recentSearchesList = document.getElementById('recent-searches-list');

    if (searchInput && searchSection) {
        let resultsContainer = document.querySelector('.search-results');
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results product-grid';
            resultsContainer.style.marginTop = '40px';
            searchSection.appendChild(resultsContainer);
        }

        const loadRecentSearches = () => {
            const history = localStorage.getItem('nshop_recent_searches');
            return history ? JSON.parse(history) : [];
        };

        const saveRecentSearch = (query) => {
            if (!query.trim()) return;
            let history = loadRecentSearches();
            history = history.filter(h => h !== query);
            history.unshift(query);
            history = history.slice(0, 10);
            localStorage.setItem('nshop_recent_searches', JSON.stringify(history));
            renderRecentSearches();
        };

        const deleteRecentSearch = (query) => {
            let history = loadRecentSearches();
            history = history.filter(h => h !== query);
            localStorage.setItem('nshop_recent_searches', JSON.stringify(history));
            renderRecentSearches();
        };

        const renderRecentSearches = () => {
            if (!recentSearchesList) return;
            const history = loadRecentSearches();
            if (history.length === 0) {
                recentSearchesList.innerHTML = '<p style="color: #999; font-size: 0.9rem;">검색 기록이 없습니다.</p>';
                return;
            }

            recentSearchesList.innerHTML = history.map(query => `
                <span class="search-tag recent" data-query="${query}">
                    ${query} <button class="del-btn">×</button>
                </span>
            `).join('');

            recentSearchesList.querySelectorAll('.search-tag.recent').forEach(tag => {
                tag.addEventListener('click', (e) => {
                    if (e.target.classList.contains('del-btn')) {
                        const q = e.currentTarget.dataset.query;
                        deleteRecentSearch(q);
                    } else {
                        const q = e.currentTarget.dataset.query;
                        searchInput.value = q;
                        performSearch(q);
                        saveRecentSearch(q);
                    }
                });
            });
        };

        const performSearch = (query) => {
            if (!query.trim()) {
                resultsContainer.innerHTML = '';
                return;
            }

            const lowerQuery = query.toLowerCase();
            const results = productsData.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.category.toLowerCase().includes(lowerQuery) ||
                p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
            );

            if (results.length === 0) {
                resultsContainer.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; background: var(--n-light); border: 4px solid var(--n-dark); border-radius: 16px; text-align: center;"><h3>"${query}" 관련 상품을 찾을 수 없습니다.</h3><p>다른 검색어로 다시 시도해 보세요.</p></div>`;
            } else {
                resultsContainer.innerHTML = results.map(p => `
                    <div class="product-card search-card">
                        <div class="img-wrapper ${p.category === '스위치 칩' ? 'game-box' : ''}">
                            <img src="${p.img}" alt="${p.name}">
                        </div>
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="desc">${p.category}</p>
                            <div class="search-price-row">
                                <span class="search-price">${formatPrice(p.price)}</span>
                                <button class="search-add-icon-btn" data-id="${p.id}" aria-label="장바구니 담기">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');

                resultsContainer.querySelectorAll('.search-add-icon-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const id = parseInt(e.currentTarget.dataset.id);
                        addToCart(id);
                    });
                });
            }
        };

        searchSubmit.addEventListener('click', () => {
            const query = searchInput.value;
            performSearch(query);
            saveRecentSearch(query);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value;
                performSearch(query);
                saveRecentSearch(query);
            }
        });

        searchTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                const query = e.target.textContent.replace('#', '').trim();
                searchInput.value = query;
                performSearch(query);
                saveRecentSearch(query);
            });
        });

        renderRecentSearches();
    }

    // 3. CART LOGIC
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummaryContainer = document.querySelector('.cart-summary');

    if (cartItemsContainer && cartSummaryContainer) {
        const renderCart = () => {
            if (sharedData.cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div style="padding: 60px 40px; text-align: center; background: var(--n-light); border: 4px dashed #ccc; border-radius: 20px;">
                        <h3 style="font-size: 1.8rem; margin-bottom: 20px;">장바구니가 텅 비어있습니다 😭</h3>
                        <p style="margin-bottom: 30px; font-size: 1.2rem; color: #666;">다양한 닌텐도 스위치 게임과 액세서리를 구경해 보세요!</p>
                        <a href="index.html" class="order-btn" style="display: inline-block;">쇼핑 계속하기</a>
                    </div>
                `;

                cartSummaryContainer.innerHTML = `
                    <h3>주문 텅 빔</h3>
                    <p>상품을 먼저 담아주세요.</p>
                `;
                return;
            }

            cartItemsContainer.innerHTML = sharedData.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-img ${item.img.includes('unsplash') ? 'game-box' : ''}" style="background: #eef2f5;">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>옵션: ${item.option}</p>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" data-action="minus" data-id="${item.id}">-</button>
                            <span class="qty">${item.qty}</span>
                            <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-btn" data-id="${item.id}">삭제</button>
                    </div>
                </div>
            `).join('');

            // Calculate totals
            const totalItemsPrice = sharedData.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const shippingFee = totalItemsPrice >= 50000 ? 0 : 3000;
            const discount = sharedData.cart.length >= 2 ? 5000 : 0;
            const finalPrice = totalItemsPrice + shippingFee - discount;
            const totalQty = sharedData.cart.reduce((sum, item) => sum + item.qty, 0);

            cartSummaryContainer.innerHTML = `
                <h3>주문 예상 금액</h3>
                <div class="summary-row">
                    <span>총 상품 금액</span>
                    <span>${formatPrice(totalItemsPrice)}</span>
                </div>
                <div class="summary-row">
                    <span>배송비 ${shippingFee === 0 ? '(무료배송)' : ''}</span>
                    <span>${shippingFee > 0 ? '+ ' : ''}${formatPrice(shippingFee)}</span>
                </div>
                ${discount > 0 ? `
                <div class="summary-row">
                    <span>다다익선 할인 (2개 이상)</span>
                    <span class="discount">- ₩5,000</span>
                </div>` : ''}
                <hr class="summary-divider">
                <div class="summary-row total">
                    <span>최종 결제 금액</span>
                    <span class="total-price">${formatPrice(finalPrice)}</span>
                </div>
                <button class="checkout-btn">주문하기 (${totalQty}개)</button>
            `;

            // Bind Events
            cartItemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    const isPlus = e.target.dataset.action === 'plus';
                    updateCartQty(id, isPlus ? 1 : -1);
                    renderCart();
                });
            });

            cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    removeFromCart(id);
                    renderCart();
                });
            });
        };

        renderCart();
    }

    // 4. MY PAGE LOGIC
    const orderListContainer = document.querySelector('.order-list');
    if (orderListContainer) {
        // Mock empty logic. Set to true to test empty state.
        const isEmptyOrderHistory = true;

        if (isEmptyOrderHistory) {
            orderListContainer.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <span style="font-size: 3rem; display: block; margin-bottom: 15px;">🛍️</span>
                    <p style="font-size: 1.2rem; color: #666;">최근 주문 내역이 없습니다.</p>
                    <a href="index.html" class="order-btn" style="display: inline-block; margin-top: 20px; text-decoration: none;">쇼핑하러 가기</a>
                </div>
            `;
        }
    }

    // Other UI elements
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const badge = title.querySelector('.badge-new');
        if (badge && badge.textContent.trim() === 'HOT') {
            badge.classList.add('hot');
        }
    });

    document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').split('#')[1];
            if (targetId) {
                const target = document.getElementById(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 5. INQUIRY MODAL LOGIC
    const createInquiryModal = () => {
        const modalHTML = `
            <div class="modal-overlay" id="inquiry-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">💭 실시간 문의하기</h2>
                        <button class="modal-close">&times;</button>
                    </div>
                    <form class="inquiry-form" id="inquiry-form">
                        <div class="form-group">
                            <label>문의 유형</label>
                            <select required>
                                <option value="">유형을 선택하세요</option>
                                <option value="stock">상품 재고 문의</option>
                                <option value="delivery">배송 관련 문의</option>
                                <option value="as">A/S 및 교환/반품</option>
                                <option value="other">기타</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>연락처 (이메일 또는 전화번호)</label>
                            <input type="text" placeholder="입력해주세요" required>
                        </div>
                        <div class="form-group">
                            <label>문의 내용</label>
                            <textarea placeholder="궁금하신 점을 자세히 적어주세요!" required></textarea>
                        </div>
                        <button type="submit" class="submit-inquiry">문의 접수하기</button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const modalOverlay = document.getElementById('inquiry-modal');
        const closeBtn = modalOverlay.querySelector('.modal-close');
        const form = modalOverlay.querySelector('#inquiry-form');

        const closeModal = () => {
            modalOverlay.classList.remove('active');
        };

        closeBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const categoryMap = {
                'stock': '상품 재고 문의',
                'delivery': '배송 관련 문의',
                'as': 'A/S 및 교환/반품',
                'other': '기타'
            };

            const type = form.querySelector('select').value;
            const contact = form.querySelector('input').value;
            const message = form.querySelector('textarea').value;

            const newInquiry = {
                id: Date.now(),
                type: categoryMap[type] || '기타',
                contact: contact,
                message: message,
                date: new Date().toLocaleDateString(),
                status: '접수 완료'
            };

            // Save to localStorage
            const inquiries = JSON.parse(localStorage.getItem('nshop_inquiries') || '[]');
            inquiries.unshift(newInquiry);
            localStorage.setItem('nshop_inquiries', JSON.stringify(inquiries));

            closeModal();
            showToast('✅ 문의가 성공적으로 접수되었습니다.<br>빠른 시일 내에 답변드리겠습니다!');
            form.reset();

            // Refresh list if on inquiries page
            if (typeof renderInquiryList === 'function') renderInquiryList();
        });

        return modalOverlay;
    };

    let inquiryModal = null;

    document.querySelectorAll('.order-btn[href="#contact"], .inquiry-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!inquiryModal) {
                inquiryModal = createInquiryModal();
            }
            inquiryModal.style.display = 'flex';
            setTimeout(() => inquiryModal.classList.add('active'), 10);
        });
    });

    // 6. INQUIRY HISTORY PAGE RENDERING
    window.renderInquiryList = () => {
        const container = document.getElementById('inquiry-list-container');
        if (!container) return;

        const inquiries = JSON.parse(localStorage.getItem('nshop_inquiries') || '[]');

        if (inquiries.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; background: var(--n-light); border: 4px dashed #ccc; border-radius: 20px; grid-column: 1/-1;">
                    <span style="font-size: 3rem; display: block; margin-bottom: 15px;">📫</span>
                    <p style="font-size: 1.2rem; color: #666;">문의 내역이 없습니다.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = inquiries.map(item => `
            <div class="inquiry-card">
                <div class="inquiry-header">
                    <span class="iq-type">${item.type}</span>
                    <span class="iq-status ${item.status === '답변 완료' ? 'replied' : 'pending'}">${item.status}</span>
                </div>
                <div class="inquiry-body">
                    <p class="iq-msg">${item.message}</p>
                    <div class="iq-footer">
                        <span class="iq-date">📅 ${item.date}</span>
                        <button class="iq-del-btn" onclick="deleteInquiry(${item.id})">삭제</button>
                    </div>
                </div>
            </div>
        `).join('');
    };

    window.deleteInquiry = (id) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;
        let inquiries = JSON.parse(localStorage.getItem('nshop_inquiries') || '[]');
        inquiries = inquiries.filter(i => i.id !== id);
        localStorage.setItem('nshop_inquiries', JSON.stringify(inquiries));
        renderInquiryList();
    };

    if (document.getElementById('inquiry-list-container')) {
        renderInquiryList();
    }
});
// Initialize everything on load
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-nav');
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.pointerEvents = 'auto';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.pointerEvents = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Scroll handling
    const topBtn = document.getElementById('scroll-top');
    const bottomBtn = document.getElementById('scroll-bottom');

    if (topBtn) {
        topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (bottomBtn) {
        bottomBtn.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    // Scroll button initial state
    const scrollNav = document.querySelector('.scroll-nav');
    if (scrollNav) {
        scrollNav.style.transition = 'opacity 0.3s';
        scrollNav.style.opacity = '0';
        scrollNav.style.pointerEvents = 'none';
    }
});
