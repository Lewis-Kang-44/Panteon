// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gif1 = document.getElementById("gif1");
    const gif2 = document.getElementById("gif2");
    const wishSection = document.getElementById("wishSection");
    const confirmationSection = document.getElementById("confirmationSection");
    const fortuneSection = document.getElementById("fortuneSection");
    const wishInput = document.getElementById("wishInput");
    const wishButton = document.getElementById("wishButton");
    const checkFortuneButton = document.getElementById("checkFortuneButton");
    const fortuneResult = document.getElementById("fortuneResult");

    // 첫 번째 GIF 재생 후 두 번째 GIF로 전환
    gif1.classList.remove("hidden");
    const firstGifDuration = 24000; // 첫 번째 GIF 재생 시간 (5초)
    setTimeout(() => {
        gif1.classList.add("hidden");
        gif2.classList.remove("hidden");
    }, firstGifDuration);

    // 소원 빌고 신점받기 버튼 클릭
    wishButton.addEventListener("click", () => {
        const wish = wishInput.value.trim();
        if (!wish) {
            alert("소원을 적어주세요!");
            return;
        }
        wishSection.classList.add("hidden");
        confirmationSection.classList.remove("hidden");
    });

    // 신점 확인하기 버튼 클릭
    checkFortuneButton.addEventListener("click", () => {
        const fortunes = [
            "대길! 오늘은 최고의 날입니다.",
            "소길! 평온한 하루를 보내세요.",
            "조심! 오늘은 중요한 결정을 미루세요.",
            "희망! 새로운 기회가 다가옵니다.",
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        confirmationSection.classList.add("hidden");
        fortuneSection.classList.remove("hidden");
        fortuneResult.textContent = randomFortune;
    });
});
