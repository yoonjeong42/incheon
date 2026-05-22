/* ==========================================================================
   인천온(IncheonOn) - 애플리케이션 데이터 & 로직
   ========================================================================== */

// 1. 관광 명소 데이터베이스 (Attractions Database)
const attractionsData = [
    {
        id: "songdo-park",
        name: "송도 센트럴파크",
        englishName: "Songdo Central Park",
        category: "modern",
        coords: [37.3917, 126.6373],
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=800&q=80",
        imageFallback: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80",
        description: "대한민국 최초로 바닷물을 끌어들여 만든 해수공원입니다. 스카이라인이 비치는 수로에서 수상 택시, 카누, 패들보트를 즐길 수 있으며 트라이보울과 토끼섬 등 다양한 볼거리가 가득합니다. 송도의 현대적 빌딩 숲 속 아름다운 스마트 휴식처입니다.",
        address: "인천광역시 연수구 컨벤시아대로 160",
        hours: "24시간 운영 (수상레저 등 일부 시설 개별 운영)",
        tips: "해질녘에 방문하여 한옥마을의 전통미와 송도의 미래형 고층 빌딩이 만들어내는 환상적인 일몰 및 야경을 감상하세요."
    },
    {
        id: "chinatown",
        name: "인천 차이나타운",
        englishName: "Incheon Chinatown",
        category: "history",
        coords: [37.4764, 126.6180],
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
        imageFallback: "images/chinatown_incheon.png",
        description: "1883년 인천항 개항 이후 중국 청나라 조계지가 설정되면서 형성된 역사 깊은 거리입니다. 붉은색의 중국식 건물들과 패루(대문), 원조 짜장면 거리, 짜장면박물관 등 이국적인 문화를 직접 체험하고 풍성한 먹거리를 맛볼 수 있습니다.",
        address: "인천광역시 중구 차이나타운로59번길 12",
        hours: "상시 개방 (상점가별 상이)",
        tips: "삼국지 벽화거리와 바로 옆의 송월동 동화마을을 연계하여 도보 여행 코스로 잡으면 훌륭한 포토존 코스가 됩니다."
    },
    {
        id: "wolmido",
        name: "월미도 문화거리 & 테마파크",
        englishName: "Wolmido Cultural Street",
        category: "modern",
        coords: [37.4772, 126.5963],
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
        imageFallback: "images/wolmido_park.png",
        description: "인천 바다를 마주보고 있는 낭만적인 문화의 거리입니다. 스릴 넘치는 '디스코팡팡'과 '바이킹'으로 유명한 테마파크가 있어 젊은이들과 가족들의 웃음소리가 끊이지 않습니다. 바다 전망의 카페와 횟집들이 줄지어 있어 야간 데이트 코스로도 최적입니다.",
        address: "인천광역시 중구 월미문화로 36",
        hours: "테마파크 평일 10:00 - 22:00 / 주말 10:00 - 24:00",
        tips: "월미바다열차(모노레일)를 타고 월미도를 한 바퀴 돌며 인천 내항과 서해 바다의 경관을 높은 곳에서 감상해 보세요."
    },
    {
        id: "masian-beach",
        name: "영종도 마시안 해변",
        englishName: "Masian Beach, Yeongjongdo",
        category: "nature",
        coords: [37.4267, 126.4020],
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        imageFallback: "images/masian_beach.png",
        description: "끝없이 펼쳐지는 갯벌과 시원한 모래사장이 공존하는 독특한 해변입니다. 썰물 때는 광활한 갯벌 체험을 할 수 있고, 밀물 때는 시원한 서해 파도를 만날 수 있습니다. 특히 서해안 최고의 낙조 명소로 손꼽히며 주변에 바다 전망의 대형 베이커리 카페들이 많습니다.",
        address: "인천광역시 중구 마시란로 118",
        hours: "연중무휴",
        tips: "물때 시간표를 미리 확인하고 가세요. 썰물 때 넓게 열리는 갯벌에 붉은 노을이 반사되는 장관은 잊지 못할 추억을 선사합니다."
    },
    {
        id: "ganghwa-dolmen",
        name: "강화 고인돌 유적지",
        englishName: "Ganghwa Dolmen Site",
        category: "history",
        coords: [37.7801, 126.4398],
        image: "https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?auto=format&fit=crop&w=800&q=80",
        imageFallback: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
        description: "유네스코 세계문화유산으로 지정된 청동기시대의 대표적인 무덤 유적입니다. 교과서에 자주 등장하는 거대한 탁자식 고인돌을 직접 눈으로 볼 수 있으며, 바로 옆 강화역사박물관과 자연사박물관이 위치해 있어 자녀 교육을 겸한 힐링 여행에 최적입니다.",
        address: "인천광역시 강화군 하점면 고인돌블러길 17",
        hours: "09:00 - 18:00 (박물관 기준, 야외 유적지는 상시 관람)",
        tips: "강화 역사 루지 체형장과 함께 묶어 계획을 짜면 역사 학습과 스릴 넘치는 액티비티를 동시에 만끽할 수 있습니다."
    },
    {
        id: "muuido-hanagae",
        name: "무의도 하나개 해수욕장",
        englishName: "Hanagae Beach, Muuido",
        category: "nature",
        coords: [37.3879, 126.3860],
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        imageFallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "무의도에서 가장 큰 해수욕장으로, 고운 모래사장과 넓은 갯벌이 매력적입니다. 해상 탐방로가 설치되어 있어 기암괴석 옆으로 바다 위를 걷는 듯한 산책을 즐길 수 있습니다. 짚라인, 갯벌 체험, 드라마 세트장 등 다양한 즐길 거리가 가득합니다.",
        address: "인천광역시 중구 하나개로 141-13",
        hours: "연중무휴 (해상 탐방로는 기상 악화 시 통제)",
        tips: "무의대교 개통으로 차를 타고 편리하게 들어갈 수 있으나 주말에는 주차 정체가 심하므로 이른 오전에 방문하는 것을 권장합니다."
    },
    {
        id: "sinpo-market",
        name: "신포국제시장",
        englishName: "Sinpo International Market",
        category: "food-street",
        coords: [37.4721, 126.6267],
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80", // 시장/한국 푸드거리 이미지
        imageFallback: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
        description: "인천 개항 역사와 함께 태어난 전통시장으로, 글로벌 문화가 녹아있는 먹거리 천국입니다. 달콤하고 매콤한 소스로 줄 서서 먹는 '신포닭강정'의 본고장이며 산동만두, 공갈빵, 오색만두 등 인천만의 시그니처 길거리 푸드가 침샘을 자극합니다.",
        address: "인천광역시 중구 우현로49번길 11-5",
        hours: "10:00 - 21:30 (점포마다 정기휴무일 다름)",
        tips: "차이나타운, 개항장과 도보 10~15분 거리이므로, 오후 도보 탐방 후 저녁거리를 사거나 닭강정을 포장해 가기에 좋습니다."
    },
    {
        id: "sorae-pogu",
        name: "소래포구 종합어시장",
        englishName: "Sorae Pogu Fish Market",
        category: "food-street",
        coords: [37.4026, 126.7329],
        image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80", // 신선한 어시장/해산물 풍경 이미지
        imageFallback: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
        description: "수도권에서 생기 넘치는 포구의 모습을 느낄 수 있는 어시장입니다. 제철 대하, 꽃게, 횟감 등 신선한 해산물이 가득하며 어시장 위쪽 야외 테라스나 주변 식당에서 갓 뜬 회를 먹는 낭만이 있습니다. 인근의 소래습지생태공원과 연계하기 좋습니다.",
        address: "인천광역시 남동구 소래역로 12",
        hours: "07:00 - 01:00 (종합어시장 기준)",
        tips: "소래습지생태공원의 풍차를 배경으로 인생사진을 남기고, 저녁에 소래포구로 이동해 해산물 만찬을 즐기는 일정이 알찹니다."
    }
];

