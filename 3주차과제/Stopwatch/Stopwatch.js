// 접근하고 싶은 클래스인 Stopwatch를 파라미터로 지정
var time=document.getElementsByClassName("Stopwatch")[0];

// 초, 분, 시간 : 0으로 초기화
var s=0, m=0, h=0; 

// 분이 증가했는지 시간이 증가했는지 확인하는 용도로 사용할 변수 : 0으로 초기화
var m_count=0;
var h_count=0;
var timer;
var isRunning = false; // 타이머 실행 여부를 확인하는 플래그

// Start 함수 : 시작 버튼 클릭 시 작동 -> 타이머 함수 작동
function Start() {
    if (isRunning) return; // 이미 실행 중이면 중복 실행 방지
    isRunning = true;
    // setInterval 함수 : 첫 번째 매개변수로 콜백함수, 두 번째 매개변수로 딜레이 시간을 받음
    // 밀리초 단위이기 때문에 1000 밀리초가 지나면 다시 스타트 함수를 호출하도록 선언
    // 재귀적으로 지속적 반복
    timer=setInterval(Timer, 1000); // 매초 Timer 실행
}

// Stop 함수 : 멈춤 버튼 클릭 시 작동 -> 타이머 함수 멈춤
function Stop() {
    // clearInterval을 이용하여 setInterval 해제
    clearInterval(timer);
    isRunning = false; // 타이머가 멈추면 실행 상태 해제
}

// Reset 함수 : 초기화 버튼 클릭 시 작동
function Reset() {
    isRunning = false; // 타이머가 초기화되면 실행 상태 해제
    s=0; m=0; h=0;
    m_count=0;
    h_count=0;
    time.innerHTML="00:00:00";
    clearInterval(timer);
}

// 타이머 함수
function Timer() {
    s++; // 타이머 함수 호출 시 우선 초가 1 증가

    if(s>=60) { // 초가 60이 될 경우 분이 1 증가
        s=0; // s가 60이 될 경우 0으로 초기화
        m_count=0; // 분이 증가했는지 알려주는 변수를 0으로 초기화
        m++; // 분이 1 증가
    }

    if(m>=60) { // 분이 60이 될 경우 시가 1 증가
        m=0; // m이 60이 될 경우 0으로 초기화
        h_count=0; // 시가 증가했는지 알려주는 변수를 0으로 초기화
        h++; // 시가 1 증가
    }

    // 시, 분, 초가 한 자리 수일 경우 앞에 0을 붙여주어야 출력 양식에 맞게 출력 가능
    if(s<10) {
        s='0' +s;
    }

    /*
    분과 초의 경우 한 가지 조건이 더 필요
    만약 s가 60이 되어 m이 1이 되었다고 가정해보자.
    m은 계속 10 미만이라는 조건을 만족하기 때문에 10 미만인 경우에 0을 덧붙이는 코드로 작성할 경우
    m값은 s가 증가할 때마다 01, 001, 0001처럼 0이 계속 증가
    따라서 m이 10 미만이면서 분이 증가했을 때 해당 문자열 앞에 0을 붙여주는 조건문 필요
    */
    if(m<10 && m_count == 0) {
        m='0'+ m;
        m_count=1; // 분이 증가하지 않았을 때는 해당 조건문이 성립하지 않도록 지정
    }

    if(h<10 && h_count == 0) {
        h='0'+ h;
        h_count=1; // 시가 증가하지 않았을 때는 해당 조건문이 성립하지 않도록 지정
    }

    // 타임에 대해 html 값이 hms로 원하는 양식에 맞게 출력되도록 지정
    time.innerHTML=h+":" + m+":" + s;
}