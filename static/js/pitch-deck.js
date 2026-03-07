// ===== Pitch Deck — Multi-step Form Logic =====

var pdCurrentStep = 1;
var pdTotalSteps = 4;

function pdUpdateProgress(step) {
  for (var i = 1; i <= pdTotalSteps; i++) {
    var pip = document.getElementById('pd-pip-' + i);
    if (!pip) continue;
    if (i < step) pip.className = 'pd-progress-pip done';
    else if (i === step) pip.className = 'pd-progress-pip active';
    else pip.className = 'pd-progress-pip';
  }
}

function pdRadio(el, group) {
  document.querySelectorAll('[name="' + group + '"]').forEach(function(r) {
    r.closest('.pd-radio-item').classList.remove('selected');
  });
  el.classList.add('selected');
  el.querySelector('input').checked = true;

  // Demo link toggle
  if (group === 'has-demo') {
    var demoLink = document.getElementById('demo-link');
    if (demoLink) demoLink.style.display = el.querySelector('input').value === 'yes' ? 'block' : 'none';
  }
  // Projections toggle
  if (group === 'has-projections') {
    var proj = document.getElementById('projections-details');
    if (proj) proj.style.display = el.querySelector('input').value === 'yes' ? 'block' : 'none';
  }
}

function pdShowError(id, show) {
  var el = document.getElementById(id);
  if (el) el.style.display = show ? 'block' : 'none';
}

function pdVal(id) {
  var el = document.getElementById(id);
  return el && el.value.trim();
}

function pdValidate(step) {
  var valid = true;

  if (step === 1) {
    if (!pdVal('pd-name'))    { pdShowError('err-pd-name', true);  valid = false; } else pdShowError('err-pd-name', false);
    var email = pdVal('pd-email');
    if (!email || !email.includes('@')) { pdShowError('err-pd-email', true); valid = false; } else pdShowError('err-pd-email', false);
    if (!pdVal('pd-phone'))   { pdShowError('err-pd-phone', true); valid = false; } else pdShowError('err-pd-phone', false);
  }

  if (step === 2) {
    if (!pdVal('pd-company'))    { pdShowError('err-pd-company', true);   valid = false; } else pdShowError('err-pd-company', false);
    if (!pdVal('pd-industry'))   { pdShowError('err-pd-industry', true);  valid = false; } else pdShowError('err-pd-industry', false);
    if (!pdVal('pd-stage'))      { pdShowError('err-pd-stage', true);     valid = false; } else pdShowError('err-pd-stage', false);
    if (!pdVal('pd-oneliner'))   { pdShowError('err-pd-oneliner', true);  valid = false; } else pdShowError('err-pd-oneliner', false);
    if (!pdVal('pd-problem'))    { pdShowError('err-pd-problem', true);   valid = false; } else pdShowError('err-pd-problem', false);
    if (!pdVal('pd-customer'))   { pdShowError('err-pd-customer', true);  valid = false; } else pdShowError('err-pd-customer', false);
    if (!pdVal('pd-market'))     { pdShowError('err-pd-market', true);    valid = false; } else pdShowError('err-pd-market', false);
    if (!pdVal('pd-alts'))       { pdShowError('err-pd-alts', true);      valid = false; } else pdShowError('err-pd-alts', false);
    if (!pdVal('pd-solution'))   { pdShowError('err-pd-solution', true);  valid = false; } else pdShowError('err-pd-solution', false);
    if (!pdVal('pd-unique'))     { pdShowError('err-pd-unique', true);    valid = false; } else pdShowError('err-pd-unique', false);
    if (!pdVal('pd-revenue'))    { pdShowError('err-pd-revenue', true);   valid = false; } else pdShowError('err-pd-revenue', false);
  }

  if (step === 3) {
    if (!pdVal('pd-metrics'))    { pdShowError('err-pd-metrics', true);   valid = false; } else pdShowError('err-pd-metrics', false);
    if (!pdVal('pd-competitors')){ pdShowError('err-pd-competitors', true); valid = false; } else pdShowError('err-pd-competitors', false);
    if (!pdVal('pd-advantage'))  { pdShowError('err-pd-advantage', true); valid = false; } else pdShowError('err-pd-advantage', false);
    if (!pdVal('pd-gtm'))        { pdShowError('err-pd-gtm', true);       valid = false; } else pdShowError('err-pd-gtm', false);
    if (!pdVal('pd-founders'))   { pdShowError('err-pd-founders', true);  valid = false; } else pdShowError('err-pd-founders', false);
  }

  if (step === 4) {
    if (!pdVal('pd-raise'))      { pdShowError('err-pd-raise', true);     valid = false; } else pdShowError('err-pd-raise', false);
    if (!pdVal('pd-timeline'))   { pdShowError('err-pd-timeline', true);  valid = false; } else pdShowError('err-pd-timeline', false);
    if (!pdVal('pd-usage'))      { pdShowError('err-pd-usage', true);     valid = false; } else pdShowError('err-pd-usage', false);
    if (!pdVal('pd-deadline'))   { pdShowError('err-pd-deadline', true);  valid = false; } else pdShowError('err-pd-deadline', false);
  }

  return valid;
}

function pdNext(step) {
  if (!pdValidate(step)) return;
  document.getElementById('pd-step-' + step).classList.remove('active');
  document.getElementById('pd-step-' + (step + 1)).classList.add('active');
  pdCurrentStep = step + 1;
  pdUpdateProgress(pdCurrentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pdBack(step) {
  document.getElementById('pd-step-' + step).classList.remove('active');
  document.getElementById('pd-step-' + (step - 1)).classList.add('active');
  pdCurrentStep = step - 1;
  pdUpdateProgress(pdCurrentStep);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pdShowThankYou() {
  for (var i = 1; i <= pdTotalSteps; i++) {
    var s = document.getElementById('pd-step-' + i);
    if (s) s.classList.remove('active');
  }
  document.getElementById('pd-thankyou').style.display = 'block';
  var progressWrap = document.getElementById('pd-progress-wrap');
  if (progressWrap) progressWrap.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('pd-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!pdValidate(4)) return;
    var formData = new FormData(this);
    fetch('/', { method: 'POST', body: formData })
      .then(function() { pdShowThankYou(); })
      .catch(function() { pdShowThankYou(); });
  });
});
