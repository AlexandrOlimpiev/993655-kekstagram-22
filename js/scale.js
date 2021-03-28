
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;
const RADIX = 10;

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleUpButton = document.querySelector('.scale__control--bigger');

scaleInput.value = `${SCALE_DEFAULT}%`;

const rescale = (sign) => {
  let scaleValue = parseInt(scaleInput.value, RADIX);
  scaleValue += SCALE_STEP * sign;
  if (scaleValue >= SCALE_MIN && scaleValue <= SCALE_MAX) {
    scaleInput.value = `${scaleValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

scaleDownButton.addEventListener('click', () => {
  rescale(-1);
});

scaleUpButton.addEventListener('click', () => {
  rescale(1);
});