// 2. 대표 음식 데이터 (Food Database)
const foodData = [
    {
        name: "원조 짜장면",
        place: "차이나타운 짜장면 거리",
        description: "1883년 개항 후 청나라 부두 노동자들이 빠르고 저렴하게 먹던 음식에서 유래한 대한민국 국민 외식 1호! 하얀짜장, 옛날짜장 등 다양한 맛을 차이나타운에서 만날 수 있습니다.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80" // 중식 국수류
    },
    {
        name: "신포 닭강정",
        place: "신포국제시장",
        description: "바삭하게 튀겨낸 닭고기에 물엿, 청양고추, 고추기름으로 만든 매콤달콤한 소스를 가마솥에서 버무려 낸 인천의 시그니처 닭강정입니다. 식어도 바삭한 맛이 특징입니다.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80" // 치킨류
    },
    {
        name: "서해안 조개구이",
        place: "을왕리/마시안 해변 및 영종도 일대",
        description: "서해 청정 갯벌에서 잡아 올린 키조개, 가리비, 백합 등을 연탄불에 구워 먹는 영종도의 대표 별미입니다. 특히 낙조를 바라보며 먹는 칼국수와 조개구이는 필수 힐링 코스입니다.",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=600&q=80" // 구운 해산물/조개
    },
    {
        name: "세숫대야 냉면",
        place: "화평동 냉면골목",
        description: "큰 양푼 그릇에 엄청난 양의 냉면과 아삭한 열무김치를 듬뿍 얹어 주는 서민적이고 넉넉한 인심의 음식입니다. 매콤한 양념장과 시원한 동치미 육수가 더위를 단숨에 날려줍니다.",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80" // 한국식 냉면/국수
    }
];

