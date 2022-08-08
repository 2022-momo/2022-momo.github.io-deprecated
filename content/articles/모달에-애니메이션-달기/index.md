---
title: '[React] 모달에 애니메이션 달기'
description: '모달에 애니메이션 달기'
date: '2022-08-08'
banner:
  alt: '[React] 모달에 애니메이션 달기'
categories:
  - 'React'
  - 'Modal'
keywords:
  - 'React'
  - 'Modal'
  - 'Animation'
---

> 해당 포스트는 모모팀 크루 하리가 작성했습니다.

<br />

현재 저희 팀에서는 로그인, 회원가입, 회원정보 수정 등 다양한 곳에서 모달을 사용하고 있습니다.

이렇게 다양하게 사용하는 만큼 모달 자체에 애니메이션을 달아주는 편이 경험 측면에서 더 좋을 것이라 판단하여 애니메이션을 달아주게 되었습니다.

여기에서는 모달에 여닫는 애니메이션을 어떻게 구현하였는지에 대해 소개해보려 합니다.

<br />

우선 애니메이션이 어떻게 적용되었는지부터 볼까요?

<center>
  <img src="https://user-images.githubusercontent.com/57928612/183415666-33e8aa61-5424-4de9-a93c-67331055ee32.gif" alt="모달" width="400" />
</center>

<br />

_코드에 대한 설명 전 저희 모모 프로젝트에서는 emotion, keyframe, animation, setTimeout, react state를 사용했음을 알립니다._

<br />

저는 우선 keyframe을 정의하여 모달에 애니메이션을 적용시켜주었습니다.

<center>
  <img src="https://user-images.githubusercontent.com/57928612/183422015-4662d25d-3b12-491d-a3a8-9842d6927172.png" alt="code" width="400" />
</center>

**Simple Is The Best.**

간단하게 scale에 변화를 주어 모달이 커지고 작아질 수 있도록 만들었습니다.
원하는 애니메이션이 있다면 해당 애니메이션을 적용해주어도 좋겠죠?

<br />

그리고 그렇게 만든 애니메이션을 모달에 적용시켜주었습니다.

<center>
  <img src="https://user-images.githubusercontent.com/57928612/183423179-625031ce-5a5c-4167-ae1e-630803dc5165.png" alt="code" width="600" />
</center>

저는 좀 더 유연하게 모달 애니메이션을 보여주고자 `animationTime`을 props로 전달받도록 만들었습니다.
이제 이 props를 Modal 컴포넌트에서 전달해주기만 하면 모달을 여는 애니메이션은 잘 보여질겁니다!

<center>
  <img src="https://user-images.githubusercontent.com/57928612/183427777-cbcd86eb-e6e8-4163-b59b-8f6dad0af547.png" alt="code" width="500" />
</center>

<br />

> 흠 근데 닫는 애니메이션도 보여준다고 하지 않았나요?

맞습니다. 저희에겐 닫는 애니메이션을 보여주는 과정이 필요합니다.

근데 보통 모달을 보여줄 때는 true/false로 제어를 하는 경우가 많습니다.
만약 '보여주지 않는다'라는 상태가 된다면 애니메이션이 보여지기 전에 컴포넌트가 사라지고 말죠.

그럼 우리가 애니메이션을 어떻게 하면 보여줄 수 있을까요?

그 방법은 쉽습니다.
컴포넌트가 사라지는 과정을 지연시키면 됩니다.
그리고 저는 그 방법으로 간단하게 `setTimeout`을 사용할겁니다.

<center>
  <img src="https://user-images.githubusercontent.com/57928612/183427967-9fcef4d3-e7dd-4013-97e7-42f280dbdf2e.png" alt="code" width="600" />
</center>

우선 `isClosing`이라는 상태를 모달 컴포넌트가 갖게 됩니다.
여기에서는 지금 모달이 닫히고 있는 상태인지의 여부를 알고 있을거예요.

`setOffModalWithAnimation`이라는 함수에서는 모달 애니메이션을 제어합니다.
실행됐을 경우 먼저 닫히고 있다고 알린 뒤 setTimeout으로 시간을 체크하여 시간이 경과되었을 경우 모달을 닫고 이제 모달이 닫혔다는 사실을 알립니다.

모달에서는 `isClosing`에 따라 클래스명을 줄지 말지를 결정하는 거예요.

생각보다 모달에 애니메이션을 부여하는 과정은 간단했습니다.

<br />

그럼 마지막으로 저희가 실제 모달에 적용한 코드입니다.

<center>
  <img src="https://user-images.githubusercontent.com/57928612/183428291-cd8ae618-b03f-4fca-af2e-172890bfa16d.png" alt="code" width="560" />
</center>

Dimmer 즉 모달의 바깥을 클릭했을 때 `setOffModalWithAnimation`이 실행되는 부분이 추가되었습니다.
물론 그러면서 모달을 클릭했을 때는 `setOffModalWithAnimation`이 실행되는 것을 막기 위해 버블링을 막는 함수를 만들어 넣어주었고요!

이렇게 하면 간단하게 모달을 여닫는 애니메이션을 적용할 수 있습니다.
