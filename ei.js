@import "compass";
*, *::after, *::before{
  @include box-sizing(border-box);
}

html{
  background: #000;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
head{
  display: block;
  position: relative;
  width: 200px;
  margin: 10% auto 0;
  @include animation(shvr .2s infinite);
  
  &::after{
  content: '';
  width: 20px;
  height: 20px;
  background: #000;
  position: absolute;
  top: 30px;
  left: 25px;
  @include border-radius(50%);
  @include box-shadow(125px 0 0 #000);
  @include animation(eye 2.5s infinite)
  
}
}
meta{
  position: relative;
  display: inline-block;
  background: #fff;
  width: 75px;
  height: 80px;
  @include border-radius(50% 50% 50% 50% / 45px 45px 45% 45%); 
  @include rotate(45deg);
  
  &::after{
    content: '';
    position: absolute;
    border-bottom: 2px solid #fff;
    width: 70px;
    height: 50px;
    left:0px;
    bottom: -10px;
    @include border-radius(50%);
  }
  
  &::before{
    bottom: auto;
    top: -100px;
    @include rotate(45deg);
    left: 0;
  }
  
 &:nth-of-type(2){
    float: right;
    @include rotate(-45deg);
    &::after{ left:5px; }
  }
  
  &:nth-of-type(3){
    display: none;
  }
  
}

body{
  margin-top: 100px;
  text-align: center;
  color: #fff;
  &::before{
    content: '404';
    font-size: 80px;
    font-weight: 800;
    display: block;
    margin-bottom: 10px;
  }
  &::after{
    content: 'Got lost? How.....?  why.....?  Ahhhh....';
    color: #1EA7AB;
    width: 120px;
    font-size: 30px;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    @include animation(text-show 2s infinite steps(3));
  }
}

@include keyframes(eye){
  0% ,30% , 55%, 90% , 100%{ @include translate(0 , 0) }
  10%, 25%{ @include translate( 0 , 20px) }
  65%{ @include translate(-20px, 0) }
  80%{ @include translate(20px, 0) }
}

@include keyframes(shvr){
  0%{ @include translate(1px) }
  50%{ @include translate(0) }
  100%{ @include translate(-1px) }
}

@include keyframes(text-show){
to{text-indent: -373px;}
}
