document.addEventListener("DOMContentLoaded", () => {
    const candle1 = document.getElementById("candle1");
    const candle2 = document.getElementById("candle2");
    const wishButton = document.getElementById("wishButton");
    const wishSection = document.getElementById("wishSection");
    const submitWish = document.getElementById("submitWish");
    const fortuneSection = document.getElementById("fortuneSection");
    const fortuneResult = document.getElementById("fortuneResult");

    // 촛불 클릭 이벤트
    [candle1, candle2].forEach((candle) => {
        candle.addEventListener("click", () => {
            candle.classList.toggle("lit");
        });
    });

    // 소원 빌기 버튼 클릭
    wishButton.addEventListener("click", () => {
        wishSection.classList.remove("hidden");
        wishButton.style.display = "none";
    });

    // 소원 제출
    submitWish.addEventListener("click", () => {
        const wishInput = document.getElementById("wishInput").value.trim();

        if (!wishInput) {
            alert("소원을 입력해주세요!");
            return;
        }

        const fortunes = [
            "대길! 최고의 날이 될 것입니다.",
            "소길! 평온하고 안정적인 하루입니다.",
            "조심! 새로운 선택을 유념하세요.",
            "기대! 희망찬 변화가 다가옵니다."
        ];

        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneResult.textContent = randomFortune;

        fortuneSection.classList.remove("hidden");
        wishSection.classList.add("hidden");
    });
});
