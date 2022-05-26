const quotes = [{
    quote: "지금 적극적으로 실행되는 괜찮은 계획이 다음주의 완벽한 계획보다 낫다.",
    name: "조지 S. 패튼"
}, {
    quote: "제 갈 길을 아는 사람에게 세상은 길을 비켜준다.",
    name: "찰스 킹스리"
}, {
    quote: "아무 것도 하지 않으면 아무 일도 일어나지 않는다.",
    name: "기시미 이치로"
}, {
    quote: "논쟁을 피하라. 논쟁이 끝날 때, 논쟁을 벌이던 사람 중 열에 아홉은 자신이 절대 옳다는 확신을 더욱 굳힌 상태가 된다.",
    name: "카네기"  
}, {
    quote: "당신은 옳을 수 있다. 당신이 주장을 펼치는 동안은 정말 옳을 수 있다. 하지만 다른 사람의 마음을 바꾸는 문제라면 다인의 옳고 그름은 아무 소용이 없다.",
    name: "카네기"  
}, {
    quote: "한 시간에는 일 분이 육십 개가 있다. 하루에는 무려 천 개가 넘게 있다. 절대 잊지 말아라. 너는 무엇이든 할 수 있다는 사실을.",
    name: "괴테"  
}, {
    quote: "타인을 거울 삼으면 자기 모습이 보인다.",
    name: "미상"  
}, {
    quote: "해결 방법은 간단합니다. 지금 하는 일을 더 재미있게 하는 겁니다.",
    name: "미상"  
}, {
    quote: "세상 모든 일들은 자신이 무엇을 생각하느냐에 따라서 일어난다.",
    name: "헨리 워드 비쳐"  
}, {
    quote: "실패를 해서 배운 것이 있다면 이또한 성공이다.",
    name: "말콤 포보스"  
}

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.name;