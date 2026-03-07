// ===== Friday Free Flow — Multi-step Form Logic =====

let fffCurrentStep = 1;

function fffUpdateProgress(step) {
  for (let i = 1; i <= 3; i++) {
    const pip = document.getElementById('pip-' + i);
    if (!pip) continue;
    if (i < step) { pip.className = 'fff-progress-pip done'; }
    else if (i === step) { pip.className = 'fff-progress-pip active'; }
    else { pip.className = 'fff-progress-pip'; }
  }
}

function fffRadio(el, group) {
  document.querySelectorAll('[name="' + group + '"]').forEach(function(r) {
    r.closest('.fff-radio-item').classList.remove('selected');
  });
  el.classList.add('selected');
  el.querySelector('input').checked = true;
}

function fffCheck(el) {
  el.classList.toggle('selected');
  el.querySelector('input').checked = el.classList.contains('selected');
}

function fffShowError(id, show) {
  const el = document.getElementById(id);
  if (el) el.style.display = show ? 'block' : 'none';
}

function fffValidate(step) {
  let valid = true;

  if (step === 1) {
    if (!document.getElementById('fff-name').value.trim()) {
      fffShowError('err-name', true); valid = false;
    } else fffShowError('err-name', false);

    const email = document.getElementById('fff-email').value.trim();
    if (!email || !email.includes('@')) {
      fffShowError('err-email', true); valid = false;
    } else fffShowError('err-email', false);

    if (!document.getElementById('fff-phone').value.trim()) {
      fffShowError('err-phone', true); valid = false;
    } else fffShowError('err-phone', false);

    if (!document.getElementById('fff-city').value.trim()) {
      fffShowError('err-city', true); valid = false;
    } else fffShowError('err-city', false);
  }

  if (step === 2) {
    if (!document.getElementById('fff-business').value.trim()) {
      fffShowError('err-business', true); valid = false;
    } else fffShowError('err-business', false);

    if (!document.getElementById('fff-industry').value) {
      fffShowError('err-industry', true); valid = false;
    } else fffShowError('err-industry', false);

    if (!document.querySelector('[name="stage"]:checked')) {
      fffShowError('err-stage', true); valid = false;
    } else fffShowError('err-stage', false);

    if (!document.getElementById('fff-age').value.trim()) {
      fffShowError('err-age', true); valid = false;
    } else fffShowError('err-age', false);

    if (!document.getElementById('fff-overview').value.trim()) {
      fffShowError('err-overview', true); valid = false;
    } else fffShowError('err-overview', false);

    if (!document.getElementById('fff-goals').value.trim()) {
      fffShowError('err-goals', true); valid = false;
    } else fffShowError('err-goals', false);
  }

  if (step === 3) {
    if (!document.getElementById('fff-ask').value.trim()) {
      fffShowError('err-ask', true); valid = false;
    } else fffShowError('err-ask', false);

    if (!document.querySelector('[name="support[]"]:checked')) {
      fffShowError('err-support', true); valid = false;
    } else fffShowError('err-support', false);

    if (!document.getElementById('fff-challenge').value.trim()) {
      fffShowError('err-challenge', true); valid = false;
    } else fffShowError('err-challenge', false);
  }

  return valid;
}

function fffNext(step) {
  if (!fffValidate(step)) return;
  document.getElementById('fff-step-' + step).classList.remove('active');
  document.getElementById('fff-step-' + (step + 1)).classList.add('active');
  fffCurrentStep = step + 1;
  fffUpdateProgress(fffCurrentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fffBack(step) {
  document.getElementById('fff-step-' + step).classList.remove('active');
  document.getElementById('fff-step-' + (step - 1)).classList.add('active');
  fffCurrentStep = step - 1;
  fffUpdateProgress(fffCurrentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('fff-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!fffValidate(3)) return;

    const formData = new FormData(this);
    fetch('/', { method: 'POST', body: formData })
      .then(function() { fffShowThankYou(); })
      .catch(function() { fffShowThankYou(); });
  });
});

function fffShowThankYou() {
  document.getElementById('fff-step-3').classList.remove('active');
  document.getElementById('fff-thankyou').style.display = 'block';
  const progressWrap = document.getElementById('fff-progress-wrap');
  if (progressWrap) progressWrap.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