// 3. 추천 코스 템플릿 데이터
const courseTemplates = {
    songdo: ["songdo-park", "masian-beach", "muuido-hanagae"],
    history: ["chinatown", "sinpo-market", "wolmido"],
    island: ["ganghwa-dolmen", "masian-beach", "sorae-pogu"]
};

// 4. 애플리케이션 상태 (State)
let currentTab = "overview";
let currentDay = "1";
let activeFilter = "all";
let searchKeyword = "";
let wishlist = []; // 북마크 기능용 (필요시 사용)

// 일자별 일정 상태 (Day 1, Day 2, Day 3)
let plannerState = {
    "1": [],
    "2": [],
    "3": []
};

// 5. DOM 요소 참조
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const mainHeader = document.getElementById("main-header");
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");
const attractionsGrid = document.getElementById("attractions-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");

// 플래너 DOM
const plannerTimeline = document.getElementById("planner-timeline");
const quickAddList = document.getElementById("quick-add-list");
const quickSearch = document.getElementById("quick-search");
const plannerDayButtons = document.querySelectorAll(".planner-day-btn");
const clearPlanBtn = document.getElementById("clear-plan-btn");
const exportPlanBtn = document.getElementById("export-plan-btn");

// 코스 템플릿 로드 버튼들
const btnLoadSongdo = document.getElementById("btn-load-songdo");
const btnLoadHistory = document.getElementById("btn-load-history");
const btnLoadIsland = document.getElementById("btn-load-island");

// 맛집 그리드 DOM
const foodGrid = document.getElementById("food-grid");

// 지도 사이드바 DOM
const mapDayButtons = document.querySelectorAll(".day-tab");
const mapRouteList = document.getElementById("map-route-list");

// 모달 DOM
const detailModal = document.getElementById("detail-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBodyContent = document.getElementById("modal-body-content");

// 날씨 위젯
const weatherTemp = document.getElementById("weather-temp");
const weatherStatus = document.getElementById("weather-status");

// Leaflet 지도 인스턴스 변수
let map = null;
let mapMarkers = {}; // 명소 ID별 마커 객체
let routePolyline = null; // 경로 선 객체

// 6. 초기화 함수
window.addEventListener("DOMContentLoaded", () => {
    // 로컬 스토리지 로드
    loadPlannerFromLocalStorage();
    
    // UI 컴포넌트 렌더링
    renderAttractions();
    renderQuickAddList();
    renderPlanner(currentDay);
    renderFoods();
    
    // 지도 초기화
    initMap();
    
    // 이벤트 리스너 등록
    setupEventListeners();
    
    // 실시간 날씨 모크 작동
    updateMockWeather();
    setInterval(updateMockWeather, 30000); // 30초마다 갱신
});

// 7. 네비게이션 & UI 스크롤 효과
window.addEventListener("scroll", () => {
    // 헤더 축소 효과
    if (window.scrollY > 50) {
        mainHeader.classList.add("scrolled");
    } else {
        mainHeader.classList.remove("scrolled");
    }
    
    // 스크롤 시 활성 탭 하이라이트
    let currentSection = "overview";
    const scrollPosition = window.scrollY + 150;
    
    // 헤더 섹션은 별도 스크롤 범위
    if (scrollPosition < 500) {
        currentSection = "overview";
    } else {
        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            const secHeight = sec.clientHeight;
            if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
                currentSection = sec.getAttribute("id");
            }
        });
    }
    
    // 스페셜: 스크롤 위치가 스마트 지도 영역에 걸치면 지도 강제 새로고침(Leaflet 크기 깨짐 방지)
    if (currentSection === "map-section" && map) {
        map.invalidateSize();
    }
    
    updateActiveNavLink(currentSection);
});

