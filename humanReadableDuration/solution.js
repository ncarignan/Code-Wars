function formatDuration (seconds) {
  if(seconds === 0) return 'now';
  let mL = (seconds % 3600 - seconds % 60) / 60;
  let sL = seconds % 60;
  let hL = (seconds % 86400 - mL*60 - sL)/3600;
  let dL = (seconds % (86400*365) - hL*3600 - mL*60 - sL)/86400;
  let yL = (seconds - dL * 86400 - hL*3600 - mL*60 - sL)/86400/365;
  let result = [];

  let sS = `${sL} second`;
  if(sL > 1) sS += 's';
  if(sL) result.unshift(sS);

  let mS = `${mL} minute`;
  if(mL > 1) mS += 's';
  if(mL) result.unshift(mS);

  let hS = `${hL} hour`;
  if(hL > 1) hS += 's';
  if(hL) result.unshift(hS);

  let dS = `${dL} day`;
  if(dL > 1) dS += 's';
  if(dL) result.unshift(dS);

  let yS = `${yL} year`;
  if(yL > 1) yS += 's';
  if(yL) result.unshift(yS);

  result = result.join(', ');
  for(let i = result.length; i> 0; i--){
    if(result[i] === ','){
      result = result.substr(0,i) + ' and' + result.substr(i + 1);
      break;
    }
  }

  return result;
}
