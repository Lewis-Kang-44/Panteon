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
            "대길! 오늘은 운이 좋습니다.",
            "소길! 평온한 하루를 보낼 것입니다.",
            "조심! 오늘은 선택에 주의하세요.",
            "희망! 새로운 기회가 다가옵니다."
        ];

        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneResult.textContent = randomFortune;

        fortuneSection.classList.remove("hidden");
        wishSection.classList.add("hidden");
    });
});