function updateActiveNavLink(targetId) {
    navLinks.forEach(link => {
        if (link.getAttribute("data-target") === targetId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// 8. 이벤트 리스너 설정
function setupEventListeners() {
    // 모바일 토글 메뉴
    mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = mobileToggle.querySelector("i");
        if (navMenu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });
    
    // 네비게이션 링크 클릭
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navMenu.classList.remove("active");
            mobileToggle.querySelector("i").className = "fa-solid fa-bars";
            
            const targetId = link.getAttribute("data-target");
            let targetOffset = 0;
            
            if (targetId !== "overview") {
                const targetSec = document.getElementById(targetId);
                targetOffset = targetSec.offsetTop - 80;
            }
            
            window.scrollTo({
                top: targetOffset,
                behavior: "smooth"
            });
            
            // 탭 상태 업데이트
            currentTab = targetId;
            updateActiveNavLink(targetId);
            
            // 지도가 탭 변경 등으로 깨질 수 있으므로 레이아웃 갱신
            if (targetId === "map-section" && map) {
                setTimeout(() => {
                    map.invalidateSize();
                }, 200);
            }
        });
    });
    
    // 검색 입력 이벤트
    searchInput.addEventListener("input", (e) => {
        searchKeyword = e.target.value;
        renderAttractions(activeFilter, searchKeyword);
    });
    
    // 카테고리 필터 버튼 이벤트
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            renderAttractions(activeFilter, searchKeyword);
        });
    });
    
    // 플래너 퀵 애드 검색
    quickSearch.addEventListener("input", (e) => {
        const kw = e.target.value.toLowerCase();
        renderQuickAddList(kw);
    });
    
    // 플래너 일자 전환 탭
    plannerDayButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            plannerDayButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentDay = btn.getAttribute("data-day");
            renderPlanner(currentDay);
            
            // 지도 사이드바 탭도 동기화
            syncMapDayTab(currentDay);
        });
    });
    
    // 지도 사이드바 일자 전환 탭
    mapDayButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            mapDayButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentDay = btn.getAttribute("data-day");
            renderPlanner(currentDay);
            
            // 플래너 메인 탭 동기화
            syncPlannerDayTab(currentDay);
        });
    });
    
    // 전체 지우기 버튼
    clearPlanBtn.addEventListener("click", () => {
        if (confirm(`Day ${currentDay} 일정을 정말로 모두 비우시겠습니까?`)) {
            plannerState[currentDay] = [];
            savePlannerToLocalStorage();
            renderPlanner(currentDay);
            alert("일정이 초기화되었습니다.");
        }
    });
    
    // 추천 코스 로드 버튼 리스너
    btnLoadSongdo.addEventListener("click", () => loadCourseTemplate("songdo"));
    btnLoadHistory.addEventListener("click", () => loadCourseTemplate("history"));
    btnLoadIsland.addEventListener("click", () => loadCourseTemplate("island"));
    
    // 인쇄/PDF 저장 버튼 리스너
    exportPlanBtn.addEventListener("click", () => {
        window.print();
    });
    
    // 모달 닫기
    modalCloseBtn.addEventListener("click", closeModal);
    detailModal.addEventListener("click", (e) => {
        if (e.target === detailModal) {
            closeModal();
        }
    });
}

