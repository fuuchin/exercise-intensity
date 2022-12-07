'use strict';
const beforeHeart = document.getElementById('before-input');
const afterHeart = document.getElementById('after-input');
const sportResultArea = document.getElementById('sport-result-area');

beforeHeart.oninput = () => {
  if(beforeHeart.value !== '') {
    if(afterHeart.value !== '') {
      sportResultArea.style.display = 'block';
      sportResultArea.innerHTML = (sportClac(beforeHeart.value, afterHeart.value) ? sportClac(beforeHeart.value, afterHeart.value) : 0) + '%';
    } else {
      sportResultArea.style.display = 'none';
    }
  } else {
    sportResultArea.style.display = 'none';
  }
}

afterHeart.oninput = () => {
  if(beforeHeart.value !== '') {
    if(afterHeart.value !== '') {
      sportResultArea.style.display = 'block';
      sportResultArea.innerHTML = (sportClac(beforeHeart.value, afterHeart.value) ? sportClac(beforeHeart.value, afterHeart.value) : 0) + '%';
    } else {
      sportResultArea.style.display = 'none';
    }
  } else {
    sportResultArea.style.display = 'none';
  }
}

function sportClac(before, after) {
  return Math.round((after - before) / (207 - before) * 1000) / 10;
}

const mi1 = document.getElementById('m-input-1');
const si1 = document.getElementById('s-input-1');
const mark = document.getElementById('mark');
const mi2 = document.getElementById('m-input-2');
const si2 = document.getElementById('s-input-2');
const timeResultArea = document.getElementById('time-result-area');

mi1.oninput = () => {
  if(mark.value === 'p') {
    timeResultArea.innerHTML = timePlus(mi1.value, si1.value, mi2.value, si2.value);
  } else {
    timeResultArea.innerHTML = timeMinus(mi1.value, si1.value, mi2.value, si2.value);
  }
}

si1.oninput = () => {
  if(mark.value === 'p') {
    timeResultArea.innerHTML = timePlus(mi1.value, si1.value, mi2.value, si2.value);
  } else {
    timeResultArea.innerHTML = timeMinus(mi1.value, si1.value, mi2.value, si2.value);
  }
}

mi2.oninput = () => {
  if(mark.value === 'p') {
    timeResultArea.innerHTML = timePlus(mi1.value, si1.value, mi2.value, si2.value);
  } else {
    timeResultArea.innerHTML = timeMinus(mi1.value, si1.value, mi2.value, si2.value);
  }
}

si2.oninput = () => {
  if(mark.value === 'p') {
    timeResultArea.innerHTML = timePlus(mi1.value, si1.value, mi2.value, si2.value);
  } else {
    timeResultArea.innerHTML = timeMinus(mi1.value, si1.value, mi2.value, si2.value);
  }
}

mark.onchange = () => {
  if(mark.value === 'p') {
    timeResultArea.innerHTML = timePlus(mi1.value, si1.value, mi2.value, si2.value);
  } else {
    timeResultArea.innerHTML = timeMinus(mi1.value, si1.value, mi2.value, si2.value);
  }
}

function timePlus(m1, s1, m2, s2) {
  m1 = m1 ? parseInt(m1) : 0;
  s1 = s1 ? parseInt(s1) : 0;
  m2 = m2 ? parseInt(m2) : 0;
  s2 = s2 ? parseInt(s2) : 0;
  let seconds = m1 * 60 + s1 + m2 * 60 + s2;
  return Math.floor(seconds / 60) + '分' + seconds % 60 + '秒';
}

function timeMinus(m1, s1, m2, s2) {
  m1 = m1 ? parseInt(m1) : 0;
  s1 = s1 ? parseInt(s1) : 0;
  m2 = m2 ? parseInt(m2) : 0;
  s2 = s2 ? parseInt(s2) : 0;
  let seconds = (m1 * 60 + s1) - (m2 * 60 + s2);
  return Math.floor(seconds / 60) + '分' + seconds % 60 + '秒';
}