function syncMapDayTab(day) {
    mapDayButtons.forEach(btn => {
        if (btn.getAttribute("data-day") === day) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function syncPlannerDayTab(day) {
    plannerDayButtons.forEach(btn => {
        if (btn.getAttribute("data-day") === day) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// 9. 명소 카드 그리드 렌더링
function renderAttractions(filter = "all", search = "") {
    attractionsGrid.innerHTML = "";
    
    const filtered = attractionsData.filter(item => {
        const matchesFilter = filter === "all" || item.category === filter;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                              item.englishName.toLowerCase().includes(search.toLowerCase()) ||
                              item.description.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    
    if (filtered.length === 0) {
        attractionsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
                <p>검색 결과가 없습니다. 다른 검색어를 입력해 보세요.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "attraction-card";
        
        // 카테고리 한국어 매핑
        let catKo = "관광";
        if (item.category === "modern") catKo = "스마트/도심";
        else if (item.category === "history") catKo = "역사/문화";
        else if (item.category === "nature") catKo = "자연/섬";
        else if (item.category === "food-street") catKo = "음식/거리";
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.image}" onerror="this.src='${item.imageFallback}'" alt="${item.name}">
                <div class="card-overlay">
                    <span class="category-tag">${catKo}</span>
                </div>
            </div>
            <div class="card-body">
                <h3>${item.name}</h3>
                <p class="card-desc">${item.description}</p>
                <div class="card-meta">
                    <span class="loc-info"><i class="fa-solid fa-location-dot"></i> 인천광역시</span>
                    <div class="card-actions">
                        <button class="icon-btn btn-view-detail" data-id="${item.id}" title="상세 정보"><i class="fa-solid fa-circle-info"></i></button>
                        <button class="icon-btn btn-add-plan" data-id="${item.id}" title="플래너 추가" style="background: var(--accent-color); color: var(--primary-color); border-color: var(--accent-color);"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `;
        
        // 카드 내 버튼 이벤트 바인딩
        card.querySelector(".btn-view-detail").addEventListener("click", () => openDetailModal(item.id));
        card.querySelector(".btn-add-plan").addEventListener("click", () => {
            addToPlan(item.id, currentDay);
        });
        
        attractionsGrid.appendChild(card);
    });
}

// 10. 맛집 렌더링
function renderFoods() {
    foodGrid.innerHTML = "";
    foodData.forEach(food => {
        const card = document.createElement("div");
        card.className = "food-card";
        card.innerHTML = `
            <div class="food-img-wrapper">
                <img src="${food.image}" alt="${food.name}">
            </div>
            <div class="food-body">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <div class="food-meta">
                    <i class="fa-solid fa-store"></i> 추천위치: ${food.place}
                </div>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

// 11. 플래너 퀵 애드 목록 렌더링
function renderQuickAddList(search = "") {
    quickAddList.innerHTML = "";
    
    const filtered = attractionsData.filter(item => {
        return item.name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search);
    });
    
    filtered.forEach(item => {
        const div = document.createElement("div");
        div.className = "quick-add-item";
        
        let catKo = "명소";
        if (item.category === "modern") catKo = "스마트";
        else if (item.category === "history") catKo = "역사";
        else if (item.category === "nature") catKo = "자연";
        else if (item.category === "food-street") catKo = "음식";
        
        div.innerHTML = `
            <img class="quick-add-img" src="${item.image}" onerror="this.src='${item.imageFallback}'" alt="${item.name}">
            <div class="quick-add-info">
                <div class="quick-add-name">${item.name}</div>
                <div class="quick-add-cat">${catKo}</div>
            </div>
            <button class="quick-add-btn" data-id="${item.id}" title="일정에 추가"><i class="fa-solid fa-plus"></i></button>
        `;
        
        div.querySelector(".quick-add-btn").addEventListener("click", () => {
            addToPlan(item.id, currentDay);
        });
        
        quickAddList.appendChild(div);
    });
}

// 12. 플래너 타임라인 렌더링 (핵심 엔진)
function renderPlanner(day) {
    plannerTimeline.innerHTML = "";
    const items = plannerState[day];
    
    // 지도 사이드바 갱신도 함께 수행
    renderMapSidebarRoute(day);
    
    // 지도의 동선 폴리라인 다시 그리기
    drawRouteOnMap(day);
    
    if (!items || items.length === 0) {
        plannerTimeline.innerHTML = `
            <div class="empty-timeline">
                <i class="fa-solid fa-hourglass-empty"></i>
                <p>일정이 비어 있습니다.<br>오른쪽 목록의 [+] 버튼 또는 추천 명소 카드의 추가 버튼을 클릭해 일정을 채워보세요!</p>
            </div>
        `;
        return;
    }
    
    items.forEach((item, index) => {
        const pItem = document.createElement("div");
        pItem.className = "planner-item";
        pItem.innerHTML = `
            <div class="planner-item-num">${index + 1}</div>
            <img class="planner-item-img" src="${item.image}" onerror="this.src='${item.imageFallback}'" alt="${item.name}">
            <div class="planner-item-details">
                <h4>${item.name}</h4>
                <p><i class="fa-solid fa-location-dot"></i> ${item.address}</p>
            </div>
            <div class="planner-item-order">
                <button class="order-btn btn-up" data-index="${index}" title="위로"><i class="fa-solid fa-chevron-up"></i></button>
                <button class="order-btn btn-down" data-index="${index}" title="아래로"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div class="planner-item-delete" data-index="${index}" title="삭제"><i class="fa-solid fa-trash-can"></i></div>
        `;
        
        // 순서 변경 핸들러
        pItem.querySelector(".btn-up").addEventListener("click", () => moveOrder(day, index, -1));
        pItem.querySelector(".btn-down").addEventListener("click", () => moveOrder(day, index, 1));
        
        // 삭제 핸들러
        pItem.querySelector(".planner-item-delete").addEventListener("click", () => removeFromPlan(day, index));
        
        plannerTimeline.appendChild(pItem);
    });
}

// 13. 지도 사이드바 루트 렌더링
function renderMapSidebarRoute(day) {
    mapRouteList.innerHTML = "";
    const items = plannerState[day];
    
    if (!items || items.length === 0) {
        mapRouteList.innerHTML = `
            <div class="route-placeholder">
                <i class="fa-solid fa-route"></i>
                <p>일정 플래너에서 관광지를 추가하면<br>실시간 동선 경로가 지도에 표시됩니다.</p>
            </div>
        `;
        return;
    }
    
    items.forEach((item, index) => {
        const rItem = document.createElement("div");
        rItem.className = "route-item";
        
        let catKo = "명소";
        if (item.category === "modern") catKo = "도심/스마트";
        else if (item.category === "history") catKo = "역사/문화";
        else if (item.category === "nature") catKo = "자연/섬";
        else if (item.category === "food-street") catKo = "음식/거리";
        
        rItem.innerHTML = `
            <div class="route-num">${index + 1}</div>
            <div class="route-info">
                <div class="route-name">${item.name}</div>
                <div class="route-cat">${catKo}</div>
            </div>
        `;
        
        // 클릭 시 해당 마커로 지도 이동 및 팝업
        rItem.addEventListener("click", () => {
            if (map && mapMarkers[item.id]) {
                map.setView(item.coords, 13);
                mapMarkers[item.id].openPopup();
            }
        });
        
        mapRouteList.appendChild(rItem);
    });
}

// 14. 플래너 엔진 동작 함수
function addToPlan(attractionId, day) {
    const attraction = attractionsData.find(a => a.id === attractionId);
    if (!attraction) return;
    
    // 이미 추가되었는지 체크 (중복 추가 허용할 수도 있지만 UX 방지 목적)
    const exists = plannerState[day].some(item => item.id === attractionId);
    if (exists) {
        alert("이 관광지는 이미 해당 일에 계획되어 있습니다.");
        return;
    }
    
    // 상태 복사 추가
    plannerState[day].push({...attraction});
    savePlannerToLocalStorage();
    renderPlanner(day);
    
    // 피드백 알림 (애니메이션 유도)
    showToast(`'${attraction.name}'가 Day ${day} 일정에 추가되었습니다.`);
}

function removeFromPlan(day, index) {
    plannerState[day].splice(index, 1);
    savePlannerToLocalStorage();
    renderPlanner(day);
}

function moveOrder(day, index, direction) {
    const targetIndex = index + direction;
    const items = plannerState[day];
    
    if (targetIndex < 0 || targetIndex >= items.length) return; // 범위를 벗어나면 스킵
    
    // 스왑 연산
    const temp = items[index];
    items[index] = items[targetIndex];
    items[targetIndex] = temp;
    
    savePlannerToLocalStorage();
    renderPlanner(day);
}

// 로드 템플릿
function loadCourseTemplate(courseName) {
    const templateIds = courseTemplates[courseName];
    if (!templateIds) return;
    
    if (confirm(`Day 1 일정을 이 추천 코스로 덮어쓰시겠습니까? (기존 Day 1 일정은 삭제됩니다)`)) {
        plannerState["1"] = templateIds.map(id => {
            const attr = attractionsData.find(a => a.id === id);
            return {...attr};
        });
        
        savePlannerToLocalStorage();
        currentDay = "1";
        syncPlannerDayTab("1");
        syncMapDayTab("1");
        renderPlanner("1");
        
        // 플래너 영역으로 자동 스크롤
        window.scrollTo({
            top: document.getElementById("planner").offsetTop - 80,
            behavior: "smooth"
        });
        
        alert("추천 코스가 성공적으로 탑재되었습니다. 지도를 확인하세요!");
    }
}

// 15. 로컬스토리지 핸들링
function savePlannerToLocalStorage() {
    localStorage.setItem("incheonOn_planner", JSON.stringify(plannerState));
}

function loadPlannerFromLocalStorage() {
    const saved = localStorage.getItem("incheonOn_planner");
    if (saved) {
        try {
            plannerState = JSON.parse(saved);
        } catch (e) {
            console.error("로컬스토리지 데이터 손상:", e);
        }
    }
}

// 16. 스마트 지도 (Leaflet.js Map) 제어
function initMap() {
    // 1. 지도 초기 레이아웃 생성 (인천 시청 부근 기본 앵커링)
    const incheonCenter = [37.4563, 126.5402];
    map = L.map('map', {
        center: incheonCenter,
        zoom: 10,
        zoomControl: true
    });
    
    // 2. 프리미엄 지도 타일 스킨 (CartoDB Positron - 연한 그레이 스킨으로 네이비 UI에 최적으로 어우러짐)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    // 3. 지도에 모든 명소 마커 생성
    attractionsData.forEach(item => {
        // 커스텀 마커 빌딩 (아이콘 디자인)
        let markerColor = "#00b4d8"; // 기본
        if (item.category === "modern") markerColor = "#64ffda";
        else if (item.category === "history") markerColor = "#f59e0b";
        else if (item.category === "nature") markerColor = "#10b981";
        else if (item.category === "food-street") markerColor = "#ef4444";
        
        const customIcon = L.divIcon({
            html: `<div style="background-color: ${markerColor}; width: 14px; height: 14px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 8px rgba(0,0,0,0.5);"></div>`,
            className: 'custom-map-icon',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
        
        const marker = L.marker(item.coords, { icon: customIcon }).addTo(map);
        
        // 팝업 내용 주입
        const popupContent = `
            <div style="font-family: 'Noto Sans KR', sans-serif; padding: 5px; max-width: 200px;">
                <h4 style="margin: 0 0 5px; font-weight: 700; color: #0f172a;">${item.name}</h4>
                <p style="margin: 0 0 10px; font-size: 11px; color: #64748b; line-height: 1.4;">${item.description.substring(0, 50)}...</p>
                <button onclick="window.mapAddAction('${item.id}')" style="background-color: #0a192f; color: #64ffda; border: none; padding: 4px 8px; font-size: 10px; border-radius: 3px; cursor: pointer; width: 100%; font-weight: 600;">+ Day ${currentDay} 플래너 추가</button>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        mapMarkers[item.id] = marker;
    });
    
    // 지도 팝업 내부 버튼 작동을 위한 전역 바인딩
    window.mapAddAction = (id) => {
        addToPlan(id, currentDay);
        if (mapMarkers[id]) mapMarkers[id].closePopup();
    };
    
    // 초기 동선 렌더링
    drawRouteOnMap(currentDay);
}

// 지도 노선 경로 그리기
function drawRouteOnMap(day) {
    const items = plannerState[day];
    
    // 1. 기존 폴리라인 제거
    if (routePolyline) {
        map.removeLayer(routePolyline);
        routePolyline = null;
    }
    
    if (!items || items.length < 2) return; // 경로를 그릴 관광지가 2개 이상일 때만 그림
    
    // 2. 위경도 리스트 추출
    const pathCoords = items.map(item => item.coords);
    
    // 3. 아름다운 그라데이션 컬러 라인 빌드
    routePolyline = L.polyline(pathCoords, {
        color: '#64ffda',
        weight: 4,
        opacity: 0.8,
        dashArray: '8, 8',
        lineJoin: 'round'
    }).addTo(map);
    
    // 4. 경로가 다 보이도록 뷰 피팅
    map.fitBounds(routePolyline.getBounds(), { padding: [50, 50] });
}

// 17. 모달 팝업 제어
function openDetailModal(id) {
    const item = attractionsData.find(a => a.id === id);
    if (!item) return;
    
    let catKo = "관광";
    if (item.category === "modern") catKo = "스마트/도심";
    else if (item.category === "history") catKo = "역사/문화";
    else if (item.category === "nature") catKo = "자연/섬";
    else if (item.category === "food-street") catKo = "음식/거리";
    
    modalBodyContent.innerHTML = `
        <div class="modal-header-img">
            <img src="${item.image}" onerror="this.src='${item.imageFallback}'" alt="${item.name}">
        </div>
        <div class="modal-detail-body">
            <h3 class="modal-detail-title">${item.name}</h3>
            <span class="modal-detail-cat">${catKo} | ${item.englishName}</span>
            <p class="modal-detail-desc">${item.description}</p>
            
            <div class="modal-info-list">
                <div class="info-row">
                    <div class="info-label"><i class="fa-solid fa-map-pin"></i> 주소</div>
                    <div class="info-value">${item.address}</div>
                </div>
                <div class="info-row">
                    <div class="info-label"><i class="fa-solid fa-clock"></i> 운영시간</div>
                    <div class="info-value">${item.hours}</div>
                </div>
                <div class="info-row">
                    <div class="info-label"><i class="fa-solid fa-lightbulb"></i> 꿀팁</div>
                    <div class="info-value">${item.tips}</div>
                </div>
            </div>
            
            <div class="modal-footer-actions">
                <button class="btn btn-outline" onclick="closeModal()">닫기</button>
                <button class="btn btn-primary" onclick="window.modalAddAction('${item.id}')"><i class="fa-solid fa-calendar-plus"></i> 플래너 추가</button>
            </div>
        </div>
    `;
    
    // 모달 추가 액션 바인딩
    window.modalAddAction = (targetId) => {
        addToPlan(targetId, currentDay);
        closeModal();
    };
    
    detailModal.classList.add("active");
    document.body.style.overflow = "hidden"; // 배경 스크롤 방지
}

function closeModal() {
    detailModal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// 18. 기타 토스트 피드백 / 모크 유틸리티
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "glass-effect";
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.zIndex = "3000";
    toast.style.padding = "16px 24px";
    toast.style.borderRadius = "8px";
    toast.style.border = "1px solid var(--accent-color)";
    toast.style.color = "var(--white)";
    toast.style.fontSize = "0.9rem";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 8px 30px rgba(0,0,0,0.5)";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-color); margin-right: 8px;"></i> ${message}`;
    document.body.appendChild(toast);
    
    // 애니메이션 트리거
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 10);
    
    // 3초 후 삭제
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// 날씨 데이터 갱신 모크 (실시간 척도 유도)
function updateMockWeather() {
    const minTemp = 18;
    const maxTemp = 26;
    const randomTemp = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
    
    const statuses = [
        { label: "맑음", icon: "fa-cloud-sun" },
        { label: "쾌청", icon: "fa-sun" },
        { label: "구름 조금", icon: "fa-cloud-sun-rain" }
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    weatherTemp.textContent = `${randomTemp}°C`;
    weatherStatus.innerHTML = `<i class="fa-solid ${randomStatus.icon}"></i> ${randomStatus.label} (실시간)`;
}
